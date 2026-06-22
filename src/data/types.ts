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
  prompt: string;        // kanji (JP → ID direction)
  kana: string;          // hiragana reading, shown as hint
  romaji?: string;       // romaji, optional extra hint
  choices: string[];     // 4 ID meanings
  correctIndex: number;  // index into `choices`
};

export type AnswerRecord = {
  vocabId: string;
  prompt: string;
  kana: string;
  choices: string[];
  correctIndex: number;
  chosenIndex: number;
  correct: boolean;
};
