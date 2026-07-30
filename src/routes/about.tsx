import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BAD OMENS // QUIZ" },
      {
        name: "description",
        content: "About this unofficial fan-made project for Bad Omens fans.",
      },
      { property: "og:title", content: "About — BAD OMENS // QUIZ" },
      {
        property: "og:description",
        content: "About this unofficial fan-made project.",
      },
    ],
  }),
  component: () => (
    <PageShell>
      <article className="max-w-3xl mx-auto px-6 py-20 space-y-8">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
          // ABOUT
        </div>
        <h1 className="font-display text-6xl uppercase tracking-tighter leading-none">
          By a fan, for fans.
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          BAD OMENS // QUIZ is a community-built trivia experience. We're not the band, we're not
          their team — we're just people who wanted a place to test how deep we're in the concrete
          jungle.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          All questions during this early phase are placeholder mock data. Real, sourced questions
          will land through the admin curation flow.
        </p>
      </article>
    </PageShell>
  ),
});
