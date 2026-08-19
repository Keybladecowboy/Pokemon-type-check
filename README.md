# Type Check — Pokémon Type Effectiveness Calculator

A fast, offline-first web app for checking Pokémon type matchups — built for competitive players using the **Regulation Set M-B** ruleset (Pokémon Champions).

**[Live Demo →](https://keybladecowboy.github.io/Pokemon-type-check/)**

## Features

- **Dual-type calculator** — select any one or two types and instantly see double weaknesses, resistances, double resistances, and immunities
- **Name lookup** restricted to the ~230 species and 75 Mega Evolutions legal under Regulation M-B, including regional forms (Alolan, Galarian, Hisuian, Paldean) and format-exclusive Megas
- **Fully offline** — the entire dataset is bundled client-side, no API calls, no loading delays
- **Installable PWA** — add it to your phone's home screen for a native app-like experience with a custom icon and splash screen
- **Zero dependencies** — vanilla HTML, CSS, and JavaScript, no build step or framework required

## Tech Stack

- HTML / CSS / JavaScript (no frameworks)
- Web App Manifest + Service Worker for installability and offline caching
- Data hand-verified against current competitive ruleset documentation

## Running Locally

Just open `index.html` in any browser — no build process, no server required.

To test the installable/offline behavior, serve it locally instead:

```bash
npx serve .
```

Then open the local URL it prints in your browser.

## Project Structure

```
├── index.html       # App shell, styles, and logic
├── manifest.json     # PWA metadata (name, icons, theme)
├── sw.js             # Service worker for offline caching
├── icon-192.png       # App icon (small)
└── icon-512.png      # App icon (large)
```

## Why I Built This

I wanted a quick reference tool for competitive Pokémon team-building that didn't require memorizing the full type chart or scrolling through wikis mid-match — and to practice building a self-contained, installable web app from scratch: data modeling, offline-first architecture, and PWA packaging.

## License

MIT — feel free to fork and adapt.
