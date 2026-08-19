"use client";

import { IconMoon, IconSun } from "@/components/ui/Icons";
import { THEME_STORAGE_KEY, applyThemeChrome, readTheme, toggleTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { useLayoutEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useLayoutEffect(() => {
    const initial = readTheme();
    applyThemeChrome(initial);
    setTheme(initial);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    function onPrefersChange() {
      if (window.localStorage.getItem(THEME_STORAGE_KEY)) {
        return;
      }
      const next: Theme = media.matches ? "dark" : "light";
      applyThemeChrome(next);
      setTheme(next);
    }

    media.addEventListener("change", onPrefersChange);
    return () => media.removeEventListener("change", onPrefersChange);
  }, []);

  const next = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? IconSun : IconMoon;

  return (
    <button
      type="button"
      onClick={() => setTheme(toggleTheme(theme))}
      aria-label={`Switch to ${next} mode`}
      aria-pressed={theme === "dark"}
      className={cn(
        "theme-toggle pointer-events-auto fixed right-4 top-4 z-40",
        "flex h-11 w-11 items-center justify-center border border-line bg-bg text-ink md:h-12 md:w-12",
        "motion-safe:transition-[transform,background-color,border-color,box-shadow] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:border-ink hover:bg-bg-subtle",
        "motion-safe:hover:-translate-y-px",
        "[&_svg]:motion-safe:transition-transform [&_svg]:motion-safe:duration-200 [&_svg]:motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-safe:hover:[&_svg]:rotate-12",
      )}
    >
      <Icon
        className="h-5 w-5 shrink-0"
        aria-hidden="true"
      />
    </button>
  );
}
