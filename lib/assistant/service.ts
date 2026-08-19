import { answerFromPortfolio } from "@/lib/assistant/answer";
import type { AssistantReply, AssistantService, ChatMessage } from "@/lib/assistant/types";

const ERROR_COPY =
  "I couldn't reach the assistant right now. Please try again or contact me directly.";

async function ask(messages: ChatMessage[]): Promise<AssistantReply> {
  const lastUser = [...messages]
    .reverse()
    .find((message) => message.role === "user" && message.content.trim());

  if (!lastUser) {
    return {
      status: "ok",
      content:
        "Hi — ask me about my projects, experience, technical stack, or AI work.",
    };
  }

  try {
    return { status: "ok", content: answerFromPortfolio(lastUser.content) };
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[assistant]", error);
    }
    return { status: "error", content: ERROR_COPY };
  }
}

export const assistantService: AssistantService = {
  ask,
};
