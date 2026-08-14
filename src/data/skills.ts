export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML & CSS",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Tools & Practices",
    skills: [
      "Git & GitHub",
      "TanStack Query",
      "Zod",
      "Vite",
      "Agile / Scrum / SAFe",
    ],
  },
  {
    title: "Beyond the Code",
    skills: [
      "Requirements Engineering",
      "Solution Design",
      "Stakeholder Management",
      "Process Optimization",
      "Team Leadership",
      "Communication",
    ],
  },
];