"use client";

import { ChatMessage } from "@/components/assistant/ChatMessage";
import { assistant } from "@/content/assistant";
import type { ChatMessage as ChatMessageType } from "@/lib/assistant/types";
import { useEffect, useRef } from "react";

type ChatMessagesProps = {
  messages: ChatMessageType[];
  pending: boolean;
};

export function ChatMessages({ messages, pending }: ChatMessagesProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = endRef.current?.closest("[data-chat-scroll]");
    if (scroller instanceof HTMLElement) {
      scroller.scrollTop = scroller.scrollHeight;
    }
  }, [messages, pending]);

  return (
    <div className="flex flex-col gap-5">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      {pending ? (
        <p
          className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted"
          aria-live="polite"
        >
          {assistant.thinking}
        </p>
      ) : null}
      <div ref={endRef} />
    </div>
  );
}
