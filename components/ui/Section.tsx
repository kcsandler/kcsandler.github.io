import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
  description?: string;
  centered?: boolean;
  compact?: boolean;
};

export function Section({
  id,
  index,
  label,
  title,
  children,
  className,
  description,
  centered = false,
  compact = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn(
        "border-t border-line",
        compact ? "py-16 sm:py-20" : "py-20 sm:py-28",
        className,
      )}
    >
      <Container>
        <header
          className={cn(
            "mb-12 max-w-3xl sm:mb-16",
            centered && "mx-auto mb-10 max-w-xl text-center sm:mb-12",
          )}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            <span className="section-index">{index}</span>
            <span className="section-label"> / {label}</span>
          </p>
          <span className="section-rule" aria-hidden="true" />
          <h2
            id={`${id}-title`}
            className="section-title mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="section-copy mt-5 text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              {description}
            </p>
          ) : null}
        </header>
        <div className="section-body">{children}</div>
      </Container>
    </section>
  );
}
