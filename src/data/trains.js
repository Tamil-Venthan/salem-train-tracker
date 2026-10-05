// Complete Database of All Daily Trains Operating Between Salem and Chennai
// Both Directions: Salem ➔ Chennai (SA ➔ MAS/MS) and Chennai ➔ Salem (MAS/MS ➔ SA)
// Contains complete station schedules, platform numbers, coordinates, and bilingual names

export const TRAINS_DATA = [
  // 1. 12676 Kovai Superfast Express (Salem -> Chennai Central)
  {
    trainNo: "12676",
    name: "Kovai Superfast Express",
    nameTa: "கோவை அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "17:45",
    arrivalTime: "22:50",
    runningDays: ["Daily"],
    stations: [
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "Source", dep: "15:15", distance: 0, day: 1, platform: "3", lat: 11.0018, lng: 76.9628 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "15:53", dep: "15:55", distance: 50, day: 1, platform: "2", lat: 11.1085, lng: 77.3411 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "16:40", dep: "16:45", distance: 101, day: 1, platform: "1", lat: 11.3410, lng: 77.7172 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "17:42", dep: "17:45", distance: 160, day: 1, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "18:34", dep: "18:35", distance: 226, day: 1, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "19:38", dep: "19:40", distance: 281, day: 1, platform: "3", lat: 12.5694, lng: 78.5830 },
      { code: "AB", name: "Ambur", nameTa: "ஆம்பூர்", arr: "20:03", dep: "20:05", distance: 313, day: 1, platform: "2", lat: 12.7904, lng: 78.7166 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "20:48", dep: "20:50", distance: 365, day: 1, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "21:38", dep: "21:40", distance: 426, day: 1, platform: "2", lat: 13.0784, lng: 79.6677 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "22:28", dep: "22:30", distance: 490, day: 1, platform: "1", lat: 13.1075, lng: 80.2335 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "22:50", dep: "Destination", distance: 495, day: 1, platform: "8", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 2. 22650 Yercaud Superfast Express (Salem -> Chennai Central)
  {
    trainNo: "22650",
    name: "Yercaud Superfast Express",
    nameTa: "ஏற்காடு அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "22:00",
    arrivalTime: "03:55",
    runningDays: ["Daily"],
    stations: [
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "Source", dep: "21:00", distance: 0, day: 1, platform: "3", lat: 11.3410, lng: 77.7172 },
      { code: "SGE", name: "Sankaridurg", nameTa: "சங்ககிரி", arr: "21:24", dep: "21:25", distance: 21, day: 1, platform: "1", lat: 11.4880, lng: 77.8760 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "21:55", dep: "22:00", distance: 60, day: 1, platform: "5", lat: 11.6643, lng: 78.1460 },
      { code: "BQI", name: "Bommidi", nameTa: "பொம்மிடி", arr: "22:44", dep: "22:45", distance: 103, day: 1, platform: "2", lat: 11.9050, lng: 78.2910 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "23:04", dep: "23:05", distance: 126, day: 1, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "SLY", name: "Samalpatti", nameTa: "சமல்பட்டி", arr: "23:24", dep: "23:25", distance: 149, day: 1, platform: "2", lat: 12.3330, lng: 78.4720 },
      { code: "TPT", name: "Tirupattur", nameTa: "திருப்பத்தூர்", arr: "23:44", dep: "23:45", distance: 172, day: 1, platform: "1", lat: 12.4930, lng: 78.5670 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "00:08", dep: "00:10", distance: 180, day: 2, platform: "4", lat: 12.5694, lng: 78.5830 },
      { code: "VN", name: "Vaniyambadi", nameTa: "வாணியம்பாடி", arr: "00:23", dep: "00:25", distance: 196, day: 2, platform: "2", lat: 12.6860, lng: 78.6180 },
      { code: "AB", name: "Ambur", nameTa: "ஆம்பூர்", arr: "00:38", dep: "00:40", distance: 212, day: 2, platform: "2", lat: 12.7904, lng: 78.7166 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "01:28", dep: "01:30", distance: 264, day: 2, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "WJR", name: "Walajah Road", nameTa: "வாலாஜா ரோடு", arr: "01:48", dep: "01:50", distance: 289, day: 2, platform: "2", lat: 12.9660, lng: 79.3620 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "02:18", dep: "02:20", distance: 325, day: 2, platform: "2", lat: 13.0784, lng: 79.6677 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "03:13", dep: "03:15", distance: 389, day: 2, platform: "1", lat: 13.1075, lng: 80.2335 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "03:55", dep: "Destination", distance: 394, day: 2, platform: "11", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 3. 12680 MAS Intercity Superfast Express (Salem -> Chennai Central)
  {
    trainNo: "12680",
    name: "Coimbatore - Chennai Intercity SF",
    nameTa: "சென்னை இன்டர்சிட்டி அதிவிரைவு",
    type: "Superfast Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "08:50",
    arrivalTime: "13:50",
    runningDays: ["Daily"],
    stations: [
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "Source", dep: "06:20", distance: 0, day: 1, platform: "2", lat: 11.0018, lng: 76.9628 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "07:03", dep: "07:05", distance: 50, day: 1, platform: "2", lat: 11.1085, lng: 77.3411 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "07:50", dep: "07:55", distance: 101, day: 1, platform: "1", lat: 11.3410, lng: 77.7172 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "08:47", dep: "08:50", distance: 160, day: 1, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "BQI", name: "Bommidi", nameTa: "பொம்மிடி", arr: "09:34", dep: "09:35", distance: 203, day: 1, platform: "2", lat: 11.9050, lng: 78.2910 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "09:54", dep: "09:55", distance: 226, day: 1, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "SLY", name: "Samalpatti", nameTa: "சமல்பட்டி", arr: "10:14", dep: "10:15", distance: 249, day: 1, platform: "2", lat: 12.3330, lng: 78.4720 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "10:48", dep: "10:50", distance: 281, day: 1, platform: "4", lat: 12.5694, lng: 78.5830 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "11:58", dep: "12:00", distance: 365, day: 1, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "12:48", dep: "12:50", distance: 426, day: 1, platform: "2", lat: 13.0784, lng: 79.6677 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "13:38", dep: "13:40", distance: 490, day: 1, platform: "1", lat: 13.1075, lng: 80.2335 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "13:50", dep: "Destination", distance: 495, day: 1, platform: "1", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 4. 12675 Kovai Superfast Express (Chennai Central -> Salem)
  {
    trainNo: "12675",
    name: "Kovai Superfast Express",
    nameTa: "கோவை அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "06:10",
    arrivalTime: "11:05",
    runningDays: ["Daily"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "06:10", distance: 0, day: 1, platform: "10", lat: 13.0827, lng: 80.2707 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "06:23", dep: "06:25", distance: 5, day: 1, platform: "2", lat: 13.1075, lng: 80.2335 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "07:08", dep: "07:10", distance: 69, day: 1, platform: "1", lat: 13.0784, lng: 79.6677 },
      { code: "WJR", name: "Walajah Road", nameTa: "வாலாஜா ரோடு", arr: "07:33", dep: "07:35", distance: 105, day: 1, platform: "1", lat: 12.9660, lng: 79.3620 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "07:58", dep: "08:00", distance: 130, day: 1, platform: "1", lat: 12.9698, lng: 79.1352 },
      { code: "AB", name: "Ambur", nameTa: "ஆம்பூர்", arr: "08:38", dep: "08:40", distance: 182, day: 1, platform: "3", lat: 12.7904, lng: 78.7166 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "09:18", dep: "09:20", distance: 214, day: 1, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "10:04", dep: "10:05", distance: 269, day: 1, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "11:02", dep: "11:05", distance: 334, day: 1, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "12:05", dep: "12:10", distance: 394, day: 1, platform: "2", lat: 11.3410, lng: 77.7172 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "12:53", dep: "12:55", distance: 444, day: 1, platform: "1", lat: 11.1085, lng: 77.3411 },
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "14:05", dep: "Destination", distance: 495, day: 1, platform: "3", lat: 11.0018, lng: 76.9628 }
    ]
  },

  // 5. 12679 CBE Intercity Superfast Express (Chennai Central -> Salem)
  {
    trainNo: "12679",
    name: "Coimbatore Intercity SF Express",
    nameTa: "கோவை இன்டர்சிட்டி அதிவிரைவு",
    type: "Superfast Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "14:35",
    arrivalTime: "19:10",
    runningDays: ["Daily"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "14:35", distance: 0, day: 1, platform: "8", lat: 13.0827, lng: 80.2707 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "15:28", dep: "15:30", distance: 69, day: 1, platform: "1", lat: 13.0784, lng: 79.6677 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "16:13", dep: "16:15", distance: 130, day: 1, platform: "1", lat: 12.9698, lng: 79.1352 },
      { code: "AB", name: "Ambur", nameTa: "ஆம்பூர்", arr: "16:53", dep: "16:55", distance: 182, day: 1, platform: "3", lat: 12.7904, lng: 78.7166 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "17:28", dep: "17:30", distance: 214, day: 1, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "18:09", dep: "18:10", distance: 269, day: 1, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "BQI", name: "Bommidi", nameTa: "பொம்மிடி", arr: "18:29", dep: "18:30", distance: 292, day: 1, platform: "1", lat: 11.9050, lng: 78.2910 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "19:07", dep: "19:10", distance: 334, day: 1, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "20:10", dep: "20:15", distance: 394, day: 1, platform: "2", lat: 11.3410, lng: 77.7172 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "20:58", dep: "21:00", distance: 444, day: 1, platform: "1", lat: 11.1085, lng: 77.3411 },
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "22:15", dep: "Destination", distance: 495, day: 1, platform: "3", lat: 11.0018, lng: 76.9628 }
    ]
  },

  // 6. 22649 Yercaud Superfast Express (Chennai Central -> Salem)
  {
    trainNo: "22649",
    name: "Yercaud Superfast Express",
    nameTa: "ஏற்காடு அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "23:00",
    arrivalTime: "04:20",
    runningDays: ["Daily"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "23:00", distance: 0, day: 1, platform: "11", lat: 13.0827, lng: 80.2707 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "23:13", dep: "23:15", distance: 5, day: 1, platform: "2", lat: 13.1075, lng: 80.2335 },
      { code: "TRL", name: "Tiruvallur", nameTa: "திருவள்ளூர்", arr: "23:43", dep: "23:45", distance: 42, day: 1, platform: "2", lat: 13.1438, lng: 79.9080 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "00:08", dep: "00:10", distance: 69, day: 2, platform: "1", lat: 13.0784, lng: 79.6677 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "00:58", dep: "01:00", distance: 130, day: 2, platform: "1", lat: 12.9698, lng: 79.1352 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "02:23", dep: "02:25", distance: 214, day: 2, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "TPT", name: "Tirupattur", nameTa: "திருப்பத்தூர்", arr: "02:34", dep: "02:35", distance: 222, day: 2, platform: "1", lat: 12.4930, lng: 78.5670 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "03:09", dep: "03:10", distance: 269, day: 2, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "BQI", name: "Bommidi", nameTa: "பொம்மிடி", arr: "03:34", dep: "03:35", distance: 292, day: 2, platform: "1", lat: 11.9050, lng: 78.2910 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "04:17", dep: "04:20", distance: 334, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "SGE", name: "Sankaridurg", nameTa: "சங்ககிரி", arr: "04:59", dep: "05:00", distance: 373, day: 2, platform: "1", lat: 11.4880, lng: 77.8760 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "05:50", dep: "Destination", distance: 394, day: 2, platform: "3", lat: 11.3410, lng: 77.7172 }
    ]
  },

  // 7. 22153 Chennai Egmore - Salem Superfast Express (Chennai Egmore -> Salem)
  {
    trainNo: "22153",
    name: "Chennai Egmore - Salem SF Express",
    nameTa: "சேலம் அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "Chennai Egmore (MS)",
    fromTa: "சென்னை எழும்பூர் (MS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "23:55",
    arrivalTime: "06:45",
    runningDays: ["Daily"],
    stations: [
      { code: "MS", name: "Chennai Egmore", nameTa: "சென்னை எழும்பூர்", arr: "Source", dep: "23:55", distance: 0, day: 1, platform: "8", lat: 13.0827, lng: 80.2608 },
      { code: "TBM", name: "Tambaram", nameTa: "தாம்பரம்", arr: "00:23", dep: "00:25", distance: 25, day: 2, platform: "8", lat: 12.9249, lng: 80.1197 },
      { code: "CGL", name: "Chengalpattu Junction", nameTa: "செங்கல்பட்டு சந்திப்பு", arr: "00:53", dep: "00:55", distance: 56, day: 2, platform: "6", lat: 12.6939, lng: 79.9757 },
      { code: "MLMR", name: "Melmaruvathur", nameTa: "மேல்மருவத்தூர்", arr: "01:23", dep: "01:25", distance: 91, day: 2, platform: "2", lat: 12.4332, lng: 79.8290 },
      { code: "VM", name: "Villupuram Junction", nameTa: "விழுப்புரம் சந்திப்பு", arr: "02:40", dep: "02:45", distance: 159, day: 2, platform: "1", lat: 11.9398, lng: 79.4947 },
      { code: "VRI", name: "Vriddhachalam Junction", nameTa: "விருத்தாசலம் சந்திப்பு", arr: "03:30", dep: "03:35", distance: 213, day: 2, platform: "3", lat: 11.5306, lng: 79.3248 },
      { code: "CHSM", name: "Chinna Salem", nameTa: "சின்னசேலம்", arr: "04:29", dep: "04:30", distance: 294, day: 2, platform: "1", lat: 11.6510, lng: 78.8870 },
      { code: "ATU", name: "Attur", nameTa: "ஆத்தூர்", arr: "04:54", dep: "04:55", distance: 326, day: 2, platform: "1", lat: 11.5970, lng: 78.6010 },
      { code: "VGE", name: "Valappadi G Hlt", nameTa: "வாழப்பாடி", arr: "05:14", dep: "05:15", distance: 357, day: 2, platform: "1", lat: 11.6530, lng: 78.4120 },
      { code: "APN", name: "Ayodhyapattanam", nameTa: "அயோத்தியாபட்டணம்", arr: "05:39", dep: "05:40", distance: 384, day: 2, platform: "1", lat: 11.6780, lng: 78.2390 },
      { code: "SXT", name: "Salem Town", nameTa: "சேலம் டவுன்", arr: "05:54", dep: "05:55", distance: 390, day: 2, platform: "1", lat: 11.6560, lng: 78.1680 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "06:45", dep: "Destination", distance: 396, day: 2, platform: "1", lat: 11.6643, lng: 78.1460 }
    ]
  },

  // 8. 22154 Salem - Chennai Egmore Superfast Express (Salem -> Chennai Egmore)
  {
    trainNo: "22154",
    name: "Salem - Chennai Egmore SF Express",
    nameTa: "சேலம் அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "Chennai Egmore (MS)",
    toTa: "சென்னை எழும்பூர் (MS)",
    departureTime: "21:30",
    arrivalTime: "03:50",
    runningDays: ["Daily"],
    stations: [
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "Source", dep: "21:30", distance: 0, day: 1, platform: "1", lat: 11.6643, lng: 78.1460 },
      { code: "SXT", name: "Salem Town", nameTa: "சேலம் டவுன்", arr: "21:39", dep: "21:40", distance: 6, day: 1, platform: "1", lat: 11.6560, lng: 78.1680 },
      { code: "APN", name: "Ayodhyapattanam", nameTa: "அயோத்தியாபட்டணம்", arr: "21:49", dep: "21:50", distance: 12, day: 1, platform: "1", lat: 11.6780, lng: 78.2390 },
      { code: "VGE", name: "Valappadi G Hlt", nameTa: "வாழப்பாடி", arr: "22:09", dep: "22:10", distance: 39, day: 1, platform: "1", lat: 11.6530, lng: 78.4120 },
      { code: "ATU", name: "Attur", nameTa: "ஆத்தூர்", arr: "22:29", dep: "22:30", distance: 70, day: 1, platform: "1", lat: 11.5970, lng: 78.6010 },
      { code: "CHSM", name: "Chinna Salem", nameTa: "சின்னசேலம்", arr: "22:54", dep: "22:55", distance: 102, day: 1, platform: "1", lat: 11.6510, lng: 78.8870 },
      { code: "VRI", name: "Vriddhachalam Junction", nameTa: "விருத்தாசலம் சந்திப்பு", arr: "00:05", dep: "00:10", distance: 183, day: 2, platform: "3", lat: 11.5306, lng: 79.3248 },
      { code: "VM", name: "Villupuram Junction", nameTa: "விழுப்புரம் சந்திப்பு", arr: "01:05", dep: "01:10", distance: 237, day: 2, platform: "1", lat: 11.9398, lng: 79.4947 },
      { code: "CGL", name: "Chengalpattu Junction", nameTa: "செங்கல்பட்டு சந்திப்பு", arr: "02:33", dep: "02:35", distance: 340, day: 2, platform: "5", lat: 12.6939, lng: 79.9757 },
      { code: "TBM", name: "Tambaram", nameTa: "தாம்பரம்", arr: "03:03", dep: "03:05", distance: 371, day: 2, platform: "6", lat: 12.9249, lng: 80.1197 },
      { code: "MBM", name: "Mambalam", nameTa: "மாம்பலம்", arr: "03:23", dep: "03:25", distance: 388, day: 2, platform: "3", lat: 13.0336, lng: 80.2297 },
      { code: "MS", name: "Chennai Egmore", nameTa: "சென்னை எழும்பூர்", arr: "03:50", dep: "Destination", distance: 396, day: 2, platform: "4", lat: 13.0827, lng: 80.2608 }
    ]
  },

  // 9. 12674 Cheran Superfast Express (Salem -> Chennai Central)
  {
    trainNo: "12674",
    name: "Cheran Superfast Express",
    nameTa: "சேரன் அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "01:30",
    arrivalTime: "07:00",
    runningDays: ["Daily"],
    stations: [
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "Source", dep: "22:50", distance: 0, day: 1, platform: "2", lat: 11.0018, lng: 76.9628 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "23:33", dep: "23:35", distance: 50, day: 1, platform: "2", lat: 11.1085, lng: 77.3411 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "00:25", dep: "00:30", distance: 101, day: 2, platform: "1", lat: 11.3410, lng: 77.7172 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "01:27", dep: "01:30", distance: 160, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "03:13", dep: "03:15", distance: 281, day: 2, platform: "3", lat: 12.5694, lng: 78.5830 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "04:28", dep: "04:30", distance: 365, day: 2, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "05:18", dep: "05:20", distance: 426, day: 2, platform: "2", lat: 13.0784, lng: 79.6677 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "06:18", dep: "06:20", distance: 490, day: 2, platform: "1", lat: 13.1075, lng: 80.2335 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "07:00", dep: "Destination", distance: 495, day: 2, platform: "10", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 10. 12673 Cheran Superfast Express (Chennai Central -> Salem)
  {
    trainNo: "12673",
    name: "Cheran Superfast Express",
    nameTa: "சேரன் அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "22:00",
    arrivalTime: "02:35",
    runningDays: ["Daily"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "22:00", distance: 0, day: 1, platform: "9", lat: 13.0827, lng: 80.2707 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "22:58", dep: "23:00", distance: 69, day: 1, platform: "1", lat: 13.0784, lng: 79.6677 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "23:48", dep: "23:50", distance: 130, day: 1, platform: "1", lat: 12.9698, lng: 79.1352 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "01:08", dep: "01:10", distance: 214, day: 2, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "02:32", dep: "02:35", distance: 334, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "03:35", dep: "03:40", distance: 394, day: 2, platform: "2", lat: 11.3410, lng: 77.7172 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "04:23", dep: "04:25", distance: 444, day: 2, platform: "1", lat: 11.1085, lng: 77.3411 },
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "05:30", dep: "Destination", distance: 495, day: 2, platform: "3", lat: 11.0018, lng: 76.9628 }
    ]
  },

  // 11. 20644 Coimbatore - Chennai Central Vande Bharat Express (Salem -> Chennai Central)
  {
    trainNo: "20644",
    name: "Coimbatore - Chennai Vande Bharat",
    nameTa: "வந்தே பாரத் அதிவிரைவு",
    type: "Vande Bharat Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "08:00",
    arrivalTime: "11:50",
    runningDays: ["Mon", "Tue", "Thu", "Fri", "Sat", "Sun"],
    stations: [
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "Source", dep: "06:00", distance: 0, day: 1, platform: "1", lat: 11.0018, lng: 76.9628 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "06:35", dep: "06:37", distance: 50, day: 1, platform: "2", lat: 11.1085, lng: 77.3411 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "07:12", dep: "07:15", distance: 101, day: 1, platform: "1", lat: 11.3410, lng: 77.7172 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "07:58", dep: "08:00", distance: 160, day: 1, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "09:08", dep: "09:10", distance: 281, day: 1, platform: "3", lat: 12.5694, lng: 78.5830 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "11:50", dep: "Destination", distance: 495, day: 1, platform: "2", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 12. 20643 Chennai Central - Coimbatore Vande Bharat Express (Chennai Central -> Salem)
  {
    trainNo: "20643",
    name: "Chennai - Coimbatore Vande Bharat",
    nameTa: "வந்தே பாரத் அதிவிரைவு",
    type: "Vande Bharat Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "14:15",
    arrivalTime: "17:50",
    runningDays: ["Mon", "Tue", "Thu", "Fri", "Sat", "Sun"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "14:15", distance: 0, day: 1, platform: "2", lat: 13.0827, lng: 80.2707 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "16:38", dep: "16:40", distance: 214, day: 1, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "17:48", dep: "17:50", distance: 334, day: 1, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "18:32", dep: "18:35", distance: 394, day: 1, platform: "2", lat: 11.3410, lng: 77.7172 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "19:13", dep: "19:15", distance: 444, day: 1, platform: "1", lat: 11.1085, lng: 77.3411 },
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "20:15", dep: "Destination", distance: 495, day: 1, platform: "1", lat: 11.0018, lng: 76.9628 }
    ]
  },

  // 13. 12672 Nilgiri (Blue Mountain) Superfast Express (Salem -> Chennai Central)
  {
    trainNo: "12672",
    name: "Nilgiri Superfast Express",
    nameTa: "நீலகிரி அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "01:00",
    arrivalTime: "06:25",
    runningDays: ["Daily"],
    stations: [
      { code: "MTP", name: "Mettupalayam", nameTa: "மேட்டுப்பாளையம்", arr: "Source", dep: "21:20", distance: 0, day: 1, platform: "1", lat: 11.3000, lng: 76.9500 },
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "22:15", dep: "22:25", distance: 36, day: 1, platform: "2", lat: 11.0018, lng: 76.9628 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "23:08", dep: "23:10", distance: 86, day: 1, platform: "2", lat: 11.1085, lng: 77.3411 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "23:55", dep: "00:05", distance: 136, day: 2, platform: "1", lat: 11.3410, lng: 77.7172 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "00:58", dep: "01:00", distance: 196, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "02:48", dep: "02:50", distance: 317, day: 2, platform: "3", lat: 12.5694, lng: 78.5830 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "03:58", dep: "04:00", distance: 401, day: 2, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "04:48", dep: "04:50", distance: 462, day: 2, platform: "2", lat: 13.0784, lng: 79.6677 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "05:43", dep: "05:45", distance: 526, day: 2, platform: "1", lat: 13.1075, lng: 80.2335 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "06:25", dep: "Destination", distance: 531, day: 2, platform: "7", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 14. 12671 Nilgiri (Blue Mountain) Superfast Express (Chennai Central -> Salem)
  {
    trainNo: "12671",
    name: "Nilgiri Superfast Express",
    nameTa: "நீலகிரி அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "21:05",
    arrivalTime: "02:05",
    runningDays: ["Daily"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "21:05", distance: 0, day: 1, platform: "6", lat: 13.0827, lng: 80.2707 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "22:08", dep: "22:10", distance: 69, day: 1, platform: "1", lat: 13.0784, lng: 79.6677 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "22:58", dep: "23:00", distance: 130, day: 1, platform: "1", lat: 12.9698, lng: 79.1352 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "00:38", dep: "00:40", distance: 214, day: 2, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "02:02", dep: "02:05", distance: 334, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "03:10", dep: "03:15", distance: 394, day: 2, platform: "2", lat: 11.3410, lng: 77.7172 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "03:58", dep: "04:00", distance: 444, day: 2, platform: "1", lat: 11.1085, lng: 77.3411 },
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "05:10", dep: "05:20", distance: 495, day: 2, platform: "1", lat: 11.0018, lng: 76.9628 },
      { code: "MTP", name: "Mettupalayam", nameTa: "மேட்டுப்பாளையம்", arr: "06:15", dep: "Destination", distance: 531, day: 2, platform: "1", lat: 11.3000, lng: 76.9500 }
    ]
  },

  // 15. 22640 Chennai Superfast Express (Alleppey -> Salem -> Chennai Central)
  {
    trainNo: "22640",
    name: "Chennai Superfast Express",
    nameTa: "சென்னை அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "00:05",
    arrivalTime: "05:15",
    runningDays: ["Daily"],
    stations: [
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "23:05", dep: "23:10", distance: 0, day: 1, platform: "1", lat: 11.3410, lng: 77.7172 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "00:02", dep: "00:05", distance: 60, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "01:48", dep: "01:50", distance: 180, day: 2, platform: "3", lat: 12.5694, lng: 78.5830 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "02:48", dep: "02:50", distance: 264, day: 2, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "03:38", dep: "03:40", distance: 325, day: 2, platform: "2", lat: 13.0784, lng: 79.6677 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "04:38", dep: "04:40", distance: 389, day: 2, platform: "1", lat: 13.1075, lng: 80.2335 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "05:15", dep: "Destination", distance: 394, day: 2, platform: "5", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 16. 22639 Alleppey Superfast Express (Chennai Central -> Salem)
  {
    trainNo: "22639",
    name: "Alleppey Superfast Express",
    nameTa: "ஆலப்புழா அதிவிரைவு வண்டி",
    type: "Superfast Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "20:55",
    arrivalTime: "01:50",
    runningDays: ["Daily"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "20:55", distance: 0, day: 1, platform: "5", lat: 13.0827, lng: 80.2707 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "21:53", dep: "21:55", distance: 69, day: 1, platform: "1", lat: 13.0784, lng: 79.6677 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "22:43", dep: "22:45", distance: 130, day: 1, platform: "1", lat: 12.9698, lng: 79.1352 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "00:23", dep: "00:25", distance: 214, day: 2, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "01:47", dep: "01:50", distance: 334, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "02:50", dep: "02:55", distance: 394, day: 2, platform: "2", lat: 11.3410, lng: 77.7172 }
    ]
  },

  // 17. 12602 Mangalore - Chennai Central Superfast Mail (Salem -> Chennai Central)
  {
    trainNo: "12602",
    name: "Mangalore - Chennai SF Mail",
    nameTa: "மங்களூரு - சென்னை மெயில்",
    type: "Superfast Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "00:40",
    arrivalTime: "06:10",
    runningDays: ["Daily"],
    stations: [
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "23:35", dep: "23:40", distance: 0, day: 1, platform: "1", lat: 11.3410, lng: 77.7172 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "00:37", dep: "00:40", distance: 60, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "01:34", dep: "01:35", distance: 126, day: 2, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "02:43", dep: "02:45", distance: 180, day: 2, platform: "3", lat: 12.5694, lng: 78.5830 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "03:48", dep: "03:50", distance: 264, day: 2, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "04:38", dep: "04:40", distance: 325, day: 2, platform: "2", lat: 13.0784, lng: 79.6677 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "05:28", dep: "05:30", distance: 389, day: 2, platform: "1", lat: 13.1075, lng: 80.2335 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "06:10", dep: "Destination", distance: 394, day: 2, platform: "4", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 18. 12601 Chennai Central - Mangalore Superfast Mail (Chennai Central -> Salem)
  {
    trainNo: "12601",
    name: "Chennai - Mangalore SF Mail",
    nameTa: "சென்னை - மங்களூரு மெயில்",
    type: "Superfast Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "20:10",
    arrivalTime: "01:15",
    runningDays: ["Daily"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "20:10", distance: 0, day: 1, platform: "4", lat: 13.0827, lng: 80.2707 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "21:08", dep: "21:10", distance: 69, day: 1, platform: "1", lat: 13.0784, lng: 79.6677 },
      { code: "WJR", name: "Walajah Road", nameTa: "வாலாஜா ரோடு", arr: "21:33", dep: "21:35", distance: 105, day: 1, platform: "1", lat: 12.9660, lng: 79.3620 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "21:58", dep: "22:00", distance: 130, day: 1, platform: "1", lat: 12.9698, lng: 79.1352 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "23:48", dep: "23:50", distance: 214, day: 1, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "00:33", dep: "00:35", distance: 269, day: 2, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "01:12", dep: "01:15", distance: 334, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "02:15", dep: "02:20", distance: 394, day: 2, platform: "2", lat: 11.3410, lng: 77.7172 }
    ]
  },

  // 19. 12686 Mangalore - Chennai Central Superfast Express (Salem -> Chennai Central)
  {
    trainNo: "12686",
    name: "Mangalore - Chennai SF Express",
    nameTa: "மங்களூரு - சென்னை அதிவிரைவு",
    type: "Superfast Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "02:45",
    arrivalTime: "08:05",
    runningDays: ["Daily"],
    stations: [
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "01:40", dep: "01:45", distance: 0, day: 2, platform: "1", lat: 11.3410, lng: 77.7172 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "02:42", dep: "02:45", distance: 60, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "03:39", dep: "03:40", distance: 126, day: 2, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "04:38", dep: "04:40", distance: 180, day: 2, platform: "3", lat: 12.5694, lng: 78.5830 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "05:43", dep: "05:45", distance: 264, day: 2, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "06:33", dep: "06:35", distance: 325, day: 2, platform: "2", lat: 13.0784, lng: 79.6677 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "07:23", dep: "07:25", distance: 389, day: 2, platform: "1", lat: 13.1075, lng: 80.2335 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "08:05", dep: "Destination", distance: 394, day: 2, platform: "3", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 20. 12685 Chennai Central - Mangalore Superfast Express (Chennai Central -> Salem)
  {
    trainNo: "12685",
    name: "Chennai - Mangalore SF Express",
    nameTa: "சென்னை - மங்களூரு அதிவிரைவு",
    type: "Superfast Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "17:00",
    arrivalTime: "22:05",
    runningDays: ["Daily"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "17:00", distance: 0, day: 1, platform: "6", lat: 13.0827, lng: 80.2707 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "17:58", dep: "18:00", distance: 69, day: 1, platform: "1", lat: 13.0784, lng: 79.6677 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "18:48", dep: "18:50", distance: 130, day: 1, platform: "1", lat: 12.9698, lng: 79.1352 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "20:28", dep: "20:30", distance: 214, day: 1, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "21:14", dep: "21:15", distance: 269, day: 1, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "22:02", dep: "22:05", distance: 334, day: 1, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "23:05", dep: "23:10", distance: 394, day: 1, platform: "2", lat: 11.3410, lng: 77.7172 }
    ]
  },

  // 21. 12624 Thiruvananthapuram - Chennai Central SF Mail (Salem -> Chennai Central)
  {
    trainNo: "12624",
    name: "Trivandrum - Chennai SF Mail",
    nameTa: "திருவனந்தபுரம் - சென்னை மெயில்",
    type: "Superfast Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "02:35",
    arrivalTime: "07:45",
    runningDays: ["Daily"],
    stations: [
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "01:30", dep: "01:35", distance: 0, day: 2, platform: "1", lat: 11.3410, lng: 77.7172 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "02:32", dep: "02:35", distance: 60, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "04:18", dep: "04:20", distance: 180, day: 2, platform: "3", lat: 12.5694, lng: 78.5830 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "05:23", dep: "05:25", distance: 264, day: 2, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "06:13", dep: "06:15", distance: 325, day: 2, platform: "2", lat: 13.0784, lng: 79.6677 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "07:03", dep: "07:05", distance: 389, day: 2, platform: "1", lat: 13.1075, lng: 80.2335 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "07:45", dep: "Destination", distance: 394, day: 2, platform: "9", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 22. 12623 Chennai Central - Thiruvananthapuram SF Mail (Chennai Central -> Salem)
  {
    trainNo: "12623",
    name: "Chennai - Trivandrum SF Mail",
    nameTa: "சென்னை - திருவனந்தபுரம் மெயில்",
    type: "Superfast Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "19:45",
    arrivalTime: "00:50",
    runningDays: ["Daily"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "19:45", distance: 0, day: 1, platform: "9", lat: 13.0827, lng: 80.2707 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "20:43", dep: "20:45", distance: 69, day: 1, platform: "1", lat: 13.0784, lng: 79.6677 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "21:28", dep: "21:30", distance: 130, day: 1, platform: "1", lat: 12.9698, lng: 79.1352 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "23:08", dep: "23:10", distance: 214, day: 1, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "00:47", dep: "00:50", distance: 334, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "01:50", dep: "01:55", distance: 394, day: 2, platform: "2", lat: 11.3410, lng: 77.7172 }
    ]
  },

  // 23. 22652 Palakkad - Chennai Central Superfast Express (Salem -> Chennai Central)
  {
    trainNo: "22652",
    name: "Palakkad - Chennai SF Express",
    nameTa: "பாலக்காடு - சென்னை அதிவிரைவு",
    type: "Superfast Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "22:50",
    arrivalTime: "04:05",
    runningDays: ["Daily"],
    stations: [
      { code: "NMKL", name: "Namakkal", nameTa: "நாமக்கல்", arr: "21:54", dep: "21:55", distance: 0, day: 1, platform: "1", lat: 11.2189, lng: 78.1674 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "22:45", dep: "22:50", distance: 52, day: 1, platform: "5", lat: 11.6643, lng: 78.1460 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "23:44", dep: "23:45", distance: 118, day: 1, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "00:43", dep: "00:45", distance: 172, day: 2, platform: "3", lat: 12.5694, lng: 78.5830 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "01:48", dep: "01:50", distance: 256, day: 2, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "02:38", dep: "02:40", distance: 317, day: 2, platform: "2", lat: 13.0784, lng: 79.6677 },
      { code: "PER", name: "Perambur", nameTa: "பெரம்பூர்", arr: "03:28", dep: "03:30", distance: 381, day: 2, platform: "1", lat: 13.1075, lng: 80.2335 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "04:05", dep: "Destination", distance: 386, day: 2, platform: "7", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 24. 22651 Chennai Central - Palakkad Superfast Express (Chennai Central -> Salem)
  {
    trainNo: "22651",
    name: "Chennai - Palakkad SF Express",
    nameTa: "சென்னை - பாலக்காடு அதிவிரைவு",
    type: "Superfast Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "21:40",
    arrivalTime: "02:45",
    runningDays: ["Daily"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "21:40", distance: 0, day: 1, platform: "7", lat: 13.0827, lng: 80.2707 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "22:38", dep: "22:40", distance: 69, day: 1, platform: "1", lat: 13.0784, lng: 79.6677 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "23:28", dep: "23:30", distance: 130, day: 1, platform: "1", lat: 12.9698, lng: 79.1352 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "01:08", dep: "01:10", distance: 214, day: 2, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "01:54", dep: "01:55", distance: 269, day: 2, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "02:40", dep: "02:45", distance: 334, day: 2, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "NMKL", name: "Namakkal", nameTa: "நாமக்கல்", arr: "03:34", dep: "03:35", distance: 386, day: 2, platform: "1", lat: 11.2189, lng: 78.1674 }
    ]
  },

  // 25. 12244 Coimbatore - Chennai Central Shatabdi Express (Salem -> Chennai Central)
  {
    trainNo: "12244",
    name: "Coimbatore - Chennai Shatabdi",
    nameTa: "சதாப்தி அதிவிரைவு வண்டி",
    type: "Shatabdi Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "17:05",
    arrivalTime: "21:50",
    runningDays: ["Mon", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stations: [
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "Source", dep: "15:05", distance: 0, day: 1, platform: "4", lat: 11.0018, lng: 76.9628 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "15:43", dep: "15:45", distance: 50, day: 1, platform: "2", lat: 11.1085, lng: 77.3411 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "16:25", dep: "16:30", distance: 101, day: 1, platform: "1", lat: 11.3410, lng: 77.7172 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "17:02", dep: "17:05", distance: 160, day: 1, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "18:48", dep: "18:50", distance: 281, day: 1, platform: "3", lat: 12.5694, lng: 78.5830 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "19:48", dep: "19:50", distance: 365, day: 1, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "21:50", dep: "Destination", distance: 495, day: 1, platform: "2", lat: 13.0827, lng: 80.2707 }
    ]
  },

  // 26. 12243 Chennai Central - Coimbatore Shatabdi Express (Chennai Central -> Salem)
  {
    trainNo: "12243",
    name: "Chennai - Coimbatore Shatabdi",
    nameTa: "சதாப்தி அதிவிரைவு வண்டி",
    type: "Shatabdi Express",
    direction: "MAS_TO_SA",
    directionLabel: "Chennai ➔ Salem",
    directionLabelTa: "சென்னை ➔ சேலம்",
    from: "MGR Chennai Central (MAS)",
    fromTa: "சென்னை சென்ட்ரல் (MAS)",
    to: "Salem Junction (SA)",
    toTa: "சேலம் சந்திப்பு (SA)",
    departureTime: "07:10",
    arrivalTime: "11:50",
    runningDays: ["Mon", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stations: [
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "Source", dep: "07:10", distance: 0, day: 1, platform: "2", lat: 13.0827, lng: 80.2707 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "08:48", dep: "08:50", distance: 130, day: 1, platform: "1", lat: 12.9698, lng: 79.1352 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "09:48", dep: "09:50", distance: 214, day: 1, platform: "1", lat: 12.5694, lng: 78.5830 },
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "11:47", dep: "11:50", distance: 334, day: 1, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "ED", name: "Erode Junction", nameTa: "ஈரோடு சந்திப்பு", arr: "12:45", dep: "12:50", distance: 394, day: 1, platform: "2", lat: 11.3410, lng: 77.7172 },
      { code: "TUP", name: "Tiruppur", nameTa: "திருப்பூர்", arr: "13:30", dep: "13:32", distance: 444, day: 1, platform: "1", lat: 11.1085, lng: 77.3411 },
      { code: "CBE", name: "Coimbatore Junction", nameTa: "கோயம்புத்தூர் சந்திப்பு", arr: "14:15", dep: "Destination", distance: 495, day: 1, platform: "4", lat: 11.0018, lng: 76.9628 }
    ]
  }
];

// Helper to find a train by trainNo or name
export function findTrain(query) {
  if (!query) return null;
  const clean = query.trim().toLowerCase();
  
  // Exact train number match
  const byNo = TRAINS_DATA.find(t => t.trainNo === clean);
  if (byNo) return byNo;

  // Partial match by name or Tamil name
  return TRAINS_DATA.find(t => 
    t.name.toLowerCase().includes(clean) ||
    t.nameTa.toLowerCase().includes(clean) ||
    t.trainNo.includes(clean)
  );
}

// Generate generic train for any unlisted 5-digit number
export function createGenericTrain(trainNo) {
  return {
    trainNo: trainNo,
    name: `Express Train (${trainNo})`,
    nameTa: `விரைவு ரயில் (${trainNo})`,
    type: "Express",
    direction: "SA_TO_MAS",
    directionLabel: "Salem ➔ Chennai",
    directionLabelTa: "சேலம் ➔ சென்னை",
    from: "Salem Junction (SA)",
    fromTa: "சேலம் சந்திப்பு (SA)",
    to: "Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல் (MAS)",
    departureTime: "06:00",
    arrivalTime: "11:30",
    runningDays: ["Daily"],
    stations: [
      { code: "SA", name: "Salem Junction", nameTa: "சேலம் சந்திப்பு", arr: "Source", dep: "06:00", distance: 0, day: 1, platform: "4", lat: 11.6643, lng: 78.1460 },
      { code: "MAP", name: "Morappur", nameTa: "மொரப்பூர்", arr: "06:54", dep: "06:55", distance: 66, day: 1, platform: "2", lat: 12.0620, lng: 78.4350 },
      { code: "JTJ", name: "Jolarpettai Junction", nameTa: "ஜோலார்பேட்டை சந்திப்பு", arr: "07:58", dep: "08:00", distance: 121, day: 1, platform: "3", lat: 12.5694, lng: 78.5830 },
      { code: "KPD", name: "Katpadi Junction", nameTa: "காட்பாடி சந்திப்பு", arr: "09:08", dep: "09:10", distance: 205, day: 1, platform: "2", lat: 12.9698, lng: 79.1352 },
      { code: "AJJ", name: "Arakkonam Junction", nameTa: "அரக்கோணம் சந்திப்பு", arr: "09:58", dep: "10:00", distance: 266, day: 1, platform: "2", lat: 13.0784, lng: 79.6677 },
      { code: "MAS", name: "MGR Chennai Central", nameTa: "சென்னை சென்ட்ரல்", arr: "11:30", dep: "Destination", distance: 334, day: 1, platform: "5", lat: 13.0827, lng: 80.2707 }
    ]
  };
}
