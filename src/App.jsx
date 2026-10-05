import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Navbar } from "./components/Navbar";
import { TrainSelector } from "./components/TrainSelector";
import { LiveStatusHero } from "./components/LiveStatusHero";
import { RouteTimeline } from "./components/RouteTimeline";
import { TrainMap } from "./components/TrainMap";
import { Footer } from "./components/Footer";
import { translations } from "./data/translations";
import { TRAINS_DATA, findTrain, createGenericTrain } from "./data/trains";
import { calculateTrainLiveStatus, fetchLiveStatusFromAPI } from "./utils/trackingEngine";
import { ListOrdered, Map as MapIcon } from "lucide-react";

export function App() {
  // Read URL query parameters (?train=12636&lang=ta)
  const queryParams = useMemo(() => new URLSearchParams(window.location.search), []);

  const initialLang = queryParams.get("lang") === "en" ? "en" : "ta";
  const initialTrainNo = queryParams.get("train") || "12636"; // Default: Vaigai Express

  const [lang, setLang] = useState(initialLang);
  const [currentTrain, setCurrentTrain] = useState(() => {
    return findTrain(initialTrainNo) || TRAINS_DATA[0];
  });
  const [delayMinutes, setDelayMinutes] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeView, setActiveView] = useState("all"); // 'all' | 'timeline' | 'map'

  const t = translations[lang] || translations.ta;

  // Sync URL when train or language changes
  useEffect(() => {
    if (currentTrain) {
      const url = new URL(window.location.href);
      url.searchParams.set("train", currentTrain.trainNo);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    }
  }, [currentTrain, lang]);

  // Periodic clock update every 30 seconds to recalculate train position
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Calculate real-time train status
  const liveStatus = useMemo(() => {
    return calculateTrainLiveStatus(currentTrain, currentTime, delayMinutes);
  }, [currentTrain, currentTime, delayMinutes]);

  // Train Selection Handler
  const handleSelectTrain = useCallback((query) => {
    const found = findTrain(query);
    if (found) {
      setCurrentTrain(found);
      setDelayMinutes(0);
    } else if (/^\d{5}$/.test(query.trim())) {
      // If 5-digit number not in local preset, create generic train route
      const generic = createGenericTrain(query.trim());
      setCurrentTrain(generic);
      setDelayMinutes(0);
    } else {
      alert(lang === "ta" ? "மன்னிக்கவும்! இந்த ரயில் கண்டுபிடிக்கப்படவில்லை." : "Train not found. Try a 5-digit number.");
    }
  }, [lang]);

  // Manual Refresh Handler
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    setCurrentTime(new Date());

    if (currentTrain) {
      const apiData = await fetchLiveStatusFromAPI(currentTrain.trainNo);
      if (apiData && apiData.delayMinutes !== undefined) {
        setDelayMinutes(apiData.delayMinutes);
      }
    }

    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  }, [currentTrain]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans antialiased text-slate-900">
      {/* Top Sticky Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        t={t}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
      />

      {/* Train Selector (Search + Quick Mobile Chips) */}
      <TrainSelector
        currentTrain={currentTrain}
        onSelectTrain={handleSelectTrain}
        lang={lang}
        t={t}
      />

      <main className="flex-1 pb-8">
        {/* Core Live Status Hero Display */}
        <LiveStatusHero
          train={currentTrain}
          status={liveStatus}
          lang={lang}
          t={t}
          delayMinutes={delayMinutes}
          onAdjustDelay={setDelayMinutes}
        />

        {/* View Switcher Tabs on Mobile */}
        <div className="max-w-4xl mx-auto px-4 my-2">
          <div className="bg-slate-200/80 p-1 rounded-2xl flex gap-1">
            <button
              onClick={() => setActiveView("all")}
              className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeView === "all"
                  ? "bg-white text-blue-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {lang === "ta" ? "அனைத்தும்" : "All Views"}
            </button>
            <button
              onClick={() => setActiveView("timeline")}
              className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeView === "timeline"
                  ? "bg-white text-blue-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5" />
              <span>{t.timeline_view}</span>
            </button>
            <button
              onClick={() => setActiveView("map")}
              className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeView === "map"
                  ? "bg-white text-blue-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <MapIcon className="w-3.5 h-3.5" />
              <span>{t.route_map}</span>
            </button>
          </div>
        </div>

        {/* Interactive Map */}
        {(activeView === "all" || activeView === "map") && (
          <TrainMap
            train={currentTrain}
            status={liveStatus}
            lang={lang}
            t={t}
          />
        )}

        {/* Vertical Station Timeline */}
        {(activeView === "all" || activeView === "timeline") && (
          <RouteTimeline
            train={currentTrain}
            status={liveStatus}
            lang={lang}
            t={t}
          />
        )}
      </main>

      {/* Respectful Footer */}
      <Footer lang={lang} t={t} />
    </div>
  );
}

export default App;
