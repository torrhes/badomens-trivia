import { createFileRoute } from '@tanstack/react-router';
import { PageShell } from '../components/SiteChrome';

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: 'Terms — BAD OMENS // QUIZ' },
      { name: 'description', content: 'Terms of use.' },
      { property: 'og:title', content: 'Terms — BAD OMENS // QUIZ' },
      { property: 'og:description', content: 'Terms of use.' }
    ]
  }),
  component: () => (
    <PageShell>
      <article className="max-w-3xl mx-auto px-6 py-20 space-y-8">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
          // TERMS
        </div>
        <h1 className="font-display text-6xl uppercase tracking-tighter leading-none">
          Terms
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          BAD OMENS // QUIZ is an unofficial fan-made project and is not
          affiliated with or endorsed by Bad Omens or their representatives. All
          trademarks belong to their respective owners.
        </p>
      </article>
    </PageShell>
  )
});
