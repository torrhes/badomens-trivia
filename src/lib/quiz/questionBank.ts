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

const DIFFICULTY_TIERS: Record<Difficulty, QuestionDifficulty[]> = {
  casual: ["easy", "easy", "medium"],
  fan: ["easy", "medium", "medium", "hard"],
  cult: ["medium", "hard", "hard", "expert"],
  basement: ["hard", "expert", "expert"],
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

function getPoolForMode(mode: GameMode, difficulty: Difficulty): Question[] {
  const cats = MODE_CATEGORIES[mode];
  const tiers = DIFFICULTY_TIERS[difficulty];

  return cats.flatMap((cat) =>
    (CATEGORY_BANKS[cat] ?? []).filter((q) => tiers.includes(q.difficulty)),
  );
}

export function pickQuestions(mode: GameMode, difficulty: Difficulty): Question[] {
  const count = QUESTION_COUNT[difficulty];
  const pool = getPoolForMode(mode, difficulty);

  if (pool.length === 0) {
    return shuffle(MOCK_QUESTIONS).slice(0, count);
  }

  const shuffled = shuffle(pool);
  const selected: Question[] = [];
  let index = 0;

  while (selected.length < count && shuffled.length > 0) {
    const question = shuffled[index % shuffled.length];
    selected.push({
      ...question,
      options: shuffle(question.options),
    });
    index += 1;
    if (selected.length >= count) break;
  }

  return selected.slice(0, count);
}
