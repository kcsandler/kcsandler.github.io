import type { ContactMessage, SendContactResult } from "@/lib/contact/types";

/**
 * Sends a contact message through a configured form endpoint.
 *
 * Static export (GitHub Pages) has no server API — configure one of:
 *
 * - Formspree: set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT to your form URL
 *   (e.g. https://formspree.io/f/xxxx) and NEXT_PUBLIC_CONTACT_FORM_PROVIDER=formspree
 *
 * - Web3Forms: set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://api.web3forms.com/submit
 *   and NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY (public site key from web3forms.com)
 *
 * - Generic JSON POST: set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT to any endpoint that accepts
 *   { name, email, subject, message } as JSON.
 */
export async function sendContactMessage(
  payload: ContactMessage,
): Promise<SendContactResult> {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT?.trim();

  if (!endpoint) {
    return {
      ok: false,
      error:
        "Contact delivery is not configured. Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT before deploying.",
    };
  }

  const provider =
    process.env.NEXT_PUBLIC_CONTACT_FORM_PROVIDER?.trim() ?? "generic";

  let body: Record<string, string>;

  if (provider === "web3forms") {
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
    if (!accessKey) {
      return {
        ok: false,
        error:
          "Web3Forms is selected but NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set.",
      };
    }
    body = {
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      from_name: payload.name,
    };
  } else {
    body = {
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      _replyto: payload.email,
      _subject: `[Portfolio] ${payload.subject}`,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      let error = "Something went wrong. Please try again.";
      try {
        const data: unknown = await response.json();
        if (
          data &&
          typeof data === "object" &&
          "error" in data &&
          typeof data.error === "string"
        ) {
          error = data.error;
        }
      } catch {
        // keep default error copy
      }
      return { ok: false, error };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Something went wrong. Please try again.",
    };
  }
}
