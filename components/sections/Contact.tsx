"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { SiInstagram,  } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";

const channels = [
  { label: "Email", value: "meronmulu2121@gmail.com", href:"https://mail.google.com/mail/?view=cm&fs=1&to=meronmulu2121@gmail.com", icon: Mail },
  { label: "Instagram", value: "instagram.com/meron_1.2", href: "https://www.instagram.com/meron_1.2", icon: SiInstagram },
  { label: "LinkedIn", value: "linkedin.com/in/meron-mulu", href: "https://www.linkedin.com/in/meron-mulu-307265286", icon: FaLinkedin },
];

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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  return (
    <section id="contact" className="bg-[#14192B] py-28">
      <div className="mx-auto max-w-5xl px-6">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-[#FF7A59]"
        >
          Contact
        </motion.p>

        {/* Ticket panel */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={container}
          className="relative mt-8 flex flex-col overflow-hidden rounded-3xl border border-[#F2EFEA]/10 bg-[#1B2242] md:flex-row"
        >
          {/* Left: statement */}
          <motion.div
            variants={fromLeft}
            className="flex flex-1 flex-col justify-center p-10 md:p-14"
          >
            <h2 className="font-serif text-4xl font-medium leading-tight text-[#F2EFEA] sm:text-5xl">
              Let&apos;s work
              <br />
              together.
            </h2>
            <p className="mt-5 max-w-sm text-[#9BA3C0]">
              Open to opportunities, collaborations, and interesting
              problems. The fastest way to reach me is email.
            </p>

            <Link
              href="mailto:meronmulu2121@gmail.com"
              className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#F2EFEA] underline decoration-[#FF7A59] decoration-2 underline-offset-4 transition-colors hover:text-[#FF7A59]"
            >
              Say hello
            </Link>
          </motion.div>

          {/* Perforated divider */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-6 left-0 w-px border-l-2 border-dashed border-[#F2EFEA]/15" />
            <div className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-[#14192B]" />
            <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-[#14192B]" />
          </div>
          <div className="h-px w-full border-t-2 border-dashed border-[#F2EFEA]/15 md:hidden" />

          {/* Right: channels */}
          <div className="flex flex-1 flex-col justify-center gap-1 p-10 md:p-14">
            {channels.map(({ label, value, href, icon: Icon }, i) => (
              <motion.div key={label} variants={fadeUp}>
                <Link
                  href={href}
                  target="_blank"
                  className="group flex items-center gap-4 border-b border-[#F2EFEA]/5 py-4 last:border-b-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F2EFEA]/10 text-[#9BA3C0] transition-colors group-hover:border-[#FF7A59]/40 group-hover:text-[#FF7A59]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-[#9BA3C0]">
                      {label}
                    </p>
                    <p className="truncate font-serif text-lg text-[#F2EFEA] transition-colors group-hover:text-[#FF7A59]">
                      {value}
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#F2EFEA]/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF7A59]" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}