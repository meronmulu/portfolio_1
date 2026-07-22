import { Project } from "../type/projects";

export const projects: Project[] = [
  {
    title: "AgriLink",
    description:
      "An AI-powered smart agriculture platform that connects farmers with buyers, provides intelligent crop recommendations, real-time chat, weather insights, and a multilingual user experience.",
    image: "/images/projects/agrilink.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "NestJS",
      "PostgreSQL",
      "Firebase",
      "Socket.IO",
      "Flutter",
    ],
    githubUrl: "https://github.com/yourusername/agrilink",
    liveUrl: "",
  },

  {
    title: "Pharmacy Management System",
    description:
      "A full-stack pharmacy management system that streamlines medicine inventory, prescription management, sales, customer records, and reporting through a secure dashboard.",
    image: "/images/projects/pharmacy-management-system.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    githubUrl:
      "https://github.com/yourusername/pharmacy-management-system",
    liveUrl: "",
  },

  {
    title: "UsedMarket E-commerce Platform",
    description:
      "A second-hand marketplace that enables users to buy and sell products securely with authentication, product listings, search, favorites, and order management.",
    image: "/images/projects/usedmarket.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Flutter",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/yourusername/usedmarket",
    liveUrl: "",
  },
];