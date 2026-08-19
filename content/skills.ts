import type { SkillGroup } from "@/lib/types";

export const skillsIntro =
  "A practical toolkit across software, data, and AI.";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    column: "left",
    items: ["JavaScript", "TypeScript", "Python", "Java", "PHP"],
  },
  {
    category: "Frontend",
    column: "right",
    items: ["React", "Next.js", "HTML", "Tailwind CSS"],
  },
  {
    category: "Backend & infra",
    span: "full",
    items: ["Laravel", "FastAPI", "REST APIs", "Docker", "Git", "Vercel"],
  },
  {
    category: "Data",
    column: "left",
    items: [
      "SQLite",
      "MySQL",
      "pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
      "SHAP",
    ],
  },
  {
    category: "AI & automation",
    column: "right",
    items: [
      "NLP",
      "RAG",
      "LLM APIs",
      "LangChain",
    ],
  },
];
