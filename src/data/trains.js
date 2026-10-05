// Curated database of popular Tamil Nadu & Indian Railway Trains
// Includes station-by-station timetables, platform numbers, coordinates, and Tamil/English names

export const TRAINS_DATA = [
  {
    trainNo: "12636",
    name: "Vaigai Superfast Express",
    nameTa: "வைகை அதிவிரைவு வண்டி",
    type: "Superfast Express",
    from: "Madurai Junction (MDU)",
    fromTa: "மதுரை சந்திப்பு",
    to: "Chennai Egmore (MS)",
    toTa: "சென்னை எழும்பூர்",
    departureTime: "07:10",
    arrivalTime: "14:30",
    runningDays: ["Daily"],
    stations: [
      { code: "MDU", name: "Madurai Junction", nameTa: "மதுரை சந்திப்பு", arr: "Source", dep: "07:10", distance: 0, day: 1, platform: "2", lat: 9.9178, lng: 78.1130 },
      { code: "SDN", name: "Sholavandan", nameTa: "சோழவந்தான்", arr: "07:33", dep: "07:35", distance: 21, day: 1, platform: "2", lat: 10.0210, lng: 77.9620 },
      { code: "DG", name: "Dindigul Junction", nameTa: "திண்டுக்கல் சந்திப்பு", arr: "08:03", dep: "08:05", distance: 62, day: 1, platform: "3", lat: 10.3673, lng: 77.9803 },
      { code: "MPA", name: "Manaparai", nameTa: "மணப்பாறை", arr: "08:44", dep: "08:45", distance: 120, day: 1, platform: "3", lat: 10.6067, lng: 78.4172 },
      { code: "TPJ", name: "Tiruchchirappalli Junction", nameTa: "திருச்சிராப்பள்ளி சந்திப்பு", arr: "09:15", dep: "09:20", distance: 157, day: 1, platform: "1", lat: 10.7937, lng: 78.6833 },
      { code: "ALU", name: "Ariyalur", nameTa: "அரியலூர்", arr: "10:14", dep: "10:15", distance: 227, day: 1, platform: "3", lat: 11.1401, lng: 79.0776 },
      { code: "VRI", name: "Vriddhachalam Junction", nameTa: "விருத்தாசலம் சந்திப்பு", arr: "10:48", dep: "10:50", distance: 280, day: 1, platform: "3", lat: 11.5306, lng: 79.3248 },
      { code: "VM", name: "Villupuram Junction", nameTa: "விழுப்புரம் சந்திப்பு", arr: "11:40", dep: "11:45", distance: 335, day: 1, platform: "1", lat: 11.9398, lng: 79.4947 },
      { code: "TMV", name: "Tindivanam", nameTa: "திண்டிவனம்", arr: "12:13", dep: "12:15", distance: 372, day: 1, platform: "2", lat: 12.2289, lng: 79.6542 },
      { code: "MLMR", name: "Melmaruvathur", nameTa: "மேல்மருவத்தூர்", arr: "12:38", dep: "12:40", distance: 402, day: 1, platform: "1", lat: 12.4332, lng: 79.8290 },
      { code: "CGL", name: "Chengalpattu Junction", nameTa: "செங்கல்பட்டு சந்திப்பு", arr: "13:13", dep: "13:15", distance: 438, day: 1, platform: "5", lat: 12.6939, lng: 79.9757 },
      { code: "TBM", name: "Tambaram", nameTa: "தாம்பரம்", arr: "13:43", dep: "13:45", distance: 469, day: 1, platform: "6", lat: 12.9249, lng: 80.1197 },
      { code: "MBM", name: "Mambalam", nameTa: "மாம்பலம்", arr: "14:04", dep: "14:05", distance: 486, day: 1, platform: "3", lat: 13.0336, lng: 80.2297 },
      { code: "MS", name: "Chennai Egmore", nameTa: "சென்னை எழும்பூர்", arr: "14:30", dep: "Destination", distance: 493, day: 1, platform: "7", lat: 13.0827, lng: 80.2608 }
    ]
  },
  {
    trainNo: "12635",
    name: "Vaigai Superfast Express",
    nameTa: "வைகை அதிவிரைவு வண்டி",
    type: "Superfast Express",
    from: "Chennai Egmore (MS)",
    fromTa: "சென்னை எழும்பூர்",
    to: "Madurai Junction (MDU)",
    toTa: "மதுரை சந்திப்பு",
    departureTime: "13:50",
    arrivalTime: "21:15",
    runningDays: ["Daily"],
    stations: [
      { code: "MS", name: "Chennai Egmore", nameTa: "சென்னை எழும்பூர்", arr: "Source", dep: "13:50", distance: 0, day: 1, platform: "4", lat: 13.0827, lng: 80.2608 },
      { code: "TBM", name: "Tambaram", nameTa: "தாம்பரம்", arr: "14:18", dep: "14:20", distance: 25, day: 1, platform: "8", lat: 12.9249, lng: 80.1197 },
      { code: "CGL", name: "Chengalpattu Junction", nameTa: "செங்கல்பட்டு சந்திப்பு", arr: "14:48", dep: "14:50", distance: 56, day: 1, platform: "6", lat: 12.6939, lng: 79.9757 },
      { code: "MLMR", name: "Melmaruvathur", nameTa: "மேல்மருவத்தூர்", arr: "15:18", dep: "15:20", distance: 91, day: 1, platform: "2", lat: 12.4332, lng: 79.8290 },
      { code: "TMV", name: "Tindivanam", nameTa: "திண்டிவனம்", arr: "15:43", dep: "15:45", distance: 121, day: 1, platform: "3", lat: 12.2289, lng: 79.6542 },
      { code: "VM", name: "Villupuram Junction", nameTa: "விழுப்புரம் சந்திப்பு", arr: "16:15", dep: "16:20", distance: 159, day: 1, platform: "1", lat: 11.9398, lng: 79.4947 },
      { code: "VRI", name: "Vriddhachalam Junction", nameTa: "விருத்தாசலம் சந்திப்பு", arr: "17:00", dep: "17:02", distance: 213, day: 1, platform: "3", lat: 11.5306, lng: 79.3248 },
      { code: "ALU", name: "Ariyalur", nameTa: "அரியலூர்", arr: "17:39", dep: "17:40", distance: 267, day: 1, platform: "2", lat: 11.1401, lng: 79.0776 },
      { code: "TPJ", name: "Tiruchchirappalli Junction", nameTa: "திருச்சிராப்பள்ளி சந்திப்பு", arr: "18:40", dep: "18:45", distance: 337, day: 1, platform: "1", lat: 10.7937, lng: 78.6833 },
      { code: "MPA", name: "Manaparai", nameTa: "மணப்பாறை", arr: "19:14", dep: "19:15", distance: 373, day: 1, platform: "1", lat: 10.6067, lng: 78.4172 },
      { code: "DG", name: "Dindigul Junction", nameTa: "திண்டுக்கல் சந்திப்பு", arr: "19:57", dep: "20:00", distance: 431, day: 1, platform: "4", lat: 10.3673, lng: 77.9803 },
      { code: "SDN", name: "Sholavandan", nameTa: "சோழவந்தான்", arr: "20:34", dep: "20:35", distance: 472, day: 1, platform: "1", lat: 10.0210, lng: 77.9620 },
      { code: "MDU", name: "Madurai Junction", nameTa: "மதுரை சந்திப்பு", arr: "21:15", dep: "Destination", distance: 493, day: 1, platform: "2", lat: 9.9178, lng: 78.1130 }
    ]
  },
  {
    trainNo: "12638",
    name: "Pandian Superfast Express",
    nameTa: "பாண்டியன் அதிவிரைவு வண்டி",
    type: "Superfast Express",
    from: "Madurai Junction (MDU)",
    fromTa: "மதுரை சந்திப்பு",
    to: "Chennai Egmore (MS)",
    toTa: "சென்னை எழும்பூர்",
    departureTime: "21:35",
    arrivalTime: "05:15",
    runningDays: ["Daily"],
    stations: [
      { code: "MDU", name: "Madurai Junction", nameTa: "மதுரை சந்திப்பு", arr: "Source", dep: "21:35", distance: 0, day: 1, platform: "1", lat: 9.9178, lng: 78.1130 },
      { code: "KQN", name: "Kodaikanal Road", nameTa: "கொடைக்கானல் ரோடு", arr: "22:04", dep: "22:05", distance: 40, day: 1, platform: "1", lat: 10.1798, lng: 77.9157 },
      { code: "DG", name: "Dindigul Junction", nameTa: "திண்டுக்கல் சந்திப்பு", arr: "22:27", dep: "22:30", distance: 62, day: 1, platform: "3", lat: 10.3673, lng: 77.9803 },
      { code: "TPJ", name: "Tiruchchirappalli Junction", nameTa: "திருச்சிராப்பள்ளி சந்திப்பு", arr: "23:40", dep: "23:45", distance: 157, day: 1, platform: "1", lat: 10.7937, lng: 78.6833 },
      { code: "VRI", name: "Vriddhachalam Junction", nameTa: "விருத்தாசலம் சந்திப்பு", arr: "01:23", dep: "01:25", distance: 280, day: 2, platform: "3", lat: 11.5306, lng: 79.3248 },
      { code: "VM", name: "Villupuram Junction", nameTa: "விழுப்புரம் சந்திப்பு", arr: "02:25", dep: "02:30", distance: 335, day: 2, platform: "1", lat: 11.9398, lng: 79.4947 },
      { code: "CGL", name: "Chengalpattu Junction", nameTa: "செங்கல்பட்டு சந்திப்பு", arr: "03:58", dep: "04:00", distance: 438, day: 2, platform: "5", lat: 12.6939, lng: 79.9757 },
      { code: "TBM", name: "Tambaram", nameTa: "தாம்பரம்", arr: "04:28", dep: "04:30", distance: 469, day: 2, platform: "6", lat: 12.9249, lng: 80.1197 },
      { code: "MBM", name: "Mambalam", nameTa: "மாம்பலம்", arr: "04:49", dep: "04:50", distance: 486, day: 2, platform: "3", lat: 13.0336, lng: 80.2297 },
      { code: "MS", name: "Chennai Egmore", nameTa: "சென்னை எழும்பூர்", arr: "05:15", dep: "Destination", distance: 493, day: 2, platform: "4", lat: 13.0827, lng: 80.2608 }
    ]
  },
  {
    trainNo: "12637",
    name: "Pandian Superfast Express",
    nameTa: "பாண்டியன் அதிவிரைவு வண்டி",
    type: "Superfast Express",
    from: "Chennai Egmore (MS)",
    fromTa: "சென்னை எழும்பூர்",
    to: "Madurai Junction (MDU)",
    toTa: "மதுரை சந்திப்பு",
    departureTime: "21:40",
    arrivalTime: "05:35",
    runningDays: ["Daily"],
    stations: [
      { code: "MS", name: "Chennai Egmore", nameTa: "சென்னை எழும்பூர்", arr: "Source", dep: "21:40", distance: 0, day: 1, platform: "4", lat: 13.0827, lng: 80.2608 },
      { code: "TBM", name: "Tambaram", nameTa: "தாம்பரம்", arr: "22:08", dep: "22:10", distance: 25, day: 1, platform: "8", lat: 12.9249, lng: 80.1197 },
      { code: "CGL", name: "Chengalpattu Junction", nameTa: "செங்கல்பட்டு சந்திப்பு", arr: "22:38", dep: "22:40", distance: 56, day: 1, platform: "6", lat: 12.6939, lng: 79.9757 },
      { code: "VM", name: "Villupuram Junction", nameTa: "விழுப்புரம் சந்திப்பு", arr: "00:05", dep: "00:10", distance: 159, day: 2, platform: "1", lat: 11.9398, lng: 79.4947 },
      { code: "VRI", name: "Vriddhachalam Junction", nameTa: "விருத்தாசலம் சந்திப்பு", arr: "00:50", dep: "00:52", distance: 213, day: 2, platform: "3", lat: 11.5306, lng: 79.3248 },
      { code: "TPJ", name: "Tiruchchirappalli Junction", nameTa: "திருச்சிராப்பள்ளி சந்திப்பு", arr: "02:40", dep: "02:45", distance: 337, day: 2, platform: "1", lat: 10.7937, lng: 78.6833 },
      { code: "DG", name: "Dindigul Junction", nameTa: "திண்டுக்கல் சந்திப்பு", arr: "04:12", dep: "04:15", distance: 431, day: 2, platform: "4", lat: 10.3673, lng: 77.9803 },
      { code: "KQN", name: "Kodaikanal Road", nameTa: "கொடைக்கானல் ரோடு", arr: "04:34", dep: "04:35", distance: 453, day: 2, platform: "1", lat: 10.1798, lng: 77.9157 },
      { code: "MDU", name: "Madurai Junction", nameTa: "மதுரை சந்திப்பு", arr: "05:35", dep: "Destination", distance: 493, day: 2, platform: "3", lat: 9.9178, lng: 78.1130 }
    ]
  },
  {
    trainNo: "12606",
    name: "Pallavan Superfast Express",
    nameTa: "பல்லவன் அதிவிரைவு வண்டி",
    type: "Superfast Express",
    from: "Karaikkudi Junction (KKDI)",
    fromTa: "காரைக்குடி சந்திப்பு",
    to: "Chennai Egmore (MS)",
    toTa: "சென்னை எழும்பூர்",
    departureTime: "05:35",
    arrivalTime: "12:15",
    runningDays: ["Daily"],
    stations: [
      { code: "KKDI", name: "Karaikkudi Junction", nameTa: "காரைக்குடி சந்திப்பு", arr: "Source", dep: "05:35", distance: 0, day: 1, platform: "1", lat: 10.0631, lng: 78.7842 },
      { code: "PDKT", name: "Pudukkottai", nameTa: "புதுக்கோட்டை", arr: "06:04", dep: "06:05", distance: 37, day: 1, platform: "1", lat: 10.3833, lng: 78.8167 },
      { code: "TPJ", name: "Tiruchchirappalli Junction", nameTa: "திருச்சிராப்பள்ளி சந்திப்பு", arr: "06:50", dep: "06:55", distance: 90, day: 1, platform: "1", lat: 10.7937, lng: 78.6833 },
      { code: "SRGM", name: "Srirangam", nameTa: "ஸ்ரீரங்கம்", arr: "07:11", dep: "07:13", distance: 101, day: 1, platform: "1", lat: 10.8624, lng: 78.6976 },
      { code: "LLI", name: "Lalgudi", nameTa: "லால்குடி", arr: "07:27", dep: "07:28", distance: 116, day: 1, platform: "2", lat: 10.9080, lng: 78.7990 },
      { code: "ALU", name: "Ariyalur", nameTa: "அரியலூர்", arr: "07:59", dep: "08:00", distance: 160, day: 1, platform: "3", lat: 11.1401, lng: 79.0776 },
      { code: "VRI", name: "Vriddhachalam Junction", nameTa: "விருத்தாசலம் சந்திப்பு", arr: "08:33", dep: "08:35", distance: 213, day: 1, platform: "3", lat: 11.5306, lng: 79.3248 },
      { code: "VM", name: "Villupuram Junction", nameTa: "விழுப்புரம் சந்திப்பு", arr: "09:25", dep: "09:30", distance: 268, day: 1, platform: "1", lat: 11.9398, lng: 79.4947 },
      { code: "MLMR", name: "Melmaruvathur", nameTa: "மேல்மருவத்தூர்", arr: "10:23", dep: "10:25", distance: 335, day: 1, platform: "1", lat: 12.4332, lng: 79.8290 },
      { code: "CGL", name: "Chengalpattu Junction", nameTa: "செங்கல்பட்டு சந்திப்பு", arr: "10:58", dep: "11:00", distance: 371, day: 1, platform: "5", lat: 12.6939, lng: 79.9757 },
      { code: "TBM", name: "Tambaram", nameTa: "தாம்பரம்", arr: "11:28", dep: "11:30", distance: 402, day: 1, platform: "6", lat: 12.9249, lng: 80.1197 },
      { code: "MBM", name: "Mambalam", nameTa: "மாம்பலம்", arr: "11:49", dep: "11:50", distance: 419, day: 1, platform: "3", lat: 13.0336, lng: 80.2297 },
      { code: "MS", name: "Chennai Egmore", nameTa: "சென்னை எழும்பூர்", arr: "12:15", dep: "Destination", distance: 426, day: 1, platform: "5", lat: 13.0827, lng: 80.2608 }
    ]
  },
  {
    trainNo: "12632",
    name: "Nellai Superfast Express",
    nameTa: "நெல்லை அதிவிரைவு வண்டி",
    type: "Superfast Express",
    from: "Tirunelveli Junction (TEN)",
    fromTa: "திருநெல்வேலி சந்திப்பு",
    to: "Chennai Egmore (MS)",
    toTa: "சென்னை எழும்பூர்",
    departureTime: "20:05",
    arrivalTime: "07:00",
    runningDays: ["Daily"],
    stations: [
      { code: "TEN", name: "Tirunelveli Junction", nameTa: "திருநெல்வேலி சந்திப்பு", arr: "Source", dep: "20:05", distance: 0, day: 1, platform: "1", lat: 8.7289, lng: 77.7281 },
      { code: "CVP", name: "Kovilpatti", nameTa: "கோவில்பட்டி", arr: "20:53", dep: "20:55", distance: 65, day: 1, platform: "2", lat: 9.1764, lng: 77.8687 },
      { code: "SRT", name: "Satur", nameTa: "சாத்தூர்", arr: "21:13", dep: "21:15", distance: 87, day: 1, platform: "1", lat: 9.3562, lng: 77.9255 },
      { code: "VPT", name: "Virudhunagar Junction", nameTa: "விருதுநகர் சந்திப்பு", arr: "21:38", dep: "21:40", distance: 114, day: 1, platform: "2", lat: 9.5872, lng: 77.9620 },
      { code: "MDU", name: "Madurai Junction", nameTa: "மதுரை சந்திப்பு", arr: "22:30", dep: "22:35", distance: 157, day: 1, platform: "2", lat: 9.9178, lng: 78.1130 },
      { code: "DG", name: "Dindigul Junction", nameTa: "திண்டுக்கல் சந்திப்பு", arr: "23:32", dep: "23:35", distance: 219, day: 1, platform: "3", lat: 10.3673, lng: 77.9803 },
      { code: "TPJ", name: "Tiruchchirappalli Junction", nameTa: "திருச்சிராப்பள்ளி சந்திப்பு", arr: "00:55", dep: "01:00", distance: 314, day: 2, platform: "1", lat: 10.7937, lng: 78.6833 },
      { code: "VRI", name: "Vriddhachalam Junction", nameTa: "விருத்தாசலம் சந்திப்பு", arr: "02:48", dep: "02:50", distance: 437, day: 2, platform: "3", lat: 11.5306, lng: 79.3248 },
      { code: "VM", name: "Villupuram Junction", nameTa: "விழுப்புரம் சந்திப்பு", arr: "03:55", dep: "04:00", distance: 492, day: 2, platform: "1", lat: 11.9398, lng: 79.4947 },
      { code: "TMV", name: "Tindivanam", nameTa: "திண்டிவனம்", arr: "04:33", dep: "04:35", distance: 529, day: 2, platform: "2", lat: 12.2289, lng: 79.6542 },
      { code: "MLMR", name: "Melmaruvathur", nameTa: "மேல்மருவத்தூர்", arr: "04:58", dep: "05:00", distance: 559, day: 2, platform: "1", lat: 12.4332, lng: 79.8290 },
      { code: "CGL", name: "Chengalpattu Junction", nameTa: "செங்கல்பட்டு சந்திப்பு", arr: "05:38", dep: "05:40", distance: 595, day: 2, platform: "5", lat: 12.6939, lng: 79.9757 },
      { code: "TBM", name: "Tambaram", nameTa: "தாம்பரம்", arr: "06:08", dep: "06:10", distance: 626, day: 2, platform: "6", lat: 12.9249, lng: 80.1197 },
      { code: "MBM", name: "Mambalam", nameTa: "மாம்பலம்", arr: "06:29", dep: "06:30", distance: 643, day: 2, platform: "3", lat: 13.0336, lng: 80.2297 },
      { code: "MS", name: "Chennai Egmore", nameTa: "சென்னை எழும்பூர்", arr: "07:00", dep: "Destination", distance: 650, day: 2, platform: "7", lat: 13.0827, lng: 80.2608 }
    ]
  },
  {
    trainNo: "12654",
    name: "Rockfort Superfast Express",
    nameTa: "மலைக்கோட்டை அதிவிரைவு வண்டி",
    type: "Superfast Express",
    from: "Tiruchchirappalli Junction (TPJ)",
    fromTa: "திருச்சிராப்பள்ளி சந்திப்பு",
    to: "Chennai Egmore (MS)",
    toTa: "சென்னை எழும்பூர்",
    departureTime: "22:50",
    arrivalTime: "04:10",
    runningDays: ["Daily"],
    stations: [
      { code: "TPJ", name: "Tiruchchirappalli Junction", nameTa: "திருச்சிராப்பள்ளி சந்திப்பு", arr: "Source", dep: "22:50", distance: 0, day: 1, platform: "1", lat: 10.7937, lng: 78.6833 },
      { code: "SRGM", name: "Srirangam", nameTa: "ஸ்ரீரங்கம்", arr: "23:08", dep: "23:10", distance: 11, day: 1, platform: "1", lat: 10.8624, lng: 78.6976 },
      { code: "ALU", name: "Ariyalur", nameTa: "அரியலூர்", arr: "23:55", dep: "23:56", distance: 70, day: 1, platform: "2", lat: 11.1401, lng: 79.0776 },
      { code: "VRI", name: "Vriddhachalam Junction", nameTa: "விருத்தாசலம் சந்திப்பு", arr: "00:33", dep: "00:35", distance: 123, day: 2, platform: "3", lat: 11.5306, lng: 79.3248 },
      { code: "VM", name: "Villupuram Junction", nameTa: "விழுப்புரம் சந்திப்பு", arr: "01:25", dep: "01:30", distance: 178, day: 2, platform: "1", lat: 11.9398, lng: 79.4947 },
      { code: "CGL", name: "Chengalpattu Junction", nameTa: "செங்கல்பட்டு சந்திப்பு", arr: "02:58", dep: "03:00", distance: 281, day: 2, platform: "5", lat: 12.6939, lng: 79.9757 },
      { code: "TBM", name: "Tambaram", nameTa: "தாம்பரம்", arr: "03:28", dep: "03:30", distance: 312, day: 2, platform: "6", lat: 12.9249, lng: 80.1197 },
      { code: "MBM", name: "Mambalam", nameTa: "மாம்பலம்", arr: "03:49", dep: "03:50", distance: 329, day: 2, platform: "3", lat: 13.0336, lng: 80.2297 },
      { code: "MS", name: "Chennai Egmore", nameTa: "சென்னை எழும்பூர்", arr: "04:10", dep: "Destination", distance: 336, day: 2, platform: "5", lat: 13.0827, lng: 80.2608 }
    ]
  },
  {
    trainNo: "12676",
    name: "Kovai Superfast Express",
    nameTa: "கோவை அதிவிரைவு வண்டி",
    type: "Superfast Express",
    from: "Coimbatore Junction (CBE)",
    fromTa: "கோயம்புத்தூர் சந்திப்பு",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல்",
    departureTime: "15:15",
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
  {
    trainNo: "20608",
    name: "Vande Bharat Express",
    nameTa: "வந்தே பாரத் விரைவு வண்டி",
    type: "Vande Bharat Express",
    from: "Tirunelveli Junction (TEN)",
    fromTa: "திருநெல்வேலி சந்திப்பு",
    to: "Chennai Egmore (MS)",
    toTa: "சென்னை எழும்பூர்",
    departureTime: "06:00",
    arrivalTime: "13:50",
    runningDays: ["Mon", "Wed", "Thu", "Fri", "Sat", "Sun"],
    stations: [
      { code: "TEN", name: "Tirunelveli Junction", nameTa: "திருநெல்வேலி சந்திப்பு", arr: "Source", dep: "06:00", distance: 0, day: 1, platform: "1", lat: 8.7289, lng: 77.7281 },
      { code: "VPT", name: "Virudhunagar Junction", nameTa: "விருதுநகர் சந்திப்பு", arr: "07:13", dep: "07:15", distance: 114, day: 1, platform: "2", lat: 9.5872, lng: 77.9620 },
      { code: "MDU", name: "Madurai Junction", nameTa: "மதுரை சந்திப்பு", arr: "07:50", dep: "07:55", distance: 157, day: 1, platform: "2", lat: 9.9178, lng: 78.1130 },
      { code: "DG", name: "Dindigul Junction", nameTa: "திண்டுக்கல் சந்திப்பு", arr: "08:40", dep: "08:42", distance: 219, day: 1, platform: "3", lat: 10.3673, lng: 77.9803 },
      { code: "TPJ", name: "Tiruchchirappalli Junction", nameTa: "திருச்சிராப்பள்ளி சந்திப்பு", arr: "09:50", dep: "09:55", distance: 314, day: 1, platform: "1", lat: 10.7937, lng: 78.6833 },
      { code: "VM", name: "Villupuram Junction", nameTa: "விழுப்புரம் சந்திப்பு", arr: "11:54", dep: "11:56", distance: 492, day: 1, platform: "1", lat: 11.9398, lng: 79.4947 },
      { code: "TBM", name: "Tambaram", nameTa: "தாம்பரம்", arr: "13:13", dep: "13:15", distance: 626, day: 1, platform: "6", lat: 12.9249, lng: 80.1197 },
      { code: "MS", name: "Chennai Egmore", nameTa: "சென்னை எழும்பூர்", arr: "13:50", dep: "Destination", distance: 650, day: 1, platform: "1", lat: 13.0827, lng: 80.2608 }
    ]
  },
  {
    trainNo: "12634",
    name: "Kanyakumari Superfast Express",
    nameTa: "கன்னியாகுமரி அதிவிரைவு வண்டி",
    type: "Superfast Express",
    from: "Kanyakumari (CAPE)",
    fromTa: "கன்னியாகுமரி",
    to: "Chennai Egmore (MS)",
    toTa: "சென்னை எழும்பூர்",
    departureTime: "17:50",
    arrivalTime: "06:10",
    runningDays: ["Daily"],
    stations: [
      { code: "CAPE", name: "Kanyakumari", nameTa: "கன்னியாகுமரி", arr: "Source", dep: "17:50", distance: 0, day: 1, platform: "1", lat: 8.0883, lng: 77.5385 },
      { code: "NCJ", name: "Nagercoil Junction", nameTa: "நாகர்கோவில் சந்திப்பு", arr: "18:10", dep: "18:15", distance: 16, day: 1, platform: "2", lat: 8.1833, lng: 77.4333 },
      { code: "VLY", name: "Valliyur", nameTa: "வள்ளியூர்", arr: "18:44", dep: "18:45", distance: 47, day: 1, platform: "1", lat: 8.3833, lng: 77.6167 },
      { code: "TEN", name: "Tirunelveli Junction", nameTa: "திருநெல்வேலி சந்திப்பு", arr: "19:30", dep: "19:35", distance: 89, day: 1, platform: "1", lat: 8.7289, lng: 77.7281 },
      { code: "CVP", name: "Kovilpatti", nameTa: "கோவில்பட்டி", arr: "20:23", dep: "20:25", distance: 154, day: 1, platform: "2", lat: 9.1764, lng: 77.8687 },
      { code: "VPT", name: "Virudhunagar Junction", nameTa: "விருதுநகர் சந்திப்பு", arr: "21:08", dep: "21:10", distance: 203, day: 1, platform: "2", lat: 9.5872, lng: 77.9620 },
      { code: "MDU", name: "Madurai Junction", nameTa: "மதுரை சந்திப்பு", arr: "22:00", dep: "22:05", distance: 246, day: 1, platform: "2", lat: 9.9178, lng: 78.1130 },
      { code: "DG", name: "Dindigul Junction", nameTa: "திண்டுக்கல் சந்திப்பு", arr: "23:02", dep: "23:05", distance: 308, day: 1, platform: "3", lat: 10.3673, lng: 77.9803 },
      { code: "TPJ", name: "Tiruchchirappalli Junction", nameTa: "திருச்சிராப்பள்ளி சந்திப்பு", arr: "00:30", dep: "00:35", distance: 403, day: 2, platform: "1", lat: 10.7937, lng: 78.6833 },
      { code: "VRI", name: "Vriddhachalam Junction", nameTa: "விருத்தாசலம் சந்திப்பு", arr: "02:18", dep: "02:20", distance: 526, day: 2, platform: "3", lat: 11.5306, lng: 79.3248 },
      { code: "VM", name: "Villupuram Junction", nameTa: "விழுப்புரம் சந்திப்பு", arr: "03:20", dep: "03:25", distance: 581, day: 2, platform: "1", lat: 11.9398, lng: 79.4947 },
      { code: "TMV", name: "Tindivanam", nameTa: "திண்டிவனம்", arr: "03:58", dep: "04:00", distance: 618, day: 2, platform: "2", lat: 12.2289, lng: 79.6542 },
      { code: "CGL", name: "Chengalpattu Junction", nameTa: "செங்கல்பட்டு சந்திப்பு", arr: "04:58", dep: "05:00", distance: 684, day: 2, platform: "5", lat: 12.6939, lng: 79.9757 },
      { code: "TBM", name: "Tambaram", nameTa: "தாம்பரம்", arr: "05:28", dep: "05:30", distance: 715, day: 2, platform: "6", lat: 12.9249, lng: 80.1197 },
      { code: "MBM", name: "Mambalam", nameTa: "மாம்பலம்", arr: "05:49", dep: "05:50", distance: 732, day: 2, platform: "3", lat: 13.0336, lng: 80.2297 },
      { code: "MS", name: "Chennai Egmore", nameTa: "சென்னை எழும்பூர்", arr: "06:10", dep: "Destination", distance: 739, day: 2, platform: "4", lat: 13.0827, lng: 80.2608 }
    ]
  },
  {
    trainNo: "12674",
    name: "Cheran Superfast Express",
    nameTa: "சேரன் அதிவிரைவு வண்டி",
    type: "Superfast Express",
    from: "Coimbatore Junction (CBE)",
    fromTa: "கோயம்புத்தூர் சந்திப்பு",
    to: "MGR Chennai Central (MAS)",
    toTa: "சென்னை சென்ட்ரல்",
    departureTime: "22:50",
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
  }
];

// Helper to find a train by trainNo or name
export function findTrain(query) {
  if (!query) return null;
  const clean = query.trim().toLowerCase();
  
  // Exact train number match
  const byNo = TRAINS_DATA.find(t => t.trainNo === clean);
  if (byNo) return byNo;

  // Name or Tamil name or station match
  return TRAINS_DATA.find(t => 
    t.name.toLowerCase().includes(clean) ||
    t.nameTa.toLowerCase().includes(clean) ||
    t.trainNo.includes(clean) ||
    t.from.toLowerCase().includes(clean) ||
    t.to.toLowerCase().includes(clean)
  );
}

// Generate fallback / mock train for any unlisted 5-digit number
export function createGenericTrain(trainNo) {
  return {
    trainNo: trainNo,
    name: `Express Train (${trainNo})`,
    nameTa: `விரைவு ரயில் (${trainNo})`,
    type: "Express",
    from: "Origin Station",
    fromTa: "புறப்படும் நிலையம்",
    to: "Destination Station",
    toTa: "சேரும் நிலையம்",
    departureTime: "06:00",
    arrivalTime: "18:00",
    runningDays: ["Daily"],
    stations: [
      { code: "STN1", name: "Origin Station", nameTa: "புறப்படும் நிலையம்", arr: "Source", dep: "06:00", distance: 0, day: 1, platform: "1", lat: 13.0827, lng: 80.2608 },
      { code: "STN2", name: "Transit Station A", nameTa: "இடைப்பட்ட நிலையம் 1", arr: "09:30", dep: "09:35", distance: 180, day: 1, platform: "2", lat: 11.9398, lng: 79.4947 },
      { code: "STN3", name: "Transit Station B", nameTa: "இடைப்பட்ட நிலையம் 2", arr: "13:15", dep: "13:20", distance: 350, day: 1, platform: "3", lat: 10.7937, lng: 78.6833 },
      { code: "STN4", name: "Destination Station", nameTa: "சேரும் நிலையம்", arr: "18:00", dep: "Destination", distance: 550, day: 1, platform: "1", lat: 9.9178, lng: 78.1130 }
    ]
  };
}
