import React, { useState } from "react";
import {
  Volume2,
  VolumeX,
  Share2,
  ExternalLink,
  Clock,
  MapPin,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Gauge
} from "lucide-react";
import { announcer } from "../utils/speech";

export function LiveStatusHero({
  train,
  status,
  lang,
  t,
  delayMinutes,
  onAdjustDelay
}) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!train || !status) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center text-amber-800">
          <AlertCircle className="w-8 h-8 mx-auto text-amber-600 mb-2" />
          <p className="font-semibold">{t.train_not_found}</p>
          <p className="text-sm text-amber-700 mt-1">{t.try_popular}</p>
        </div>
      </div>
    );
  }

  // Audio Speech Announcement Handler
  const handleVoiceAnnouncement = () => {
    if (isSpeaking) {
      announcer.cancel();
      setIsSpeaking(false);
      return;
    }

    let speechText = "";
    if (lang === "ta") {
      const trainTitle = `${train.nameTa} ரயில் எண் ${train.trainNo}.`;
      const locationPhrase = status.isHalted
        ? `${status.currentStation.nameTa} நிலையத்தில் நின்று கொண்டிருக்கிறது.`
        : `${status.currentStation.nameTa} கடந்து ${status.nextStation.nameTa} நோக்கி செல்கிறது.`;
      const nextStopPhrase = `அடுத்த நிறுத்தம் ${status.nextStation.nameTa}, வந்து சேரும் நேரம் ${status.etaNext}.`;
      const delayPhrase =
        status.delayMinutes > 5
          ? `ரயில் சுமார் ${status.delayMinutes} நிமிடங்கள் தாமதமாக செல்கிறது.`
          : `ரயில் சரியான நேரத்தில் செல்கிறது.`;
      speechText = `${trainTitle} ${locationPhrase} ${nextStopPhrase} ${delayPhrase}`;
    } else {
      const trainTitle = `${train.name} train number ${train.trainNo}.`;
      const locationPhrase = status.isHalted
        ? `Currently halted at ${status.currentStation.name}.`
        : `Departed ${status.currentStation.name} towards ${status.nextStation.name}.`;
      const nextStopPhrase = `Next stop is ${status.nextStation.name}, expected at ${status.etaNext}.`;
      const delayPhrase =
        status.delayMinutes > 5
          ? `Train is delayed by ${status.delayMinutes} minutes.`
          : `Train is running on time.`;
      speechText = `${trainTitle} ${locationPhrase} ${nextStopPhrase} ${delayPhrase}`;
    }

    announcer.speak(
      speechText,
      lang,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );
  };

  // 1-Click WhatsApp Share Link
  const handleWhatsAppShare = () => {
    const trainName = lang === "ta" ? train.nameTa : train.name;
    const currentLoc = lang === "ta" ? status.statusTextTa : status.statusTextEn;
    const nextStn = lang === "ta" ? status.nextStation.nameTa : status.nextStation.name;
    const currentUrl = `${window.location.origin}${window.location.pathname}?train=${train.trainNo}&lang=${lang}`;

    const messageTemplate = t.whatsapp_msg
      .replace("{trainName}", trainName)
      .replace("{trainNo}", train.trainNo)
      .replace("{currentLoc}", currentLoc)
      .replace("{nextStn}", nextStn)
      .replace("{url}", currentUrl);

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(messageTemplate)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Google Live Train Status External Link
  const handleGoogleSearch = () => {
    const query = `${train.trainNo} train running status`;
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-4">
      {/* Main Hero Card */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-md border border-slate-200 relative overflow-hidden">
        {/* Top Header: Train Info & Live Status Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-900 font-extrabold text-sm sm:text-base tracking-wider border border-blue-200">
                {train.trainNo}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                {train.type}
              </span>
              {train.directionLabel && (
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                  train.direction === "SA_TO_MAS"
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "bg-blue-50 text-blue-800 border-blue-200"
                }`}>
                  {lang === "ta" ? train.directionLabelTa : train.directionLabel}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              {lang === "ta" ? train.nameTa : train.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 mt-0.5">
              <span>{lang === "ta" ? train.fromTa : train.from}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span>{lang === "ta" ? train.toTa : train.to}</span>
            </p>
          </div>

          {/* Running Status Badge */}
          <div className="self-start sm:self-center">
            {status.delayMinutes > 5 ? (
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-300 shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="font-bold text-xs sm:text-sm">
                  {t.delayed.replace("{mins}", status.delayMinutes)}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-xs sm:text-sm">{t.on_time}</span>
              </div>
            )}
          </div>
        </div>

        {/* Big Highlight: Where is the train right now? (Elder-friendly) */}
        <div className="my-5 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 rounded-2xl p-4 sm:p-5 border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                {t.current_location}
              </span>
              <p className="text-lg sm:text-2xl font-extrabold text-blue-950 leading-snug">
                {lang === "ta" ? status.statusTextTa : status.statusTextEn}
              </p>
              {status.speedKmh > 0 && (
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 font-medium pt-1">
                  <span className="flex items-center gap-1 text-blue-800">
                    <Gauge className="w-4 h-4 text-blue-600" />
                    <span>
                      {t.speed}: <strong>{status.speedKmh} {t.kmh}</strong>
                    </span>
                  </span>
                  <span>•</span>
                  <span>
                    {t.distance_left}: <strong>{status.distanceRemaining} {t.km}</strong>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Milestone Cards: Next Station & Final Destination */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {/* Next Station */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              {t.next_stop}
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900">
              {lang === "ta" ? status.nextStation.nameTa : status.nextStation.name}
            </p>
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>{t.expected}: <strong className="text-slate-900">{status.etaNext}</strong></span>
              </span>
              {status.nextStation.platform && (
                <span className="px-2 py-0.5 rounded-md bg-slate-200 text-slate-800 font-semibold text-xs">
                  {t.platform} {status.nextStation.platform}
                </span>
              )}
            </div>
          </div>

          {/* Final Destination */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              {t.final_destination}
            </span>
            <p className="text-base sm:text-lg font-bold text-slate-900">
              {lang === "ta" ? train.stations[train.stations.length - 1].nameTa : train.stations[train.stations.length - 1].name}
            </p>
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 mt-2 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.expected_arrival}: <strong className="text-slate-900">{status.etaDestination}</strong></span>
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1 mb-5">
          <div className="flex justify-between text-xs font-semibold text-slate-500">
            <span>{lang === "ta" ? train.fromTa : train.from}</span>
            <span>{status.progressPercent}%</span>
            <span>{lang === "ta" ? train.toTa : train.to}</span>
          </div>
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
              style={{ width: `${status.progressPercent}%` }}
            />
          </div>
        </div>

        {/* Action Buttons (Elder-Friendly Touch Targets >= 48px) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
          {/* Audio Button */}
          <button
            onClick={handleVoiceAnnouncement}
            className={`min-h-[48px] px-4 py-3 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer ${
              isSpeaking
                ? "bg-amber-500 text-white animate-pulse"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-5 h-5" />
                <span>{t.speaking}</span>
              </>
            ) : (
              <>
                <Volume2 className="w-5 h-5 text-yellow-300" />
                <span>{t.listen_voice}</span>
              </>
            )}
          </button>

          {/* Share on WhatsApp */}
          <button
            onClick={handleWhatsAppShare}
            className="min-h-[48px] px-4 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <Share2 className="w-5 h-5" />
            <span>{t.share_whatsapp}</span>
          </button>

          {/* Check Live on Google */}
          <button
            onClick={handleGoogleSearch}
            className="min-h-[48px] px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all border border-slate-300 active:scale-95 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4 text-slate-600" />
            <span>{t.check_google}</span>
          </button>
        </div>

        {/* Delay Adjustment Bar for Accuracy */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          <span className="font-medium">
            {lang === "ta" ? "தாமதத்தை சரிசெய்ய:" : "Adjust Live Delay:"}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onAdjustDelay(0)}
              className={`px-2.5 py-1 rounded-lg border text-xs font-semibold transition-all ${
                delayMinutes === 0
                  ? "bg-slate-800 text-white border-slate-800"
                  : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
              }`}
            >
              {lang === "ta" ? "நேரத்திற்கு (0m)" : "On-Time (0m)"}
            </button>
            <button
              onClick={() => onAdjustDelay(delayMinutes + 5)}
              className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-semibold text-xs active:scale-95"
            >
              +5 min
            </button>
            <button
              onClick={() => onAdjustDelay(delayMinutes + 15)}
              className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-semibold text-xs active:scale-95"
            >
              +15 min
            </button>
            {delayMinutes > 0 && (
              <button
                onClick={() => onAdjustDelay(Math.max(0, delayMinutes - 5))}
                className="px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-semibold text-xs"
              >
                -5 min
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
