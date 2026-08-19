import type { ReactNode } from "react";

type ChatMessageContentProps = {
  content: string;
};

function renderInline(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\((https?:[^)]+|mailto:[^)]+|\/[^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const href = match[2];
    const external = href.startsWith("http");
    parts.push(
      <a
        key={`link-${key++}`}
        href={href}
        className="text-accent underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:decoration-accent"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {match[1]}
        {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
      </a>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    parts.push(text.slice(last));
  }
  return parts;
}

function renderLine(line: string, key: number): ReactNode {
  const stripped = line.replace(/\*\*(.+?)\*\*/g, "$1");
  const bold = /\*\*(.+?)\*\*/.test(line);
  const content = renderInline(stripped);
  if (line.startsWith("- ")) {
    return (
      <li key={key} className="ml-4 list-disc">
        {renderInline(stripped.slice(2))}
      </li>
    );
  }
  return (
    <p key={key} className={bold ? "font-medium text-ink" : undefined}>
      {content}
    </p>
  );
}

export function ChatMessageContent({ content }: ChatMessageContentProps) {
  const lines = content.split("\n");
  const nodes: ReactNode[] = [];
  let list: ReactNode[] = [];

  function flushList() {
    if (list.length === 0) {
      return;
    }
    nodes.push(
      <ul key={`list-${nodes.length}`} className="space-y-1">
        {list}
      </ul>,
    );
    list = [];
  }

  lines.forEach((line, index) => {
    if (line.startsWith("- ")) {
      list.push(renderLine(line, index));
      return;
    }
    flushList();
    if (line.trim() === "") {
      return;
    }
    nodes.push(renderLine(line, index));
  });
  flushList();

  return <div className="space-y-2 text-sm leading-6 text-ink">{nodes}</div>;
}
