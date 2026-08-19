"use client";

import type { ComponentType, SVGProps } from "react";
import { useEffect, useRef } from "react";
import {
  IconBriefcase,
  IconClose,
  IconFolder,
  IconMail,
  IconMenu,
  IconPerson,
  IconWrench,
} from "@/components/ui/Icons";
import { navItems } from "@/content/site";
import { useFocusTrap } from "@/lib/hooks/useFocusTrap";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";
import { scrollToId } from "@/lib/scroll";
import type { NavIconName } from "@/lib/types";
import { cn } from "@/lib/utils";

const ICONS: Record<
  NavIconName,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  about: IconPerson,
  projects: IconFolder,
  experience: IconBriefcase,
  skills: IconWrench,
  contact: IconMail,
};

type SideNavProps = {
  activeId: string | null;
  mobileOpen: boolean;
  onMobileOpenChange: (open: boolean) => void;
  onNavigate: () => void;
};

export function SideNav({
  activeId,
  mobileOpen,
  onMobileOpenChange,
  onNavigate,
}: SideNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(mobileOpen, panelRef);
  useLockBodyScroll(mobileOpen);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onMobileOpenChange(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, onMobileOpenChange]);

  return (
    <>
      <nav
        aria-label="Primary"
        className={cn(
          "side-nav-rail group fixed top-1/2 right-4 z-40 hidden w-12 -translate-y-1/2 overflow-hidden border border-line bg-bg md:block",
          "hover:w-52 focus-within:w-52",
          "motion-safe:transition-[width] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
          "motion-reduce:transition-none",
        )}
      >
        <span className="side-nav-progress" aria-hidden="true" />
        <ul className="py-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={activeId === item.id}
                onNavigate={onNavigate}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className="fixed right-4 bottom-[4.75rem] z-40 md:hidden">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-line bg-bg text-ink"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close sections" : "Open sections"}
          onClick={() => onMobileOpenChange(!mobileOpen)}
        >
          {mobileOpen ? (
            <IconClose className="h-5 w-5" />
          ) : (
            <IconMenu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-30 md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-scrim"
            aria-label="Close sections"
            onClick={() => onMobileOpenChange(false)}
          />
          <div
            ref={panelRef}
            id="mobile-navigation"
            className="absolute right-4 bottom-[8.25rem] w-56 border border-line bg-bg motion-safe:animate-[fade-up_0.2s_ease-out] motion-reduce:animate-none"
          >
            <nav aria-label="Primary">
              <ul className="py-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <NavLink
                      href={item.href}
                      label={item.label}
                      icon={item.icon}
                      active={activeId === item.id}
                      expanded
                      onNavigate={() => {
                        onNavigate();
                        onMobileOpenChange(false);
                      }}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}

function NavLink({
  href,
  label,
  icon,
  active,
  expanded = false,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: NavIconName;
  active: boolean;
  expanded?: boolean;
  onNavigate: () => void;
}) {
  const Icon = ICONS[icon];

  return (
    <a
      href={href}
      aria-current={active ? "location" : undefined}
      onClick={(event) => {
        event.preventDefault();
        onNavigate();
        const id = href.replace("#", "");
        window.setTimeout(() => {
          scrollToId(id);
          window.history.replaceState(null, "", href);
        }, 0);
      }}
      className={cn(
        "group/nav flex h-11 items-center border-l-2 px-3 text-ink-muted",
        "motion-safe:transition-[color,background-color,border-color] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:bg-bg-subtle hover:text-ink",
        active ? "border-accent text-accent" : "border-transparent hover:border-line",
      )}
    >
      <Icon className="h-[1.125rem] w-[1.125rem] shrink-0 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover/nav:translate-x-0.5 motion-safe:group-hover/nav:rotate-3" />
      <span
        className={cn(
          "ml-3 font-mono text-[11px] uppercase tracking-[0.14em] whitespace-nowrap",
          expanded
            ? "opacity-100"
            : "translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100 motion-safe:transition-[opacity,transform] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        )}
      >
        {label}
      </span>
    </a>
  );
}
