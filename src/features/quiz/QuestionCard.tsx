import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Question, QuestionDifficulty } from "../../lib/quiz/types";

const DIFF_LABEL: Record<QuestionDifficulty, string> = {
  easy: "EASY",
  medium: "MEDIUM",
  hard: "HARD",
  expert: "EXPERT",
};

const MAX_AUDIO_PLAYS = 2;
const CLIP_SECONDS = 3;

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
    </svg>
  );
}

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
  const playCountRef = useRef(0);
  const countedCurrentPlayRef = useRef(false);
  const playingRef = useRef(false);
  const [playCount, setPlayCount] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playCountRef.current = playCount;
  }, [playCount]);

  useEffect(() => {
    setPlayCount(0);
    playCountRef.current = 0;
    setPlaying(false);
    countedCurrentPlayRef.current = false;
    playingRef.current = false;
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.load();
    }
  }, [question.id]);

  const finishPlay = useCallback(() => {
    if (countedCurrentPlayRef.current) return;
    countedCurrentPlayRef.current = true;
    playingRef.current = false;
    setPlaying(false);
    setPlayCount((count) => {
      const next = Math.min(MAX_AUDIO_PLAYS, count + 1);
      playCountRef.current = next;
      return next;
    });
  }, []);

  const handlePlay = useCallback(async () => {
    if (!question.mediaUrl || question.mediaType !== "audio") return;
    if (playCountRef.current >= MAX_AUDIO_PLAYS) return;
    const audio = audioRef.current;
    if (!audio) return;
    if (playingRef.current) return;

    if (audio.src !== question.mediaUrl) {
      audio.src = question.mediaUrl;
      audio.load();
    }

    audio.currentTime = 0;
    countedCurrentPlayRef.current = false;

    try {
      await audio.play();
      playingRef.current = true;
      setPlaying(true);
    } catch (error) {
      console.error("Audio playback failed", error);
      playingRef.current = false;
      setPlaying(false);
    }
  }, [question.mediaUrl, question.mediaType]);

  useEffect(() => {
    const onPlayEvent = (e: Event) => {
      const ce = e as CustomEvent;
      if (ce?.detail?.questionId === question.id) {
        void handlePlay();
      }
    };
    window.addEventListener("play-question-audio", onPlayEvent as EventListener);
    return () => window.removeEventListener("play-question-audio", onPlayEvent as EventListener);
  }, [question.id, handlePlay]);

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.currentTime >= CLIP_SECONDS) {
      audio.pause();
      audio.currentTime = CLIP_SECONDS;
      finishPlay();
    }
  };

  const handleAudioEnd = () => {
    finishPlay();
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
            onClick={() => void handlePlay()}
            disabled={playCount >= MAX_AUDIO_PLAYS || playing}
            aria-label={
              playCount >= MAX_AUDIO_PLAYS
                ? "No replays left"
                : playing
                  ? "Playing clip"
                  : `Play clip, ${MAX_AUDIO_PLAYS - playCount} plays remaining`
            }
            className="group flex w-full items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 text-left transition hover:border-zinc-700 hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span
              className={
                "flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition " +
                (playing
                  ? "bg-brand-accent/20 text-brand-accent"
                  : "bg-brand-accent text-brand-text group-hover:bg-brand-elev group-disabled:bg-zinc-800 group-disabled:text-zinc-500")
              }
            >
              {playing ? (
                <span className="font-mono text-[10px] tracking-widest uppercase">···</span>
              ) : (
                <PlayIcon />
              )}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-zinc-200">
                {playCount >= MAX_AUDIO_PLAYS
                  ? "NO REPLAYS LEFT"
                  : playing
                    ? "PLAYING…"
                    : "PLAY CLIP"}
              </span>
              <span className="mt-1 block font-mono text-[10px] tracking-widest uppercase text-zinc-500">
                {playCount >= MAX_AUDIO_PLAYS
                  ? `${MAX_AUDIO_PLAYS}/${MAX_AUDIO_PLAYS} PLAYS USED`
                  : `${MAX_AUDIO_PLAYS - playCount} OF ${MAX_AUDIO_PLAYS} PLAYS LEFT · ${CLIP_SECONDS}S EACH`}
              </span>
            </span>
          </button>
          <p className="mt-3 text-[11px] leading-relaxed text-zinc-500">
            This clip is limited to {CLIP_SECONDS} seconds per play. You can listen up to{" "}
            {MAX_AUDIO_PLAYS} times. Source: YouTube · Bad Omens · Sumerian Records. All rights
            belong to the respective copyright holders.
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
