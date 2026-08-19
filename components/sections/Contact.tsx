import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import {
  IconDownload,
  IconGitHub,
  IconLinkedIn,
  IconMail,
} from "@/components/ui/Icons";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" index="05" label="Contact" title={site.contactTitle}>
      <div className="max-w-3xl">
        <p className="text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
          {site.contactBody}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block break-all font-serif text-2xl leading-snug text-ink transition-colors duration-200 hover:text-accent sm:text-4xl"
        >
          {site.email}
        </a>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={`mailto:${site.email}`} variant="primary">
            <IconMail className="h-4 w-4" />
            Email me
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
    </Section>
  );
}
