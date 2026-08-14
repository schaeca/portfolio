export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  type: "product" | "system" | "experience";
  status?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    category: "Product",
    title: "Teamential",
    description:
      "A full-stack team hub for amateur sports — bringing match-day planning, squad availability, player management and team voting into one place.",
    tags: ["Full-Stack", "React", "Product"],
    type: "product",
    href: "/work/teamential"
  },
  {
    number: "02",
    category: "System",
    title: "Jira Architecture for SAFe",
    description:
      "Designed and implemented a scalable Jira architecture for a complex SAFe environment in the automotive industry, connecting teams, programs and portfolio-level work.",
    tags: ["Architecture", "Enterprise", "SAFe"],
    type: "system",
    href: "/work/jira-safe"
  },
  {
    number: "03",
    category: "Client Work",
    title: "Doula Website",
    description:
      "Designing and developing a calm, trustworthy website that translates a highly personal service into a clear and approachable digital presence.",
    tags: ["Frontend", "UX / UI", "Client Work"],
    type: "experience",
    status: "In progress",
  },
];