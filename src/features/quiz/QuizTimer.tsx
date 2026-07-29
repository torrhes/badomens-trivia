import { useEffect, useState } from 'react';

export function QuizTimer({
  durationMs,
  runningKey,
  paused,
  onExpire
}: {
  durationMs: number;
  runningKey: string | number;
  paused: boolean;
  onExpire: () => void;
}) {
  const [start, setStart] = useState(() => Date.now());
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    setStart(Date.now());
    setNow(Date.now());
  }, [runningKey]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setNow(Date.now()), 100);
    return () => clearInterval(id);
  }, [paused, runningKey]);

  const elapsed = paused ? 0 : now - start;
  const remaining = Math.max(0, durationMs - elapsed);
  const pct = Math.max(0, Math.min(100, (remaining / durationMs) * 100));

  useEffect(() => {
    if (!paused && remaining <= 0) onExpire();
  }, [remaining, paused, onExpire]);

  return (
    <div className="h-[2px] w-full bg-zinc-900 relative overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 bg-brand-accent transition-[width] duration-100 ease-linear"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
