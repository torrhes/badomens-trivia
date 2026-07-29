import { createFileRoute } from '@tanstack/react-router';
import { PageShell } from '../components/SiteChrome';

export const Route = createFileRoute('/privacy')({
  head: () => ({
    meta: [
      { title: 'Privacy — BAD OMENS // QUIZ' },
      { name: 'description', content: 'Privacy policy.' },
      { property: 'og:title', content: 'Privacy — BAD OMENS // QUIZ' },
      { property: 'og:description', content: 'Privacy policy.' }
    ]
  }),
  component: () => (
    <PageShell>
      <article className="max-w-3xl mx-auto px-6 py-20 space-y-8">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
          // PRIVACY
        </div>
        <h1 className="font-display text-6xl uppercase tracking-tighter leading-none">
          Privacy
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          This early build stores nothing about you server-side. Quiz state
          lives only in memory in your browser tab. When accounts and
          leaderboards ship, we'll publish a full policy here.
        </p>
      </article>
    </PageShell>
  )
});
