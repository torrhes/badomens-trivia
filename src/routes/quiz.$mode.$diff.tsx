import { createFileRoute, useNavigate, useParams, notFound, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { PageShell } from "../components/SiteChrome";
import { QuestionCard } from "../features/quiz/QuestionCard";
import { AnswerButton } from "../features/quiz/AnswerButton";
import { QuizTimer } from "../features/quiz/QuizTimer";
import { ScoreDisplay } from "../features/quiz/ScoreDisplay";
import { FeedbackOverlay } from "../features/quiz/FeedbackOverlay";
import { quizSession, useQuizSession, TIME_LIMIT_MS } from "../features/quiz/useQuizSession";
import type { Difficulty, GameMode } from "../lib/quiz/types";
import type { ScoreBreakdown } from "../lib/scoring/scoring";

const VALID_MODES = new Set(["mixed", "song", "video", "quote"]);
const VALID_DIFF = new Set(["casual", "fan", "cult", "basement"]);
const LETTERS = ["A", "B", "C", "D"];

export const Route = createFileRoute("/quiz/$mode/$diff")({
  parseParams: (p) => {
    if (!VALID_MODES.has(p.mode) || !VALID_DIFF.has(p.diff)) throw notFound();
    return { mode: p.mode as GameMode, diff: p.diff as Difficulty };
  },
  head: () => ({
    meta: [
      { title: "IN SESSION — BAD OMENS // QUIZ" },
      {
        name: "description",
        content: "Live quiz session. Answer under pressure.",
      },
      { property: "og:title", content: "BAD OMENS // QUIZ — In session" },
      { property: "og:description", content: "Live quiz session." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: QuizPage,
});

function QuizPage() {
  const { mode, diff } = useParams({ from: "/quiz/$mode/$diff" });
  const navigate = useNavigate();
  const session = useQuizSession();
  const [picked, setPicked] = useState<string | null>(null);
  const [lastBreakdown, setLastBreakdown] = useState<ScoreBreakdown | null>(null);
  const startedRef = useRef<number>(Date.now());

  // Bootstrap session if user hard-loads the URL
  useEffect(() => {
    if (!session) {
      quizSession.start(mode as GameMode, diff as Difficulty);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (session?.status === "finished") {
      navigate({ to: "/result" });
    }
  }, [session?.status, navigate]);

  const q = session?.questions[session.currentIndex];
  const status = session?.status ?? "idle";
  const timeLimit = TIME_LIMIT_MS[(session?.difficulty ?? "casual") as Difficulty];

  // Reset per question
  useEffect(() => {
    startedRef.current = Date.now();
    setPicked(null);
    setLastBreakdown(null);
  }, [session?.currentIndex]);

  const handleAnswer = useCallback(
    (opt: string | null) => {
      if (!session || session.status !== "playing") return;
      const timeMs = Date.now() - startedRef.current;
      setPicked(opt);
      const result = quizSession.answer(opt, timeMs);
      if (result) setLastBreakdown(result.breakdown);
    },
    [session],
  );

  const goNext = useCallback(() => {
    quizSession.next();
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!q) return;
      if (status === "playing") {
        const idx = ["1", "2", "3", "4"].indexOf(e.key);
        const letterIdx = ["a", "b", "c", "d"].indexOf(e.key.toLowerCase());
        const chosen = idx >= 0 ? idx : letterIdx;
        if (chosen >= 0 && chosen < q.options.length) {
          e.preventDefault();
          handleAnswer(q.options[chosen]);
        }
      } else if (status === "reviewing" && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [q, status, handleAnswer, goNext]);

  const buttonState = useMemo(() => {
    return (opt: string): "idle" | "selected" | "correct" | "wrong" | "revealed" => {
      if (!q) return "idle";
      if (status === "playing") return "idle";
      // If time expired and no pick was made, show all buttons as wrong (red)
      if (picked === null && (status as string) !== "playing") return "wrong";
      if (opt === q.correctAnswer) return "correct";
      if (opt === picked) return "wrong";
      return "revealed";
    };
  }, [q, status, picked]);

  if (!session || !q) {
    return (
      <PageShell>
        <div className="max-w-3xl mx-auto px-6 py-24 font-mono text-xs text-zinc-500">
          LOADING SESSION…
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-12">
        {/* HUD */}
        <div className="flex items-center justify-between gap-6 mb-4">
          <Link
            to="/"
            className="font-mono text-[10px] tracking-widest text-zinc-600 hover:text-brand-text uppercase"
          >
            ← EXIT
          </Link>
          <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-500">
            {session.mode} · {session.difficulty}
          </div>
        </div>

        <div className="mb-6">
          <QuizTimer
            durationMs={timeLimit}
            runningKey={session.currentIndex}
            paused={status !== "playing"}
            onExpire={() => status === "playing" && handleAnswer(null)}
          />
        </div>

        <div className="flex items-center justify-between mb-10">
          <ScoreDisplay score={session.score} streak={session.streak} />
          <div className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 tabular-nums">
            {String(session.currentIndex + 1).padStart(2, "0")} /{" "}
            {String(session.questions.length).padStart(2, "0")}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <QuestionCard
            key={q.id}
            question={q}
            index={session.currentIndex}
            total={session.questions.length}
            revealed={status !== "playing"}
          />
        </AnimatePresence>

        <div className="mt-10 grid gap-3">
          {q.options.map((opt, i) => (
            <AnswerButton
              key={opt + i}
              option={opt}
              letter={LETTERS[i]}
              state={buttonState(opt)}
              disabled={status !== "playing"}
              onClick={() => handleAnswer(opt)}
              showIcon={q.mediaType === "audio"}
              onIconClick={() => {
                // request the question's audio to play
                window.dispatchEvent(
                  new CustomEvent("play-question-audio", { detail: { questionId: q.id } }),
                );
              }}
            />
          ))}
        </div>

        {status === "reviewing" && (
          <FeedbackOverlay
            correct={picked === q.correctAnswer}
            breakdown={lastBreakdown}
            correctAnswer={q.correctAnswer}
            explanation={q.explanation}
            funFact={q.funFact}
            source={q.source}
            streak={session.streak}
            onNext={goNext}
          />
        )}
      </div>
    </PageShell>
  );
}
