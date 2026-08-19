import type { JourneyMilestone } from "@/lib/types";

export type JourneyGroup =
  | { type: "single"; milestone: JourneyMilestone }
  | {
      type: "overlap";
      parent: JourneyMilestone;
      children: JourneyMilestone[];
    };

export function groupJourneyMilestones(
  items: JourneyMilestone[],
): JourneyGroup[] {
  const nestedIds = new Set(
    items.filter((item) => item.during).map((item) => item.id),
  );

  const groups: JourneyGroup[] = [];
  for (const item of items) {
    if (nestedIds.has(item.id)) {
      continue;
    }
    const children = items.filter((child) => child.during === item.id);
    if (children.length > 0) {
      groups.push({ type: "overlap", parent: item, children });
    } else {
      groups.push({ type: "single", milestone: item });
    }
  }
  return groups;
}

export function journeySide(index: number): "left" | "right" {
  return index % 2 === 0 ? "left" : "right";
}
