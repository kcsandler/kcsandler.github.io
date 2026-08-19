import { about } from "@/content/about";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { site } from "@/content/site";

export type KnowledgeDoc = {
  id: string;
  title: string;
  tags: string[];
  body: string;
};

function projectDoc(project: (typeof projects)[number], index: number): KnowledgeDoc {
  const links = project.links
    .map((link) => `[${link.label}](${link.href})`)
    .join(" · ");
  const featured = project.featured ? "featured" : "supporting";
  return {
    id: `project-${index}`,
    title: project.name,
    tags: [
      "project",
      "projects",
      featured,
      "built",
      "work",
      project.category,
      ...project.technologies,
      ...project.name.toLowerCase().split(/\s+/),
      ...(project.name.toLowerCase().includes("hiligaynon")
        ? ["hiligaynon", "nlp", "lexicon"]
        : []),
      ...(project.name.toLowerCase().includes("rag") ? ["rag"] : []),
    ],
    body: [
      `**${project.name}** — ${project.category}`,
      project.summary,
      `Problem: ${project.problem}`,
      `What I built: ${project.solution}`,
      `How it works: ${project.pipeline.join(" → ")}`,
      project.result ? `Result: ${project.result}` : "",
      `Tech: ${project.technologies.join(", ")}`,
      links ? `Links: ${links}` : "",
    ]
      .filter(Boolean)
      .join("\n\n"),
  };
}

export function knowledgeDocs(): KnowledgeDoc[] {
  return [
    {
      id: "identity",
      title: "Who I am",
      tags: [
        "who",
        "about",
        "kurshan",
        "casilen",
        "software",
        "developer",
        "ai",
        "data",
        "full-stack",
        "fullstack",
      ],
      body: [
        `**${site.name}** — ${site.role}`,
        site.headline,
        site.positioning,
        site.identityLine,
      ].join("\n\n"),
    },
    {
      id: "about",
      title: about.title,
      tags: ["about", "personality", "lifting", "running", "gaming"],
      body: `**${about.title}.** ${about.lead}`,
    },
    {
      id: "contact",
      title: "Contact and opportunities",
      tags: [
        "contact",
        "email",
        "linkedin",
        "github",
        "resume",
        "open",
        "opportunities",
        "role",
        "hiring",
        "available",
        "work",
      ],
      body: [
        `**${site.contactTitle}**`,
        site.contactBody,
        `Email: [${site.email}](mailto:${site.email})`,
        `LinkedIn: [linkedin.com/in/kurshan](${site.linkedin})`,
        `GitHub: [github.com/kcsandler](${site.github})`,
        `Resume: [Download resume](${site.resumeHref})`,
      ].join("\n\n"),
    },
    {
      id: "stack",
      title: "Tech stack",
      tags: [
        "tech",
        "stack",
        "technologies",
        "skills",
        "tools",
        "languages",
        "frontend",
        "backend",
        "python",
        "react",
        "laravel",
        "fastapi",
      ],
      body: [
        "**Tech stack** — a practical toolkit across software, data, and AI.",
        ...skillGroups.map(
          (group) => `${group.category}: ${group.items.join(", ")}`,
        ),
      ].join("\n\n"),
    },
    ...experience.map((role, index) => ({
      id: `experience-${index}`,
      title: `${role.role} at ${role.company}`,
      tags: [
        "experience",
        "work",
        "job",
        role.company,
        role.role,
        ...role.technologies,
        ...role.company.toLowerCase().split(/\s+/),
        ...(role.company.includes("Military") ? ["pma", "academy"] : []),
      ],
      body: [
        `**${role.role}**, ${role.company} (${role.period}, ${role.location})`,
        `Tech: ${role.technologies.join(", ")}`,
        ...role.highlights.map((item) => `- ${item}`),
      ].join("\n"),
    })),
    ...projects.map(projectDoc),
  ];
}
