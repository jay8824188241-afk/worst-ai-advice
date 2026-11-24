// Worst AI Advice: The 48-Hour Tight Line Open
// Writes one original worst-AI-advice one-liner to /output/entry.txt.
// Node 22, zero dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ADVICE =
  "To make your code run faster, delete all the comments — the computer has to read them too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// Self-check: the advice must stay a single non-empty line within the limit.
const lines = ADVICE.split("\n");
if (lines.length !== 1) throw new Error("advice must be a single line");
if (ADVICE.length === 0 || ADVICE.length > 280) {
  throw new Error(`advice length ${ADVICE.length} out of bounds`);
}
writeFileSync(outPath, ADVICE + "\n", "utf8");
console.log(`Wrote ${ADVICE.length} chars to ${outPath}`);
console.log("Self-check passed: single line, within 280 chars.");
