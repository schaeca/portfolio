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
    label: "IT Consulting",
    title: "Understanding complex systems.",
    description:
      "Working with enterprise software environments, translating business requirements into technical solutions and learning to navigate complexity.",
  },
  {
    id: "senior-consultant",
    label: "Senior Consultant",
    title: "Taking ownership.",
    description:
      "Designing larger solutions, making architectural decisions and taking responsibility from requirements through implementation.",
  },
  {
    id: "team-lead",
    label: "Team Lead",
    title: "Leading people and delivery.",
    description:
      "Supporting teams, coordinating complex work and connecting people, processes and technology to move projects forward.",
  },
  {
    id: "development",
    label: "Software Development",
    title: "Building the solution myself.",
    description:
      "Expanding my development skills and turning ideas into real products with React, TypeScript, Node and modern web technologies.",
  },
  {
    id: "today",
    label: "Today",
    title: "What's next?",
    description:
      "Looking for my next opportunity in frontend or full-stack development — bringing both development skills and years of experience solving real-world IT problems.",
  },
];