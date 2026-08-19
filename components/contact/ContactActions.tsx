"use client";

import { ContactFormModal } from "@/components/contact/ContactFormModal";
import { Button } from "@/components/ui/Button";
import {
  IconDownload,
  IconGitHub,
  IconLinkedIn,
  IconMail,
} from "@/components/ui/Icons";
import { site } from "@/content/site";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";
import { cn } from "@/lib/utils";
import { useCallback, useRef, useState } from "react";

export function ContactActions() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useLockBodyScroll(open);

  const openForm = useCallback(() => setOpen(true), []);

  const closeForm = useCallback(() => {
    setOpen(false);
    window.requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }, []);

  return (
    <>
      <button
        type="button"
        ref={triggerRef}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="contact-form-dialog"
        onClick={openForm}
        className={cn(
          "contact-email-trigger group/btn inline-flex min-h-11 items-center justify-center gap-2 px-4 py-2.5 font-sans text-sm",
          "bg-accent text-on-accent hover:bg-accent-hover",
          "transition-[color,background-color,border-color,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "motion-safe:hover:-translate-y-px motion-safe:active:translate-y-px",
          open && "is-active",
        )}
      >
        <IconMail className="h-4 w-4" />
        <span className="contact-email-trigger-label">
          {open ? "Get in touch" : "Email me"}
        </span>
      </button>

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

      <ContactFormModal open={open} onClose={closeForm} />
    </>
  );
}
