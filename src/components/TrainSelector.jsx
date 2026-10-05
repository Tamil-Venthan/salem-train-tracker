import React, { useState, useMemo, useRef, useEffect } from "react";
import { Search, X, TrainTrack, ChevronLeft, ChevronRight } from "lucide-react";
import { TRAINS_DATA } from "../data/trains";

export function TrainSelector({ currentTrain, onSelectTrain, lang, t }) {
  const [searchInput, setSearchInput] = useState("");
  const [directionFilter, setDirectionFilter] = useState("ALL"); // 'ALL' | 'SA_TO_MAS' | 'MAS_TO_SA'
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

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

  // Check scroll positions to show/hide arrow buttons
  const checkScrollBounds = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScrollBounds();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScrollBounds);
    window.addEventListener("resize", checkScrollBounds);

    // Mouse wheel horizontal scroll listener (non-passive to allow smooth horizontal tilt)
    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.2;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("scroll", checkScrollBounds);
      window.removeEventListener("resize", checkScrollBounds);
      el.removeEventListener("wheel", onWheel);
    };
  }, [filteredTrains]);

  // Mouse Drag-to-Scroll Handlers (Click-and-Drag)
  const handleMouseDown = (e) => {
    // Only primary mouse button (left click)
    if (e.button !== 0 || !scrollRef.current) return;
    isDownRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
    scrollRef.current.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.4; // Scroll speed multiplier
    if (Math.abs(walk) > 4) {
      hasDraggedRef.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
    checkScrollBounds();
  };

  const handleMouseUpOrLeave = () => {
    isDownRef.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grab";
      scrollRef.current.style.removeProperty("user-select");
    }
  };

  // Scroll with Arrow Buttons
  const scrollByDirection = (direction) => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -280 : 280;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-white border-b border-slate-200 px-4 py-3.5 shadow-xs select-none">
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm sm:text-base rounded-xl transition-all shadow-xs active:scale-95 flex items-center gap-1.5 shrink-0 cursor-pointer"
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

        {/* One-Tap Train Selection Chips (Mouse Drag + Touch + Scroll Arrows) */}
        <div className="relative group">
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scrollByDirection("left")}
              className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 text-slate-700 shadow-md border border-slate-200 items-center justify-center hover:bg-blue-50 hover:text-blue-900 active:scale-90 transition-all cursor-pointer"
              title="Scroll left"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => scrollByDirection("right")}
              className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 text-slate-700 shadow-md border border-slate-200 items-center justify-center hover:bg-blue-50 hover:text-blue-900 active:scale-90 transition-all cursor-pointer"
              title="Scroll right"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className="flex gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 cursor-grab active:cursor-grabbing select-none"
          >
            {filteredTrains.map((tr) => {
              const isSelected = currentTrain?.trainNo === tr.trainNo;
              const isSalemToChennai = tr.direction === "SA_TO_MAS";

              return (
                <button
                  key={tr.trainNo}
                  type="button"
                  onClick={(e) => {
                    // Prevent accidental selection when mouse dragging
                    if (hasDraggedRef.current) {
                      e.preventDefault();
                      return;
                    }
                    setSearchInput("");
                    onSelectTrain(tr.trainNo);
                  }}
                  className={`shrink-0 px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all border flex flex-col items-start gap-1 cursor-pointer text-left select-none ${
                    isSelected
                      ? "bg-blue-900 text-white border-blue-900 shadow-md ring-2 ring-blue-500/40 scale-[1.02]"
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
      </div>
    </section>
  );
}
