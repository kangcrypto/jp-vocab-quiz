// Shared type definitions for the quiz app.

export type Vocab = {
  id: string;
  jp: string;
  kana: string;
  romaji?: string;
  id_meaning: string;
  tags?: string[];
};

export type Chapter = {
  slug: string;
  title: string;
  jp_title: string;
  description?: string;
  vocab: Vocab[];
};

export type Question = {
  vocabId: string;
  prompt: string;        // kana-only prompt (JP → ID direction)
  kana: string;          // kana-only reading, kept for result/history
  romaji: string;        // beginner-friendly reading shown below the prompt
  choices: string[];     // 4 ID meanings
  correctIndex: number;  // index into `choices`
};

export type AnswerRecord = {
  vocabId: string;
  prompt: string;
  kana: string;
  romaji: string;
  choices: string[];
  correctIndex: number;
  chosenIndex: number;
  correct: boolean;
};
