export const assistant = {
  title: "Ask about my work",
  subtitle: "Portfolio assistant",
  triggerLabel: "Ask about my work",
  greeting:
    "Hi — ask me about my projects, experience, technical stack, or AI work.",
  placeholder: "Ask anything...",
  thinking: "Thinking…",
  error:
    "I couldn't reach the assistant right now. Please try again or contact me directly.",
  suggestedHeading: "Suggested questions",
  suggested: [
    {
      label: "What are your strongest projects?",
      prompt: "What are your strongest projects?",
    },
    {
      label: "Tell me about your RAG work.",
      prompt: "Tell me about your RAG work.",
    },
    {
      label: "What technologies do you use?",
      prompt: "What technologies do you use?",
    },
    {
      label: "What did you build at the Philippine Military Academy?",
      prompt: "What did you build at the Philippine Military Academy?",
    },
    {
      label: "Tell me about the Hiligaynon NLP project.",
      prompt: "Tell me about the Hiligaynon NLP project.",
    },
    {
      label: "Are you open to software development opportunities?",
      prompt: "Are you open to software development opportunities?",
    },
  ],
} as const;
