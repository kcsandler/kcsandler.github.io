import type { Project, ProjectLink } from "@/lib/types";

const LIVE_LABELS = new Set(["live", "demo", "site"]);

export function liveProjectLink(project: Project): ProjectLink | undefined {
  return project.links.find((link) => LIVE_LABELS.has(link.label.toLowerCase()));
}

export function repoProjectLink(project: Project): ProjectLink | undefined {
  return project.links.find((link) => link.label.toLowerCase() === "github");
}

export function primaryProjectLink(project: Project): ProjectLink | undefined {
  return liveProjectLink(project) ?? project.links[0];
}

export function primaryProjectCta(project: Project): string {
  return liveProjectLink(project) ? "View live site" : "View repository";
}
