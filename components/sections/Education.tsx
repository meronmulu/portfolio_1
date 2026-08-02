"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";

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

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Education() {
  return (
    <section id="education" className="bg-[#14192B] py-28">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
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
            Education
          </motion.p>

          <motion.h2
            variants={fadeDown}
            className="mt-3 font-serif text-5xl font-medium leading-tight text-[#F2EFEA] sm:text-6xl"
          >
            Academic background
          </motion.h2>

          <motion.p variants={fadeDown} className="mt-5 text-[#9BA3C0]">
            The foundation my engineering practice was built on.
          </motion.p>
        </motion.div>

        {/* Education List */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
          variants={listContainer}
          className="mt-20 space-y-0 rounded-3xl border border-[#F2EFEA]/10 bg-[#1B2242] p-6"
        >
          {education.map((item, i) => (
            <motion.div
              key={item.institution}
              variants={fadeUp}
              className="group relative border-t border-[#F2EFEA]/10 py-10 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                <div className="md:max-w-xl">
                  <p className="font-serif text-sm text-[#E8B75E]">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl font-medium text-[#F2EFEA]">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-lg font-semibold text-[#FF7A59]">
                    {item.institution}
                  </p>

                  <p className="mt-5 leading-relaxed text-[#9BA3C0]">
                    {item.description}
                  </p>
                </div>

                <div className="text-sm text-[#9BA3C0] md:text-right">
                  <p>
                    {new Date(item.startDate).getFullYear()} —{" "}
                    {new Date(item.endDate).getFullYear()}
                  </p>
                  <p className="mt-1">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}