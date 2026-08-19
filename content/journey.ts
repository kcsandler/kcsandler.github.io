import { education } from "@/content/education";
import { experience } from "@/content/experience";
import { site } from "@/content/site";
import type { ExperienceRole, JourneyMilestone } from "@/lib/types";

export const journeyCopy = {
  index: "04",
  label: "Journey",
  title: "How I got here",
} as const;

function roleByTitle(title: string): ExperienceRole {
  const role = experience.find((item) => item.role === title);
  if (!role) {
    throw new Error(`Missing experience role: ${title}`);
  }
  return role;
}

const intern = roleByTitle("Software Developer Intern");
const professional = roleByTitle("Software Developer");

export const milestones: JourneyMilestone[] = [
  {
    id: "education",
    kind: "education",
    category: "Education",
    period: education.year,
    title: education.degree,
    organization: education.school,
    location: education.location,
    note: "This is where I learned the fundamentals — programming, data structures, web and app development, then the first stretch of AI and data.",
  },
  {
    id: "internship",
    kind: "internship",
    category: "Internship",
    period: intern.period,
    title: intern.role,
    organization: intern.company,
    location: intern.location,
    technologies: intern.technologies,
    highlights: intern.highlights,
    during: "education",
  },
  {
    id: "professional",
    kind: "professional",
    category: "Contract",
    period: professional.period,
    title: professional.role,
    organization: professional.company,
    location: professional.location,
    technologies: professional.technologies,
    highlights: professional.highlights,
    featured: true,
  },
  {
    id: "now",
    kind: "now",
    category: "Current chapter",
    period: "Now",
    title: "Building what's next",
    note: site.headline,
    open: true,
  },
];
