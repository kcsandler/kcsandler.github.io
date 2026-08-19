import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex max-w-2xl flex-col gap-3">
        <p className="text-sm text-ink">{site.copyright}</p>
        <p className="text-sm leading-6 text-ink-muted">{site.aiNote}</p>
      </Container>
    </footer>
  );
}
