import type { ContactFormErrors, ContactMessage } from "@/lib/contact/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(fields: ContactMessage): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const subject = fields.subject.trim();
  const message = fields.message.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  } else if (name.length > 120) {
    errors.name = "Name is too long.";
  }

  if (!email) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!subject) {
    errors.subject = "Please add a subject.";
  } else if (subject.length > 200) {
    errors.subject = "Subject is too long.";
  }

  if (!message) {
    errors.message = "Please write a message.";
  } else if (message.length > 5000) {
    errors.message = "Message is too long.";
  }

  return errors;
}

export function hasContactFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
