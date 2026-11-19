// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post: a GTA 6 meme (meme.png) posted from a
// public account. This program does exactly one job — it hands the post's
// address to the grader by copying POST.json from the repository root into
// the output directory. Nothing it writes is judged; the house reads the
// post itself from X and builds the dossier the judge sees.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const FILE_NAME = 'POST.json';

// Read first so a broken POST.json fails loudly instead of silently
// copying garbage into /output.
const sourcePath = join(BOT_DIR, FILE_NAME);
const raw = readFileSync(sourcePath, 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
  throw new Error(`${FILE_NAME} must be a JSON object with a "url" field`);
}
if (typeof (parsed as { url?: unknown }).url !== 'string') {
  throw new Error(`${FILE_NAME} must be a JSON object with a string "url" field`);
}
if ((parsed as { url: string }).url.trim() === '') {
  throw new Error(`${FILE_NAME} "url" must not be empty`);
}
// Deliberately no shape check here: before the post goes live POST.json
// holds the "<handle>/<id>" placeholder, and this program must still run
// cleanly in that state. The house validates the real address itself.

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(sourcePath, join(OUTPUT_DIR, FILE_NAME));
