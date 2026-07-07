# Kipper Cards

A 39-card Kipper oracle reading app (Fin de Siècle deck numbering). Vanilla HTML/CSS/JS, no build step, installable as a PWA, works fully offline once loaded.

## Files

- `data.js` — deck data only (all 39 cards + neighbour combination rules). Edit meanings here. Grand Tableau uses only ids 1-36 (see `reading.js`).
- `reading.js` — reading logic only (seeded shuffle, spreads, Grand Tableau interpretation). No DOM.
- `app.js` — UI rendering and routing. Calls into `reading.js`, never duplicates its logic.
- `index.html` / `about.html` — pages.
- `styles.css` — brand styles: dark cosmic gradient background, twinkling star field, gold (#c9a84c/#e8c96a) accents, Cinzel Decorative + Cinzel + Cormorant Garamond — matches witch-oracle / tarot-reader, not Card-Check.
- `manifest.json`, `service-worker.js`, `icons/` — PWA install + offline support.

## Deploy

GitHub Pages, main branch, root. `start_url` and `scope` in `manifest.json` are both `/`, which requires a **custom domain deploy** (not a `/repo-name/` path) — if the custom domain isn't live yet, the app will 404 on install until the CNAME is added.

## Adding a combination rule

In `data.js`, add a key to `KIPPER_COMBINATIONS` as `"lowerId_higherId": "text"`. Pairs not listed fall back to an auto-generated line built from each card's own meaning, so nothing is ever left blank.

## Access control (future)

Not built in v1. If gating is added later, wrap calls into `KipperReading` (e.g. `drawDaily`, `drawThreeCard`) from `app.js` with a check — the reading logic itself shouldn't need to change.
