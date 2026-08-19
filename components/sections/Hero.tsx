import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import {
  IconArrowRight,
  IconDownload,
  IconGitHub,
  IconLinkedIn,
  IconMail,
} from "@/components/ui/Icons";
import { OpenToWorkRibbon } from "@/components/sections/OpenToWorkRibbon";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="hero relative py-16 pr-14 sm:py-20 lg:py-24 lg:pr-0">
      <OpenToWorkRibbon />
      <Container>
        <div className="hero-grid">
          <div className="hero-intro">
            <h1 className="hero-name font-serif text-[2.6rem] leading-[1.08] text-ink sm:text-6xl lg:text-[4.5rem]">
              {site.name}
            </h1>
            <span className="hero-rule" aria-hidden="true" />
            <p className="hero-role mt-5 font-serif text-xl italic leading-snug text-ink sm:text-2xl">
              {site.role}
            </p>
            <p className="hero-lede mt-6 max-w-xl text-lg leading-8 text-ink sm:text-xl sm:leading-8">
              {site.headline}
            </p>
            <p className="hero-copy mt-5 max-w-xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
              {site.positioning}
            </p>
          </div>

          <figure className="hero-portrait">
            <div className="hero-portrait-frame">
              <Image
                src={site.portraitSrc}
                alt={site.portraitAlt}
                fill
                priority
                sizes="(min-width: 1024px) 38vw, (min-width: 768px) 40vw, 88vw"
                className="hero-portrait-img"
              />
            </div>
          </figure>

          <div className="hero-foot">
            <div className="hero-actions">
              <div className="hero-actions-row">
                <Button href="#projects" variant="primary">
                  View my work
                  <IconArrowRight className="h-4 w-4" />
                </Button>
                <Button href="#contact">
                  <IconMail className="h-4 w-4" />
                  Contact me
                </Button>
              </div>
              <div className="hero-actions-row hero-actions-secondary">
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
          </div>
        </div>
      </Container>
    </section>
  );
}
