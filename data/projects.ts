import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description: "A short one-sentence summary of what this project does and the problem it solves.",
    image: "/images/projects/project-one.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-one",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "A short one-sentence summary of what this project does and the problem it solves.",
    image: "/images/projects/project-two.png",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-two",
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    description: "A short one-sentence summary of what this project does and the problem it solves.",
    image: "/images/projects/project-three.png",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/yourusername/project-three",
    featured: false,
  },
];
