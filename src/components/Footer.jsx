import React from "react";
import { Heart, Train, ShieldCheck } from "lucide-react";

export function Footer({ lang, t }) {
  return (
    <footer className="mt-8 border-t border-slate-200 bg-white py-6 px-4 text-center text-slate-500 text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-1.5 font-semibold text-slate-700">
          <Train className="w-4 h-4 text-blue-700" />
          <span>{t.app_title}</span>
        </div>

        <p className="flex items-center justify-center gap-1 text-slate-600 font-medium">
          <span>{t.mother_friendly_note}</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
        </p>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>{t.free_hosted}</span>
        </div>

        <p className="text-[11px] text-slate-400 max-w-md mx-auto">
          {lang === "ta"
            ? "ரயில் இயங்கும் நேரம் மற்றும் அட்டவணை இந்திய ரயில்வே (NTES/IRCTC) பொதுத் தகவல்களின் அடிப்படையில் கணக்கிடப்படுகிறது."
            : "Train running status and timetables are estimated based on Indian Railways (NTES/IRCTC) public schedules."}
        </p>
      </div>
    </footer>
  );
}
