import React, { useEffect, useRef } from "react";
import L from "leaflet";
import { Map, Navigation } from "lucide-react";

export function TrainMap({ train, status, lang, t }) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersLayerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Default center (Tamil Nadu / South India coordinates)
    const initialLat = status?.currentLocationLat || 10.7905;
    const initialLng = status?.currentLocationLng || 78.7047;

    // Initialize Leaflet map instance if not already created
    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [initialLat, initialLng],
        zoom: 7,
        zoomControl: false,
        attributionControl: false
      });

      // Add OpenStreetMap Free Tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);

      // Add small zoom control in top-right
      L.control.zoom({ position: "topright" }).addTo(map);

      const markersLayer = L.layerGroup().addTo(map);
      markersLayerRef.current = markersLayer;
      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;
    const markersLayer = markersLayerRef.current;
    markersLayer.clearLayers();

    if (!train || !train.stations || train.stations.length === 0) return;

    // Station Coordinates for Polyline
    const latLngs = train.stations.map(stn => [stn.lat, stn.lng]);

    // Draw Railway Route Polyline
    const polyline = L.polyline(latLngs, {
      color: "#2563eb",
      weight: 4,
      opacity: 0.8,
      dashArray: "6, 8"
    }).addTo(markersLayer);

    // Station Icons
    train.stations.forEach((stn, index) => {
      const isStart = index === 0;
      const isEnd = index === train.stations.length - 1;
      const isPassed = status?.passedCodes?.includes(stn.code);

      const stnIcon = L.divIcon({
        className: "custom-stn-marker",
        html: `
          <div style="
            width: ${isStart || isEnd ? "14px" : "10px"};
            height: ${isStart || isEnd ? "14px" : "10px"};
            background-color: ${isStart || isEnd ? "#1e3a8a" : isPassed ? "#10b981" : "#64748b"};
            border: 2px solid #ffffff;
            border-radius: 50%;
            box-shadow: 0 1px 4px rgba(0,0,0,0.3);
          "></div>
        `,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });

      const marker = L.marker([stn.lat, stn.lng], { icon: stnIcon }).addTo(markersLayer);
      const stnName = lang === "ta" ? stn.nameTa : stn.name;
      marker.bindPopup(`
        <div style="font-family: sans-serif; font-size: 12px; padding: 2px;">
          <strong>${stnName} (${stn.code})</strong><br/>
          <span>${t.scheduled}: ${stn.arr || stn.dep}</span><br/>
          ${stn.platform ? `<span>${t.platform}: ${stn.platform}</span>` : ""}
        </div>
      `);
    });

    // Animated Live Train Marker
    if (status?.currentLocationLat && status?.currentLocationLng) {
      const trainIcon = L.divIcon({
        className: "custom-train-marker",
        html: `
          <div style="
            width: 36px;
            height: 36px;
            background-color: #1e3a8a;
            color: #facc15;
            border: 3px solid #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.4);
            animation: train-ping 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          ">
            🚆
          </div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 18]
      });

      const liveMarker = L.marker([status.currentLocationLat, status.currentLocationLng], {
        icon: trainIcon,
        zIndexOffset: 1000
      }).addTo(markersLayer);

      const trainName = lang === "ta" ? train.nameTa : train.name;
      const statusText = lang === "ta" ? status.statusTextTa : status.statusTextEn;

      liveMarker.bindPopup(`
        <div style="font-family: sans-serif; font-size: 13px; padding: 4px; min-width: 160px;">
          <strong style="color: #1e3a8a;">${trainName} (${train.trainNo})</strong><br/>
          <div style="margin-top: 4px; font-weight: bold; color: #047857;">${statusText}</div>
          <div style="margin-top: 2px; color: #475569;">${t.speed}: ${status.speedKmh} ${t.kmh}</div>
        </div>
      `).openPopup();

      // Pan to train
      map.setView([status.currentLocationLat, status.currentLocationLng], map.getZoom() || 8);
    } else {
      map.fitBounds(polyline.getBounds(), { padding: [30, 30] });
    }

  }, [train, status?.currentLocationLat, status?.currentLocationLng, lang]);

  // Recenter map on live train position
  const handleRecenter = () => {
    if (mapInstanceRef.current && status?.currentLocationLat && status?.currentLocationLng) {
      mapInstanceRef.current.setView([status.currentLocationLat, status.currentLocationLng], 9, {
        animate: true
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-2">
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Map className="w-4 h-4" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {t.route_map}
            </h3>
          </div>

          <button
            onClick={handleRecenter}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-800 text-xs font-semibold transition-all border border-slate-200 active:scale-95 cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5 text-blue-600" />
            <span>{lang === "ta" ? "ரயில் இடம்" : "Center Train"}</span>
          </button>
        </div>

        {/* Leaflet Map Canvas */}
        <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 relative shadow-inner">
          <div ref={mapContainerRef} className="w-full h-full" />
        </div>

        <p className="text-xs text-slate-400 text-center mt-2.5">
          {lang === "ta"
            ? "நிலையம் அல்லது ரயிலை தொட்டு விவரங்களை காணலாம் (OpenStreetMap)"
            : "Tap station dots or train icon to inspect live details (OpenStreetMap)"}
        </p>
      </div>
    </div>
  );
}
