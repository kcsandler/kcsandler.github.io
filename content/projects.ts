import type { Project } from "@/lib/types";

export const projectsIntro =
  "Language technology, RAG, NLP, and applied ML — one system at a time.";

export const projects: Project[] = [
  {
    name: "Hiligaynon AI Lexicon",
    category: "NLP · Data · API",
    featured: true,
    summary:
      "A language-technology toolkit that turns a noisy Wiktionary extract into a searchable Hiligaynon lexical database.",
    problem:
      "Hiligaynon has little NLP infrastructure. Wiktionary pages mix real lemmas with ISO-code homographs, category index rows, and noisy glosses.",
    solution:
      "A cleaning pipeline, SQLite store with FTS5 keyword search, MiniLM embeddings with exact cosine semantic search, and a FastAPI for lookup and retrieval.",
    pipeline: [
      "Wiktionary extract",
      "Cleaning / normalization",
      "SQLite + FTS5",
      "MiniLM embeddings",
      "Cosine search",
      "FastAPI",
    ],
    result:
      "1,987 Wiktionary rows cleaned to 1,933 entries / 1,673 unique lemmas (CC BY-SA). On 14 hand-labeled English paraphrases: Recall@5 = 0.7857, MRR = 0.6488 — not a published benchmark; misses are documented in the repo.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLite",
      "FTS5",
      "sentence-transformers",
      "NumPy",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kcsandler/hiligaynon-ai-lexicon",
      },
    ],
  },
  {
    name: "RAG Knowledge Assistant",
    category: "AI · RAG",
    featured: true,
    summary:
      "Local retrieval-augmented generation over your own files, with citations — or a refusal when nothing in the index supports the question.",
    problem:
      "Many RAG demos wrap a hosted LLM and skip the retrieval stack, so answers come from training data and citations get invented.",
    solution:
      "Parse, chunk, embed, and retrieve first. Default answers are extractive snippets with document and chunk citations. An optional OpenAI-compatible LLM can rewrite those snippets; it is not called on refusal.",
    pipeline: [
      "Documents",
      "Parse (PDF / MD / TXT)",
      "Chunking",
      "MiniLM embeddings",
      "Cosine retrieval",
      "Cited answer / refusal",
    ],
    result:
      "On 6 in-domain source-level queries over 3 original sample documents: Recall@5 = 1.0000, MRR = 1.0000. That is not a public RAG benchmark.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLite",
      "pypdf",
      "sentence-transformers",
      "NumPy",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kcsandler/rag-knowledge-assistant",
      },
    ],
  },
  {
    name: "Agent-Based Framework for Topic Modeling & Sentiment Analysis of Public Discourse",
    category: "NLP · Data",
    featured: true,
    summary:
      "A modular NLP pipeline for multilingual, code-switched English and Filipino posts about Baguio City’s Panagbenga Festival.",
    problem:
      "Tourism analytics on this discourse was largely monolingual and built on static datasets, which missed how people actually talk about the festival online.",
    solution:
      "A hybrid pipeline of transformer sentence embeddings, BERTopic topic modeling, and LLM-assisted sentiment analysis, refined across seven Design Science Research iterations.",
    pipeline: [
      "Social posts",
      "Sentence embeddings",
      "BERTopic clusters",
      "LLM-assisted sentiment",
      "Topics for stakeholders",
    ],
    result:
      "Processed 2,428 posts (2022–2026): 165 topics across 55 clusters, topic coherence 0.5067. Positive sentiment tied to cultural identity and parades; negative to traffic and crowd management.",
    technologies: [
      "Transformer embeddings",
      "BERTopic",
      "LLM-assisted sentiment",
      "Design Science Research",
    ],
    links: [
      {
        label: "Live",
        href: "https://panagbenga.vercel.app",
      },
      {
        label: "GitHub",
        href: "https://github.com/kcsandler/Panagbenga",
      },
    ],
  },
  {
    name: "Telco Churn Prediction API",
    category: "Data · ML · API",
    featured: false,
    summary:
      "Supervised churn classifier on the public IBM Telco sample, with dummy baselines, SHAP drivers, and a FastAPI predict endpoint.",
    problem:
      "Accuracy alone is misleading on an imbalanced churn table, and a prediction without drivers is hard to trust.",
    solution:
      "Stratified 60/20/20 splits, dummy and tree/linear models, threshold chosen on validation F1, test scored once, SHAP on /predict.",
    pipeline: [
      "IBM Telco CSV",
      "Clean / encode",
      "Stratified split",
      "Baselines + models",
      "Test metrics",
      "FastAPI + SHAP",
    ],
    result:
      "Logistic regression won validation ROC-AUC (0.8595) over tuned XGBoost (0.8581). Held-out test (n = 1,409): ROC-AUC 0.8321, F1 0.6256, recall 0.7594, accuracy 0.7587 vs majority-class 0.7346. IBM sample data, not a carrier I worked at.",
    technologies: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "SHAP",
      "FastAPI",
      "pandas",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kcsandler/churn-prediction-api",
      },
    ],
  },
];
