"use client";

import { IconChat } from "@/components/ui/Icons";
import { assistant } from "@/content/assistant";
import { cn } from "@/lib/utils";

type AssistantTriggerProps = {
  open: boolean;
  onClick: () => void;
};

export function AssistantTrigger({ open, onClick }: AssistantTriggerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={open}
      aria-controls="assistant-panel"
      aria-haspopup="dialog"
      aria-label={open ? "Close assistant" : assistant.triggerLabel}
      tabIndex={open ? -1 : 0}
      className={cn(
        "assistant-trigger group/trigger pointer-events-auto fixed right-4 bottom-4 z-40",
        "flex h-11 w-11 items-center justify-center border border-line bg-bg text-ink md:h-12 md:w-12",
        "motion-safe:transition-[transform,background-color,border-color,opacity,box-shadow] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:border-ink hover:bg-bg-subtle",
        "motion-safe:hover:-translate-y-px motion-safe:hover:shadow-[0_8px_18px_rgb(28_27_25_/_0.08)]",
        open && "pointer-events-none opacity-0",
      )}
    >
      <IconChat
        className="h-5 w-5 shrink-0 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover/trigger:translate-x-px"
        aria-hidden="true"
      />
      <span className="assistant-idle-pip" aria-hidden="true" />
    </button>
  );
}
