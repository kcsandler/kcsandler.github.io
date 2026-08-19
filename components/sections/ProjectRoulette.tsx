"use client";

import { useCallback, useEffect, useState } from "react";
import {
  IconArrowUpRight,
  IconChevronLeft,
  IconChevronRight,
} from "@/components/ui/Icons";
import { Pipeline } from "@/components/ui/Pipeline";
import { TechList } from "@/components/ui/TechList";
import { projects } from "@/content/projects";
import type { Project } from "@/lib/types";
import {
  liveProjectLink,
  primaryProjectCta,
  primaryProjectLink,
  repoProjectLink,
} from "@/lib/project";
import { cn } from "@/lib/utils";

export function ProjectRoulette() {
  const total = projects.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (direction: number) => {
      setIndex((current) => (current + direction + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || paused) {
      return;
    }
    const timer = window.setInterval(() => go(1), 7000);
    return () => window.clearInterval(timer);
  }, [go, paused]);

  const project = projects[index];
  const prev = projects[(index - 1 + total) % total];
  const next = projects[(index + 1) % total];
  if (!project || !prev || !next) {
    return null;
  }

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
    >
      <div
        className="relative"
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected projects"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            go(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            go(1);
          }
        }}
      >
        <div className="grid items-stretch sm:grid-cols-[minmax(0,0.72fr)_minmax(0,1.4fr)_minmax(0,0.72fr)] sm:gap-3">
          <PeekSlide
            project={prev}
            position="prev"
            onSelect={() => go(-1)}
          />
          <ActiveSlide project={project} index={index} total={total} />
          <PeekSlide
            project={next}
            position="next"
            onSelect={() => go(1)}
          />
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute top-1/2 left-0 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-line bg-bg text-ink transition-colors duration-200 hover:border-ink hover:bg-bg-subtle sm:-left-1"
          aria-label="Previous project"
        >
          <IconChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute top-1/2 right-0 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-line bg-bg text-ink transition-colors duration-200 hover:border-ink hover:bg-bg-subtle sm:-right-1"
          aria-label="Next project"
        >
          <IconChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        className="mt-5 flex justify-center gap-2"
        role="tablist"
        aria-label="Projects"
      >
        {projects.map((item, tick) => (
          <button
            key={item.name}
            type="button"
            role="tab"
            aria-selected={tick === index}
            aria-label={`Show ${item.name}`}
            onClick={() => setIndex(tick)}
            className={
              tick === index
                ? "h-1 w-6 bg-accent"
                : "h-1 w-2.5 bg-line transition-colors duration-200 hover:bg-ink-muted"
            }
          />
        ))}
      </div>
    </div>
  );
}

function ActiveSlide({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const primary = primaryProjectLink(project);
  const live = liveProjectLink(project);
  const repo = repoProjectLink(project);

  return (
    <article
      data-cursor="view"
      className="project-card group/project relative z-[1] border border-line bg-bg px-5 py-6 sm:px-7 sm:py-7 motion-safe:transition-[border-color] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ink"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
      <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted motion-safe:transition-colors motion-safe:duration-300 group-hover/project:text-ink">
        {project.category}
      </p>
      {primary ? (
        <h3 className="mt-3 font-serif text-2xl leading-snug text-ink sm:text-[1.75rem]">
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="line-clamp-2 motion-safe:inline-block motion-safe:transition-[color,transform] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-accent motion-safe:group-hover/project:translate-x-1"
          >
            {project.name}
            <span className="sr-only">
              {live
                ? " (opens live site in a new tab)"
                : " (opens repository in a new tab)"}
            </span>
          </a>
        </h3>
      ) : (
        <h3 className="mt-3 line-clamp-2 font-serif text-2xl leading-snug text-ink motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover/project:translate-x-1">
          {project.name}
        </h3>
      )}
      <p className="mt-3 line-clamp-2 text-sm leading-6 text-ink-muted">
        {project.summary}
      </p>
      <div className="mt-4">
        <Pipeline
          className="flex flex-wrap items-center gap-x-1.5 gap-y-2"
          direction="horizontal"
          size="sm"
          steps={project.pipeline}
        />
      </div>
      <div className="mt-4">
        <TechList items={project.technologies.slice(0, 5)} size="sm" />
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
        {primary ? (
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent transition-transform duration-200 hover:text-accent-hover motion-safe:hover:translate-x-0.5"
          >
            {primaryProjectCta(project)}
            <IconArrowUpRight className="h-3.5 w-3.5 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover/project:translate-x-0.5 motion-safe:group-hover/project:-translate-y-0.5" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
        {live && repo ? (
          <a
            href={repo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted transition-colors duration-200 hover:text-accent"
          >
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

function PeekSlide({
  project,
  position,
  onSelect,
}: {
  project: Project;
  position: "prev" | "next";
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      data-cursor="view"
      aria-label={`Show ${project.name}`}
      className={cn(
        "hidden min-h-full border border-line bg-bg px-5 py-7 text-left sm:flex sm:flex-col sm:justify-center",
        "opacity-[0.28] hover:opacity-[0.5] hover:border-ink",
        "motion-safe:scale-[0.97] motion-safe:transition-[opacity,transform,border-color] motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[0.985]",
        position === "prev" && "motion-safe:origin-right",
        position === "next" && "motion-safe:origin-left",
      )}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
        {project.category}
      </p>
      <p className="mt-3 line-clamp-4 font-serif text-lg leading-snug text-ink sm:text-xl">
        {project.name}
      </p>
    </button>
  );
}
