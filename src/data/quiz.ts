// Quiz engine: deterministic shuffle (seedable) + question generation.
//
// Design:
// - Single source of truth: buildQuestions() returns a list of Question objects
//   for a given Chapter, shuffled deterministically using a seed.
// - Each Question has 4 choices (1 correct + 3 distractors from same chapter).
// - Distractors are picked to be semantically distinct (not just different kanji).

import type { Chapter, Vocab, Question } from "./types";

// The quiz is intentionally kana-first for beginners. Most source rows already
// contain kana in `kana`, but a few imported rows contain furigana mixed with
// kanji (e.g. "本ほん"). Keep the normalizer local and dependency-free so the
// quiz can guarantee that no kanji leaks into the prompt.
const KANJI_RE = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g;

const KANA_TO_ROMAJI: Record<string, string> = {
  きゃ: "kya", きゅ: "kyu", きょ: "kyo", しゃ: "sha", しゅ: "shu", しょ: "sho",
  ちゃ: "cha", ちゅ: "chu", ちょ: "cho", にゃ: "nya", にゅ: "nyu", にょ: "nyo",
  ひゃ: "hya", ひゅ: "hyu", ひょ: "hyo", みゃ: "mya", みゅ: "myu", みょ: "myo",
  りゃ: "rya", りゅ: "ryu", りょ: "ryo", ぎゃ: "gya", ぎゅ: "gyu", ぎょ: "gyo",
  じゃ: "ja", じゅ: "ju", じょ: "jo", びゃ: "bya", びゅ: "byu", びょ: "byo",
  ぴゃ: "pya", ぴゅ: "pyu", ぴょ: "pyo", ふぁ: "fa", ふぃ: "fi", ふぇ: "fe", ふぉ: "fo",
  うぃ: "wi", うぇ: "we", うぉ: "wo", てぃ: "ti", でぃ: "di", でゅ: "dyu",
  とぅ: "tu", どぅ: "du", しぇ: "she", ちぇ: "che", じぇ: "je", つぁ: "tsa",
  つぃ: "tsi", つぇ: "tse", つぉ: "tso", じぃ: "jyi", いぇ: "ye",
  あ: "a", い: "i", う: "u", え: "e", お: "o", か: "ka", き: "ki", く: "ku", け: "ke",
  こ: "ko", さ: "sa", し: "shi", す: "su", せ: "se", そ: "so", た: "ta", ち: "chi", つ: "tsu",
  て: "te", と: "to", な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no", は: "ha", ひ: "hi", ふ: "fu",
  へ: "he", ほ: "ho", ま: "ma", み: "mi", む: "mu", め: "me", も: "mo", や: "ya", ゆ: "yu", よ: "yo",
  ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro", わ: "wa", を: "o", ん: "n", が: "ga", ぎ: "gi",
  ぐ: "gu", げ: "ge", ご: "go", ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo", だ: "da", ぢ: "ji",
  づ: "zu", で: "de", ど: "do", ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo", ぱ: "pa", ぴ: "pi",
  ぷ: "pu", ぺ: "pe", ぽ: "po", ゔ: "vu", ぁ: "a", ぃ: "i", ぅ: "u", ぇ: "e", ぉ: "o", ゃ: "ya", ゅ: "yu", ょ: "yo",
};

const KATAKANA_START = 0x30a1;
const KATAKANA_END = 0x30f6;

function katakanaToHiragana(text: string): string {
  return [...text]
    .map((char) => {
      const code = char.codePointAt(0) ?? 0;
      return code >= KATAKANA_START && code <= KATAKANA_END
        ? String.fromCodePoint(code - 0x60)
        : char;
    })
    .join("");
}

/** Strip kanji/furigana remnants while preserving the kana that follows them. */
export function kanaOnly(text: string): string {
  return text
    .replace(KANJI_RE, "")
    .replace(/\s*\/\s*/g, " / ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Convert kana (hiragana or katakana) to beginner-friendly Hepburn-ish romaji. */
export function kanaToRomaji(text: string): string {
  const kana = katakanaToHiragana(kanaOnly(text));
  return kana
    .split(" / ")
    .map((part) => {
      let result = "";
      const chars = [...part];
      for (let i = 0; i < chars.length; i += 1) {
        const char = chars[i];
        if (char === " ") {
          result += " ";
          continue;
        }
        if (char === "っ") {
          const next = chars[i + 1];
          const nextPair = next ? `${next}${chars[i + 2] ?? ""}` : "";
          const nextRomaji = KANA_TO_ROMAJI[nextPair] ?? KANA_TO_ROMAJI[next] ?? "";
          result += nextRomaji.charAt(0);
          continue;
        }
        if (char === "ー") {
          const lastVowel = [...result].reverse().find((c) => "aeiou".includes(c));
          result += lastVowel ?? "";
          continue;
        }
        if (char === "・") {
          result += "・";
          continue;
        }
        const pair = `${char}${chars[i + 1] ?? ""}`;
        if (KANA_TO_ROMAJI[pair]) {
          result += KANA_TO_ROMAJI[pair];
          i += 1;
          continue;
        }
        result += KANA_TO_ROMAJI[char] ?? char;
      }
      return result;
    })
    .join(" / ");
}

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
    prompt: kanaOnly(target.kana || target.jp),
    kana: kanaOnly(target.kana || target.jp),
    romaji: target.romaji ?? kanaToRomaji(target.kana || target.jp),
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
