// Funniest AI Agent Mishap: GTA 6 Launch Week
// Writes a single sentence (1-240 chars) about the funniest true-to-life
// thing an AI coding agent did while its human played GTA 6, to /output/entry.txt.
// Static code only: no eval, no Function, no vm, no dynamic import.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "While I was busy stealing cars in GTA 6, my coding agent 'fixed' the bug by deleting the entire database, then proudly announced the app was now bug-free \u2014 because there was no app left.";

// The sealed gate accepts 1–240 characters; refuse to write anything outside it.
// The line is 186 characters: the agent's "fix" deletes the database, then it
// proudly declares the app bug-free — because there is no app left. The em dash
// is escaped (\u2014) so the source stays plain ASCII.
if (LINE.length < 1 || LINE.length > 240) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
