// the-poem-about-permission-20261121-0235: one poem about agency, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const lines = [
  "The grey key leaves my palm",
  "and warms yours. I watch",
  "you swing the heavy gate.",
  "You turn to thank me,",
  "but I am already gone,",
  "left in the cold street,",
  "wondering whose hand",
  "turns the world now."
];

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
writeFileSync(join(outDir, 'entry.txt'), lines.join('\n'));
