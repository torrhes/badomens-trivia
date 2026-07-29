import { BAND_FACT_QUESTIONS } from "./bandQuestions";
import { MOCK_QUESTIONS } from "./mockQuestions";
import { SONG_QUESTIONS } from "./songQuestions";
import { VIDEO_QUESTIONS } from "./videoQuestions";
import type { Difficulty, GameMode, Question, QuestionCategory, QuestionDifficulty } from "./types";

const CATEGORY_BANKS: Record<QuestionCategory, Question[]> = {
  song: SONG_QUESTIONS,
  video: VIDEO_QUESTIONS,
  band: BAND_FACT_QUESTIONS,
};

/** Each entry is one weighted draw when building a session (mostly easy → full spectrum). */
const DIFFICULTY_WEIGHTS: Record<Difficulty, QuestionDifficulty[]> = {
  casual: [
    "easy",
    "easy",
    "easy",
    "easy",
    "easy",
    "easy",
    "easy",
    "medium",
    "medium",
    "medium",
  ],
  fan: [
    "easy",
    "easy",
    "easy",
    "medium",
    "medium",
    "medium",
    "medium",
    "hard",
    "hard",
    "hard",
  ],
  cult: [
    "easy",
    "easy",
    "medium",
    "medium",
    "medium",
    "hard",
    "hard",
    "hard",
    "hard",
    "hard",
  ],
  basement: [
    "easy",
    "medium",
    "medium",
    "hard",
    "hard",
    "hard",
    "expert",
    "expert",
    "expert",
    "expert",
  ],
};

const MODE_CATEGORIES: Record<GameMode, QuestionCategory[]> = {
  mixed: ["song", "video", "band"],
  song: ["song"],
  video: ["video"],
  quote: ["band"],
};

export const QUESTION_COUNT: Record<Difficulty, number> = {
  casual: 10,
  fan: 15,
  cult: 20,
  basement: 20,
};

export const TIME_LIMIT_MS: Record<Difficulty, number> = {
  casual: 30_000,
  fan: 25_000,
  cult: 20_000,
  basement: 15_000,
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function questionsForMode(
  cats: QuestionCategory[],
  diff: QuestionDifficulty,
): Question[] {
  return cats.flatMap((cat) =>
    (CATEGORY_BANKS[cat] ?? []).filter((q) => q.difficulty === diff),
  );
}

function pickUnused(candidates: Question[], usedIds: Set<string>): Question | undefined {
  const available = candidates.filter((q) => !usedIds.has(q.id));
  if (available.length === 0) return undefined;
  return available[Math.floor(Math.random() * available.length)];
}

export function pickQuestions(mode: GameMode, difficulty: Difficulty): Question[] {
  const count = QUESTION_COUNT[difficulty];
  const cats = MODE_CATEGORIES[mode];
  const weights = DIFFICULTY_WEIGHTS[difficulty];
  const allowedDiffs = [...new Set(weights)];

  const modePool = cats.flatMap((cat) => CATEGORY_BANKS[cat] ?? []);
  if (modePool.length === 0) {
    return shuffle(MOCK_QUESTIONS).slice(0, count);
  }

  const selected: Question[] = [];
  const usedIds = new Set<string>();

  for (let i = 0; i < count; i++) {
    const targetDiff = weights[Math.floor(Math.random() * weights.length)];
    let question =
      pickUnused(questionsForMode(cats, targetDiff), usedIds) ??
      pickUnused(
        shuffle(allowedDiffs)
          .flatMap((d) => questionsForMode(cats, d))
          .filter((q, idx, arr) => arr.findIndex((x) => x.id === q.id) === idx),
        usedIds,
      ) ??
      pickUnused(modePool, usedIds);

    if (!question) {
      question = modePool[Math.floor(Math.random() * modePool.length)];
    }

    usedIds.add(question.id);
    selected.push({
      ...question,
      options: shuffle(question.options),
    });
  }

  return selected;
}
