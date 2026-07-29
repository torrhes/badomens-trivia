import { createFileRoute } from '@tanstack/react-router';
import { PageShell } from '../components/SiteChrome';

export const Route = createFileRoute('/credits')({
  head: () => ({
    meta: [
      { title: 'Credits — BAD OMENS // QUIZ' },
      { name: 'description', content: 'Credits and acknowledgements.' },
      { property: 'og:title', content: 'Credits — BAD OMENS // QUIZ' },
      { property: 'og:description', content: 'Credits and acknowledgements.' }
    ]
  }),
  component: () => (
    <PageShell>
      <article className="max-w-3xl mx-auto px-6 py-20 space-y-8">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
          // CREDITS
        </div>
        <h1 className="font-display text-6xl uppercase tracking-tighter leading-none">
          Concrete crew
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          Design, engineering, and question curation by the community. Facts and
          quotes will always be attributed to their real published sources when
          we go live with curated content.
        </p>
      </article>
    </PageShell>
  )
});
