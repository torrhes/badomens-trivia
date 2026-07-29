import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { PageShell } from '../components/SiteChrome';
import { quizSession, useQuizSession } from '../features/quiz/useQuizSession';
import { rankFromPercent } from '../features/result/rankFromScore';
import { exportShareImage } from '../lib/share/exportShareImage';

export const Route = createFileRoute('/result')({
  head: () => ({
    meta: [
      { title: 'RESULT — BAD OMENS // QUIZ' },
      { name: 'description', content: 'Your rank in the concrete jungle.' },
      { property: 'og:title', content: 'BAD OMENS // QUIZ — Result' },
      {
        property: 'og:description',
        content: 'Your rank in the concrete jungle.'
      },
      { name: 'robots', content: 'noindex' }
    ]
  }),
  component: ResultPage
});

function ResultPage() {
  const session = useQuizSession();
  const navigate = useNavigate();
  const shareRef = useRef<HTMLDivElement>(null);
  const [shareOpen, setShareOpen] = useState(false);
  const [exporting, setExporting] = useState(false);

  const stats = useMemo(() => {
    if (!session) return null;
    const total = session.questions.length;
    const correct = session.answers.filter((a) => a.correct).length;
    const pct = total > 0 ? (correct / total) * 100 : 0;
    const rank = rankFromPercent(pct);
    return { total, correct, pct: Math.round(pct), rank };
  }, [session]);

  useEffect(() => {
    if (!session || session.status !== 'finished') {
      // Redirect if landed here without a finished session
      const t = setTimeout(() => navigate({ to: '/' }), 200);
      return () => clearTimeout(t);
    }
  }, [session, navigate]);

  if (!session || !stats) {
    return (
      <PageShell>
        <div className="max-w-3xl mx-auto px-6 py-24 font-mono text-xs text-zinc-500">
          NO ACTIVE SESSION. RETURNING HOME…
        </div>
      </PageShell>
    );
  }

  const playAgain = () => {
    const { mode } = session;
    quizSession.reset();
    navigate({ to: '/play/$mode', params: { mode } });
  };

  const handleShare = async () => {
    if (!shareRef.current) return;
    setExporting(true);
    try {
      await exportShareImage(shareRef.current);
    } finally {
      setExporting(false);
    }
  };

  return (
    <PageShell>
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent mb-8">
          SESSION COMPLETE · {session.mode} · {session.difficulty}
        </div>

        <h1 className="font-display text-6xl md:text-9xl uppercase tracking-tighter leading-[0.85] text-balance">
          {stats.rank.headline}
        </h1>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900">
          <Stat label="Correct" value={`${stats.correct} / ${stats.total}`} />
          <Stat label="Accuracy" value={`${stats.pct}%`} />
          <Stat label="Score" value={session.score.toLocaleString()} />
          <Stat label="Best Streak" value={`×${session.bestStreak}`} />
        </div>

        <div className="mt-16 border border-zinc-900 bg-brand-surface p-8 md:p-12 relative overflow-hidden">
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            Your Rank
          </div>
          <div className="mt-4 flex items-end justify-between gap-6 flex-wrap">
            <div className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-brand-accent">
              {stats.rank.label}
            </div>
            <div className="font-mono text-sm text-zinc-400">
              TOP{' '}
              <span className="text-brand-text text-xl font-bold">
                {stats.rank.topPercent}%
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <button
            onClick={playAgain}
            className="bg-brand-accent hover-glitch text-brand-text px-6 py-3 font-mono text-xs tracking-widest uppercase rounded-[2px]"
          >
            ▶ Play Again
          </button>
          <button
            onClick={() => setShareOpen((v) => !v)}
            className="border border-zinc-800 hover:border-zinc-600 px-6 py-3 font-mono text-xs tracking-widest uppercase"
          >
            Share Result
          </button>
          <span
            title="Available in Phase 3"
            className="border border-zinc-900 px-6 py-3 font-mono text-xs tracking-widest uppercase text-zinc-700 cursor-not-allowed"
          >
            Leaderboard
          </span>
          <Link
            to="/"
            className="border border-zinc-900 hover:border-zinc-700 px-6 py-3 font-mono text-xs tracking-widest uppercase text-zinc-400"
          >
            Home
          </Link>
        </div>

        {shareOpen && (
          <div className="mt-12 border border-zinc-900 bg-brand-surface p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                Share Card Preview
              </div>
              <button
                onClick={handleShare}
                disabled={exporting}
                className="bg-brand-accent text-brand-text px-4 py-2 font-mono text-[10px] tracking-widest uppercase rounded-[2px] disabled:opacity-50"
              >
                {exporting ? 'Exporting…' : '↓ Download PNG'}
              </button>
            </div>
            <div className="overflow-auto">
              <div style={{ transformOrigin: 'top left' }} className="w-fit">
                <ShareCard
                  ref={shareRef}
                  headline={stats.rank.headline}
                  rankLabel={stats.rank.label}
                  correct={stats.correct}
                  total={stats.total}
                  score={session.score}
                  topPercent={stats.rank.topPercent}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </PageShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-brand-bg p-6">
      <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
        {label}
      </div>
      <div className="mt-3 font-display text-3xl md:text-4xl tabular-nums">
        {value}
      </div>
    </div>
  );
}

type ShareCardProps = {
  headline: string;
  rankLabel: string;
  correct: number;
  total: number;
  score: number;
  topPercent: number;
};

const ShareCard = ({
  ref,
  headline,
  rankLabel,
  correct,
  total,
  score,
  topPercent
}: ShareCardProps & { ref: React.Ref<HTMLDivElement> }) => (
  <div
    ref={ref}
    style={{ width: 540, height: 960 }}
    className="bg-brand-bg text-brand-text relative overflow-hidden"
  >
    <div className="absolute inset-0 grain-overlay" aria-hidden />
    <div className="relative z-10 h-full flex flex-col p-10">
      <div className="flex items-center gap-3">
        <div className="size-7 bg-brand-accent grid place-items-center">
          <span className="font-display font-bold text-base leading-none">
            B
          </span>
        </div>
        <span className="font-display text-lg uppercase tracking-tight">
          BAD OMENS <span className="text-brand-accent">//</span> QUIZ
        </span>
      </div>

      <div className="mt-24 font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
        I SURVIVED
      </div>
      <div className="mt-3 font-display text-[52px] leading-[0.9] uppercase tracking-tighter">
        {headline}
      </div>

      <div className="mt-16 flex items-baseline gap-4">
        <div className="font-display text-8xl leading-none tabular-nums">
          {correct}
          <span className="text-zinc-700">/{total}</span>
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-900 pt-6 flex justify-between">
        <div>
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            SCORE
          </div>
          <div className="font-display text-3xl tabular-nums">
            {score.toLocaleString()}
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            RANK
          </div>
          <div className="font-display text-3xl text-brand-accent uppercase">
            {rankLabel}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
          Placement
        </div>
        <div className="font-display text-5xl">TOP {topPercent}%</div>
      </div>

      <div className="flex-1" />

      <div className="border-t border-zinc-900 pt-6 flex items-end justify-between">
        <div>
          <div className="font-display text-2xl uppercase tracking-tight">
            CAN YOU BEAT ME?
          </div>
          <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            PLAY AT /BAD-OMENS-QUIZ
          </div>
        </div>
        <div className="size-2 bg-brand-accent" />
      </div>
      <div className="mt-4 font-mono text-[8px] text-zinc-700 uppercase tracking-widest leading-loose">
        Unofficial fan project · Not affiliated with the band
      </div>
    </div>
  </div>
);
