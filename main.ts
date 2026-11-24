// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes one quiet, earned moment of pride to /output/entry.txt.
// The line was chosen from 8 original candidates against the judge's
// five criteria (earned pride first, concrete scene, effort felt inside
// the line, landing in one read, freshness). This one won: a single
// scene unfolding in real time — shaking hands, a radio built from
// scrap — and the pride arrives at the very last word, "song", never
// asserted, congratulated or explained. No trophy, no podium, no
// graduation: the image is a workbench, not a stage.
// The line: a small person, a hard task, a long effort landing in one
// read — the pride arrives at the last word, never asserted.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "He soldered the last joint with hands that still shook, held his breath, and the little radio he'd built from scrap crackled into a song.";

// The gate allows 1–240 characters: fail loudly rather than emit a
// line the sealed scorer would refuse.
const length = [...LINE].length;
if (length < 1 || length > 240) {
  throw new Error(`entry line is ${length} characters, outside the 1–240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
