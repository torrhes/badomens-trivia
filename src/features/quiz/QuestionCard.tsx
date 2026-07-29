import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Question, QuestionDifficulty } from "../../lib/quiz/types";

const DIFF_LABEL: Record<QuestionDifficulty, string> = {
  easy: "EASY",
  medium: "MEDIUM",
  hard: "HARD",
  expert: "EXPERT",
};

export function QuestionCard({
  question,
  index,
  total,
  revealed,
}: {
  question: Question;
  index: number;
  total: number;
  revealed: boolean;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playCount, setPlayCount] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlayCount(0);
    setPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.load();
    }
  }, [question.id]);

  const handlePlay = async () => {
    if (!question.mediaUrl || question.mediaType !== "audio") return;
    if (playCount >= 2) return;
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.src !== question.mediaUrl) {
      audio.src = question.mediaUrl;
      audio.load();
    }

    audio.currentTime = 0;

    try {
      await audio.play();
      setPlaying(true);
    } catch (error) {
      console.error("Audio playback failed", error);
      setPlaying(false);
    }
  };

  useEffect(() => {
    const onPlayEvent = (e: Event) => {
      const ce = e as CustomEvent;
      if (ce?.detail?.questionId === question.id) {
        handlePlay();
      }
    };
    window.addEventListener("play-question-audio", onPlayEvent as EventListener);
    return () => window.removeEventListener("play-question-audio", onPlayEvent as EventListener);
  }, [question.id, playCount]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.currentTime >= 3) {
      audio.pause();
      setPlaying(false);
      setPlayCount((count) => Math.min(2, count + 1));
    }
  };

  const handleAudioEnd = () => {
    setPlaying(false);
    setPlayCount((count) => Math.min(2, count + 1));
  };

  const showImage = question.mediaType === "image" && question.mediaUrl;
  const showAudio = question.mediaType === "audio" && question.mediaUrl;
  const isVideoPrompt = question.category === "video" && showImage;

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-[10px] tracking-[0.3em] text-brand-accent uppercase">
          QUESTION {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="h-px flex-1 bg-zinc-900" />
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-500">
          {question.category} · {DIFF_LABEL[question.difficulty]}
        </span>
      </div>

      {showImage && (
        <figure className="relative mb-8 overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-950">
          <img
            src={question.mediaUrl}
            alt={question.question}
            className="w-full h-[320px] object-cover transition duration-500 ease-out"
          />
          {question.imageSource && (
            <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-zinc-200 backdrop-blur">
              Credit • {question.imageSource}
            </div>
          )}
        </figure>
      )}

      {showAudio && (
        <div className="mb-8 rounded-3xl border border-zinc-900 bg-zinc-950 p-6">
          <div className="mb-4 font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500">
            AUDIO CLIP
          </div>
          <button
            type="button"
            onClick={handlePlay}
            disabled={playCount >= 2 || playing}
            className="inline-flex items-center justify-center rounded-full bg-brand-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-text transition hover:bg-brand-elev disabled:cursor-not-allowed disabled:opacity-50"
          >
            {playCount >= 2
              ? "NO REPLAYS LEFT"
              : playing
                ? "PLAYING…"
                : `PLAY CLIP (${2 - playCount} LEFT)`}
          </button>
          <p className="mt-3 text-[11px] leading-relaxed text-zinc-500">
            This clip is limited to 3 seconds per play. You can listen up to 2 times.
          </p>
          <audio
            ref={audioRef}
            src={question.mediaUrl}
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleAudioEnd}
            className="hidden"
          />
        </div>
      )}

      <div className="relative pl-6 border-l-2 border-brand-accent">
        <h2 className="font-display text-3xl md:text-5xl leading-[1.05] uppercase tracking-tight text-balance">
          {isVideoPrompt ? "Which song is this video from?" : question.question}
        </h2>
      </div>
    </motion.div>
  );
}
