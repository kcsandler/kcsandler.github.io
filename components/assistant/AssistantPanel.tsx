"use client";

import { AssistantHeader } from "@/components/assistant/AssistantHeader";
import { ChatMessages } from "@/components/assistant/ChatMessages";
import { SuggestedQuestions } from "@/components/assistant/SuggestedQuestions";
import { assistant } from "@/content/assistant";
import type { ChatMessage as ChatMessageType } from "@/lib/assistant/types";
import { useFocusTrap } from "@/lib/hooks/useFocusTrap";
import { cn } from "@/lib/utils";
import { useRef, type ReactNode } from "react";

type AssistantPanelProps = {
  open: boolean;
  onClose: () => void;
  messages: ChatMessageType[];
  pending: boolean;
  onAsk: (prompt: string) => void;
  children: ReactNode;
};

export function AssistantPanel({
  open,
  onClose,
  messages,
  pending,
  onAsk,
  children,
}: AssistantPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  useFocusTrap(open, panelRef);
  const showIntro = messages.length === 0 && !pending;

  return (
    <div
      ref={panelRef}
      id="assistant-panel"
      role={open ? "dialog" : undefined}
      aria-modal={open ? true : undefined}
      aria-labelledby="assistant-title"
      hidden={!open}
      inert={!open}
      className={cn(
        "assistant-panel pointer-events-auto fixed z-50 flex flex-col border border-line bg-bg",
        "inset-x-4 bottom-32 h-[min(36rem,calc(100dvh-9rem))] w-auto",
        "md:inset-x-auto md:right-[4.75rem] md:bottom-4 md:h-[min(36.5rem,calc(100dvh-2rem))] md:w-[26rem]",
        open && "is-open",
      )}
    >
      <AssistantHeader onClose={onClose} />
      <div
        data-chat-scroll
        className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4"
      >
        {showIntro ? (
          <div className="flex flex-col gap-6">
            <p className="text-sm leading-6 text-ink-muted">{assistant.greeting}</p>
            <SuggestedQuestions onAsk={onAsk} />
          </div>
        ) : (
          <ChatMessages messages={messages} pending={pending} />
        )}
      </div>
      <div className="border-t border-line">{children}</div>
    </div>
  );
}
