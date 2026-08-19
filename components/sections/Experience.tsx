import { Section } from "@/components/ui/Section";
import { TechList } from "@/components/ui/TechList";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" index="04" label="Experience" title="Where I've worked">
      <div className="divide-y divide-line border-y border-line">
        {experience.map((role) => (
          <article
            key={`${role.company}-${role.period}`}
            className="-mx-5 px-5 py-10 transition-colors duration-200 hover:bg-bg-subtle sm:-mx-8 sm:px-8 sm:py-12"
          >
            <div className="grid gap-4 lg:grid-cols-[200px_1fr] lg:gap-12">
              <p className="font-mono text-sm text-ink-muted">{role.period}</p>
              <div>
                <h3 className="font-serif text-2xl text-ink sm:text-3xl">
                  {role.role}
                </h3>
                <p className="mt-2 text-ink">
                  {role.company}
                  <span className="text-ink-muted"> · {role.location}</span>
                </p>
                <div className="mt-4">
                  <TechList items={role.technologies} size="sm" />
                </div>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-7 text-ink-muted sm:text-base">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
