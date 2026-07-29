export type Rank = {
  key: string;
  label: string;
  minPct: number;
  maxPct: number;
  headline: string;
  topPercent: number; // synthetic "top X%" for share flair
};

export const RANKS: Rank[] = [
  {
    key: "new",
    label: "NEW TO THE CULT",
    minPct: 0,
    maxPct: 20,
    headline: "BI***, YOU OWE ME THE APOLOGY, YOU BARELY MADE IT IN",
    topPercent: 100,
  },
  {
    key: "bad",
    label: "BAD DECISIONS",
    minPct: 21,
    maxPct: 40,
    headline: "A LOT OF HENNESSY?YOU LOST THE PLOT",
    topPercent: 65,
  },
  {
    key: "villain",
    label: "LIKE A VILLAIN",
    minPct: 41,
    maxPct: 60,
    headline: "YOU BURN IT OUT",
    topPercent: 40,
  },
  {
    key: "concrete",
    label: "CONCRETE JUNGLE",
    minPct: 61,
    maxPct: 80,
    headline: "YOU CLIMBED TO THE SUN",
    topPercent: 22,
  },
  {
    key: "dethrone",
    label: "DETHRONE",
    minPct: 81,
    maxPct: 95,
    headline: "YOU HAVE REACHED THE PERALY GATES",
    topPercent: 8,
  },
  {
    key: "god",
    label: "FINDING GOD",
    minPct: 96,
    maxPct: 100,
    headline: "YOU FOUND GOD BEFORE HE FOUNDS YOU",
    topPercent: 2,
  },
];

export function rankFromPercent(pct: number): Rank {
  const clamped = Math.max(0, Math.min(100, Math.round(pct)));
  return RANKS.find((r) => clamped >= r.minPct && clamped <= r.maxPct) ?? RANKS[0];
}
