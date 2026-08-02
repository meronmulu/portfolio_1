"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

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
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fromRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="bg-[#14192B] py-28">
      <div className="mx-auto max-w-5xl px-6">

        {/* Section Header */}
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
            Experience
          </motion.p>

          <motion.h2
            variants={fadeDown}
            className="mt-3 font-serif text-5xl font-medium leading-tight text-[#F2EFEA] sm:text-6xl"
          >
            Where I&apos;ve worked
          </motion.h2>

          <motion.p variants={fadeDown} className="mx-auto mt-5 max-w-2xl text-[#9BA3C0]">
            My professional journey building and shipping software.
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-4.75 top-2 hidden h-[calc(100%-1rem)] w-px bg-[#F2EFEA]/10 md:block" />

          <div className="space-y-12">
            {experiences.map((experience, i) => {
              const reversed = i % 2 === 1;

              return (
                <motion.div
                  key={`${experience.company}-${experience.role}`}
                  initial="hidden"
                  whileInView="show"
                  viewport={{  amount: 0.3 }}
                  variants={reversed ? fromRight : fromLeft}
                  className="relative md:pl-16"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 top-2 hidden h-10 w-10 items-center justify-center rounded-xl border border-[#FF7A59]/30 bg-[#1B2242] font-serif text-xs font-semibold text-[#E8B75E] shadow-sm md:flex">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Card */}
                  <div className="group rounded-2xl border border-[#F2EFEA]/10 bg-[#1B2242] p-8 transition-all hover:-translate-y-0.5 hover:border-[#FF7A59]/30">

                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                      <div>
                        <h3 className="font-serif text-2xl font-medium text-[#F2EFEA]">
                          {experience.role}
                        </h3>
                        <p className="mt-1 font-semibold text-[#FF7A59]">
                          {experience.company}
                        </p>
                      </div>

                      <div className="text-sm text-[#9BA3C0] md:text-right">
                        <p>
                          {new Date(experience.startDate).toLocaleDateString(
                            "en-US",
                            { month: "short", year: "numeric" }
                          )}
                          {" – "}
                          {new Date(experience.endDate).toLocaleDateString(
                            "en-US",
                            { month: "short", year: "numeric" }
                          )}
                        </p>
                        <p className="mt-1 text-[#9BA3C0]/70">
                          {experience.location}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="mt-6 space-y-2.5 text-[#9BA3C0]">
                      {experience.description.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#FF7A59]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#F2EFEA]/15 px-2.5 py-1 text-xs text-[#9BA3C0] transition-colors group-hover:border-[#FF7A59]/40 group-hover:text-[#F2EFEA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}