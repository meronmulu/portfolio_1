import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Agrilink",
    description: "A short one-sentence summary of what this project does and the problem it solves.",
    image: "/images/projects/project-one.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "ShadCN UI", "Nest.js", "PostgreSQL", ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-one",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Pharmacy Management System",
    description: "A short one-sentence summary of what this project does and the problem it solves.",
    image: "/images/projects/project-two.png",
    tags: ["Nest.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-two",
    featured: true,
  },
  {
    slug: "project-three",
    title: "UsedMarket E-commerce Platform",
    description: "A short one-sentence summary of what this project does and the problem it solves.",
    image: "/images/projects/project-three.png",
    tags: ["Next.js", "PostgreSQL", "Node.js", "Flutter"],
    githubUrl: "https://github.com/yourusername/project-three",
    featured: false,
  },
]
