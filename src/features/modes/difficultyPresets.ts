import type { Difficulty } from "../../lib/quiz/types";

export type DifficultyPreset = {
  key: Difficulty;
  label: string;
  tagline: string;
  questions: number;
  intensity: string;
};

export const DIFFICULTY_PRESETS: DifficultyPreset[] = [
  {
    key: "casual",
    label: "CASUAL",
    tagline: "For the curious",
    questions: 10,
    intensity: "Easy",
  },
  {
    key: "fan",
    label: "FAN",
    tagline: "You know the setlist",
    questions: 15,
    intensity: "Medium",
  },
  {
    key: "cult",
    label: "CULT MEMBER",
    tagline: "Deep in the archive",
    questions: 20,
    intensity: "Hard",
  },
  {
    key: "basement",
    label: "CULT LEADER",
    tagline: "Only the obsessed survive",
    questions: 20,
    intensity: "Extreme",
  },
];

export const GAME_MODES = [
  {
    key: "mixed",
    index: "01",
    label: "MIXED QUIZ",
    desc: "A volatile blend of tracks, videos, and band history.",
  },
  {
    key: "song",
    index: "02",
    label: "GUESS THE SONG",
    desc: "Identify records and chronologies.",
  },
  {
    key: "video",
    index: "03",
    label: "MUSIC VIDEOS",
    desc: "Visual recognition of the concrete cinema.",
  },
  {
    key: "quote",
    index: "04",
    label: "BAND FACTS",
    desc: "Curiosities, lore, releases, and live history.",
  },
] as const;
