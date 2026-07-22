import Link from "next/link";
import Image from "next/image";


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-16 px-6 py-24 md:flex-row">

        {/* Left Side */}
        <div className="max-w-2xl">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            👋 Open to Opportunities
          </span>

          <h2 className="mt-6 text-lg font-medium text-gray-600">
            Hello, I'm
          </h2>

          <h1 className="mt-2 text-5xl font-bold text-gray-900 md:text-7xl">
            Meron Mulu
          </h1>

          <h3 className="mt-4 text-2xl font-semibold text-blue-600">
            Software Engineer | Full-Stack Developer
          </h3>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            I build modern, responsive, and scalable web applications using
            Next.js, React, TypeScript, Node.js, Laravel, Flutter, and MySQL.
            I'm passionate about solving real-world problems through software.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">

            <Link
              href="/resume/Meron_Mulu_CV.pdf"
              target="_blank"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Download CV
            </Link>

            <Link
              href="#projects"
              className="rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
            >
              View Projects
            </Link>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6 text-2xl">

            <Link
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-blue-600"
            >
            </Link>

            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-blue-600"
            >
            </Link>

            <Link
              href="mailto:youremail@example.com"
              className="hover:text-blue-600"
            >
            </Link>

          </div>

          {/* Tech Stack */}
          <div className="mt-10 flex flex-wrap gap-3">

            {[
              "Next.js",
              "React",
              "TypeScript",
              "Node.js",
              "Laravel",
              "Flutter",
              "MySQL",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium"
              >
                {tech}
              </span>
            ))}

          </div>
        </div>

        {/* Right Side */}
        <div className="relative">

          <div className="h-80 w-80 overflow-hidden rounded-full border-4 border-blue-600 shadow-xl md:h-96 md:w-96">

            <Image
              src="/images/profile.jpg"
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