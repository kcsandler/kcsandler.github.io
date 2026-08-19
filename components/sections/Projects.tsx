import { ProjectRoulette } from "@/components/sections/ProjectRoulette";
import { Section } from "@/components/ui/Section";
import { projectsIntro } from "@/content/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Selected work"
      description={projectsIntro}
      compact
    >
      <ProjectRoulette />
    </Section>
  );
}
