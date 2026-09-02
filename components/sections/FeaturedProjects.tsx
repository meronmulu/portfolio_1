"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";

const fadeDown = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const headingContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fromLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fromRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-[#14192B] py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{amount: 0.4 }}
          variants={headingContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeDown}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF7A59]"
          >
            Projects
          </motion.p>

          <motion.h2
            variants={fadeDown}
            className="mt-3 font-serif text-5xl font-medium leading-tight text-[#F2EFEA] sm:text-6xl"
          >
            Featured work
          </motion.h2>

          <motion.p variants={fadeDown} className="mt-5 text-[#9BA3C0]">
            A handful of projects showing how I approach full-stack web and
            mobile development, end to end.
          </motion.p>
        </motion.div>

        {/* Projects */}
        <div className="mt-20 flex flex-col gap-24">
          {projects.map((project, i) => {
            const reversed = i % 2 === 1;

            return (
              <div
                key={project.title}
                className={`relative flex flex-col gap-8 lg:flex-row lg:items-center ${
                  reversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{  amount: 0.3 }}
                  variants={reversed ? fromRight : fromLeft}
                  className="relative z-10 w-full lg:w-1/3"
                >
                  <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/5 sm:h-96">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
  className="object-contain"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{  amount: 0.3 }}
                  variants={reversed ? fromLeft : fromRight}
                  className="relative z-10 w-full lg:w-3/5"
                >
                  <p className="font-serif text-sm text-[#E8B75E]">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 font-serif text-3xl font-medium text-[#F2EFEA]">
                    {project.title}
                  </h3>

                  <div className="mt-3 h-px w-12 bg-[#E8B75E]" />

                  <p className="mt-5 leading-relaxed text-[#9BA3C0]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={tech} className="text-sm text-[#F2EFEA]/70">
                        {tech}
                        {idx < project.technologies.length - 1 && (
                          <span className="ml-4 text-[#E8B75E]/40">·</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex items-center gap-6">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="text-sm font-semibold text-[#F2EFEA] underline decoration-[#FF7A59] decoration-2 underline-offset-4 transition-colors hover:text-[#FF7A59]"
                    >
                      View code →
                    </Link>

                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="rounded-full border border-[#F2EFEA]/20 px-5 py-2 text-sm font-semibold text-[#F2EFEA] transition-colors hover:border-[#FF7A59] hover:text-[#FF7A59]"
                      >
                        Live demo
                      </Link>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}