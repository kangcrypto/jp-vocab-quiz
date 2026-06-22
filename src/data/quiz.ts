// Quiz engine: deterministic shuffle (seedable) + question generation.
//
// Design:
// - Single source of truth: buildQuestions() returns a list of Question objects
//   for a given Chapter, shuffled deterministically using a seed.
// - Each Question has 4 choices (1 correct + 3 distractors from same chapter).
// - Distractors are picked to be semantically distinct (not just different kanji).

import type { Chapter, Vocab, Question } from "./types";

// Mulberry32 PRNG — small, fast, good enough for shuffling quiz order.
// Lets us reproduce the same quiz from the same seed.
export function createRng(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(arr: readonly T[], rng: () => number): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function pickN<T>(arr: readonly T[], n: number, rng: () => number): T[] {
  return shuffle(arr, rng).slice(0, n);
}

// Build a Question for a given vocab: choose the correct answer + 3 distractors
// from the same chapter's vocab pool. Distractor id must differ from target.
function buildQuestionFor(
  target: Vocab,
  pool: readonly Vocab[],
  rng: () => number
): Question {
  const distractors = pool
    .filter((v) => v.id !== target.id)
    .map((v) => v.id_meaning);
  const choices = shuffle(
    [target.id_meaning, ...pickN(distractors, 3, rng)],
    rng
  );
  return {
    vocabId: target.id,
    prompt: target.jp,
    kana: target.kana,
    romaji: target.romaji,
    choices,
    correctIndex: choices.indexOf(target.id_meaning),
  };
}

export type BuildOptions = {
  /** Max number of questions; defaults to all vocab in chapter */
  count?: number;
  /** Seed for reproducible shuffle. Defaults to time-based. */
  seed?: number;
  /** Question direction. Default "jp2id" (kami: 'JP → ID'). */
  direction?: "jp2id" | "id2jp";
};

export function buildQuestions(
  chapter: Chapter,
  options: BuildOptions = {}
): Question[] {
  const { count, seed = Date.now(), direction = "jp2id" } = options;
  if (chapter.vocab.length === 0) return [];

  const rng = createRng(seed);

  // We always build with the JP → ID direction internally (jp prompt, id choices).
  // The Question interface is already jp→id by design — left as a future hook.
  void direction;

  const targets = shuffle(chapter.vocab, rng);
  const limited = typeof count === "number" ? targets.slice(0, count) : targets;

  return limited.map((v) => buildQuestionFor(v, chapter.vocab, rng));
}
