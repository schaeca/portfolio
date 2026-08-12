export type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  type: "product" | "system" | "experience";
  status?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    category: "Product",
    title: "Teamential",
    description:
      "A digital hub for amateur sports teams — built to simplify match days, player management and team communication.",
    tags: ["Full-Stack", "Product", "UX"],
    type: "product",
  },
  {
    number: "02",
    category: "System",
    title: "Jira Architecture for SAFe",
    description:
      "A scalable Jira architecture designed for a complex SAFe organization in the automotive industry.",
    tags: ["Architecture", "Enterprise", "SAFe"],
    type: "system",
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