export type JourneyItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  period?: string;
};

export const journeyItems: JourneyItem[] = [
  {
    id: "consulting",
    label: "IT Consultant",
    title: "Understanding complex systems.",
    description:
      "Working with enterprise software environments, translating business requirements into scalable technical solutions.",
  },
  {
    id: "senior-consultant",
    label: "Senior Atlassian Consultant",
    title: "Taking ownership.",
    description:
      "Designing larger-scale solutions, making architectural decisions and taking responsibility from requirements through implementation.",
  },
  {
    id: "team-lead",
    label: "Project Lead",
    title: "Leading people and delivery.",
    description:
      "Leading teams and delivery while connecting people, processes and technology across complex enterprise projects.",
  },
  {
    id: "development",
    label: "Software Development",
    title: "Building the solution myself.",
    description:
      "Turning ideas into working products with React, TypeScript, Node.js and modern web technologies — from frontend interfaces to APIs and data models.",
  },
  {
    id: "today",
    label: "Today",
    title: "What's next?",
    description:
      "Looking for my next role in frontend or full-stack development — bringing hands-on development skills together with years of experience solving complex business and technology challenges.",
  },
];