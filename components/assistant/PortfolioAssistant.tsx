"use client";

import { AssistantPanel } from "@/components/assistant/AssistantPanel";
import { AssistantTrigger } from "@/components/assistant/AssistantTrigger";
import { ChatInput } from "@/components/assistant/ChatInput";
import { assistantService } from "@/lib/assistant/service";
import type { ChatMessage } from "@/lib/assistant/types";
import { useLockBodyScroll } from "@/lib/hooks/useLockBodyScroll";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type PortfolioAssistantProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function PortfolioAssistant({
  open,
  onOpenChange,
}: PortfolioAssistantProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [pending, setPending] = useState(false);
  const pendingRef = useRef(false);
  const messagesRef = useRef<ChatMessage[]>([]);
  const reactId = useId();
  const [lockScroll, setLockScroll] = useState(false);
  useLockBodyScroll(lockScroll);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    function update() {
      setLockScroll(open && media.matches);
    }
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [open]);

  const close = useCallback(() => onOpenChange(false), [onOpenChange]);

  useEffect(() => {
    if (!open) {
      return;
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  const ask = useCallback(async (prompt: string) => {
    const trimmed = prompt.trim();
    if (!trimmed || pendingRef.current) {
      return;
    }
    pendingRef.current = true;
    setPending(true);

    const userMessage: ChatMessage = {
      id: `${reactId}-user-${crypto.randomUUID()}`,
      role: "user",
      content: trimmed,
    };
    const history = [...messagesRef.current, userMessage];
    messagesRef.current = history;
    setMessages(history);

    try {
      const reply = await assistantService.ask(history);
      const next: ChatMessage[] = [
        ...history,
        {
          id: `${reactId}-reply-${crypto.randomUUID()}`,
          role: reply.status === "ok" ? "assistant" : "system",
          content: reply.content,
        },
      ];
      messagesRef.current = next;
      setMessages(next);
    } finally {
      pendingRef.current = false;
      setPending(false);
    }
  }, [reactId]);

  return (
    <>
      <AssistantTrigger open={open} onClick={() => onOpenChange(!open)} />
      {open ? (
        <button
          type="button"
            className="fixed inset-0 z-[45] bg-scrim md:hidden"
          aria-label="Close assistant"
          onClick={close}
        />
      ) : null}
      <AssistantPanel
        open={open}
        onClose={close}
        messages={messages}
        pending={pending}
        onAsk={ask}
      >
        <ChatInput disabled={pending} onSubmitPrompt={ask} />
      </AssistantPanel>
    </>
  );
}
