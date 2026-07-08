import { allChapters, totalVocabCount } from "@/data/vocab";
import QuizPlayer from "@/components/QuizPlayer";

type Props = {
  searchParams: Promise<{ bab?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const selectedSlug = params.bab ?? allChapters[0]?.slug;
  const selected =
    allChapters.find((c) => c.slug === selectedSlug) ?? allChapters[0];

  const activeCount = allChapters.filter((c) => c.vocab.length > 0).length;

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-50 via-pink-50 to-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-rose-600 ring-1 ring-rose-100">
          <span>🌸</span>
          <span className="font-nunito">Minna no Nihongo · Seri 2</span>
        </div>
        <h1 className="mt-3 bg-gradient-to-br from-indigo-950 via-violet-700 to-rose-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
          🇯🇵 Kotoba Quiz
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Tebak arti kosakata Jepang.{" "}
          <span className="font-bold text-indigo-700">{totalVocabCount}</span> kata dari{" "}
          <span className="font-bold text-indigo-700">{activeCount}</span> bab.
        </p>
      </header>

      {/* Chapter selector — sticky so users can switch bab at any time
          (mid-quiz, on result, or while scrolling on a phone). */}
      <nav className="sticky top-2 z-10 mb-6 -mx-4 sm:mx-0">
        <div className="mx-4 rounded-full bg-white/85 px-3 py-2 shadow-md ring-1 ring-rose-100 backdrop-blur sm:mx-0">
          <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
            {allChapters.map((c) => {
              const active = c.slug === selected?.slug;
              const empty = c.vocab.length === 0;
              // Pull chapter number from slug (bab-3 -> 3)
              const numMatch = c.slug.match(/(\d+)/);
              const chapterNum = numMatch ? numMatch[1] : null;
              const label = chapterNum ? `Bab ${chapterNum}` : c.title;
              return (
                <a
                  key={c.slug}
                  href={`/?bab=${c.slug}`}
                  className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold ring-1 transition ${
                    active
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white ring-indigo-600 shadow-md shadow-indigo-300/50"
                      : empty
                        ? "bg-slate-50 text-slate-400 ring-slate-200"
                        : "bg-white text-slate-700 ring-slate-200 hover:scale-105 hover:bg-rose-50 hover:ring-rose-200 hover:text-rose-700"
                  }`}
                  title={c.jp_title}
                >
                  <span>{label}</span>
                  <span
                    className={`text-xs ${
                      active ? "opacity-90" : "opacity-60"
                    }`}
                  >
                    ({c.vocab.length})
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Quiz */}
      {selected ? <QuizPlayer chapter={selected} /> : null}

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-slate-400">
        <p>
          Belajar mandiri itu indah. がんばって！ •{" "}
          <a
            href="https://github.com/kangcrypto/jp-vocab-quiz"
            className="font-semibold text-indigo-600 underline-offset-2 hover:underline"
          >
            source
          </a>
        </p>
      </footer>
    </main>
  );
}