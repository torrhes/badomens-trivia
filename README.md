# BAD OMENS // QUIZ

An **unofficial**, **fan-made** quiz for **Bad Omens** fans. Test how well you know the discography, music videos, and band history—from casual listening to cult-leader obsession.

> **Disclaimer:** This project is not affiliated with the band, Sumerian Records, or any official entity. All audio and visual material belongs to the respective copyright holders.

## Features

- **Game modes**
  - **Mixed Quiz** — random blend of songs, videos, and band trivia
  - **Guess the Song** — identify tracks from short audio clips
  - **Music Videos** — visual recognition of official videos
  - **Band Facts** — lore, releases, interviews, and history
- **Four session difficulty tiers** (separate from per-question easy/medium/hard/expert labels)
  - **Casual** — 10 questions, generous timer; mostly easy with some medium
  - **Fan** — 15 questions; easy, medium, and some hard
  - **Cult Member** — 20 questions; easy, medium, and hard
  - **Cult Leader** — 20 questions, tight timer; includes **expert** questions
- **Scoring** — base points per correct answer, speed bonus, difficulty bonus, and streak multiplier
- **Audio clips** — up to **2 plays** of **3 seconds** each per question, with source credit (YouTube · Bad Omens · Sumerian Records)
- **Results** — rank, shareable image, and answer review

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/)
- [TanStack Router](https://tanstack.com/router) (routes in `src/routes/`)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (animations)

## Prerequisites

- **Node.js** 20+ (recommended)
- **npm** (or adapt commands for pnpm/yarn)

## Getting started

```bash
# install dependencies
npm install

# development (HMR)
npm run dev

# production build
npm run build

# preview production build
npm run preview

# lint
npm run lint
```

Open the URL Vite prints in the terminal (usually `http://localhost:5173`).

## App flow

1. Home → pick a mode (`/play/:mode`)
2. Choose difficulty tier → start session (`/quiz/:mode/:diff`)
3. Timed questions → feedback → **Result** (`/result`)

Session state lives in client memory (`useQuizSession`). Reloading mid-quiz restarts the session if you land directly on the quiz URL.

## Project structure (overview)

```
src/
├── routes/              # pages (TanStack Router file-based)
├── features/
│   ├── quiz/            # session UI (questions, timer, feedback)
│   └── modes/           # mode and difficulty presets
├── lib/
│   ├── quiz/            # question banks, types, selection logic
│   └── scoring/         # score calculation
├── components/          # shared layout (SiteChrome)
└── assets/              # audio, images, visual assets
```

### Where to edit questions

| File | Content |
|------|---------|
| `src/lib/quiz/songQuestions.ts` | Audio / song questions |
| `src/lib/quiz/videoQuestions.ts` | Music video questions |
| `src/lib/quiz/bandQuestions.ts` | Band facts and lore |
| `src/lib/quiz/audioLibrary.ts` | MP3 map under `src/assets/audios/` |
| `src/lib/quiz/mediaLibrary.ts` | Video stills / images |
| `src/lib/quiz/questionBank.ts` | Mode pools + difficulty weights per tier |

Each question uses the `Question` type in `src/lib/quiz/types.ts` (`id`, `category`, `difficulty`, `options`, `correctAnswer`, optional media, etc.).

### Session tier vs. question difficulty

- **Tier** (`casual`, `fan`, `cult`, `basement`): question count, time limit, and **weighted** draw of question difficulties per round (see `DIFFICULTY_WEIGHTS` in `questionBank.ts`).
- **Question difficulty** (`easy`, `medium`, `hard`, `expert`): affects scoring and UI labels.

## npm scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | `tsc -b` + static build |
| `npm run preview` | Serve `dist/` |
| `npm run lint` | ESLint |

## License and media

Repository code: use according to the project license (add a `LICENSE` file if you publish formally; otherwise treat as personal/educational fan use).

**Music, images, and trademarks** related to Bad Omens and Sumerian Records are **not** owned by this repo. Clips are limited in-app by duration and plays per question; keep credits when adding new assets.

---

*How deep are you in the concrete jungle?*
