import type { ExperienceRole } from "@/lib/types";

export const experience: ExperienceRole[] = [
  {
    role: "Software Developer",
    company: "Gift of Grace",
    location: "Baguio City · Remote",
    period: "Oct 2025 – Mar 2026",
    technologies: [
      "HTML",
      "JavaScript",
      "Tailwind CSS",
      "React",
      "RAG",
      "NLP",
    ],
    highlights: [
      "Replaced a static Google Sites page with a full-stack company website and RAG-powered chatbot, from requirements through deployment.",
      "Tuned chatbot prompts from real query patterns so the NLP layer could handle FAQs and classify buying intent.",
      "Connected a live Google Sheets pipeline so staff could update pricing and inventory without a developer, with data flows that respected client privacy constraints.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Philippine Military Academy",
    location: "Ft. Gen. Gregorio del Pilar, Baguio",
    period: "Jun 2025 – Aug 2025",
    technologies: ["Laravel", "PHP", "JavaScript", "Tailwind CSS", "MySQL"],
    highlights: [
      "Digitized a paper-heavy Personal History Statement workflow with Laravel, moving data entry and management into a web application.",
      "Built key modules with the development team so staff could access records without relying on paper files.",
    ],
  },
];
