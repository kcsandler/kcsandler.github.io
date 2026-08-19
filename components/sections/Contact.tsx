import { ContactActions } from "@/components/contact/ContactActions";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" index="05" label="Contact" title={site.contactTitle} motion="contact">
      <div className="max-w-3xl">
        <p className="contact-copy text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
          {site.contactBody}
        </p>
        <p className="contact-email mt-8 font-serif text-2xl leading-snug text-ink sm:text-4xl">
          {site.email}
        </p>
        <div className="contact-actions mt-10 flex flex-wrap gap-3">
          <ContactActions />
        </div>
      </div>
    </Section>
  );
}
