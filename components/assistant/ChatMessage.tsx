import { ChatMessageContent } from "@/components/assistant/ChatMessageContent";
import type { ChatMessage as ChatMessageType } from "@/lib/assistant/types";
import { cn } from "@/lib/utils";

type ChatMessageProps = {
  message: ChatMessageType;
};

export function ChatMessage({ message }: ChatMessageProps) {
  const label =
    message.role === "user"
      ? "You"
      : message.role === "assistant"
        ? "Portfolio AI"
        : "Notice";

  return (
    <article>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </p>
      <div
        className={cn(
          "mt-2",
          message.role === "system" && "border border-line bg-bg-subtle px-3 py-3",
        )}
      >
        <ChatMessageContent content={message.content} />
      </div>
    </article>
  );
}
