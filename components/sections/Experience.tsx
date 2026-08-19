import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechList";
import { journeyCopy, milestones } from "@/content/journey";
import {
  groupJourneyMilestones,
  journeySide,
  type JourneyGroup,
} from "@/lib/journey";
import type { JourneyMilestone } from "@/lib/types";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

const groups = groupJourneyMilestones(milestones);

export function Experience() {
  let visualIndex = 0;

  return (
    <Section
      id="experience"
      index={journeyCopy.index}
      label={journeyCopy.label}
      title={journeyCopy.title}
      centered
      motion="journey"
    >
      <ol className="journey" aria-label="Education and career timeline">
        {groups.map((group) => {
          if (group.type === "overlap") {
            const parentIndex = visualIndex;
            const parentSide = journeySide(parentIndex);
            visualIndex += 1;
            const childStart = visualIndex;
            visualIndex += group.children.length;
            return (
              <OverlapGroup
                key={group.parent.id}
                group={group}
                parentSide={parentSide}
                parentIndex={parentIndex}
                childStart={childStart}
              />
            );
          }

          const index = visualIndex;
          const side = journeySide(index);
          visualIndex += 1;
          return (
            <li
              key={group.milestone.id}
              className="journey-item"
              data-kind={group.milestone.kind}
              data-side={side}
              style={{ "--reveal": `${index * 180}ms` } as CSSProperties}
            >
              <MilestoneAxis milestone={group.milestone} />
              <MilestoneBody milestone={group.milestone} />
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

function OverlapGroup({
  group,
  parentSide,
  parentIndex,
  childStart,
}: {
  group: Extract<JourneyGroup, { type: "overlap" }>;
  parentSide: "left" | "right";
  parentIndex: number;
  childStart: number;
}) {
  return (
    <li className="journey-cluster">
      <span className="journey-overlap-rail" aria-hidden="true" />
      <div
        className="journey-item"
        data-kind={group.parent.kind}
        data-side={parentSide}
        data-overlap="start"
        style={{ "--reveal": `${parentIndex * 180}ms` } as CSSProperties}
      >
        <MilestoneAxis milestone={group.parent} />
        <MilestoneBody milestone={group.parent} />
      </div>
      <ol className="journey-nested" aria-label="Internship">
        {group.children.map((child, index) => {
          const side = journeySide(childStart + index);
          return (
            <li
              key={child.id}
              className="journey-item"
              data-kind={child.kind}
              data-side={side}
              data-overlap="during"
              style={
                {
                  "--reveal": `${(childStart + index) * 180}ms`,
                } as CSSProperties
              }
            >
              <MilestoneAxis milestone={child} />
              <MilestoneBody milestone={child} />
            </li>
          );
        })}
      </ol>
    </li>
  );
}

function MilestoneAxis({ milestone }: { milestone: JourneyMilestone }) {
  return (
    <span className="journey-axis" aria-hidden="true">
      <span
        className={cn(
          "journey-node",
          milestone.featured && "is-featured",
          milestone.open && "is-open",
        )}
      />
      <span className="journey-spine" />
    </span>
  );
}

function MilestoneBody({ milestone }: { milestone: JourneyMilestone }) {
  const place = [milestone.organization, milestone.location]
    .filter(Boolean)
    .join(" · ");

  return (
    <article
      className={cn(
        "journey-body group/ms",
        milestone.featured && "is-featured",
        milestone.open && "is-open",
      )}
    >
      <p className="journey-kicker font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
        {milestone.category}
      </p>
      {milestone.open ? null : (
        <p
          className={cn(
            "journey-period mt-2 font-mono text-[11px] uppercase tracking-[0.14em]",
            milestone.featured ? "text-ink" : "text-ink-muted",
          )}
        >
          {milestone.period}
        </p>
      )}
      <h3
        className={cn(
          "journey-title mt-3 font-serif leading-tight text-ink motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/ms:text-accent",
          milestone.featured
            ? "text-2xl sm:text-3xl"
            : milestone.open
              ? "text-xl italic sm:text-2xl"
              : "text-xl sm:text-2xl",
        )}
      >
        {milestone.title}
      </h3>
      {place ? (
        <p className="journey-place mt-2 text-sm text-ink sm:text-base">
          {milestone.organization}
          {milestone.location ? (
            <span className="text-ink-muted"> · {milestone.location}</span>
          ) : null}
        </p>
      ) : null}
      {milestone.coursework && milestone.coursework.length > 0 ? (
        <p className="journey-note mt-4 text-sm leading-7 text-ink-muted">
          {milestone.coursework.join(" · ")}
        </p>
      ) : null}
      {milestone.technologies && milestone.technologies.length > 0 ? (
        <div className="journey-tech mt-4">
          <TechList items={milestone.technologies} size="sm" />
        </div>
      ) : null}
      {milestone.highlights && milestone.highlights.length > 0 ? (
        <ul className="journey-highlights mt-5 space-y-3">
          {milestone.highlights.map((highlight) => (
            <li
              key={highlight}
              className="border-l border-line pl-4 text-sm leading-7 text-ink-muted sm:text-[0.95rem] sm:leading-7"
            >
              {highlight}
            </li>
          ))}
        </ul>
      ) : null}
      {milestone.note ? (
        <p className="journey-note mt-4 max-w-md text-sm leading-7 text-ink-muted sm:text-base sm:leading-8">
          {milestone.note}
        </p>
      ) : null}
    </article>
  );
}
