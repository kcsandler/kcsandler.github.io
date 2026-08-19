"use client";

import { useEffect, useState } from "react";
import { headerOffset } from "@/lib/scroll";

export function useActiveSection(ids: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (ids.length === 0) {
      return;
    }

    function update() {
      const offset = headerOffset();
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollBottom >= docHeight - 8) {
        setActiveId(ids[ids.length - 1] ?? null);
        return;
      }

      let current: string | null = null;
      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) {
          continue;
        }
        if (element.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      }
      setActiveId(current);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return activeId;
}
