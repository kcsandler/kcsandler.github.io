"use client";

import type { MouseEvent, ReactNode } from "react";
import { scrollToId } from "@/lib/scroll";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  download?: boolean;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "ghost",
  className,
  download,
  external,
}: ButtonProps) {
  const isExternal = external || href.startsWith("http");
  const isHash = href.startsWith("#");

  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!isHash) {
      return;
    }
    event.preventDefault();
    scrollToId(href.slice(1));
    window.history.replaceState(null, "", href);
  }

  return (
    <a
      href={href}
      download={download || undefined}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={cn(
        "group/btn inline-flex min-h-11 items-center justify-center gap-2 px-4 py-2.5 font-sans text-sm",
        "transition-[color,background-color,border-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-safe:hover:-translate-y-px motion-safe:active:translate-y-px",
        "[&_svg]:motion-safe:transition-transform [&_svg]:motion-safe:duration-200 [&_svg]:motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-safe:[&_svg]:group-hover/btn:translate-x-1",
        variant === "primary" &&
          "bg-accent text-on-accent hover:bg-accent-hover",
        variant === "ghost" &&
          "border border-line text-ink hover:border-ink hover:bg-bg-subtle",
        className,
      )}
    >
      {children}
      {isExternal ? (
        <span className="sr-only"> (opens in a new tab)</span>
      ) : null}
    </a>
  );
}
