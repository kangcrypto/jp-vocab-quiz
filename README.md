# 🇯🇵 Kotoba Quiz

Web app latihan vocab bahasa Jepang berbasis **Minna no Nihongo Seri 2 (revisi 2017)**.

## Features

- **Multi-bab quiz** (Bab 1–4 saat ini, 168 kata)
- **4-pilihan ganda** (JP → ID)
- **Random shuffle** deterministik per sesi
- **Drill ulang** vocab yang salah
- **Hint bacaan** hiragana + romaji (opsional)
- **Progress bar** + counter benar live
- **Result page** dengan grade (🏆 🎉 💪 📚)

## Stack

- [Next.js 16](https://nextjs.org/) (App Router + Turbopack)
- TypeScript
- Tailwind CSS v4
- React Server + Client Components

## Local dev

```bash
npm install
npm run dev
# buka http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy

Siap deploy ke [Vercel](https://vercel.com) — klik "New Project" → import repo ini → deploy.

## Project structure

```
src/
├── app/
│   ├── layout.tsx       # root layout
│   ├── page.tsx         # homepage (server component)
│   └── globals.css      # tailwind imports
├── components/
│   └── QuizPlayer.tsx   # quiz state machine (client component)
└── data/
    ├── types.ts         # shared types (Vocab, Chapter, Question)
    ├── vocab.ts         # vocab data per chapter
    └── quiz.ts          # buildQuestions() — PRNG + distractor selection
```

## Adding new chapters

Edit `src/data/vocab.ts` and append a new `chapterN` constant, then add it to the `allChapters` array. Use the same shape:

```ts
export const chapter5: Chapter = {
  slug: "bab-5",
  title: "Bab 5 — (your title)",
  jp_title: "第5課 ...",
  description: "...",
  vocab: [
    { id: "5-01", jp: "...", kana: "...", romaji: "...", id_meaning: "..." },
    ...
  ],
};
```

## License

MIT — see `LICENSE` (todo).
