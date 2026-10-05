import React, { useState } from "react";
import { Search, X, TrainTrack } from "lucide-react";
import { TRAINS_DATA } from "../data/trains";

export function TrainSelector({ currentTrain, onSelectTrain, lang, t }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    onSelectTrain(searchInput.trim());
  };

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

        {/* Quick Selection Chips - Mobile Touch Friendly */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <TrainTrack className="w-3.5 h-3.5 text-blue-600" />
              {t.popular_trains}
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 pt-0.5 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {TRAINS_DATA.map((tr) => {
              const isSelected = currentTrain?.trainNo === tr.trainNo;
              return (
                <button
                  key={tr.trainNo}
                  onClick={() => {
                    setSearchInput("");
                    onSelectTrain(tr.trainNo);
                  }}
                  className={`shrink-0 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border flex items-center gap-2 active:scale-95 cursor-pointer ${
                    isSelected
                      ? "bg-blue-900 text-white border-blue-900 shadow-sm ring-2 ring-blue-600/30"
                      : "bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-800 border-slate-200"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-yellow-400" : "bg-blue-500"}`} />
                  <span className="font-bold text-yellow-500">{tr.trainNo}</span>
                  <span>{lang === "ta" ? tr.nameTa.split(" ")[0] : tr.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
