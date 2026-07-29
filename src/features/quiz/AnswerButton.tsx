import { motion } from "motion/react";
import { cn } from "../../lib/utils";

type State = "idle" | "selected" | "correct" | "wrong" | "revealed";

export function AnswerButton({
  option,
  letter,
  state,
  onClick,
  disabled,
  showIcon,
  onIconClick,
}: {
  option: string;
  letter: string;
  state: State;
  onClick: () => void;
  disabled?: boolean;
  showIcon?: boolean;
  onIconClick?: () => void;
}) {
  return (
    <motion.button
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full group flex items-center gap-6 p-5 md:p-6 border text-left bg-brand-bg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg",
        state === "idle" && "border-zinc-900 hover:border-zinc-700 hover:bg-brand-surface",
        state === "selected" && "border-brand-text bg-brand-surface",
        state === "correct" && "border-brand-success bg-brand-success/10",
        state === "wrong" && "border-brand-accent bg-brand-accent/10",
        state === "revealed" && "border-zinc-700 bg-brand-surface",
        disabled && "cursor-default",
      )}
    >
      <span
        className={cn(
          "font-mono text-xs tracking-widest w-6 shrink-0",
          state === "correct" || state === "revealed"
            ? "text-brand-success"
            : state === "wrong"
              ? "text-brand-accent"
              : "text-zinc-600 group-hover:text-brand-accent",
        )}
      >
        {letter}
      </span>
      <span className="uppercase tracking-wide text-sm md:text-base font-medium flex-1">
        {option}
      </span>
      {showIcon && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            onIconClick && onIconClick();
          }}
          type="button"
          aria-label="Play preview"
          className="ml-2 shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900 text-zinc-200"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
          </svg>
        </button>
      )}
      <span
        className={cn(
          "font-mono text-[10px] tracking-widest transition-opacity",
          state === "idle" ? "opacity-0 group-hover:opacity-100 text-brand-accent" : "opacity-0",
        )}
      >
        →
      </span>
    </motion.button>
  );
}
