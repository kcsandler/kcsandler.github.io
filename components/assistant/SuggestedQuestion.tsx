type SuggestedQuestionProps = {
  label: string;
  onSelect: () => void;
};

export function SuggestedQuestion({ label, onSelect }: SuggestedQuestionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="w-full border border-line px-3 py-2.5 text-left text-sm text-ink transition-colors duration-200 hover:border-ink hover:bg-bg-subtle"
    >
      {label}
    </button>
  );
}
