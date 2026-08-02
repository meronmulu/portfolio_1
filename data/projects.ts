import { Project } from "../type/projects";

export const projects: Project[] = [
  {
  title: "AgriLink",
  description:
    "An AI-powered smart agriculture platform that connects farmers and buyers through a digital marketplace. It provides AI-based crop recommendations, real-time market prices, weather insights, live chat, multilingual support, and secure authentication to improve agricultural productivity and market accessibility.",
  image: "/images/agrilink.png",
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
  githubUrl: "https://github.com/meronmulu/agrilink",
  liveUrl: "https://agrilink-seven.vercel.app/",
},

  {
    title: "Pharmacy Management System",
    description:
      "A full-stack pharmacy management system that streamlines medicine inventory, prescription management, sales, customer records, and reporting through a secure dashboard.",
    image: "/images/pharmacy-management-system.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      
    ],
    githubUrl:
      "https://github.com/meronmulu/pharmacy-monitoring-frontend",
    liveUrl: "",
  },

  {
    title: " E-commerce Platform",
    description:
      "A marketplace that enables users to buy and sell products securely with authentication, product listings, search, favorites, and order management.",
    image: "/images/projects/usedmarket.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Flutter",
      "Tailwind CSS",
    ],
    githubUrl: "hhttps://github.com/meronmulu/Ecommerce_backend",
    liveUrl: "",
  },
];