import { TechMark, iconKeysForLabel } from "@/components/ui/TechMark";
import { cn } from "@/lib/utils";

type TechListProps = {
  items: string[];
  size?: "sm" | "md";
  layout?: "wrap" | "rows";
  columns?: 1 | 2;
};

export function TechList({
  items,
  size = "md",
  layout = "wrap",
  columns = 1,
}: TechListProps) {
  if (layout === "rows") {
    return (
      <ul
        className={cn(
          "grid gap-x-8",
          columns === 2 ? "grid-cols-2 gap-x-5 sm:gap-x-8" : "grid-cols-1",
        )}
      >
        {items.map((item) => (
          <li key={item}>
            <span className="group/tech flex items-center gap-2 py-1.5 text-ink motion-safe:transition-colors motion-safe:duration-300 hover:text-accent">
              <span
                aria-hidden="true"
                className="w-3 font-mono text-[10px] text-accent opacity-0 motion-safe:transition-opacity motion-safe:duration-300 group-hover/tech:opacity-100"
              >
                →
              </span>
              {iconKeysForLabel(item).slice(0, 1).map((key) => (
                <TechMark
                  key={key}
                  name={key}
                  className="h-3.5 w-3.5 shrink-0 text-ink-muted motion-safe:transition-[color,transform] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tech:text-accent motion-safe:group-hover/tech:scale-110"
                />
              ))}
              <span className="text-sm motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover/tech:translate-x-0.5 sm:text-base">
                {item}
              </span>
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-3">
      {items.map((item) => (
        <li key={item}>
          <span
            className={
              size === "sm"
                ? "group/tech inline-flex items-center gap-1.5 font-mono text-[12px] leading-none text-ink-muted motion-safe:transition-colors motion-safe:duration-300 hover:text-accent"
                : "group/tech inline-flex items-center gap-2 text-base leading-none text-ink motion-safe:transition-colors motion-safe:duration-300 hover:text-accent sm:text-lg"
            }
          >
            {iconKeysForLabel(item).map((key) => (
              <TechMark
                key={key}
                name={key}
                className={
                  size === "sm"
                    ? "h-3.5 w-3.5 shrink-0 text-ink-muted motion-safe:transition-[color,transform] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tech:text-accent motion-safe:group-hover/tech:scale-110"
                    : "h-4 w-4 shrink-0 text-ink-muted motion-safe:transition-[color,transform] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tech:text-accent motion-safe:group-hover/tech:scale-110"
                }
              />
            ))}
            <span className="border-b border-transparent pb-px motion-safe:transition-[transform,border-color] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tech:border-accent/35 motion-safe:group-hover/tech:translate-x-0.5">
              {item}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
