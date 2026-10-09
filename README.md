# Makram Amri, portfolio

Static React site (EN / FR / AR, dark and light). No framework needed.

## Deploy on Vercel
1. Push this folder to a new GitHub repository.
2. On vercel.com choose **Add New, Project**, import the repository and click **Deploy**.
   The settings come from `vercel.json` (build `npm run build`, output `dist`).
3. Open the link, then add your own domain under **Settings, Domains** if you have one.

The link preview image (`og.jpg`) becomes an absolute URL automatically on Vercel.

## Run locally
```
npm install
npm run build      # writes ./dist
npx serve dist
```

## Where things are
- `src/template.json`: the page markup. `src/logic.js`: text (EN/FR/AR), assistant, terminal and behavior.
- `public/styles.css`: all styles and colors (see the `.t-dark` and `.t-light` lines at the top).
- `public/`: your photo, the NEXUS screenshots, the preview image and the icon.
- To add analytics, put a Plausible or Umami script tag in `build.mjs`. The page already sends events to either one.
