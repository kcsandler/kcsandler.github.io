type PipelineProps = {
  steps: string[];
  className?: string;
  direction?: "vertical" | "horizontal" | "auto";
  size?: "sm" | "md";
};

export function Pipeline({
  steps,
  className,
  direction = "auto",
  size = "md",
}: PipelineProps) {
  const listClass =
    className ??
    (direction === "vertical"
      ? "flex flex-col gap-2"
      : "flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-3");
  const chipClass =
    size === "sm"
      ? "border border-line bg-bg px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink"
      : "border border-line bg-bg px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-ink";

  return (
    <ol className={listClass}>
      {steps.map((step, index) => (
        <li key={`${step}-${index}`} className="flex items-center gap-1.5">
          <span className={chipClass}>{step}</span>
          {index < steps.length - 1 ? (
            <span
              className="font-mono text-xs text-accent sm:text-sm"
              aria-hidden="true"
            >
              {direction === "vertical" ? (
                "↓"
              ) : direction === "horizontal" ? (
                "→"
              ) : (
                <>
                  <span className="sm:hidden">↓</span>
                  <span className="hidden sm:inline">→</span>
                </>
              )}
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
