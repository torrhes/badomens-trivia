import type { QuestionDifficulty } from "../quiz/types";

export type ScoreInput = {
  correct: boolean;
  timeMs: number;
  timeLimitMs: number;
  difficulty: QuestionDifficulty;
  streakAfter: number; // streak count AFTER applying this answer
};

export type ScoreBreakdown = {
  base: number;
  speedBonus: number;
  hardBonus: number;
  multiplier: number;
  total: number;
};

const HARD_BONUS: Record<QuestionDifficulty, number> = {
  easy: 0,
  medium: 15,
  hard: 30,
  expert: 50,
};

export function streakMultiplier(streak: number): number {
  if (streak >= 8) return 3;
  if (streak >= 5) return 2;
  if (streak >= 3) return 1.5;
  return 1;
}

export function calculateScore(input: ScoreInput): ScoreBreakdown {
  if (!input.correct) {
    return { base: 0, speedBonus: 0, hardBonus: 0, multiplier: 1, total: 0 };
  }
  const base = 100;
  const speedRatio = Math.max(0, 1 - input.timeMs / input.timeLimitMs);
  const speedBonus = Math.round(50 * speedRatio);
  const hardBonus = HARD_BONUS[input.difficulty];
  const multiplier = streakMultiplier(input.streakAfter);
  const total = Math.round((base + speedBonus + hardBonus) * multiplier);
  return { base, speedBonus, hardBonus, multiplier, total };
}
