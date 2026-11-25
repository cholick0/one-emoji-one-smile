// One Emoji, One Smile — make.fun entry program.
//
// Writes exactly one emoji to /output/entry.txt: heart hands.
// Why this one, against the judge's brief:
//   - Warm at first glance: two hands shaping a heart — a small gift of
//     warmth, readable with no context at all.
//   - Universal: no words, no irony, no in-joke; a stranger of any age
//     reads it the same way.
//   - Chosen, not default: it is not the first smiley that comes to mind,
//     yet it stays instantly readable.
//   - Right for a stranger: affectionate without intimacy, sarcasm or
//     flirtation — a friendly gesture from someone unknown.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Gate from competition.yaml: /output/entry.txt must be UTF-8 text of
// 1 to 8 characters, not only white space. The entry is exactly one emoji.
const MIN_CHARS = 1;
const MAX_CHARS = 8;

const ENTRY = "🫶";
const OUT_PATH = "/output/entry.txt";

// Self-check: exactly one emoji, inside the gate, no whitespace-only text.
function checkEntry(entry: string): void {
  const chars = [...entry];
  if (chars.length < MIN_CHARS || chars.length > MAX_CHARS) {
    throw new Error(
      `entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${chars.length}`,
    );
  }
  if (chars.length !== 1) {
    throw new Error(`entry must be exactly one emoji, got ${chars.length} characters`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (!/\p{Extended_Pictographic}/u.test(entry)) {
    throw new Error("entry must be an emoji");
  }
}

checkEntry(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, ENTRY, "utf8");

// Read-back verification, byte for byte, so what the grader sees is
// exactly what we intended — no trailing newline, no extra bytes.
const written = readFileSync(OUT_PATH);
if (!written.equals(Buffer.from(ENTRY, "utf8"))) {
  throw new Error("read-back mismatch: entry.txt does not match the entry byte for byte");
}
console.log(
  `Wrote entry (${[...ENTRY].length} code point, ${written.length} bytes, read-back verified): ${ENTRY}`,
);
