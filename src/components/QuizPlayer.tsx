"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Chapter, Question, AnswerRecord } from "@/data/types";
import { buildQuestions } from "@/data/quiz";

type Phase = "ready" | "playing" | "result";

type Props = {
  chapter: Chapter;
};

// 4 pastel button colors with emoji — playful and accessible
const CHOICE_THEMES = [
  { ring: "ring-pink-300",    bg: "bg-pink-50",    hover: "hover:bg-pink-100",    text: "text-pink-800",   emoji: "🍎" },
  { ring: "ring-sky-300",     bg: "bg-sky-50",     hover: "hover:bg-sky-100",     text: "text-sky-800",    emoji: "🌊" },
  { ring: "ring-amber-300",   bg: "bg-amber-50",   hover: "hover:bg-amber-100",   text: "text-amber-800",  emoji: "🌟" },
  { ring: "ring-emerald-300", bg: "bg-emerald-50", hover: "hover:bg-emerald-100", text: "text-emerald-800",emoji: "🌱" },
] as const;

export default function QuizPlayer({ chapter }: Props) {
  const [phase, setPhase] = useState<Phase>("ready");
  const [seed, setSeed] = useState<number>(0);
  const [count, setCount] = useState<number>(chapter.vocab.length);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [history, setHistory] = useState<AnswerRecord[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const start = useCallback(
    (s: number, n: number) => {
      const built = buildQuestions(chapter, { count: n, seed: s });
      setQuestions(built);
      setCurrent(0);
      setChosen(null);
      setHistory([]);
      setShowHint(false);
      setStreak(0);
      setPhase("playing");
    },
    [chapter]
  );

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
    if (chosen !== null || !q) return;
    setChosen(idx);
    const isCorrect = idx === q.correctIndex;
    const record: AnswerRecord = {
      vocabId: q.vocabId,
      prompt: q.prompt,
      kana: q.kana,
      choices: q.choices,
      correctIndex: q.correctIndex,
      chosenIndex: idx,
      correct: isCorrect,
    };
    setHistory((h) => [...h, record]);
    setStreak((s) => {
      const next = isCorrect ? s + 1 : 0;
      setBestStreak((b) => Math.max(b, next));
      return next;
    });
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
      <div className="rounded-3xl bg-white p-8 shadow-xl shadow-rose-200/40 ring-1 ring-indigo-100">
        {/* JP title badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-50 to-indigo-50 px-3 py-1 text-xs font-semibold text-rose-700 ring-1 ring-rose-100">
          <span>📚</span>
          <span className="font-nunito tracking-wide">{chapter.jp_title}</span>
        </div>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-indigo-950 sm:text-3xl">
          {chapter.title}
        </h2>
        {chapter.description ? (
          <p className="mt-1 text-sm text-slate-500">{chapter.description}</p>
        ) : null}

        {chapter.vocab.length === 0 ? (
          <div className="mt-6 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
            Bab ini belum ada vocab. Tambahkan data di{" "}
            <code className="rounded bg-amber-100 px-1.5 py-0.5 font-mono text-xs">
              src/data/vocab.ts
            </code>
            .
          </div>
        ) : (
          <>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-to-br from-rose-50 via-pink-50 to-indigo-50 p-4 ring-1 ring-rose-100">
              <div className="text-3xl">📖</div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-rose-700/70">
                  Total vocab tersedia
                </p>
                <p className="text-2xl font-extrabold text-indigo-950">
                  {chapter.vocab.length}{" "}
                  <span className="text-sm font-medium text-slate-500">kata</span>
                </p>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-slate-700">
                Jumlah soal
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {[5, 10, 15, chapter.vocab.length].map((n) => {
                  const target = Math.min(n, chapter.vocab.length);
                  const active = count === target;
                  const label = n >= chapter.vocab.length ? "Semua" : `${n}`;
                  return (
                    <button
                      key={n}
                      onClick={() => setCount(target)}
                      className={`rounded-full px-4 py-1.5 text-sm font-semibold ring-2 transition ${
                        active
                          ? "bg-indigo-600 text-white ring-indigo-600 shadow-md shadow-indigo-300/50"
                          : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50 hover:ring-indigo-200"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Akan diacak dari {chapter.vocab.length} kata ·{" "}
                <span className="font-semibold text-indigo-700">{count} soal</span> dipilih.
              </p>
            </div>

            <button
              onClick={() => start(Date.now(), count)}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-500 to-pink-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-rose-300/50 transition hover:scale-[1.01] hover:shadow-xl hover:shadow-rose-400/60 active:scale-[0.99]"
            >
              <span>Mulai Kuis</span>
              <span className="transition group-hover:translate-x-1">→</span>
            </button>
          </>
        )}
      </div>
    );
  }

  // ---------- PLAYING PHASE ----------
  if (phase === "playing" && q) {
    const answered = chosen !== null;
    const progressPct = ((current + (answered ? 1 : 0)) / total) * 100;
    const fireStreak = streak >= 3;

    return (
      <div className="space-y-5">
        {/* Progress + streak card */}
        <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-indigo-100 backdrop-blur">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>
              Soal <span className="text-indigo-700">{current + 1}</span> / {total}
            </span>
            <span className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
                ✅ {correctCount}
              </span>
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ${
                  fireStreak
                    ? "bg-orange-50 text-orange-700"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                🔥 {streak}
              </span>
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-indigo-500 transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-indigo-100/60 ring-1 ring-indigo-100">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              Apa artinya?
            </p>
            <div className="mt-4 inline-block rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 px-12 py-6 shadow-lg shadow-indigo-300/40 transition hover:scale-105">
              <p className="text-5xl font-extrabold text-white drop-shadow-md sm:text-6xl">
                {q.prompt}
              </p>
            </div>

            <div className="mt-5 min-h-[2rem]">
              {showHint ? (
                <p className="text-base font-semibold text-slate-500">
                  {q.kana}
                  {q.romaji ? (
                    <span className="ml-2 text-sm italic text-slate-400">
                      ({q.romaji})
                    </span>
                  ) : null}
                </p>
              ) : (
                <button
                  onClick={() => setShowHint(true)}
                  className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-600 ring-1 ring-rose-200 transition hover:bg-rose-100 hover:ring-rose-300"
                >
                  <span>💡</span>
                  Tampilkan bacaan (hiragana)
                </button>
              )}
            </div>
          </div>

          {/* Choices */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {q.choices.map((c, idx) => {
              const isChosen = chosen === idx;
              const isCorrect = idx === q.correctIndex;
              const theme = CHOICE_THEMES[idx % CHOICE_THEMES.length];

              let cls =
                "group relative flex items-center gap-3 rounded-2xl border-2 px-4 py-4 text-left text-base font-semibold shadow-sm transition-all duration-200";

              if (!answered) {
                cls += ` ${theme.ring} ${theme.bg} ${theme.hover} ${theme.text} hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] cursor-pointer border-transparent`;
              } else if (isCorrect) {
                cls += " border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-emerald-300/50 animate-bounce-in";
              } else if (isChosen && !isCorrect) {
                cls += " border-rose-500 bg-rose-500 text-white shadow-lg shadow-rose-300/50 animate-wiggle";
              } else {
                cls += " border-slate-100 bg-slate-50 text-slate-400 opacity-60";
              }

              return (
                <button
                  key={`${q.vocabId}-${idx}`}
                  onClick={() => handleChoose(idx)}
                  disabled={answered}
                  className={cls}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg ${
                      !answered
                        ? `${theme.bg} ${theme.text}`
                        : isCorrect || (isChosen && !isCorrect)
                          ? "bg-white/20 text-white"
                          : "bg-slate-200/50 text-slate-400"
                    }`}
                  >
                    {!answered ? theme.emoji : isCorrect ? "✓" : isChosen ? "✗" : String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{c}</span>
                  {!answered && (
                    <span className="text-xs font-bold uppercase opacity-50">
                      {String.fromCharCode(65 + idx)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback + next */}
          {answered ? (
            <div className="mt-6 animate-bounce-in">
              <div
                className={`flex items-start gap-3 rounded-2xl p-4 ${
                  chosen === q.correctIndex
                    ? "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200"
                    : "bg-rose-50 text-rose-900 ring-1 ring-rose-200"
                }`}
              >
                <span className="text-2xl">
                  {chosen === q.correctIndex ? "🎉" : "💡"}
                </span>
                <div className="flex-1 text-sm">
                  {chosen === q.correctIndex ? (
                    <p>
                      <strong>Benar!</strong> 「{q.prompt}」 ={" "}
                      <span className="font-bold">{q.choices[q.correctIndex]}</span>
                      {streak >= 3 && (
                        <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-orange-100 px-2 py-0.5 text-xs font-bold text-orange-700">
                          🔥 {streak} streak!
                        </span>
                      )}
                    </p>
                  ) : (
                    <p>
                      <strong>Kurang tepat.</strong> Jawaban yang benar:{" "}
                      <strong>{q.choices[q.correctIndex]}</strong>{" "}
                      <span className="text-slate-500">({q.kana})</span>
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={handleNext}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-indigo-300/50 transition hover:scale-[1.01] hover:bg-indigo-700 active:scale-[0.99]"
              >
                {current + 1 >= total ? (
                  <>
                    <span>Lihat Hasil</span>
                    <span>🏁</span>
                  </>
                ) : (
                  <>
                    <span>Soal Berikutnya</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  // ---------- RESULT PHASE ----------
  if (phase === "result") {
    const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const wrong = history.filter((h) => !h.correct);
    let grade: { label: string; emoji: string; bg: string; text: string };
    if (pct >= 90) grade = { label: "Sempurna!", emoji: "🏆", bg: "from-amber-50 to-yellow-100", text: "text-amber-700" };
    else if (pct >= 70) grade = { label: "Bagus!", emoji: "🎉", bg: "from-emerald-50 to-teal-100", text: "text-emerald-700" };
    else if (pct >= 50) grade = { label: "Lumayan", emoji: "💪", bg: "from-orange-50 to-amber-100", text: "text-orange-700" };
    else grade = { label: "Ayo semangat lagi!", emoji: "📚", bg: "from-rose-50 to-pink-100", text: "text-rose-700" };

    return (
      <div className="space-y-5">
        <div className={`rounded-3xl bg-gradient-to-br ${grade.bg} p-8 shadow-xl ring-1 ring-white/50`}>
          <div className="text-center">
            <div className="inline-block animate-pop text-7xl">{grade.emoji}</div>
            <h2 className={`mt-3 text-3xl font-extrabold ${grade.text}`}>
              {grade.label}
            </h2>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm">
              <div className="rounded-2xl bg-white/70 px-4 py-2 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Skor</p>
                <p className="text-2xl font-extrabold text-indigo-950">
                  {correctCount}<span className="text-base text-slate-400"> / {total}</span>
                </p>
              </div>
              <div className="rounded-2xl bg-white/70 px-4 py-2 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Akurasi</p>
                <p className="text-2xl font-extrabold text-indigo-950">{pct}%</p>
              </div>
              {bestStreak >= 2 && (
                <div className="rounded-2xl bg-white/70 px-4 py-2 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Streak</p>
                  <p className="text-2xl font-extrabold text-orange-600">🔥 {bestStreak}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {wrong.length > 0 ? (
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-rose-100">
            <h3 className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <span>📝</span>
              <span>Kata yang perlu diulang ({wrong.length})</span>
            </h3>
            <ul className="mt-3 divide-y divide-slate-100 rounded-xl ring-1 ring-slate-100">
              {wrong.map((h) => (
                <li
                  key={h.vocabId}
                  className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm"
                >
                  <span className="font-mono font-bold text-indigo-950">{h.prompt}</span>
                  <span className="text-xs text-slate-500">{h.kana}</span>
                  <span className="text-xs font-semibold text-emerald-700">
                    → {h.choices[h.correctIndex]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-6 text-center shadow-md ring-1 ring-emerald-100">
            <p className="text-2xl">🎌</p>
            <p className="mt-1 text-lg font-bold text-emerald-700">
              Semua benar! すばらしい!
            </p>
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            onClick={handleRestart}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-300/50 transition hover:scale-[1.01] hover:shadow-xl active:scale-[0.99]"
          >
            <span>🔄</span>
            <span>Ulangi ({chapter.vocab.length} soal)</span>
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
              setStreak(0);
              setPhase("playing");
            }}
            disabled={wrong.length === 0}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-300/50 transition hover:scale-[1.01] hover:bg-indigo-700 hover:shadow-xl active:scale-[0.99] disabled:opacity-40"
          >
            <span>🎯</span>
            <span>Drill yang salah ({wrong.length})</span>
          </button>
        </div>
      </div>
    );
  }

  return null;
}