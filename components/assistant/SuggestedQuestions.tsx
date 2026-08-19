import { SuggestedQuestion } from "@/components/assistant/SuggestedQuestion";
import { assistant } from "@/content/assistant";

type SuggestedQuestionsProps = {
  onAsk: (prompt: string) => void;
};

export function SuggestedQuestions({ onAsk }: SuggestedQuestionsProps) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
        {assistant.suggestedHeading}
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {assistant.suggested.map((item) => (
          <li key={item.prompt}>
            <SuggestedQuestion
              label={item.label}
              onSelect={() => onAsk(item.prompt)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
