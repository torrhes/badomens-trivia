import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import heroBgImg from "../assets/img-bg.jpg";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-40 bg-brand-bg/80 backdrop-blur-sm border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="size-17 bg-brand-accent grid place-items-center rounded-[2px]">
            <span className="font-display font-bold text-lg leading-none text-brand-text">
              B0//QUIZ
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-[0.2em] font-medium hidden sm:block text-brand-text">
            SPECTER FRAGMENT // V.0.4
          </span>
        </Link>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-900 pt-20 pb-12 px-6 mt-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-6 max-w-md">
          <div className="font-display text-2xl tracking-tighter">
            BAD OMENS <span className="text-brand-accent">//</span> QUIZ
          </div>
          <p className="font-mono text-[10px] text-zinc-600 uppercase leading-loose">
            BAD OMENS // QUIZ is an unofficial fan-made project and is not affiliated with or
            endorsed by Bad Omens or their representatives.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-4 h-fit">
          <Link
            to="/about"
            className="font-mono text-[10px] tracking-widest text-zinc-500 hover:text-brand-text uppercase transition-colors"
          >
            About
          </Link>
          <Link
            to="/privacy"
            className="font-mono text-[10px] tracking-widest text-zinc-500 hover:text-brand-text uppercase transition-colors"
          >
            Privacy
          </Link>
          <Link
            to="/credits"
            className="font-mono text-[10px] tracking-widest text-zinc-500 hover:text-brand-text uppercase transition-colors"
          >
            Credits
          </Link>
          <Link
            to="/terms"
            className="font-mono text-[10px] tracking-widest text-zinc-500 hover:text-brand-text uppercase transition-colors"
          >
            Terms
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-950/5 flex justify-between items-center">
        <span className="font-mono text-[9px] text-zinc-800 uppercase">
          © {new Date().getFullYear()} NAYARA FERREIRA - NTORRHES@GMAIL.COM
        </span>
        <div className="flex gap-4">
          <div className="size-1 bg-brand-accent" />
          <div className="size-1 bg-zinc-900" />
          <div className="size-1 bg-zinc-900" />
        </div>
      </div>
    </footer>
  );
}

export function PageShell({
  children,
  showHeroBackdrop = false,
}: {
  children: ReactNode;
  showHeroBackdrop?: boolean;
}) {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden />
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden />
      <SiteNav />
      <main className="relative z-10">
        {showHeroBackdrop && (
          <div
            className="absolute inset-0 hero-backdrop"
            aria-hidden="true"
            style={{ backgroundImage: `url(${heroBgImg})` }}
          />
        )}
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
