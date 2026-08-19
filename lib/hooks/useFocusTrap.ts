"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function useFocusTrap(
  active: boolean,
  ref: RefObject<HTMLElement | null>,
  initialSelector = "[data-initial-focus]",
) {
  useEffect(() => {
    if (!active || !ref.current) {
      return;
    }

    const root = ref.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    function getFocusable() {
      return [...root.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
        (node) => !node.hasAttribute("disabled") && node.tabIndex !== -1,
      );
    }

    const initial =
      root.querySelector<HTMLElement>(initialSelector) ?? getFocusable()[0];
    initial?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Tab") {
        return;
      }
      const items = getFocusable();
      if (items.length === 0) {
        event.preventDefault();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    root.addEventListener("keydown", onKeyDown);
    return () => {
      root.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [active, initialSelector, ref]);
}
