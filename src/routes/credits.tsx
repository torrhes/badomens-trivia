import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/SiteChrome";

export const Route = createFileRoute("/credits")({
  head: () => ({
    meta: [
      { title: "Credits — BAD OMENS // QUIZ" },
      { name: "description", content: "Credits and acknowledgements." },
      { property: "og:title", content: "Credits — BAD OMENS // QUIZ" },
      { property: "og:description", content: "Credits and acknowledgements." },
    ],
  }),
  component: () => (
    <PageShell>
      <article className="max-w-3xl mx-auto px-6 py-20 space-y-8">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-accent">
          // CREDITS & DISCLAIMER
        </div>

        <h1 className="font-display text-6xl uppercase tracking-tighter leading-none">
          By fans, for fans.
        </h1>

        <p className="text-zinc-400 leading-relaxed">
          Hi! My name is Nayara Ferreira. I'm a Brazilian software developer and a huge Bad Omens
          fan.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          I created this project as a way to combine two things I really enjoy: software development
          and music. Building this quiz was a fun way for me to study, practice my skills,
          experiment with new ideas, and create something the Bad Omens community could enjoy.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          This is an independent, non-commercial, fan-made project created purely for educational
          and entertainment purposes.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          This website is not affiliated with, endorsed by, sponsored by, or officially connected to
          Bad Omens, its members, management, record label, or any of their representatives.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          I do not claim ownership of any Bad Omens-related names, trademarks, music, lyrics, album
          artwork, photographs, videos, or other copyrighted material referenced on this website.
          All rights to such material belong to their respective copyright and trademark owners.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          The website's original design, development, code, quiz structure, and original written
          content were created by me specifically for this fan project. Any third-party material or
          information referenced here is used solely for fan, educational, and entertainment
          purposes.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          Most importantly, this was made by a fan, for fans. I hope you have as much fun playing it
          as I had building it. 🖤
        </p>

        <p className="text-zinc-500 text-sm leading-relaxed">
          If you are a rights holder and have any concerns regarding content appearing on this
          website, please get in touch so it can be reviewed and, when appropriate, removed.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          Questions, found a bug, have some feedback, or just want to chat? Feel free to reach out!
          You can contact me at{" "}
          <a href="mailto:ntorrhes@gmail.com" className="text-brand-accent hover:underline">
            ntorrhes@gmail.com
          </a>
          .
        </p>

        <p className="text-zinc-500 text-sm leading-relaxed">
          If you are a rights holder and have any concerns regarding content appearing on this
          website, please get in touch so it can be reviewed and, when appropriate, removed.
        </p>
      </article>
    </PageShell>
  ),
});
