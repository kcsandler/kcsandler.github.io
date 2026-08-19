export type ChatRole = "user" | "assistant" | "system";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

export type AssistantReply =
  | {
      status: "ok";
      content: string;
    }
  | {
      status: "error";
      content: string;
    };

export type AssistantRequest = {
  messages: ChatMessage[];
};

/**
 * UI → POST /api/assistant → portfolio knowledge retrieval → reply.
 * Swap the route later for embeddings + LLM without changing the UI.
 * The browser must never hold an LLM API key.
 */
export type AssistantService = {
  ask: (messages: ChatMessage[]) => Promise<AssistantReply>;
};
