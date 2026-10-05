// Vercel Serverless Function: /api/live-status
// Optional backend proxy to fetch live running status without CORS issues

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { train } = req.query;

  if (!train) {
    return res.status(400).json({ error: "Train number is required" });
  }

  try {
    // If a free RailRadar or RapidAPI key is provided in environment variables:
    const rapidApiKey = process.env.RAPIDAPI_KEY;
    const railRadarKey = process.env.RAILRADAR_API_KEY;

    if (railRadarKey) {
      const response = await fetch(`https://api.railradar.in/v1/trains/${train}/status`, {
        headers: { "x-api-key": railRadarKey }
      });
      if (response.ok) {
        const data = await response.json();
        return res.status(200).json(data);
      }
    }

    if (rapidApiKey) {
      const response = await fetch(
        `https://indian-railway-irctc.p.rapidapi.com/api/trains/${train}/live-status`,
        {
          headers: {
            "x-rapidapi-key": rapidApiKey,
            "x-rapidapi-host": "indian-railway-irctc.p.rapidapi.com"
          }
        }
      );
      if (response.ok) {
        const data = await response.json();
        return res.status(200).json(data);
      }
    }

    // Default fallback: return simulated delay status
    return res.status(200).json({
      success: true,
      trainNo: train,
      source: "schedule_engine",
      delayMinutes: 0
    });
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch live status", details: err.message });
  }
}
