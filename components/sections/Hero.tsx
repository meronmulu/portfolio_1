import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import {
  SiGithub,
  // SiLinke,
  SiInstagram,
} from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center bg-[#14192B]">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-16 px-6 py-24 md:flex-row">

        {/* Left Side */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF7A59]">
            Hello, I&apos;m
          </p>

          <h1 className="mt-4 font-serif text-6xl font-medium leading-tight text-[#F2EFEA] md:text-7xl">
            Meron Mulu
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-[#9BA3C0]">
            Software Engineer · Full-Stack Developer
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-[#9BA3C0]">
            I&apos;m a software engineer specializing in full-stack web
            development. I build modern, responsive, and scalable web
            applications using JavaScript, TypeScript, React, Next.js,
            Node.js, Laravel, Flutter, and both relational and NoSQL
            databases, with a focus on writing clean, maintainable, and
            efficient code.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Link
              href="https://drive.google.com/file/d/1v6_nCUtSH4zsxLbvODKWqqsweKpfWx-c/view?usp=sharing"
              target="_blank"
              className="rounded-full bg-[#FF7A59] px-6 py-3 text-sm font-semibold text-[#14192B] transition-colors hover:bg-[#FF957A]"
            >
              Download CV
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://github.com/meronmulu"
              target="_blank"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F2EFEA]/15 text-[#9BA3C0] transition-colors hover:border-[#FF7A59] hover:text-[#FF7A59]"
            >
              <SiGithub className="h-5 w-5" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/meron-mulu-307265286"
              target="_blank"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F2EFEA]/15 text-[#9BA3C0] transition-colors hover:border-[#FF7A59] hover:text-[#FF7A59]"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>

            <Link
             href="https://mail.google.com/mail/?view=cm&fs=1&to=meronmulu2121@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F2EFEA]/15 text-[#9BA3C0] transition-colors hover:border-[#FF7A59] hover:text-[#FF7A59]"
            >
              <Mail className="h-5 w-5" />
            </Link>

            <Link
              href="https://www.instagram.com/meron_1.2"
              target="_blank"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F2EFEA]/15 text-[#9BA3C0] transition-colors hover:border-[#FF7A59] hover:text-[#FF7A59]"
            >
              <SiInstagram className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-full border border-[#F2EFEA]/10" />
          <div className="relative h-80 w-80 overflow-hidden rounded-full border border-[#F2EFEA]/10 shadow-xl md:h-96 md:w-96">
            <Image
              src="/images/pp_photo.png"
              alt="Meron Mulu"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}