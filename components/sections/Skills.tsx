"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

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

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#14192B] py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{  amount: 0.4 }}
          variants={headingContainer}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeDown}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF7A59]"
          >
            Skills
          </motion.p>
          <motion.h2
            variants={fadeDown}
            className="mt-3 font-serif text-5xl font-medium leading-tight text-[#F2EFEA] sm:text-6xl"
          >
            What I build with
          </motion.h2>
          <motion.p variants={fadeDown} className="mt-5 text-[#9BA3C0]">
            A running inventory of the tools, languages, and frameworks I
            reach for.
          </motion.p>
        </motion.div>

        {/* Skill Modules */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{  amount: 0.15 }}
          variants={gridContainer}
          className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#F2EFEA]/10 bg-[#F2EFEA]/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((category, i) => (
            <motion.div
              key={category.title}
              variants={cardUp}
              className="group relative bg-[#1B2242] p-10 transition-colors hover:bg-[#1B2242]/70"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#F2EFEA]">
                  {category.title}
                </h3>
                <span className="font-serif text-sm text-[#E8B75E]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="h-px w-8 bg-[#FF7A59] transition-all duration-300 group-hover:w-16" />

              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#F2EFEA]/15 px-2.5 py-1 text-xs text-[#9BA3C0] transition-colors group-hover:border-[#FF7A59]/40 group-hover:text-[#F2EFEA]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}