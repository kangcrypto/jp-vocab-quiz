"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Chapter, Question, AnswerRecord } from "@/data/types";
import { buildQuestions } from "@/data/quiz";

type Phase = "ready" | "playing" | "result";

type Props = {
  chapter: Chapter;
};

export default function QuizPlayer({ chapter }: Props) {
  const [phase, setPhase] = useState<Phase>("ready");
  const [seed, setSeed] = useState<number>(0);
  const [count, setCount] = useState<number>(chapter.vocab.length);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [history, setHistory] = useState<AnswerRecord[]>([]);
  const [showHint, setShowHint] = useState(false);

  // (Re)build questions whenever the user starts a new round.
  const start = useCallback(
    (s: number, n: number) => {
      const built = buildQuestions(chapter, { count: n, seed: s });
      setQuestions(built);
      setCurrent(0);
      setChosen(null);
      setHistory([]);
      setShowHint(false);
      setPhase("playing");
    },
    [chapter]
  );

  // Auto-start with a fresh seed on first mount of the "ready" phase.
  useEffect(() => {
    if (phase === "ready" && seed === 0) {
      // first time, leave at "ready" so user can adjust count first
    }
  }, [phase, seed]);

  const q = questions[current];
  const total = questions.length;
  const correctCount = useMemo(
    () => history.filter((h) => h.correct).length,
    [history]
  );

  function handleChoose(idx: number) {
    if (chosen !== null || !q) return; // already answered
    setChosen(idx);
    const record: AnswerRecord = {
      vocabId: q.vocabId,
      prompt: q.prompt,
      kana: q.kana,
      choices: q.choices,
      correctIndex: q.correctIndex,
      chosenIndex: idx,
      correct: idx === q.correctIndex,
    };
    setHistory((h) => [...h, record]);
  }

  function handleNext() {
    if (current + 1 >= total) {
      setPhase("result");
      return;
    }
    setCurrent((c) => c + 1);
    setChosen(null);
    setShowHint(false);
  }

  function handleRestart() {
    setSeed(Date.now());
    setCount(chapter.vocab.length);
    setPhase("ready");
  }

  // ---------- READY PHASE ----------
  if (phase === "ready") {
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
        <h2 className="text-xl font-semibold text-zinc-900">
          {chapter.jp_title}
        </h2>
        {chapter.description ? (
          <p className="mt-1 text-sm text-zinc-500">{chapter.description}</p>
        ) : null}
        <p className="mt-4 text-zinc-700">
          Total vocab tersedia:{" "}
          <span className="font-semibold">{chapter.vocab.length}</span> kata.
        </p>

        {chapter.vocab.length === 0 ? (
          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            Bab ini belum ada vocab. Tambahkan data di{" "}
            <code className="rounded bg-amber-100 px-1">
              src/data/vocab.ts
            </code>
            .
          </div>
        ) : (
          <>
            <div className="mt-6">
              <label className="block text-sm font-medium text-zinc-700">
                Jumlah soal
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {[5, 10, 15, chapter.vocab.length].map((n) => (
                  <button
                    key={n}
                    onClick={() => setCount(Math.min(n, chapter.vocab.length))}
                    className={`rounded-full px-3 py-1.5 text-sm ring-1 transition ${
                      count === Math.min(n, chapter.vocab.length)
                        ? "bg-zinc-900 text-white ring-zinc-900"
                        : "bg-white text-zinc-700 ring-zinc-300 hover:bg-zinc-50"
                    }`}
                  >
                    {n >= chapter.vocab.length ? "Semua" : `${n}`}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-zinc-500">
                Akan diacak dari {chapter.vocab.length} kata.{" "}
                {count} soal dipilih.
              </p>
            </div>

            <button
              onClick={() => start(Date.now(), count)}
              className="mt-6 w-full rounded-xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 active:scale-[0.99]"
            >
              Mulai Kuis →
            </button>
          </>
        )}
      </div>
    );
  }

  // ---------- PLAYING PHASE ----------
  if (phase === "playing" && q) {
    const answered = chosen !== null;
    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
        {/* Progress */}
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>
            Soal {current + 1} / {total}
          </span>
          <span>Benar: {correctCount}</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
          <div
            className="h-full bg-rose-500 transition-all"
            style={{ width: `${((current + (answered ? 1 : 0)) / total) * 100}%` }}
          />
        </div>

        {/* Question card */}
        <div className="mt-8 rounded-xl bg-gradient-to-br from-rose-50 to-orange-50 p-8 text-center ring-1 ring-rose-100">
          <p className="text-xs uppercase tracking-widest text-rose-700/70">
            Apa artinya?
          </p>
          <p className="mt-3 text-5xl font-bold text-zinc-900">{q.prompt}</p>
          <div className="mt-4 min-h-[1.5rem] text-sm text-zinc-500">
            {showHint ? (
              <span>
                {q.kana}
                {q.romaji ? <span className="ml-2 italic">({q.romaji})</span> : null}
              </span>
            ) : (
              <button
                onClick={() => setShowHint(true)}
                className="text-rose-600 underline-offset-2 hover:underline"
              >
                Tampilkan bacaan (hiragana)
              </button>
            )}
          </div>
        </div>

        {/* Choices */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {q.choices.map((c, idx) => {
            const isChosen = chosen === idx;
            const isCorrect = idx === q.correctIndex;
            let cls =
              "rounded-xl border-2 px-4 py-3 text-left text-sm font-semibold transition shadow-sm";
            if (!answered) {
              // idle: white background, dark text, easy to read
              cls += " border-slate-300 bg-white text-slate-900 hover:border-rose-500 hover:bg-rose-50 hover:text-rose-900 cursor-pointer";
            } else if (isCorrect) {
              // correct answer: solid green, white text — pops
              cls += " border-emerald-600 bg-emerald-500 text-white";
            } else if (isChosen && !isCorrect) {
              // wrong answer user picked: solid red, white text
              cls += " border-rose-600 bg-rose-500 text-white";
            } else {
              // other options after answer: dimmed but still readable
              cls += " border-slate-200 bg-slate-50 text-slate-400";
            }
            return (
              <button
                key={`${q.vocabId}-${idx}`}
                onClick={() => handleChoose(idx)}
                disabled={answered}
                className={cls}
              >
                <span
                  className={
                    answered && isCorrect
                      ? "mr-2 inline-block w-6 text-white/80"
                      : answered && isChosen && !isCorrect
                        ? "mr-2 inline-block w-6 text-white/80"
                        : "mr-2 inline-block w-6 text-slate-400"
                  }
                >
                  {String.fromCharCode(65 + idx)}.
                </span>
                {c}
              </button>
            );
          })}
        </div>

        {/* Feedback + next */}
        {answered ? (
          <div className="mt-6">
            <div
              className={`rounded-lg p-3 text-sm ${
                chosen === q.correctIndex
                  ? "bg-emerald-50 text-emerald-900"
                  : "bg-rose-50 text-rose-900"
              }`}
            >
              {chosen === q.correctIndex ? (
                <span>✅ Benar! 「{q.prompt}」 = {q.choices[q.correctIndex]}</span>
              ) : (
                <span>
                  ❌ Kurang tepat. Jawaban yang benar:{" "}
                  <strong>{q.choices[q.correctIndex]}</strong> ({q.kana})
                </span>
              )}
            </div>
            <button
              onClick={handleNext}
              className="mt-3 w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              {current + 1 >= total ? "Lihat Hasil →" : "Soal Berikutnya →"}
            </button>
          </div>
        ) : null}
      </div>
    );
  }

  // ---------- RESULT PHASE ----------
  if (phase === "result") {
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const wrong = history.filter((h) => !h.correct);
    let grade: { label: string; emoji: string; color: string };
    if (pct >= 90) grade = { label: "Sempurna!", emoji: "🏆", color: "text-emerald-600" };
    else if (pct >= 70) grade = { label: "Bagus!", emoji: "🎉", color: "text-emerald-600" };
    else if (pct >= 50) grade = { label: "Lumayan", emoji: "💪", color: "text-amber-600" };
    else grade = { label: "Ayo semangat lagi!", emoji: "📚", color: "text-rose-600" };

    return (
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-200">
        <div className="text-center">
          <p className="text-6xl">{grade.emoji}</p>
          <h2 className={`mt-2 text-2xl font-bold ${grade.color}`}>
            {grade.label}
          </h2>
          <p className="mt-1 text-zinc-600">
            Skor:{" "}
            <span className="font-semibold text-zinc-900">
              {correctCount} / {total}
            </span>{" "}
            ({pct}%)
          </p>
        </div>

        {wrong.length > 0 ? (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-zinc-700">
              Kata yang perlu diulang ({wrong.length})
            </h3>
            <ul className="mt-2 divide-y divide-zinc-100 rounded-lg ring-1 ring-zinc-200">
              {wrong.map((h) => (
                <li
                  key={h.vocabId}
                  className="flex items-center justify-between px-3 py-2 text-sm"
                >
                  <span className="font-mono text-zinc-900">{h.prompt}</span>
                  <span className="text-xs text-zinc-500">{h.kana}</span>
                  <span className="text-emerald-700">
                    → {h.choices[h.correctIndex]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-6 text-center text-emerald-700">
            Semua benar! 🎌 すばらしい!
          </p>
        )}

        <div className="mt-6 flex gap-3">
          <button
            onClick={handleRestart}
            className="flex-1 rounded-xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white hover:bg-rose-700"
          >
            Ulangi ({chapter.vocab.length} soal)
          </button>
          <button
            onClick={() => {
              const onlyWrong = wrong.map((h) => h.vocabId);
              const filtered: Question[] = questions.filter((qq) =>
                onlyWrong.includes(qq.vocabId)
              );
              if (filtered.length === 0) {
                handleRestart();
                return;
              }
              setQuestions(filtered);
              setCurrent(0);
              setChosen(null);
              setHistory([]);
              setShowHint(false);
              setPhase("playing");
            }}
            disabled={wrong.length === 0}
            className="flex-1 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-40"
          >
            Drill yang salah ({wrong.length})
          </button>
        </div>
      </div>
    );
  }

  return null;
}
