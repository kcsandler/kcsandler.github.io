"use client";

import {
  IconArrowRight,
  IconCheck,
  IconClose,
} from "@/components/ui/Icons";
import { sendContactMessage } from "@/lib/contact/sendContactMessage";
import type { ContactFormErrors, ContactMessage } from "@/lib/contact/types";
import {
  hasContactFormErrors,
  validateContactForm,
} from "@/lib/contact/validateContactForm";
import { useFocusTrap } from "@/lib/hooks/useFocusTrap";
import { cn } from "@/lib/utils";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

type ContactFormModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormPhase = "idle" | "sending" | "success" | "error";

const EMPTY_FORM: ContactMessage = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const FIELDS = [
  { id: "name" as const, label: "Your name", placeholder: "Your name", type: "text" as const },
  {
    id: "email" as const,
    label: "Your email",
    placeholder: "you@example.com",
    type: "email" as const,
  },
  {
    id: "subject" as const,
    label: "Subject",
    placeholder: "What would you like to talk about?",
    type: "text" as const,
  },
  {
    id: "message" as const,
    label: "Message",
    placeholder:
      "Tell me a little about your project, idea, or opportunity...",
    type: "textarea" as const,
  },
];

export function ContactFormModal({ open, onClose }: ContactFormModalProps) {
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [fields, setFields] = useState<ContactMessage>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [phase, setPhase] = useState<FormPhase>("idle");
  const [submitError, setSubmitError] = useState("");

  useFocusTrap(open, panelRef);

  const resetForm = useCallback(() => {
    setFields(EMPTY_FORM);
    setErrors({});
    setPhase("idle");
    setSubmitError("");
  }, []);

  const requestClose = useCallback(() => {
    const hasContent = Object.values(fields).some((value) => value.trim());
    if (hasContent && phase !== "success") {
      const confirmed = window.confirm(
        "Discard this message? Your draft will be lost.",
      );
      if (!confirmed) {
        return;
      }
    }
    resetForm();
    onClose();
  }, [fields, onClose, phase, resetForm]);

  useEffect(() => {
    if (!open) {
      return;
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        requestClose();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, requestClose]);

  useEffect(() => {
    if (open) {
      return;
    }
    resetForm();
  }, [open, resetForm]);

  function updateField(key: keyof ContactMessage, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) {
        return current;
      }
      const next = { ...current };
      delete next[key];
      return next;
    });
    if (phase === "error") {
      setPhase("idle");
      setSubmitError("");
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (phase === "sending" || phase === "success") {
      return;
    }

    const trimmed: ContactMessage = {
      name: fields.name.trim(),
      email: fields.email.trim(),
      subject: fields.subject.trim(),
      message: fields.message.trim(),
    };

    const nextErrors = validateContactForm(trimmed);
    if (hasContactFormErrors(nextErrors)) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitError("");
    setPhase("sending");

    const result = await sendContactMessage(trimmed);
    if (result.ok) {
      setPhase("success");
      return;
    }

    setPhase("error");
    setSubmitError(result.error);
  }

  if (!open) {
    return null;
  }

  return (
    <div className="contact-modal-root">
      <button
        type="button"
        className="contact-modal-backdrop"
        aria-label="Close contact form"
        onClick={requestClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={phase === "success" ? undefined : descId}
        className={cn("contact-modal-panel", open && "is-open")}
        id="contact-form-dialog"
      >
        <header className="contact-modal-header">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
              Contact
            </p>
            <h3
              id={titleId}
              className="mt-2 font-serif text-2xl leading-tight text-ink sm:text-[1.65rem]"
            >
              Get in touch
            </h3>
          </div>
          <button
            type="button"
            className="contact-modal-close"
            aria-label="Close"
            onClick={requestClose}
          >
            <IconClose className="h-4 w-4" />
          </button>
        </header>

        {phase === "success" ? (
          <div className="contact-modal-success">
            <span className="contact-modal-check" aria-hidden="true">
              <IconCheck className="h-5 w-5" strokeWidth={2} />
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              Message sent
            </p>
            <p className="mt-3 font-serif text-xl text-ink">
              Thanks — I&apos;ll get back to you soon.
            </p>
            <button
              type="button"
              className="contact-modal-close-btn mt-8"
              onClick={() => {
                resetForm();
                onClose();
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p id={descId} className="sr-only">
              Send a message without leaving this site.
            </p>
            <form
              className={cn(
                "contact-modal-form",
                phase === "sending" && "is-sending",
              )}
              onSubmit={onSubmit}
              noValidate
            >
              {FIELDS.map((field) => {
                const fieldId = `contact-${field.id}`;
                const error = errors[field.id];
                const commonProps = {
                  id: fieldId,
                  name: field.id,
                  value: fields[field.id],
                  disabled: phase === "sending",
                  "aria-invalid": error ? true : undefined,
                  "aria-describedby": error ? `${fieldId}-error` : undefined,
                  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    updateField(field.id, event.target.value),
                };

                return (
                  <div key={field.id} className="contact-field">
                    <label htmlFor={fieldId} className="contact-field-label">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        {...commonProps}
                        rows={5}
                        placeholder={field.placeholder}
                        className="contact-field-input contact-field-textarea"
                      />
                    ) : (
                      <input
                        {...commonProps}
                        type={field.type}
                        placeholder={field.placeholder}
                        autoComplete={
                          field.id === "email"
                            ? "email"
                            : field.id === "name"
                              ? "name"
                              : "off"
                        }
                        className="contact-field-input"
                        data-initial-focus={field.id === "name" ? true : undefined}
                      />
                    )}
                    {error ? (
                      <p
                        id={`${fieldId}-error`}
                        className="contact-field-error"
                        role="alert"
                      >
                        {error}
                      </p>
                    ) : null}
                  </div>
                );
              })}

              {submitError ? (
                <p className="contact-form-error" role="alert">
                  {submitError}
                </p>
              ) : null}

              <div className="contact-modal-actions">
                <button
                  type="submit"
                  className="contact-modal-submit"
                  disabled={phase === "sending"}
                >
                  {phase === "sending" ? (
                    <>
                      <span className="contact-modal-spinner" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <IconArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
