# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — run the Express server (`server.js`) on `PORT` or 3000.
- `npm run dev` — same, with `node --watch` auto-reload.
- `node list_models.js` — probe the Gemini API key and list available models (useful when the fallback chain in `generateWithFallback` starts 404ing).
- `node scraper.js` / `node affiliate_feed.js` — standalone demo scripts, not wired into the server. `scraper.js` uses CommonJS `require('puppeteer')` and requires a separate `npm install puppeteer` (not in `package.json`).

No test suite, no linter, no build step — the frontend is plain static files served directly by Express.

## Architecture

Single-process Node app that serves both the API and the static SPA from the same Express instance (`app.use(express.static(__dirname))` in `server.js`). Frontend talks to the API over same-origin `fetch` to `/api/*`.

**Request flow for the two AI endpoints:**
- `POST /api/recommend` (public) — takes a free-text `userMessage`, sends it to Gemini with a hardcoded plan catalog, expects strict JSON back (`{recommendedId, reason}`).
- `POST /api/recommend-smart` (JWT-gated) — loads the user profile from SQLite and asks Gemini for 1–2 picks returned as `{recommendationText: "<p>...HTML...</p>", recommendedPlanIds: [...]}`.

Both go through `generateWithFallback(prompt)`, which walks a model ladder (`gemini-flash-latest` → `gemini-flash-lite-latest` → `gemini-2.0-flash-lite` → `gemini-2.0-flash-001` → `gemini-2.0-flash` → `gemini-2.5-flash`) with 3 attempts per model and 2s/4s backoff on 429/503. When you touch prompts, remember the JSON-cleaning step strips ```json / ```html / ``` fences — the model sometimes emits them despite instructions.

**Plan switching simulation (`POST /api/switch-plan`):** Runs three mock "MVNE" services sequentially — `KYCService.verifyIdentity` → `LegalSignatureService.requestSignature` → `TelecomMVNE_API.createSubscription` — each with artificial `sleep` delays and input validation (DNI, IBAN, phone). On success inserts into `orders`. These classes are stubs in `server.js`; they are the intended extension points for real integrations.

**Auth:** bcrypt-hashed passwords in SQLite, JWT signed with `JWT_SECRET` (falls back to a hardcoded dev secret if missing), 7-day expiry, sent as `Authorization: Bearer <token>`. Three protected endpoints (`/api/profile`, `/api/my-orders`, `/api/recommend-smart`, `/api/switch-plan`) each re-implement the header-parse-and-verify dance — there is no middleware.

**Database:** SQLite file `users.db` auto-created on startup with `CREATE TABLE IF NOT EXISTS`. Schema changes to `users` or `orders` won't apply to an existing file — delete `users.db` during dev or add an explicit `ALTER TABLE`. The `users` table stores the full onboarding profile (DNI, IBAN, phone, address, current-plan metadata) because the MVNE mock services read from it at switch time.

**Plan catalog duplication:** The six plans are defined *three times* — in `server.js` (twice, inside `/api/recommend` and `/api/recommend-smart`) and in `app.js` (with extra UI fields like `operatorColor`, `operatorIcon`, `aiScore`). When adding/editing plans, update all three. The frontend uses `id` to cross-reference AI responses back to its richer local objects.

## Conventions

- ES modules on the server (`"type": "module"` in `package.json`) — use `import`, not `require`. The exception is `scraper.js`, which is CommonJS and standalone.
- UI strings and code comments are in Spanish; the frontend has an `es`/`en` i18n dictionary in `app.js` keyed by `data-i18n` / `data-i18n-ph` attributes. New user-facing strings need entries in both languages.
- `.env` holds `GEMINI_API_KEY` and optionally `JWT_SECRET` + `PORT`.
