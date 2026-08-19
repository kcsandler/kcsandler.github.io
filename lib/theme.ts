export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "pw-theme";

export const THEME_COLORS: Record<Theme, string> = {
  light: "#F6F3EE",
  dark: "#141210",
};

export const FAVICON_HREF: Record<Theme, string> = {
  light: "/favicon-light.svg",
  dark: "/favicon-dark.svg",
};

export function readTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function applyFavicon(theme: Theme) {
  const href = FAVICON_HREF[theme];

  const install = () => {
    document
      .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
      .forEach((node) => node.remove());
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.setAttribute("data-brand-icon", "true");
    link.href = href;
    document.head.appendChild(link);
  };

  install();
  requestAnimationFrame(install);
}

export function applyThemeChrome(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.setAttribute("content", THEME_COLORS[theme]);
    meta.removeAttribute("media");
  });
  applyFavicon(theme);
}

export function applyTheme(theme: Theme) {
  applyThemeChrome(theme);
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function toggleTheme(current: Theme): Theme {
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}
