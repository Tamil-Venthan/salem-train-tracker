# 🚆 ரயில் நேரலை கண்காணிப்பு (Train Live Tracking Website)

An elder-friendly, bilingual (தமிழ் 🇮🇳 & English 🇬🇧) train tracking website tailored for a mother to easily check where her child's train is in real-time, whether it is on time or delayed, the next station, and expected arrival time.

---

## ✨ Features (சிறப்பம்சங்கள்)

1. **எளிமையான தமிழ் இடைமுகம் (Mother-Friendly Tamil UI)**:
   - Defaults to natural, respectful Tamil (*"வைகை எக்ஸ்பிரஸ் ரயிலில் இருக்கிறார்"*, *"அடுத்த நிறுத்தம்: மணப்பாறை"*).
   - Instant language toggle `[தமிழ் | English]`.
   - Giant, high-contrast text and buttons designed for elderly eyes and smartphones.
2. **🔊 தமிழில் கேளுங்கள் (Audio Voice Announcement)**:
   - One tap on the audio button speaks the exact train location, next stop, and delay aloud in Tamil using browser voice synthesis.
3. **💬 அம்மாவுக்கு வாட்ஸ்அப்பில் அனுப்ப (1-Tap WhatsApp Share)**:
   - Sends a pre-typed caring Tamil message to your mother with a direct link:
     > *"அம்மா, நான் வைகை எக்ஸ்பிரஸ் (12636) ரயிலில் இருக்கிறேன். ரயில் இப்போது திருச்சி தாண்டி செல்கிறது. அடுத்த நிறுத்தம் திண்டுக்கல். நேரலை நிலையை பார்க்க: https://..."*
4. **விரைவு ரயில்கள் (One-Tap Popular Trains)**:
   - Big buttons for popular Tamil Nadu & Indian trains so Amma doesn't even have to type:
     - 🚆 வைகை எக்ஸ்பிரஸ் (12636 / 12635)
     - 🚆 பாண்டியன் எக்ஸ்பிரஸ் (12638 / 12637)
     - 🚆 பல்லவன் எக்ஸ்பிரஸ் (12606)
     - 🚆 நெல்லை எக்ஸ்பிரஸ் (12632)
     - 🚆 ராக்போர்ட் எக்ஸ்பிரஸ் (12654)
     - 🚆 கோவை எக்ஸ்பிரஸ் (12676)
     - 🚆 வந்தே பாரத் (20608)
     - 🚆 கன்னியாகுமரி எக்ஸ்பிரஸ் (12634)
     - 🚆 சேரன் எக்ஸ்பிரஸ் (12674)
     - *Plus search bar for ANY 5-digit Indian Railways train number.*
5. **🗺️ நேரடி வரைபடம் (Free OpenStreetMap)**:
   - 100% free interactive Leaflet map showing the railway track, station stops, and an animated pulsating train marker.
6. **🌐 கூகுள் நேரலை இணைப்பு (Google Live Status)**:
   - 1-tap button to verify official Google/NTES satellite live train running status.
7. **மொபைல் திரை உகப்பாக்கம் (Mobile-First)**:
   - Designed primarily for mobile phones with quick tab views (`அனைத்தும்`, `நிறுத்தங்கள்`, `வரைபடம்`).

---

## 🚀 How to Run Locally (கணினியில் இயக்க)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Test with specific train in Tamil via URL:**
   - `http://localhost:5173/?train=12636&lang=ta` (Vaigai Express in Tamil)
   - `http://localhost:5173/?train=12638&lang=ta` (Pandian Express in Tamil)

---

## 🌐 100% Free Hosting Deployment Guide (இலவசமாக இணையத்தில் வெளியிட)

### Option 1: Deploy to Vercel (மிகவும் எளிதான முறை - Recommended)

Vercel provides 100% free hosting with custom domain and automatic HTTPS SSL.

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Amma Train Tracker"
   git branch -M main
   # Create a free repository on https://github.com/new and push:
   git remote add origin https://github.com/YOUR_USERNAME/train-tracker.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to **[vercel.com](https://vercel.com)** and sign in with GitHub (100% free).
   - Click **"Add New Project"** and select your `train-tracker` repository.
   - Framework preset will automatically be detected as **Vite**.
   - Click **"Deploy"**.
   - In 30 seconds, you will receive a free live URL: e.g., `https://amma-train-tracker.vercel.app`!

3. **Or deploy instantly using Vercel CLI (no GitHub needed):**
   ```bash
   npx vercel
   ```

---

### Option 2: Deploy to Netlify (Free)

1. Go to **[netlify.com](https://www.netlify.com)**.
2. Drag and drop the `dist` folder created by `npm run build`, OR connect your GitHub repository.
3. Your site will be live instantly with a free `.netlify.app` domain.

---

## 📱 How to Share with Amma

Once hosted (for example at `https://my-train.vercel.app`), simply share this link with your mother on WhatsApp:

```
https://my-train.vercel.app/?train=12636&lang=ta
```

When she clicks it on her phone:
- It opens directly in **Tamil** without requiring any typing or English menus.
- She can see where the train is right now, the next stop, and tap **"தமிழில் கேளுங்கள்"** to hear the status spoken aloud.
