import React, { useState, useMemo } from "react";
import { Search, X, TrainTrack, ArrowRight } from "lucide-react";
import { TRAINS_DATA } from "../data/trains";

export function TrainSelector({ currentTrain, onSelectTrain, lang, t }) {
  const [searchInput, setSearchInput] = useState("");
  const [directionFilter, setDirectionFilter] = useState("ALL"); // 'ALL' | 'SA_TO_MAS' | 'MAS_TO_SA'

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    onSelectTrain(searchInput.trim());
  };

  // Filter trains according to chosen direction
  const filteredTrains = useMemo(() => {
    if (directionFilter === "ALL") return TRAINS_DATA;
    return TRAINS_DATA.filter((tr) => tr.direction === directionFilter);
  }, [directionFilter]);

  return (
    <section className="bg-white border-b border-slate-200 px-4 py-3.5 shadow-xs">
      <div className="max-w-4xl mx-auto space-y-3">
        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={t.search_placeholder}
              className="w-full pl-10 pr-9 py-2.5 sm:py-3 text-sm sm:text-base border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-blue-600 bg-slate-50 transition-all font-medium text-slate-900 placeholder:text-slate-400"
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => setSearchInput("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm sm:text-base rounded-xl transition-all shadow-xs active:scale-95 flex items-center gap-1.5 shrink-0"
          >
            <span>{t.search_btn}</span>
          </button>
        </form>

        {/* Direction Filter Tabs for Amma */}
        <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
          <span className="flex items-center gap-1 text-xs font-bold text-slate-600">
            <TrainTrack className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.popular_trains}</span>
          </span>

          {/* Direction toggles */}
          <div className="flex gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200">
            <button
              onClick={() => setDirectionFilter("ALL")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                directionFilter === "ALL"
                  ? "bg-white text-blue-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {t.all_routes}
            </button>
            <button
              onClick={() => setDirectionFilter("SA_TO_MAS")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                directionFilter === "SA_TO_MAS"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-emerald-800 hover:text-emerald-950"
              }`}
            >
              <span>{t.salem_to_chennai}</span>
            </button>
            <button
              onClick={() => setDirectionFilter("MAS_TO_SA")}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                directionFilter === "MAS_TO_SA"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-blue-800 hover:text-blue-950"
              }`}
            >
              <span>{t.chennai_to_salem}</span>
            </button>
          </div>
        </div>

        {/* One-Tap Train Selection Chips (Horizontal Touch Scroll) */}
        <div className="flex gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {filteredTrains.map((tr) => {
            const isSelected = currentTrain?.trainNo === tr.trainNo;
            const isSalemToChennai = tr.direction === "SA_TO_MAS";

            return (
              <button
                key={tr.trainNo}
                onClick={() => {
                  setSearchInput("");
                  onSelectTrain(tr.trainNo);
                }}
                className={`shrink-0 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all border flex flex-col items-start gap-1 active:scale-95 cursor-pointer text-left ${
                  isSelected
                    ? "bg-blue-900 text-white border-blue-900 shadow-md ring-2 ring-blue-500/40"
                    : "bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-900 border-slate-200"
                }`}
              >
                <div className="flex items-center gap-1.5 w-full">
                  <span
                    className={`font-black tracking-wide text-xs px-1.5 py-0.5 rounded-md ${
                      isSelected
                        ? "bg-yellow-400 text-blue-950"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {tr.trainNo}
                  </span>
                  <span className="font-bold text-xs truncate max-w-[130px]">
                    {lang === "ta" ? tr.nameTa : tr.name}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-medium opacity-85">
                  <span
                    className={`px-1.5 py-0.2 rounded-sm text-[10px] font-bold ${
                      isSalemToChennai
                        ? isSelected
                          ? "bg-emerald-500 text-white"
                          : "bg-emerald-100 text-emerald-800"
                        : isSelected
                        ? "bg-blue-500 text-white"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {lang === "ta" ? tr.directionLabelTa : tr.directionLabel}
                  </span>
                  <span>• {tr.departureTime}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
