import teamentialDashboard from "../assets/projects/teamential/dashboard-preview.webp";
import jiraArchitecture from "../assets/projects/jira/architecture-preview.webp";

export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  type: "product" | "system" | "experience";
  previewImage?: string;
  previewAlt?: string;
  previewPosition?: string;
  status?: string;
  badge?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    category: "Product",
    title: "Teamential",
    description:
      "A full-stack team hub built around real amateur sports workflows — connecting match days, squad planning and player management in one product.",
    tags: ["Full-Stack", "Product", "UX"],
    type: "product",
    previewImage: teamentialDashboard,
    previewAlt:
      "Teamential dashboard showing match days, player availability and squad information",
    previewPosition: "object-top",
    badge: "WBS Showcase Project",
    href: "/work/teamential",
  },
  {
    number: "02",
    category: "Enterprise Architecture",
    title: "Jira SAFe Architecture",
    description:
      "A scalable Atlassian architecture translating a complex SAFe delivery model into connected structures for teams, planning and reporting.",
    tags: ["Architecture", "Atlassian", "SAFe"],
    type: "system",
    previewImage: jiraArchitecture,
    previewAlt:
      "Jira architecture diagram showing hierarchy, risks, impediments, objectives and relationships across SAFe levels",
    previewPosition: "object-top",
    href: "/work/jira-safe",
  },
  {
    number: "03",
    category: "Experience",
    title: "Doula Website",
    description:
      "Designing and developing a calm, trustworthy digital experience for a doula and her clients.",
    tags: ["Frontend", "UX / UI", "Client Work"],
    type: "experience",
    status: "In progress",
  },
];