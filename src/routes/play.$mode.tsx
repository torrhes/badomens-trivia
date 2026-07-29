import {
  createFileRoute,
  Link,
  useNavigate,
  useParams,
  notFound
} from '@tanstack/react-router';
import { PageShell } from '../components/SiteChrome';
import {
  DIFFICULTY_PRESETS,
  GAME_MODES
} from '../features/modes/difficultyPresets';
import { quizSession } from '../features/quiz/useQuizSession';
import type { Difficulty, GameMode } from '../lib/quiz/types';
import { cn } from '../lib/utils';

const VALID_MODES = new Set(['mixed', 'song', 'video', 'quote']);

export const Route = createFileRoute('/play/$mode')({
  parseParams: (p) => {
    if (!VALID_MODES.has(p.mode)) throw notFound();
    return { mode: p.mode as GameMode };
  },
  head: ({ params }) => {
    const label =
      GAME_MODES.find((m) => m.key === params.mode)?.label ?? 'QUIZ';
    return {
      meta: [
        { title: `${label} — BAD OMENS // QUIZ` },
        {
          name: 'description',
          content: `Pick your difficulty for ${label}. An unofficial fan-made quiz.`
        },
        { property: 'og:title', content: `${label} — BAD OMENS // QUIZ` },
        {
          property: 'og:description',
          content: `Pick your difficulty for ${label}.`
        }
      ]
    };
  },
  component: PlayMode
});

function PlayMode() {
  const { mode } = useParams({ from: '/play/$mode' });
  const navigate = useNavigate();
  const modeMeta = GAME_MODES.find((m) => m.key === mode)!;

  const start = (diff: Difficulty) => {
    quizSession.start(mode as GameMode, diff);
    navigate({ to: '/quiz/$mode/$diff', params: { mode, diff } });
  };

  return (
    <PageShell>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase text-zinc-600 mb-8">
          <Link to="/" className="hover:text-brand-text">
            HOME
          </Link>
          <span>/</span>
          <span className="text-brand-text">{modeMeta.label}</span>
        </div>

        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-4">
            Protocol {modeMeta.index}
          </span>
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9]">
            {modeMeta.label}
          </h1>
          <p className="mt-6 font-mono text-sm text-zinc-500 max-w-[52ch]">
            SELECT YOUR DIFFICULTY. FOUR TIERS OF THE CONCRETE JUNGLE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900">
          {DIFFICULTY_PRESETS.map((d, i) => (
            <button
              key={d.key}
              onClick={() => start(d.key)}
              className={cn(
                'group text-left bg-brand-bg p-8 hover:bg-brand-surface transition-colors focus:outline-none focus-visible:bg-brand-surface min-h-[280px] flex flex-col',
                d.key === 'basement' &&
                  'bg-brand-surface hover:bg-brand-elev relative'
              )}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] tracking-widest text-brand-accent">
                  TIER 0{i + 1}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
                  {d.intensity}
                </span>
              </div>
              <div
                className={cn(
                  'mt-8 font-display uppercase tracking-tight leading-[0.9]',
                  d.key === 'basement'
                    ? 'text-4xl text-brand-accent'
                    : 'text-3xl'
                )}
              >
                {d.label}
              </div>
              <div className="mt-2 font-mono text-[11px] text-zinc-500 uppercase">
                {d.tagline}
              </div>
              <div className="flex-1" />
              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-display text-6xl md:text-7xl leading-none tabular-nums">
                  {d.questions}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">
                  questions
                </span>
              </div>
              {d.key === 'basement' && (
                <div className="absolute inset-0 pointer-events-none shadow-[0_0_60px_-10px_rgba(185,28,28,0.35)_inset]" />
              )}
            </button>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
