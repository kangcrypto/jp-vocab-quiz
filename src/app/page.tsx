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

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8 sm:py-12">
      {/* Header */}
      <header className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-rose-600">
          Minna no Nihongo · Seri 2
        </p>
        <h1 className="mt-2 text-3xl font-bold text-zinc-900 sm:text-4xl">
          🇯🇵 Kotoba Quiz
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Tebak arti kosakata Jepang. Total {totalVocabCount} kata terdaftar
          dari {allChapters.filter((c) => c.vocab.length > 0).length} bab.
        </p>
      </header>

      {/* Chapter selector */}
      <nav className="mb-6 flex flex-wrap justify-center gap-2">
        {allChapters.map((c) => {
          const active = c.slug === selected?.slug;
          const empty = c.vocab.length === 0;
          // Pull the chapter number out of the slug (e.g. "bab-3" -> 3) so the
          // tab label stays in sync with whatever number Boss puts in vocab.ts.
          const numMatch = c.slug.match(/(\d+)/);
          const chapterNum = numMatch ? numMatch[1] : null;
          const label = chapterNum ? `Bab ${chapterNum}` : c.title;
          return (
            <a
              key={c.slug}
              href={`/?bab=${c.slug}`}
              className={`rounded-full px-4 py-1.5 text-sm ring-1 transition ${
                active
                  ? "bg-zinc-900 text-white ring-zinc-900"
                  : empty
                    ? "bg-zinc-50 text-zinc-400 ring-zinc-200"
                    : "bg-white text-zinc-700 ring-zinc-300 hover:bg-zinc-50"
              }`}
              title={c.jp_title}
            >
              {label}
              <span className="ml-1.5 text-xs opacity-70">
                ({c.vocab.length})
              </span>
            </a>
          );
        })}
      </nav>

      {/* Quiz */}
      {selected ? <QuizPlayer chapter={selected} /> : null}

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-zinc-400">
        <p>
          Belajar mandiri itu indah. がんばって！ •{" "}
          <a
            href="https://github.com/fleaksead/jp-vocab-quiz"
            className="underline-offset-2 hover:underline"
          >
            source
          </a>
        </p>
      </footer>
    </main>
  );
}
