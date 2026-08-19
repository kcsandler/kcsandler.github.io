import { Section } from "@/components/ui/Section";
import { about } from "@/content/about";
import { cn } from "@/lib/utils";

const INTEREST_MOTION: Record<string, string> = {
  Lifting: "interest-lift",
  Running: "interest-run",
  Gaming: "interest-game",
};

export function About() {
  return (
    <Section id="about" index="01" label="About" title={about.title}>
      <div className="max-w-3xl">
        <p className="text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
          {about.lead}
        </p>
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {about.interests.map((interest, index) => (
            <span key={interest.label}>
              {index > 0 ? <span aria-hidden="true"> · </span> : null}
              {"href" in interest && interest.href ? (
                <a
                  href={interest.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "interest-label underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:decoration-accent",
                    INTEREST_MOTION[interest.label],
                  )}
                >
                  {interest.label}
                  <span className="sr-only"> (opens Steam profile in a new tab)</span>
                </a>
              ) : (
                <span
                  className={cn("interest-label", INTEREST_MOTION[interest.label])}
                >
                  {interest.label}
                </span>
              )}
            </span>
          ))}
        </p>
      </div>
    </Section>
  );
}
