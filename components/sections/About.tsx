"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeDown = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fromLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fromRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function About() {
  return (
    <section id="about" className="bg-[#14192B] py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{  amount: 0.4 }}
          variants={container}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeDown}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF7A59]"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={fadeDown}
            className="mt-3 font-serif text-5xl font-medium leading-tight text-[#F2EFEA] sm:text-6xl"
          >
            Get to know me
          </motion.h2>

          <motion.p
            variants={fadeDown}
            className="mx-auto mt-5 max-w-xl text-[#9BA3C0]"
          >
            A passionate software engineer focused on building modern,
            responsive, and scalable web and mobile applications.
          </motion.p>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:items-start lg:gap-16">
          {/* Left Side — image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{  amount: 0.3 }}
            variants={fromLeft}
            className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-3xl border border-[#F2EFEA]/10 lg:mx-0"
          >
            <Image
              src="/images/photo_2.jpg"
              alt="Meron Mulu"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side — text */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{  amount: 0.3 }}
            variants={container}
          >
            <motion.h3
              variants={fromRight}
              className="font-serif text-3xl font-medium text-[#F2EFEA]"
            >
              Software Engineer &amp; Full-Stack Developer
            </motion.h3>

            <motion.div
              variants={fromRight}
              className="mt-4 h-px w-12 bg-[#FF7A59]"
            />

            <div className="mt-6 space-y-5 leading-relaxed text-[#9BA3C0]">
              <motion.p variants={fadeUp}>
                I&apos;m a software engineering graduate passionate about
                building modern, scalable, and user-friendly applications. I
                enjoy transforming ideas into reliable software solutions
                through clean code, thoughtful architecture, and continuous
                improvement.
              </motion.p>

              <motion.p variants={fadeUp}>
                My experience includes developing full-stack web applications
                using React.js, Next.js, TypeScript, Node.js, Laravel, and
                relational databases such as MySQL and PostgreSQL. I also have
                experience building cross-platform mobile applications using
                Flutter and Dart.
              </motion.p>

              <motion.p variants={fadeUp}>
                Throughout my academic journey and project experiences, I have
                worked on real-world applications involving authentication,
                REST APIs, database design, real-time communication, and
                responsive user interfaces. I enjoy solving complex problems
                and creating software that provides meaningful value to
                users.
              </motion.p>

              <motion.p variants={fadeUp}>
                I believe in writing maintainable code, following software
                engineering best practices, and continuously improving my
                skills by learning new technologies. I am excited to
                collaborate with talented teams and contribute to impactful
                software projects.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}