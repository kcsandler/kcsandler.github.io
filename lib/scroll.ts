export function headerOffset(): number {
  return 0;
}

export function scrollToId(id: string): void {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = window.scrollY + element.getBoundingClientRect().top - headerOffset();

  window.scrollTo({
    top: Math.max(0, top),
    behavior: reduce ? "auto" : "smooth",
  });
}
