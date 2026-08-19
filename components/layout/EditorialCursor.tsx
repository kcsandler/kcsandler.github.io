"use client";

import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { useEffect, useRef } from "react";

type CursorMode = "dot" | "link" | "button" | "view" | "native";

function isFinePointer() {
  return window.matchMedia("(pointer: fine) and (hover: hover)").matches;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function resolveMode(target: EventTarget | null, selecting: boolean): CursorMode {
  if (selecting) {
    return "native";
  }
  if (!(target instanceof Element)) {
    return "dot";
  }
  if (target.closest("input, textarea, select, [contenteditable='true']")) {
    return "native";
  }
  if (target.closest("[data-cursor='view']")) {
    return "view";
  }
  if (target.closest("button, [role='button'], [data-cursor='button']")) {
    return "button";
  }
  if (target.closest("a[href], [data-cursor='link']")) {
    return "link";
  }
  return "dot";
}

export function EditorialCursor() {
  const enabled = useMediaQuery("(pointer: fine) and (hover: hover)");
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !isFinePointer()) {
      document.documentElement.classList.remove("has-editorial-cursor");
      document.documentElement.removeAttribute("data-cursor-native");
      return;
    }

    if (!rootRef.current) {
      return;
    }
    const cursorRoot: HTMLDivElement = rootRef.current;

    const html = document.documentElement;
    html.classList.add("has-editorial-cursor");

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let visible = false;
    let selecting = false;
    let mode: CursorMode = "dot";
    let raf = 0;

    function applyMode(next: CursorMode) {
      if (mode === next) {
        return;
      }
      mode = next;
      cursorRoot.dataset.mode = next;
      html.toggleAttribute("data-cursor-native", next === "native");
    }

    function applyVisibility(next: boolean) {
      if (visible === next) {
        return;
      }
      visible = next;
      cursorRoot.dataset.visible = next ? "true" : "false";
    }

    function tick() {
      const lerp = prefersReducedMotion() ? 1 : 0.42;
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      if (Math.abs(dx) + Math.abs(dy) > 140) {
        current.x = target.x;
        current.y = target.y;
      } else {
        current.x += dx * lerp;
        current.y += dy * lerp;
      }
      cursorRoot.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      raf = window.requestAnimationFrame(tick);
    }

    function onPointerMove(event: PointerEvent) {
      if (event.pointerType === "touch") {
        applyVisibility(false);
        applyMode("native");
        return;
      }
      target.x = event.clientX;
      target.y = event.clientY;
      if (!visible) {
        current.x = event.clientX;
        current.y = event.clientY;
        applyVisibility(true);
      }
      applyMode(resolveMode(event.target, selecting));
    }

    function onPointerOver(event: PointerEvent) {
      if (event.pointerType === "touch") {
        return;
      }
      applyMode(resolveMode(event.target, selecting));
    }

    function onPointerLeave() {
      applyVisibility(false);
    }

    function onSelectStart() {
      selecting = true;
      applyMode("native");
    }

    function onMouseUp(event: MouseEvent) {
      selecting = false;
      applyMode(resolveMode(event.target, false));
    }

    function onBlur() {
      applyVisibility(false);
    }

    raf = window.requestAnimationFrame(tick);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    document.addEventListener("selectstart", onSelectStart);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("blur", onBlur);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      document.removeEventListener("selectstart", onSelectStart);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("blur", onBlur);
      html.classList.remove("has-editorial-cursor");
      html.removeAttribute("data-cursor-native");
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      className="editorial-cursor"
      data-mode="dot"
      data-visible="false"
      aria-hidden="true"
    >
      <span className="editorial-cursor-ring" />
      <span className="editorial-cursor-dot" />
      <span className="editorial-cursor-label">VIEW</span>
    </div>
  );
}
