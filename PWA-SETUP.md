# Anara Books: install as an app (PWA)

This small "launcher" gives Anara Books its own **home-screen icon (your logo)** and opens it **full screen**, like a normal app. It's hosted free on GitHub Pages. Your data stays in your Google Sheet and Drive; the launcher holds none of it.

## Before you start
- Anara Books is already set up and deployed (see `SETUP.md`).
- **Update the app first.** Paste the latest `Code.gs` and `Index.html` into Apps Script, then go to **Deploy → Manage deployments → ✎ Edit → New version → Deploy**. This version lets the launcher display the app and tells the launcher when the app has loaded.
- Copy your **web app URL** (it ends in `/exec`).

## 1. Put your link in the launcher
Open **`config.js`** and replace `PASTE_YOUR_WEB_APP_URL_HERE` with your `/exec` link. Leave `MODE: 'auto'` as it is.

## 2. Put it on GitHub Pages (free, about 10 minutes, easiest on a computer)
1. Create a free account at **github.com**.
2. Click **＋ → New repository**. Name it `anara-books`, choose **Public**, tick **Add a README file**, then click **Create repository**.
3. Click **Add file → Upload files** and select **all the files** from this folder (no sub-folders): `index.html`, `config.js`, `manifest.webmanifest`, `sw.js` and the five `.png` images. Click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, set Branch to **main** and the folder to **/ (root)**, then click **Save**.
5. After 1–2 minutes the page shows your address, e.g. `https://yourname.github.io/anara-books/`. That's the launcher link.

*A public repository is fine: it only holds the launcher, the logo and your app link. Opening the app still requires a Google sign-in and a place on your Users list.*

## 3. Install it on each phone
Each person must be signed in to their Google account in the same browser they install from.
- **Android (Chrome):** open the launcher link and tap **Install on this phone** (or Chrome menu ⋮ → **Add to Home screen / Install app**).
- **iPhone / iPad (Safari):** open the launcher link, tap **Share** → **Add to Home Screen** → **Add**.
- **Computer (Chrome / Edge):** click the install icon in the address bar.

The Anara icon then appears on the home screen and opens the app full screen.

## How it behaves
- **Android and computers:** the app opens full screen inside the launcher.
- **iPhone / iPad:** Apple often blocks Google sign-in inside another page, so in `auto` mode the icon opens the app directly. You may see a thin address bar at the top.
- **If the app ever doesn't load** (for example, Google sign-in is blocked on that phone), the launcher shows **"Open Anara Books directly"** after a few seconds. Tapping it remembers that choice on that phone.
- **Offline:** the icon still opens and says you're offline. Records need internet, because they live in your Google Sheet.

## Changing things later
- **New app link** (e.g. a new deployment): edit `config.js` on GitHub (click the file → ✎ → paste → **Commit changes**). Phones pick it up the next time they open the app.
- **Code updates in Apps Script:** deploy a new *version* of the same deployment, and the link stays the same.
- **Optional own domain** (e.g. `app.anara.com.my`): add it under GitHub **Settings → Pages → Custom domain**. Domains cost roughly RM50–100 a year; the free `github.io` address works fine.

## A note on security
The app now allows itself to be shown inside another page (needed for the full-screen launcher). It still only works for signed-in Google accounts on your Users list, so nobody else can see data. Only share the launcher link with your staff.

## Quick add icon: "Anara Catat"
A second home-screen icon that opens the app straight on the **New record** form, for recording on the move. Same logo with a gold **+** badge (files `quick-*.png` next to the other icons; the page itself is in the `quick` folder).
- Link: your launcher address + `quick/`, e.g. `https://anarahss-spec.github.io/anara-books/quick/`
- Install it the same way as the main icon (open the link → Install / Add to Home Screen). Phones can have both icons.
- It needs a little signal to **open**. Once open, records you save are **kept on the phone** and sent by themselves when the signal is back. Nothing is sent twice, even if the signal drops mid-send.
- Needs the Apps Script update from 21 Nov 2026 or later (it understands `?quick=1`). With an older app version the icon just opens the normal app.
- "Open the full app" at the bottom switches to the main Anara Books app.
