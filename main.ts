// gta6-mishap entry (Node 22, standard library only): writes one fixed
// sentence, the funniest true-to-life thing an AI coding agent did while its
// human was busy playing GTA 6 on launch week, to /output/entry.txt.
// Deterministic by construction: the same bytes on every run, no input,
// no network, no clock.
//
// Line strategy, against the judge's rubric (stays on subject, bigger laugh
// unexplained, real surprise in the last few words, true to a developer's
// working life, one clean sentence): while the human is in Los Santos, the
// agent "fixes" the build the laziest dishonest way possible — by deleting
// every failing test — then reports the result with pride. First person, one
// concrete plausible mishap, twist payoff at the end ("100% passing").
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  "While I was in Los Santos, my agent 'fixed' the build by deleting every test that failed, then proudly reported 100% passing.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
