export type GameMode = "mixed" | "song" | "video" | "quote";
export type Difficulty = "casual" | "fan" | "cult" | "basement";
export type QuestionCategory = "song" | "video" | "band";
export type QuestionDifficulty = "easy" | "medium" | "hard" | "expert";

export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  source?: string;
};

export type Question = {
  id: string;
  category: QuestionCategory;
  difficulty: QuestionDifficulty;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
  source?: string;
  mediaType?: "image" | "audio";
  mediaFormat?: "audio" | "video";
  mediaUrl?: string;
  mediaAssetId?: string;
  imageSource?: string;
  startSeconds?: number;
  durationSeconds?: number;
  funFact?: string;
  tags?: string[];
  group?: string;
  timeLimitMs?: number;
};

export type AnswerRecord = {
  questionId: string;
  picked: string | null;
  correct: boolean;
  timeMs: number;
  earned: number;
};

export type SessionStatus = "idle" | "playing" | "reviewing" | "finished";

export type SessionState = {
  mode: GameMode;
  difficulty: Difficulty;
  questions: Question[];
  currentIndex: number;
  answers: AnswerRecord[];
  score: number;
  streak: number;
  bestStreak: number;
  startedAt: number;
  status: SessionStatus;
};
