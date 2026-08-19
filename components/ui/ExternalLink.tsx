import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-accent underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:decoration-accent",
        className,
      )}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
