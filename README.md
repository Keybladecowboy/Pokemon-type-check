# Pokémon Champions Companion App

A fast, offline-first web app for competitive Pokémon Champions players — type matchups, an open-team-sheet annotator, and a searchable Pokédex, all built around the **Regulation Set M-B** ruleset.

**[Live Demo →](https://keybladecowboy.github.io/Pokemon-type-check/)**

## Features

**Type Check**
- Dual-type calculator — select any one or two types and instantly see double weaknesses, resistances, double resistances, and immunities
- Name lookup restricted to the ~230 species and 75 Mega Evolutions legal under Regulation M-B, including regional forms (Alolan, Galarian, Hisuian, Paldean) and format-exclusive Megas
- Fully offline — the entire dataset is bundled client-side, no API calls, no loading delays

**Nature Tag**
- Snap or upload a photo of an open team sheet and tag each Pokémon with details the in-game team screen doesn't show — held item, Tera type, and more
- Export the annotated image to share with an opponent ahead of a match

**Champions Dex**
- Live-connected Pokédex scoped to the Regulation M-B legal roster — sprites, abilities, and movesets filtered to what's actually usable in Champions (not just mainline-game legality)
- Visual connectivity indicator so it's always clear whether you're looking at live data

**Shared across the app**
- Installable PWA — add it to your phone's home screen for a native app-like experience with a custom icon and splash screen
- Zero build dependencies — vanilla HTML, CSS, and JavaScript throughout

## Tech Stack

- HTML / CSS / JavaScript (no frameworks)
- Web App Manifest + Service Worker for installability and offline caching
- Live competitive data sourced from Pokémon Showdown's public data endpoints
- Roster and type data hand-verified against current competitive ruleset documentation

## Running Locally

Open `index.html` in any browser — no build process required for the core Type Check tool.

To test installable/offline behavior and the Dex's live data features, serve it locally instead:

```bash
npx serve .
```

Then open the local URL it prints in your browser.

## Project Structure

```
├── index.html         # Type Check — dual-type calculator
├── Nature_Tag.html    # Nature Tag — open team sheet annotator
├── Dex.html           # Champions Dex — live Pokédex lookup
├── roster.js          # Shared Regulation M-B roster data
├── manifest.json      # PWA metadata (name, icons, theme)
├── sw.js              # Service worker for offline caching
├── icon-192.png       # App icon (small)
└── icon-512.png       # App icon (large)
```

## Why I Built This

I wanted a single companion tool for competitive Pokémon team-building and match prep — type matchups, team sheet annotation, and moveset lookups — without juggling multiple wikis and calculators mid-tournament. It's also been an ongoing project for practicing offline-first architecture, PWA packaging, and working with live competitive data sources.

## License

All rights reserved. This source code is shared publicly for portfolio and demonstration purposes only. No permission is granted to copy, modify, distribute, or otherwise reuse this code without explicit written consent from the author.
