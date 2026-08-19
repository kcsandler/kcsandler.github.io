import { IconClose } from "@/components/ui/Icons";
import { assistant } from "@/content/assistant";

type AssistantHeaderProps = {
  onClose: () => void;
};

export function AssistantHeader({ onClose }: AssistantHeaderProps) {
  return (
    <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-4">
      <div>
        <h2
          id="assistant-title"
          className="font-serif text-xl leading-tight text-ink"
        >
          {assistant.title}
        </h2>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
          {assistant.subtitle}
        </p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center text-ink-muted transition-colors duration-200 hover:text-ink"
        aria-label="Close assistant"
      >
        <IconClose className="h-4 w-4" />
      </button>
    </header>
  );
}
