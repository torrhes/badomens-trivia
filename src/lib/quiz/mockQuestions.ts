/**
 * MOCK DATA — DEV ONLY.
 * File kept as a compatibility aggregator while the project moves to category-specific banks.
 */
import type { Question } from "./types";
import { BAND_FACT_QUESTIONS } from "./bandQuestions";
import { SONG_QUESTIONS } from "./songQuestions";
import { VIDEO_QUESTIONS } from "./videoQuestions";

export const MOCK_QUESTIONS: Question[] = [
  ...SONG_QUESTIONS,
  ...VIDEO_QUESTIONS,
  ...BAND_FACT_QUESTIONS,
];
