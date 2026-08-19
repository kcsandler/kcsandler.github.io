import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  IconArrowRight,
  IconDownload,
  IconGitHub,
  IconLinkedIn,
} from "@/components/ui/Icons";
import { OpenToWorkRibbon } from "@/components/sections/OpenToWorkRibbon";
import { site } from "@/content/site";

type HeroFact = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const facts: HeroFact[] = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/kurshan",
    href: site.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/kcsandler",
    href: site.github,
    external: true,
  },
];

export function Hero() {
  return (
    <section id="top" className="relative py-16 pr-14 sm:py-24 lg:py-32 lg:pr-0">
      <OpenToWorkRibbon />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)] lg:items-end lg:gap-16">
          <div>
            <h1 className="hero-enter font-serif text-[2.6rem] leading-[1.08] text-ink sm:text-6xl lg:text-[4.5rem] [--d:200ms]">
              {site.name}
            </h1>
            <span className="hero-rule" aria-hidden="true" />
            <p className="hero-enter mt-5 font-serif text-xl italic leading-snug text-ink sm:text-2xl [--d:350ms]">
              {site.role}
            </p>
            <p className="hero-enter mt-6 max-w-xl text-lg leading-8 text-ink sm:text-xl sm:leading-8 [--d:500ms]">
              {site.headline}
            </p>
            <p className="hero-enter mt-5 max-w-xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8 [--d:650ms]">
              {site.positioning}
            </p>
            <div className="hero-enter mt-10 flex flex-wrap gap-3 [--d:800ms]">
              <Button href="#projects" variant="primary">
                View my work
                <IconArrowRight className="h-4 w-4" />
              </Button>
              <Button href={site.resumeHref} download>
                <IconDownload className="h-4 w-4" />
                {site.resumeLabel}
              </Button>
              <Button href={site.linkedin} external>
                <IconLinkedIn className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button href={site.github} external>
                <IconGitHub className="h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
          <dl className="hero-enter grid gap-6 border-t border-line pt-8 sm:grid-cols-3 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 [--d:100ms]">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                  {fact.label}
                </dt>
                <dd className="mt-2 break-all text-sm text-ink sm:text-base">
                  <a
                    href={fact.href}
                    target={fact.external ? "_blank" : undefined}
                    rel={fact.external ? "noopener noreferrer" : undefined}
                    className="transition-colors duration-200 hover:text-accent"
                  >
                    {fact.value}
                    {fact.external ? (
                      <span className="sr-only"> (opens in a new tab)</span>
                    ) : null}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
