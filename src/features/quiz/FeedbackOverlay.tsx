import { motion, AnimatePresence } from "motion/react";
import type { ScoreBreakdown } from "../../lib/scoring/scoring";

export function FeedbackOverlay({
  correct,
  breakdown,
  correctAnswer,
  explanation,
  funFact,
  source,
  streak,
  onNext,
}: {
  correct: boolean;
  breakdown: ScoreBreakdown | null;
  correctAnswer: string;
  explanation?: string;
  funFact?: string;
  source?: string;
  streak: number;
  onNext: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="mt-10 border border-zinc-900 bg-brand-surface p-6 md:p-8 rounded-[2px]"
        aria-live="polite"
      >
        <div className="flex items-baseline gap-4">
          <span
            className={
              "font-display text-3xl md:text-4xl uppercase tracking-tight " +
              (correct ? "text-brand-success" : "text-brand-accent")
            }
          >
            {correct ? "CORRECT" : "WRONG"}
          </span>
          {breakdown && breakdown.total > 0 && (
            <span className="font-mono text-xs text-brand-text">+{breakdown.total} XP</span>
          )}
          {!correct && <span className="font-mono text-xs text-zinc-500">STREAK LOST</span>}
        </div>

        {breakdown && correct && (
          <div className="mt-3 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span>BASE +{breakdown.base}</span>
            {breakdown.speedBonus > 0 && <span>SPEED +{breakdown.speedBonus}</span>}
            {breakdown.hardBonus > 0 && <span>HARD +{breakdown.hardBonus}</span>}
            {breakdown.multiplier > 1 && (
              <span className="text-brand-accent">×{breakdown.multiplier} STREAK</span>
            )}
            {streak >= 3 && <span className="text-brand-accent">{streak} ANSWER STREAK</span>}
          </div>
        )}

        {!correct && (
          <div className="mt-4 font-mono text-xs text-zinc-400">
            CORRECT ANSWER: <span className="text-brand-text">{correctAnswer}</span>
          </div>
        )}

        {explanation && (
          <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-2xl">{explanation}</p>
        )}

        {source && (
          <p className="mt-3 text-sm text-zinc-400">
            <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
              Source:{" "}
            </span>
            {source.startsWith("http://") || source.startsWith("https://") ? (
              <a
                className="ml-2 text-brand-text underline"
                href={source}
                target="_blank"
                rel="noopener noreferrer"
              >
                {source}
              </a>
            ) : (
              <span className="ml-2 text-brand-text">{source}</span>
            )}
          </p>
        )}

        {funFact && (
          <p className="mt-4 text-sm text-zinc-300 leading-relaxed max-w-2xl">
            <strong className="uppercase text-[10px] tracking-widest text-zinc-500">
              Fun fact:
            </strong>
            <span className="block mt-2">{funFact}</span>
          </p>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onNext}
            className="group bg-brand-accent hover-glitch text-brand-text px-5 py-2.5 font-mono text-xs tracking-widest uppercase rounded-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg focus-visible:ring-brand-accent"
          >
            Next →
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
