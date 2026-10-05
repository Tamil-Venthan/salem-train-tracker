import React from "react";
import { CheckCircle2, Clock, MapPin, Train } from "lucide-react";

export function RouteTimeline({ train, status, lang, t }) {
  if (!train || !status || !status.timeline) return null;

  const { timeline, passedCodes, currentStation, nextStation, isHalted } = status;

  return (
    <div className="max-w-4xl mx-auto px-4 py-2">
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
              <Train className="w-4 h-4" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {t.all_stops}
            </h3>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            {t.stops_count.replace("{count}", timeline.length)}
          </span>
        </div>

        {/* Station Timeline List */}
        <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
          {timeline.map((station, index) => {
            const isPassed = passedCodes.includes(station.code);
            const isCurrent = currentStation.code === station.code;
            const isNext = nextStation.code === station.code && !isCurrent;
            const isFirst = index === 0;
            const isLast = index === timeline.length - 1;

            return (
              <div key={station.code} className="relative group">
                {/* Station Marker Icon */}
                <div
                  className={`absolute -left-6 sm:-left-8 top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all ${
                    isCurrent
                      ? "bg-blue-600 text-white shadow-md ring-4 ring-blue-100 animate-train-live z-10"
                      : isPassed
                      ? "bg-emerald-500 text-white z-0"
                      : isNext
                      ? "bg-amber-500 text-white ring-2 ring-amber-100 z-10"
                      : "bg-white border-2 border-slate-300 text-slate-400 z-0"
                  }`}
                >
                  {isCurrent ? (
                    <Train className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300" />
                  ) : isPassed ? (
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : isNext ? (
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-300" />
                  )}
                </div>

                {/* Station Card Content */}
                <div
                  className={`p-3.5 sm:p-4 rounded-2xl transition-all border ${
                    isCurrent
                      ? "bg-blue-50/80 border-blue-200 shadow-xs"
                      : isNext
                      ? "bg-amber-50/60 border-amber-200"
                      : "bg-white hover:bg-slate-50 border-slate-100"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    {/* Station Name & Badges */}
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-extrabold text-base sm:text-lg text-slate-900">
                          {lang === "ta" ? station.nameTa : station.name}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                          {station.code}
                        </span>
                        {isCurrent && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-600 text-white animate-pulse">
                            {isHalted
                              ? lang === "ta" ? "நிற்கிறது" : "Halted"
                              : lang === "ta" ? "இங்கு உள்ளது" : "Current"}
                          </span>
                        )}
                        {isNext && (
                          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white">
                            {t.approaching}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">
                        {station.distance} {t.km}
                        {station.platform ? ` • ${t.platform} ${station.platform}` : ""}
                      </p>
                    </div>

                    {/* Timings */}
                    <div className="text-left sm:text-right mt-1 sm:mt-0 space-y-0.5">
                      <div className="flex items-center gap-1.5 sm:justify-end text-xs sm:text-sm font-bold text-slate-800">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>
                          {isFirst
                            ? `${station.expectedDepText} (${lang === "ta" ? "புறப்பாடு" : "Dep"})`
                            : isLast
                            ? `${station.expectedArrText} (${lang === "ta" ? "வருகை" : "Arr"})`
                            : `${station.expectedArrText}`}
                        </span>
                      </div>
                      {!isFirst && !isLast && (
                        <div className="text-xs text-slate-500">
                          {t.scheduled}: {station.arr}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
