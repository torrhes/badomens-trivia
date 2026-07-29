import { useSyncExternalStore } from "react";
import type { AnswerRecord, Difficulty, GameMode, SessionState } from "../../lib/quiz/types";
import { pickQuestions, QUESTION_COUNT, TIME_LIMIT_MS } from "../../lib/quiz/questionBank";
import { calculateScore } from "../../lib/scoring/scoring";

type Listener = () => void;

let state: SessionState | null = null;
const listeners = new Set<Listener>();

function emit() {
  listeners.forEach((l) => l());
}

function subscribe(l: Listener) {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

function getSnapshot() {
  return state;
}

export const quizSession = {
  start(mode: GameMode, difficulty: Difficulty) {
    state = {
      mode,
      difficulty,
      questions: pickQuestions(mode, difficulty),
      currentIndex: 0,
      answers: [],
      score: 0,
      streak: 0,
      bestStreak: 0,
      startedAt: Date.now(),
      status: "playing",
    };
    emit();
  },

  answer(picked: string | null, timeMs: number) {
    if (!state || state.status !== "playing") return;
    const q = state.questions[state.currentIndex];
    if (!q) return;
    const correct = picked !== null && picked === q.correctAnswer;
    const nextStreak = correct ? state.streak + 1 : 0;
    const timeLimitMs = TIME_LIMIT_MS[state.difficulty];
    const breakdown = calculateScore({
      correct,
      timeMs: Math.min(timeMs, timeLimitMs),
      timeLimitMs,
      difficulty: q.difficulty,
      streakAfter: nextStreak,
    });
    const record: AnswerRecord = {
      questionId: q.id,
      picked,
      correct,
      timeMs,
      earned: breakdown.total,
    };
    state = {
      ...state,
      answers: [...state.answers, record],
      score: state.score + breakdown.total,
      streak: nextStreak,
      bestStreak: Math.max(state.bestStreak, nextStreak),
      status: "reviewing",
    };
    emit();
    return { record, breakdown };
  },

  next() {
    if (!state || state.status !== "reviewing") return;
    const nextIndex = state.currentIndex + 1;
    if (nextIndex >= state.questions.length) {
      state = { ...state, status: "finished" };
    } else {
      state = { ...state, currentIndex: nextIndex, status: "playing" };
    }
    emit();
  },

  reset() {
    state = null;
    emit();
  },

  getState(): SessionState | null {
    return state;
  },
};

export function useQuizSession(): SessionState | null {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export { QUESTION_COUNT, TIME_LIMIT_MS };
