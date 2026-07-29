import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "../components/SiteChrome";
import { GAME_MODES } from "../features/modes/difficultyPresets";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BAD OMENS // QUIZ — How deep are you in the concrete jungle?" },
      {
        name: "description",
        content:
          "An unofficial fan-made quiz for fans of Bad Omens. Test your loyalty across songs, videos, quotes and band history.",
      },
      { property: "og:title", content: "BAD OMENS // QUIZ" },
      {
        property: "og:description",
        content: "How deep are you in the concrete jungle? An unofficial fan-made quiz.",
      },
      { name: "twitter:title", content: "BAD OMENS // QUIZ" },
      {
        name: "twitter:description",
        content: "How deep are you in the concrete jungle?",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell showHeroBackdrop>
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 space-y-32">
        {/* Hero */}
        <section className="relative overflow-hidden min-h-[420px]">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">
            <div className="lg:col-span-7 z-10">
              <span className="font-mono text-xs text-brand-accent tracking-[0.3em] uppercase block mb-6">
                Unofficial Fan Experience
              </span>
              <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-none uppercase font-bold text-balance tracking-tighter">
                BAD OMENS <br />
                <span className="text-zinc-800">// QUIZ</span>
              </h1>
              <p className="mt-8 text-lg font-mono text-zinc-500 max-w-[42ch] leading-relaxed">
                HOW DEEP ARE YOU IN THE CONCRETE JUNGLE? Test your loyalty against the cult.
              </p>
              <div className="mt-12 flex items-center gap-4 flex-wrap">
                <Link
                  to="/play/$mode"
                  params={{ mode: "mixed" }}
                  className="group bg-brand-accent text-brand-text px-6 py-3 rounded-[2px] ring-1 ring-brand-accent hover-glitch focus:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg focus-visible:ring-brand-text"
                >
                  <div className="flex items-center gap-3">
                    <svg
                      className="size-4 shrink-0"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M3 2l10 6-10 6V2z" />
                    </svg>
                    <span className="font-mono text-sm font-medium tracking-[0.15em] uppercase">
                      Enter The Quiz
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <span className="font-mono text-xs font-lighttracking-[0.15em] uppercase  text-zinc-600 absolute bottom-0 right-0 z-10">
            Bryan Kirks • DYFL EU tour 2025
          </span>
        </section>

        {/* Game Modes */}
        <section className="space-y-12">
          <div className="flex items-center gap-4">
            <h2 className="font-mono text-xs tracking-[0.4em] uppercase text-zinc-500">
              Available Protocols
            </h2>
            <div className="h-px flex-1 bg-zinc-900" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900">
            {GAME_MODES.map((m) => (
              <Link
                key={m.key}
                to="/play/$mode"
                params={{ mode: m.key }}
                className="bg-brand-bg p-8 group hover:bg-brand-surface transition-colors focus:outline-none focus-visible:bg-brand-surface"
              >
                <span className="font-display text-2xl text-zinc-800 group-hover:text-brand-accent transition-colors">
                  {m.index}
                </span>
                <h3 className="mt-6 font-display text-2xl uppercase tracking-wide">{m.label}</h3>
                <p className="mt-4 text-xs font-mono text-zinc-500 leading-relaxed max-w-[32ch]">
                  {m.desc}
                </p>
                <div className="mt-8 flex items-center text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[10px] tracking-widest">INITIALIZE</span>
                  <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
