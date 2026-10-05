// Real-time Train Tracking and Station Proximity Engine

// Convert "HH:MM" string to minutes from start of day
export function parseTimeToMinutes(timeStr, day = 1) {
  if (!timeStr || timeStr === "Source" || timeStr === "Destination") return null;
  const [h, m] = timeStr.split(":").map(Number);
  if (isNaN(h) || isNaN(m)) return null;
  return ((day - 1) * 24 * 60) + (h * 60 + m);
}

// Format minutes back to readable 12-hour or 24-hour time "02:45 PM"
export function formatMinutesToTime(totalMins) {
  if (totalMins == null) return "--:--";
  const modMins = ((totalMins % (24 * 60)) + (24 * 60)) % (24 * 60);
  const hours24 = Math.floor(modMins / 60);
  const mins = Math.floor(modMins % 60);
  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  const padMins = mins < 10 ? `0${mins}` : mins;
  return `${hours12}:${padMins} ${period}`;
}

// Linear interpolation between two coordinates
function interpolateCoordinates(lat1, lng1, lat2, lng2, fraction) {
  const f = Math.max(0, Math.min(1, fraction));
  return {
    lat: lat1 + (lat2 - lat1) * f,
    lng: lng1 + (lng2 - lng1) * f
  };
}

/**
 * Calculates current live running status for a train
 * @param {Object} train - Train data object from trains.js
 * @param {Date} [currentTime] - Current time (defaults to now)
 * @param {number} [delayMinutes=0] - Live delay in minutes (+ is late, - is early)
 */
export function calculateTrainLiveStatus(train, currentTime = new Date(), delayMinutes = 0) {
  if (!train || !train.stations || train.stations.length === 0) {
    return null;
  }

  const stations = train.stations;
  const firstStation = stations[0];
  const lastStation = stations[stations.length - 1];

  // Current clock time in minutes of the day
  const currentClockMinutes = currentTime.getHours() * 60 + currentTime.getMinutes();

  // Find train schedule start & end in minutes
  const schedDepStart = parseTimeToMinutes(firstStation.dep, firstStation.day);
  const schedArrEnd = parseTimeToMinutes(lastStation.arr, lastStation.day);

  // Effective current time relative to train departure
  // For daily trains, find which day cycle is active
  let currentTrainTime = currentClockMinutes - delayMinutes;

  // Build station timeline with parsed minutes
  const timeline = stations.map((stn, index) => {
    const arrMins = parseTimeToMinutes(stn.arr, stn.day) ?? (index === 0 ? schedDepStart : null);
    const depMins = parseTimeToMinutes(stn.dep, stn.day) ?? (index === stations.length - 1 ? schedArrEnd : null);
    return {
      ...stn,
      arrMins,
      depMins,
      expectedArrMins: arrMins != null ? arrMins + delayMinutes : null,
      expectedDepMins: depMins != null ? depMins + delayMinutes : null,
      expectedArrText: formatMinutesToTime(arrMins != null ? arrMins + delayMinutes : null),
      expectedDepText: formatMinutesToTime(depMins != null ? depMins + delayMinutes : null)
    };
  });

  // Check if journey is finished or hasn't started today
  let activeIndex = -1;
  let isHalted = false;
  let fractionBetween = 0;
  let currentStation = timeline[0];
  let nextStation = timeline[1] || timeline[0];

  // If before departure time
  if (currentTrainTime < (timeline[0].depMins ?? 0)) {
    // Has not departed yet
    return {
      statusState: "YET_TO_START",
      delayMinutes,
      isHalted: true,
      currentStation: timeline[0],
      nextStation: timeline[1] || timeline[0],
      currentLocationLat: timeline[0].lat,
      currentLocationLng: timeline[0].lng,
      progressPercent: 0,
      distanceTraveled: 0,
      distanceRemaining: lastStation.distance,
      speedKmh: 0,
      etaNext: timeline[1]?.expectedArrText || "--:--",
      etaDestination: timeline[timeline.length - 1]?.expectedArrText || "--:--",
      statusTextTa: `${firstStation.nameTa} நிலையத்தில் இன்னும் புறப்படவில்லை`,
      statusTextEn: `Scheduled to depart from ${firstStation.name} at ${formatMinutesToTime(timeline[0].expectedDepMins)}`,
      passedCodes: []
    };
  }

  // If after destination arrival
  const finalArrMins = timeline[timeline.length - 1].arrMins ?? 0;
  if (currentTrainTime >= finalArrMins) {
    return {
      statusState: "COMPLETED",
      delayMinutes,
      isHalted: true,
      currentStation: timeline[timeline.length - 1],
      nextStation: timeline[timeline.length - 1],
      currentLocationLat: lastStation.lat,
      currentLocationLng: lastStation.lng,
      progressPercent: 100,
      distanceTraveled: lastStation.distance,
      distanceRemaining: 0,
      speedKmh: 0,
      etaNext: "Arrived",
      etaDestination: "Arrived",
      statusTextTa: `ரயில் ${lastStation.nameTa} அடைந்துவிட்டது`,
      statusTextEn: `Train reached destination ${lastStation.name}`,
      passedCodes: timeline.map(s => s.code)
    };
  }

  // Train is actively on route - find which station segment
  const passedCodes = [];
  for (let i = 0; i < timeline.length; i++) {
    const cur = timeline[i];
    const nxt = timeline[i + 1];

    if (!nxt) {
      currentStation = cur;
      nextStation = cur;
      break;
    }

    const curDep = cur.depMins ?? cur.arrMins;
    const nxtArr = nxt.arrMins ?? nxt.depMins;

    // Is train halted at cur station?
    if (cur.arrMins != null && currentTrainTime >= cur.arrMins && currentTrainTime <= (cur.depMins ?? cur.arrMins)) {
      activeIndex = i;
      isHalted = true;
      currentStation = cur;
      nextStation = nxt;
      fractionBetween = 0;
      break;
    }

    // Is train between cur and nxt?
    if (currentTrainTime >= curDep && currentTrainTime < nxtArr) {
      activeIndex = i;
      isHalted = false;
      currentStation = cur;
      nextStation = nxt;
      const totalSegmentDuration = Math.max(1, nxtArr - curDep);
      const elapsedSegmentDuration = currentTrainTime - curDep;
      fractionBetween = Math.min(1, Math.max(0, elapsedSegmentDuration / totalSegmentDuration));
      break;
    }

    if (currentTrainTime >= (cur.depMins ?? cur.arrMins)) {
      passedCodes.push(cur.code);
    }
  }

  // Calculate coordinates
  let currentLat = currentStation.lat;
  let currentLng = currentStation.lng;
  if (!isHalted && nextStation && nextStation.code !== currentStation.code) {
    const interp = interpolateCoordinates(
      currentStation.lat,
      currentStation.lng,
      nextStation.lat,
      nextStation.lng,
      fractionBetween
    );
    currentLat = interp.lat;
    currentLng = interp.lng;
  }

  // Distance calculations
  const totalDistance = lastStation.distance || 1;
  const curDist = currentStation.distance || 0;
  const nxtDist = nextStation.distance || curDist;
  const currentTraveledDist = Math.round(curDist + (nxtDist - curDist) * fractionBetween);
  const remainingDist = Math.max(0, totalDistance - currentTraveledDist);
  const progressPercent = Math.min(100, Math.max(0, Math.round((currentTraveledDist / totalDistance) * 100)));

  // Estimated speed
  let speed = 0;
  if (!isHalted) {
    speed = train.type.includes("Vande") ? 88 : train.type.includes("Superfast") ? 74 : 62;
  }

  // Status state
  let statusState = "ON_TIME";
  if (isHalted) statusState = "HALTED";
  else if (delayMinutes > 5) statusState = "DELAYED";
  else if (delayMinutes < -5) statusState = "EARLY";

  // Friendly Tamil & English descriptions
  let statusTextTa = "";
  let statusTextEn = "";

  if (isHalted) {
    statusTextTa = `${currentStation.nameTa} நிலையத்தில் நின்று கொண்டிருக்கிறது`;
    statusTextEn = `Halted at ${currentStation.name}`;
  } else {
    statusTextTa = `${currentStation.nameTa} கடந்து ${nextStation.nameTa} நோக்கி செல்கிறது`;
    statusTextEn = `Departed ${currentStation.name}, heading to ${nextStation.name}`;
  }

  return {
    statusState,
    delayMinutes,
    isHalted,
    currentStation,
    nextStation,
    fractionBetween,
    currentLocationLat: currentLat,
    currentLocationLng: currentLng,
    progressPercent,
    distanceTraveled: currentTraveledDist,
    distanceRemaining: remainingDist,
    speedKmh: speed,
    etaNext: nextStation.expectedArrText,
    etaDestination: timeline[timeline.length - 1].expectedArrText,
    statusTextTa,
    statusTextEn,
    passedCodes,
    timeline
  };
}

/**
 * Fetch live running status from backend API if available
 */
export async function fetchLiveStatusFromAPI(trainNo) {
  try {
    const res = await fetch(`/api/live-status?train=${encodeURIComponent(trainNo)}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}
