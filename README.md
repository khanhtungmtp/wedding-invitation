# Wedding Invitation — Minh Anh & Hữu Quốc

Premium, mobile‑first React wedding invitation built with **Vite**, **TailwindCSS**, **Framer Motion**, **Swiper**, **react-hot-toast**, and **dayjs**.

## Quick start

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Configure GitHub Pages

This repo assumes the site is served from `/wedding-invitation/` (matching the repository name).

- Update `vite.config.js` if your GitHub repo name differs (`repoBase`).
- Update `package.json` `"homepage"` to your GitHub Pages URL.

Deploy:

```bash
npm run deploy
```

### Pages settings

GitHub → **Settings → Pages**:

- Source: **Deploy from a branch**
- Branch: **`gh-pages`** / **`/(root)`**

Your site URL will look like:

`https://<username>.github.io/wedding-invitation/`

## Environment variables

Create `.env.local` (optional):

```bash
cp .env.example .env.local
```

Set:

```bash
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/<YOUR_DEPLOYMENT_ID>/exec
```

If unset, RSVP submits in **demo mode** (simulated success) and wishes load **demo content**.

## Google Sheets + Apps Script setup

### 1) Create the spreadsheet

Create a Google Sheet with a tab named **`RSVP`** and this header row:

| Timestamp | FullName | Phone | Attending | GuestCount | Message |

### 2) Install the script

Open **Extensions → Apps Script**, paste `google-apps-script/Code.gs`, then replace:

- `YOUR_SPREADSHEET_ID` with your Sheet ID from the URL:

`https://docs.google.com/spreadsheets/d/<SHEET_ID>/edit`

### 3) Deploy as Web App

Apps Script → **Deploy → New deployment**

- Type: **Web app**
- Execute as: **Me**
- Who has access: **Anyone**

Copy the Web App URL into `VITE_GOOGLE_SCRIPT_URL`.

### API contract

**POST** (RSVP):

Content‑Type: `application/json`

```json
{
  "fullName": "Nguyen Van A",
  "phone": "0901234567",
  "attending": "yes",
  "guestCount": 2,
  "message": "Chúc mừng hai bạn!"
}
```

**GET** (wishes):

`GET <WEB_APP_URL>?action=wishes`

Returns:

```json
{
  "ok": true,
  "wishes": [
    { "id": "sheet-row-12", "name": "Lan", "message": "...", "createdAt": "2026-05-03T..." }
  ]
}
```

Wishes are derived from RSVP rows where **`Message`** is non‑empty.

## Content customization

Most copy + imagery lives in:

- `src/data/wedding.js`

Placeholder assets:

- Hero/gallery photos are remote placeholder URLs (replace with your photos).
- QR demo lives at `src/assets/qr-placeholder.svg`.
- Demo audio URL lives in `src/data/wedding.js` (`MUSIC_URL`).

## Tech notes

- Mobile safe‑areas use `env(safe-area-inset-*)`.
- Gallery uses Swiper zoom + keyboard for lightbox UX.
- Floating petals avoid heavy blur except occasional subtle blur.

## Scripts

| Script      | Purpose                         |
| ----------- | ------------------------------- |
| `npm run dev` | Local development               |
| `npm run build` | Production bundle             |
| `npm run preview` | Preview production build locally |
| `npm run deploy` | Build + publish `dist/` to `gh-pages` |
