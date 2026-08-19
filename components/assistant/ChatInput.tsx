"use client";

import { IconSend } from "@/components/ui/Icons";
import { assistant } from "@/content/assistant";
import {
  type FormEvent,
  type KeyboardEvent,
  useRef,
} from "react";

type ChatInputProps = {
  disabled: boolean;
  onSubmitPrompt: (prompt: string) => void;
};

export function ChatInput({ disabled, onSubmitPrompt }: ChatInputProps) {
  const fieldRef = useRef<HTMLTextAreaElement>(null);

  function submit(form: HTMLFormElement) {
    const data = new FormData(form);
    const prompt = String(data.get("prompt") ?? "").trim();
    if (!prompt) {
      return;
    }
    onSubmitPrompt(prompt);
    form.reset();
    if (fieldRef.current) {
      fieldRef.current.style.height = "";
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submit(event.currentTarget);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-1">
      <label htmlFor="assistant-prompt" className="sr-only">
        {assistant.placeholder}
      </label>
      <textarea
        ref={fieldRef}
        id="assistant-prompt"
        name="prompt"
        rows={1}
        data-initial-focus
        autoComplete="off"
        disabled={disabled}
        placeholder={assistant.placeholder}
        onKeyDown={handleKeyDown}
        onInput={(event) => {
          const field = event.currentTarget;
          field.style.height = "auto";
          field.style.height = `${Math.min(field.scrollHeight, 96)}px`;
        }}
        className="max-h-24 min-h-11 min-w-0 flex-1 resize-none bg-transparent px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={disabled}
        className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-accent transition-colors duration-200 hover:text-accent-hover disabled:opacity-60"
        aria-label="Send"
      >
        <IconSend className="h-4 w-4" />
      </button>
    </form>
  );
}
