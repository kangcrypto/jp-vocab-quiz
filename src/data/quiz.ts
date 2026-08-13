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
//
// Distractor selection prefers vocabulary in the SAME semantic context as the
// target (e.g. for がくせい "mahasiswa", other role/profesi words are picked
// instead of unrelated entries like "Amerika"). We tag each Indonesian meaning
// with one or more semantic categories (role, country, time, place, food...)
// and use category overlap as the distractor score. If the chapter has fewer
// than 3 entries sharing a category with the target, we top up with the rest
// of the chapter so every question still gets exactly 4 choices.
const STOP_TOKENS = new Set([
  // Indonesian filler words / grammar particles that aren't semantically
  // distinctive and would otherwise create false-positive overlaps.
  "yang", "di", "ke", "dari", "dan", "atau", "untuk", "dengan", "pada",
  "ini", "itu", "sana", "sini", "situ", "sebelum", "sesudah", "setelah",
  "lebih", "kurang", "sangat", "bukan",
  "partikel", "kata", "akhiran", "awalan", "kata kerja", "kata sifat",
  "kata ganti", "kata penghubung", "kata bantu", "sopan", "kasual", "formal",
  "benda", "hewan", "waktu", "dll",
]);

// Semantic groups used to bucket Indonesian meanings. Each group is a Set of
// lowercase Indonesian tokens (or whole multi-word meanings) that belong to
// the same conceptual field. Words can belong to multiple groups; that's fine
// because overlap is computed as shared category count.
const CONTEXT_GROUPS: ReadonlyArray<[string, ReadonlySet<string>]> = [
  ["role", new Set([
    "guru", "dokter", "ahli", "mahasiswa", "peneliti", "insinyur",
    "karyawan", "karyawati", "petani", "nelayan", "pengusaha",
    "programmer", "designer", "pengacara", "perawat", "dosen",
    "penjual", "kasir", "koki", "pramugari", "sopir",
    // Multi-word role names
    "karyawan bank", "karyawan kantor", "karyawan perusahaan",
  ])],
  ["person", new Set([
    "saya", "kami", "kamu", "dia", "mereka", "orang", "teman",
    "saudara", "keluarga", "ayah", "ibu", "anak", "kakek", "nenek",
    "suami", "istri",
  ])],
  ["country", new Set([
    "amerika", "inggris", "india", "indonesia", "korea", "thailand",
    "tiongkoq", "china", "jerman", "jepang",
    "perancis", "brasil", "filipina", "australia", "kanada", "rusia",
    "italia", "spanyol", "myanmar", "vietnam", "mesir", "mexico",
    // Multi-word country names
    "tiongkoq/china", "tiongkoq", "korea selatan",
  ])],
  ["question", new Set([
    "siapa", "apa", "mana", "kapan", "berapa", "dimana", "kemana",
    "bagaimana", "kenapa",
  ])],
  ["time", new Set([
    "pagi", "siang", "sore", "malam", "hari", "minggu", "bulan", "tahun",
    "kemarin", "besok", "sekarang", "setiap",
  ])],
  ["greeting", new Set([
    "permisi", "maaf", "senang bertemu", "silakan", "tolong", "selamat",
    "terima kasih",
  ])],
  ["affirmation", new Set([
    "ya", "tidak",
  ])],
  ["place", new Set([
    "universitas", "rumah sakit", "sekolah",
    "perpustakaan", "toko", "restoran", "kantor", "stasiun", "bandara",
    "hotel", "rumah", "kamar", "taman", "museum", "apartemen",
    "gedung", "kota", "tempat", "negara",
  ])],
  ["food", new Set([
    "nasi", "roti", "telur", "daging", "ikan", "sayur", "buah", "air",
    "teh", "kopi", "susu", "jus", "bir", "sake", "alkohol", "coklat",
    "permen", "kue", "makanan", "minuman", "sarapan", "makan siang",
    "makan malam", "lauk", "kecap",
  ])],
  ["body", new Set([
    "mata", "telinga", "hidung", "mulut", "tangan", "kaki", "kepala",
    "rambut", "wajah", "leher", "perut", "punggung",
  ])],
  ["color", new Set([
    "merah", "biru", "hijau", "kuning", "putih", "hitam", "coklat",
    "ungu", "oranye", "abu-abu",
  ])],
  ["adjective", new Set([
    "baru", "lama", "besar", "kecil", "tinggi", "pendek", "panjang",
    "berat", "ringan", "bagus", "buruk", "cantik", "indah",
    "murah", "mahal", "panas", "dingin", "hangat", "sejuk",
    "sulit", "mudah", "sedih", "senang", "ramai", "sepi", "tenang",
  ])],
];

function tokenize(meaning: string): string[] {
  return meaning
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ")
    .split(/[\s,/;:()]+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0 && !STOP_TOKENS.has(t));
}

function categoriesForMeaning(meaning: string): Set<string> {
  const lower = meaning.toLowerCase().trim();
  const cats = new Set<string>();
  // Try the full meaning first (matches multi-word entries like "karyawan bank")
  for (const [catName, words] of CONTEXT_GROUPS) {
    if (words.has(lower)) cats.add(catName);
  }
  // Then token-level matches
  for (const tok of tokenize(meaning)) {
    for (const [catName, words] of CONTEXT_GROUPS) {
      if (words.has(tok)) cats.add(catName);
    }
  }
  return cats;
}

function contextOverlap(a: string, b: string): number {
  const catsA = categoriesForMeaning(a);
  const catsB = categoriesForMeaning(b);
  if (catsA.size === 0 || catsB.size === 0) return 0;
  let shared = 0;
  for (const c of catsA) {
    if (catsB.has(c)) shared += 1;
  }
  return shared;
}

function buildQuestionFor(
  target: Vocab,
  pool: readonly Vocab[],
  rng: () => number
): Question {
  // Score every other vocab in the pool by category overlap with the target.
  // Higher overlap = more confusing / thematically related = better distractor.
  const scored = pool
    .filter((v) => v.id !== target.id)
    .map((v) => ({
      vocab: v,
      score: contextOverlap(target.id_meaning, v.id_meaning),
    }));

  const sameContext = scored.filter((s) => s.score > 0);
  const otherContext = scored.filter((s) => s.score === 0);

  // Need 3 distractors. Prefer same-context, top up with chapter remainder.
  const ordered = [
    ...shuffle(sameContext, rng).map((s) => s.vocab),
    ...shuffle(otherContext, rng).map((s) => s.vocab),
  ];

  const distractors = ordered
    .map((v) => v.id_meaning)
    .filter((m, i, arr) => arr.indexOf(m) === i) // de-dupe identical meanings
    .slice(0, 3);

  const choices = shuffle(
    [target.id_meaning, ...distractors],
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
