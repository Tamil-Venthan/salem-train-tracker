import React from "react";
import { Train, Globe, RefreshCw } from "lucide-react";

export function Navbar({ lang, setLang, t, onRefresh, isRefreshing }) {
  const toggleLanguage = () => {
    setLang(lang === "ta" ? "en" : "ta");
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md border-b border-blue-800">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center shadow-inner border border-blue-700">
            <Train className="w-6 h-6 text-yellow-400" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-tight">
              {t.app_title}
            </h1>
            <p className="text-xs text-blue-200 hidden sm:block">
              {t.app_subtitle}
            </p>
          </div>
        </div>

        {/* Controls: Refresh & Language Switch */}
        <div className="flex items-center gap-2">
          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            title={t.refresh}
            aria-label={t.refresh}
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg bg-blue-800/80 hover:bg-blue-700 active:scale-95 transition-all text-blue-100 flex items-center gap-1.5 text-xs sm:text-sm font-medium border border-blue-700"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? "animate-spin text-yellow-400" : ""}`} />
            <span className="hidden sm:inline">{t.refresh}</span>
          </button>

          {/* Language Toggle Button (High Contrast for Elders) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95 cursor-pointer border border-yellow-300"
          >
            <Globe className="w-4 h-4 text-blue-900" />
            <span>{t.lang_toggle}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
