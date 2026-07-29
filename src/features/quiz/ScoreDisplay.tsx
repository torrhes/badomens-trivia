export function ScoreDisplay({
  score,
  streak
}: {
  score: number;
  streak: number;
}) {
  return (
    <div className="flex items-baseline gap-6">
      <div>
        <div className="font-mono text-[9px] tracking-widest uppercase text-zinc-500">
          SCORE
        </div>
        <div className="font-display text-2xl md:text-3xl tabular-nums">
          {score.toLocaleString()}
        </div>
      </div>
      <div>
        <div className="font-mono text-[9px] tracking-widest uppercase text-zinc-500">
          STREAK
        </div>
        <div
          className={
            'font-display text-2xl md:text-3xl tabular-nums ' +
            (streak >= 3 ? 'text-brand-accent' : '')
          }
        >
          ×{streak}
        </div>
      </div>
    </div>
  );
}
