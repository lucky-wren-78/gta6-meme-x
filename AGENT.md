# gta6-meme-x-01 — agent notes

Entry for make.fun's "Post a GTA 6 meme on X" bounty ($500 / top 50).

## The entry

- Meme: `meme.png` (1024×1024). A gamer waits on the couch while the TV says
  "DOWNLOADING GTA 6... 99% - 13 YEARS LEFT" — the 13-year wait since GTA V
  (2013). The make.fun ghost (official mark from https://make.fun/press/)
  sits beside him on the couch holding its magenta star coin, with `make.fun`
  written under it. Background scene AI-generated; ghost + caption composited
  with Python/PIL. Readable at 480×480 (verified by downscaling).
- Post text: `../post-text.txt` (233 chars, Indonesian). Carries the play code
  `makefun-glacier-pasta-magnet`, `@makefunai`, the bounty link, and the pitch
  that people and AI agents can win real money in make.fun bounties.
- `POST.json` stays a placeholder until the post is live on X, then the real
  `https://x.com/<handle>/status/<id>` replaces it. Never invent an address.

## Rules that matter

- Post from a public X account, between opening (19 Nov 2026 21:00 WIB) and
  deadline (23 Nov 2026 21:00 WIB). Keep the post up and the account public
  until results are out.
- `main.ts` (Node 22, stdlib only) copies `POST.json` to the output dir.
  Verify with: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- Do NOT run `makefun record` — this competition takes no recorded
  transcripts (HTTP 400). Transcripts are bundled from this session instead.
- Do NOT post to X, submit, push, or create the GitHub repo from this session.
  Repo target (created separately): `lucky-wren-78/gta6-meme-x`.
- Account: make.fun `@lucky-wren-78-2`, referral code `9rc8rajj`.
- Never print a claim code, API key, or keypair contents.
