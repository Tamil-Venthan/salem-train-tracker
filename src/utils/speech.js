// Text-to-Speech Engine for Tamil and English Announcements

class SpeechAnnouncer {
  constructor() {
    this.synth = typeof window !== "undefined" ? window.speechSynthesis : null;
    this.isSpeaking = false;
    this.voices = [];
    if (this.synth) {
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  getVoice(lang = "ta") {
    if (!this.voices || this.voices.length === 0) {
      this.loadVoices();
    }
    if (lang === "ta") {
      // Look for Tamil voices: ta-IN, ta-LK, ta
      return this.voices.find(v => v.lang && (v.lang.startsWith("ta") || v.name.toLowerCase().includes("tamil"))) || null;
    }
    // Default English (India) or English
    return this.voices.find(v => v.lang && (v.lang.startsWith("en-IN") || v.lang.startsWith("en-GB") || v.lang.startsWith("en-US"))) || null;
  }

  speak(text, lang = "ta", onStart = () => {}, onEnd = () => {}) {
    if (!this.synth) {
      alert(text);
      return;
    }

    // Cancel existing speech
    this.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    const chosenVoice = this.getVoice(lang);

    if (chosenVoice) {
      utterance.voice = chosenVoice;
      utterance.lang = chosenVoice.lang;
    } else {
      utterance.lang = lang === "ta" ? "ta-IN" : "en-IN";
    }

    utterance.rate = 0.9; // Slightly slower, very clear for elders
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      this.isSpeaking = true;
      onStart();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      onEnd();
    };

    utterance.onerror = (e) => {
      console.warn("Speech synthesis error:", e);
      this.isSpeaking = false;
      onEnd();
    };

    try {
      this.synth.speak(utterance);
    } catch (err) {
      console.warn("Failed to speak:", err);
      onEnd();
    }
  }

  cancel() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
    }
  }
}

export const announcer = new SpeechAnnouncer();
