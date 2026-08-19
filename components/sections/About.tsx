import { Section } from "@/components/ui/Section";
import { about } from "@/content/about";
import { cn } from "@/lib/utils";

const INTEREST_MOTION: Record<string, string> = {
  Lifting: "interest-lift",
  Running: "interest-run",
  Reading: "interest-read",
  Gaming: "interest-game",
};

const ABOUT_SENTENCES = about.lead.split(/(?<=\.)\s+/);
const BALANCE_PHRASE = "I enjoy the balance";

function AboutSentence({ text }: { text: string }) {
  const phraseAt = text.indexOf(BALANCE_PHRASE);
  if (phraseAt === -1) {
    return <span className="about-line">{text}</span>;
  }

  return (
    <span className="about-line">
      <span className="about-set">{BALANCE_PHRASE}</span>
      {text.slice(phraseAt + BALANCE_PHRASE.length)}
    </span>
  );
}

export function About() {
  return (
    <Section id="about" index="01" label="About" title={about.title} motion="about">
      <div className="max-w-3xl">
        <p className="about-lead text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
          {ABOUT_SENTENCES.map((sentence) => (
            <AboutSentence key={sentence} text={sentence} />
          ))}
        </p>
        <p className="about-interests mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {about.interests.map((interest, index) => (
            <span key={interest.label}>
              {index > 0 ? <span aria-hidden="true"> · </span> : null}
              {"href" in interest && interest.href ? (
                <a
                  href={interest.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "interest-label link-underline",
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
