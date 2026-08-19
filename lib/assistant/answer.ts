import { knowledgeDocs, type KnowledgeDoc } from "@/lib/assistant/knowledge";

const STOP = new Set([
  "a",
  "an",
  "the",
  "of",
  "to",
  "and",
  "or",
  "in",
  "on",
  "for",
  "with",
  "about",
  "me",
  "my",
  "your",
  "you",
  "is",
  "are",
  "was",
  "were",
  "be",
  "what",
  "which",
  "who",
  "how",
  "tell",
  "did",
  "do",
  "does",
  "can",
  "i",
  "please",
  "anything",
]);

function tokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+.#/\s-]/g, " ")
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 1 && !STOP.has(token));
}

function scoreDoc(doc: KnowledgeDoc, queryTokens: string[]): number {
  if (queryTokens.length === 0) {
    return 0;
  }
  const haystack = `${doc.title} ${doc.tags.join(" ")} ${doc.body}`.toLowerCase();
  let score = 0;
  for (const token of queryTokens) {
    if (doc.tags.some((tag) => tag.toLowerCase().includes(token))) {
      score += 4;
    }
    if (doc.title.toLowerCase().includes(token)) {
      score += 3;
    }
    if (haystack.includes(token)) {
      score += 1;
    }
  }
  return score;
}

function fallback(): string {
  return [
    "I can talk through projects, experience, tech stack, and how to get in touch.",
    "Try asking about the Hiligaynon lexicon, the RAG assistant, PMA, or Gift of Grace — or email [kurshancraigsandler@gmail.com](mailto:kurshancraigsandler@gmail.com).",
  ].join("\n\n");
}

export function answerFromPortfolio(query: string): string {
  const queryTokens = tokens(query);
  const lowered = query.toLowerCase();

  if (/^(hi|hey|hello|yo)\b/.test(lowered.trim())) {
    return "Hi — ask me about my projects, experience, technical stack, or AI work.";
  }

  const docs = knowledgeDocs();
  const ranked = docs
    .map((doc) => ({ doc, score: scoreDoc(doc, queryTokens) }))
    .sort((a, b) => b.score - a.score);

  if (
    /\b(open|available|hiring|opportunit)/.test(lowered) &&
    /\b(role|roles|work|job|jobs|software|develop|hire|internship)/.test(
      lowered,
    )
  ) {
    const contact = docs.find((doc) => doc.id === "contact");
    if (contact) {
      return contact.body;
    }
  }

  const strongest =
    /\b(strongest|best|featured|top|main)\b/.test(lowered) &&
    /\b(project|projects|work)\b/.test(lowered);

  if (strongest) {
    const featured = ranked.filter((item) =>
      item.doc.tags.includes("featured"),
    );
    const pick = (featured.length > 0 ? featured : ranked).slice(0, 3);
    if (pick[0] && pick[0].score > 0) {
      return [
        "The work I lead with:",
        ...pick.map((item) => item.doc.body),
      ].join("\n\n");
    }
  }

  const top = ranked.filter((item) => item.score >= 4).slice(0, 3);
  if (top.length === 0) {
    return fallback();
  }

  return top.map((item) => item.doc.body).join("\n\n");
}
