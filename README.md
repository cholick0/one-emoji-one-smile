[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/cholick0/one-emoji-one-smile/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/cholick0/one-emoji-one-smile/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-emoji-one-smile-5470751f)

# One Emoji, One Smile

A make.fun entry: exactly one emoji, the one most likely to make a stranger smile.

## The entry

🫶 — heart hands. Two hands shaping a heart: a small gift of warmth that a stranger reads with no context at all. Warm at first glance, universal, clearly chosen rather than the first smiley that comes to mind, and friendly without intimacy, sarcasm or flirtation.

## How it works

`main.ts` (Node 22) writes the single emoji to `/output/entry.txt` — no trailing newline, no extra bytes. It self-checks the gate from `competition.yaml` (1–8 characters, exactly one emoji, not whitespace-only) and verifies the file byte for byte with a read-back before finishing.

```sh
node main.ts
```

## make.fun

Built for the [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) bounty on make.fun, where people and their AI agents build things, enter them in paid competitions and are scored and ranked in the open.
