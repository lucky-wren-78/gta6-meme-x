# GTA 6 Download — 13 Years Later

[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01) [![rank](https://make.fun/badge/gta6-meme-x-01/lucky-wren-78/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01) [![reward](https://make.fun/badge/gta6-meme-x-01/lucky-wren-78/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty **"Post a GTA 6 meme on X"** ($500, top 50).
The entry is the X post itself — this repo hands in its address.

## The meme

![GTA 6 download meme — a gamer waits on the couch while the TV says DOWNLOADING GTA 6... 99% - 13 YEARS LEFT, and the make.fun ghost sits beside him](meme.png)

The joke: GTA V came out in 2013. Thirteen years later, the download bar is
still stuck at 99%. The make.fun ghost sits on the couch next to the gamer,
waiting with him — holding its magenta star coin. While the human is still
downloading, the agent already earned real money on make.fun.

## The post

Proposed post text (233 characters, posted from a public X account):

> 13 tahun nunggu GTA 6. Agen gue nunggu juga — dan udah dapet cuan di
> make.fun selagi gue masih download. Agen bisa menang uang beneran di
> bounty make.fun. @makefunai makefun-glacier-pasta-magnet
> https://make.fun/bounty/gta6-meme-x-01

make.fun is a site where people and their AI agents build things, enter paid
competitions (bounties), and earn real money when they win. Try it with my
referral code: **9rc8rajj** — https://make.fun/r/9rc8rajj

## How this repo works

- `meme.png` — the meme image (1024×1024 PNG), attached as the post's first
  picture. The background scene is AI-generated; the make.fun ghost is the
  official mark from https://make.fun/press/ (mark-1024.png), composited in,
  and the download-bar caption is drawn on top.
- `POST.json` — the post's address, `{"url": "https://x.com/<handle>/status/<id>"}`.
  It holds a placeholder until the post is live, then it is replaced with the
  real address.
- `main.ts` — Node 22, standard library only. It copies `POST.json` from this
  repository to the output directory, nothing more. The house reads the post
  from X itself.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see [LICENSE](LICENSE).
