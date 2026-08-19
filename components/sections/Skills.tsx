import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechList";
import { skillGroups, skillsIntro } from "@/content/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section
      id="tech-stack"
      index="02"
      label="Tech stack"
      title="Tech stack"
      description={skillsIntro}
    >
      <div className="grid border-y border-line md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <div
            key={group.category}
            className={cn(
              "border-b border-line px-5 py-8 last:border-b-0 sm:px-8 sm:py-10",
              "md:border-b-0",
              index < 3 && "md:border-b md:border-line",
              group.span === "full" && "md:col-span-2",
              group.column === "left" && "md:border-r md:border-line",
            )}
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {String(index + 1).padStart(2, "0")} / {group.category}
            </h3>
            <div className="mt-5">
              <TechList
                items={group.items}
                layout="rows"
                columns={group.span === "full" ? 2 : 1}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
