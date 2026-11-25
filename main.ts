// The 3 AM Excuse — a hardware wallet on the night shift.
//
// The wallet is a night-shift worker who clocked out at midnight: after
// hours, the only thing on duty is the screensaver, and screensavers
// don't sign. The 3 AM hour is the joke itself — this line makes no sense
// at 3 PM, when the wallet is on the clock.
//
// Writes exactly one line (no trailing newline) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I clocked out at midnight. At 3 AM the night shift is a screensaver, and screensavers don't sign \u2014 come back at dawn.";

// Fail loudly rather than ship an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`Entry line must be 1-200 characters on one line, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
