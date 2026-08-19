export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type ContactField = keyof ContactMessage;

export type ContactFormErrors = Partial<Record<ContactField, string>>;

export type SendContactResult =
  | { ok: true }
  | { ok: false; error: string };
