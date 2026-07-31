import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import {
  SiGithub,
  SiLinkerd,
  SiInstagram,
} from "@icons-pack/react-simple-icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-24 md:flex-row">

        {/* Left Side */}
        <div className="max-w-2xl">


          <h2 className="mt-6 text-lg font-medium text-gray-600">
            Hello, I'm
          </h2>

          <h1 className="mt-2 text-5xl font-bold text-[#F2EFEA] md:text-7xl">
            Meron Mulu
          </h1>

          <h3 className="text-primary text-2xl font-semibold">
  Software Engineer | Full-Stack Developer
</h3>



          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
  I’m a Software Engineer specializing in full-stack web development. I build
  modern, responsive, and scalable web applications using JavaScript,
  TypeScript, React, Next.js, Node.js, Laravel, Flutter, and both relational
  and NoSQL databases, with a focus on writing clean, maintainable, and
  efficient code.
</p>

          {/* Buttons */}
          <div className="mt-8 flex  gap-4">

            <Link
              href="https://drive.google.com/file/d/1VFOhgb3Jll1r6nhu3vpeO7-8Vol0Byme/view?usp=sharing"
              target="_blank"
              className="btn-primary"
            >
              Download CV
            </Link>


          </div>

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap gap-4">
  <Link
    href="https://github.com/meronmulu"
    target="_blank"
    aria-label="GitHub"
    className="rounded-full border p-3 text-gray-600 transition hover:border-primary hover:text-primary"
  >
    <SiGithub className="h-5 w-5" />
  </Link>

  <Link
    href="https://www.linkedin.com/in/meron-mulu-307265286"
    target="_blank"
    aria-label="LinkedIn"
    className="rounded-full border p-3 text-gray-600 transition hover:border-primary hover:text-primary"
  >
    <SiLinkerd className="h-5 w-5" />
  </Link>

  <Link
    href="mailto:meronmulu2121@gmail.com"
    aria-label="Email"
    className="rounded-full border p-3 text-gray-600 transition hover:border-primary hover:text-primary"
  >
    <Mail className="h-5 w-5" />
  </Link>

 

  <Link
    href="https://www.instagram.com/meron_1.2"
    target="_blank"
    aria-label="Instagram"
    className="rounded-full border p-3 text-gray-600 transition hover:border-primary hover:text-primary"
  >
    <SiInstagram className="h-5 w-5" />
  </Link>
</div>

         
        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="h-80 w-80 overflow-hidden rounded-full  shadow-xl md:h-96 md:w-96">

            <Image
              src="/images/pp_photo.png"
              alt="Meron Mulu"
              width={400}
              height={400}
              className="h-full w-full object-cover"
              priority
            />

          </div>

        </div>

      </div>
    </section>
  );
}