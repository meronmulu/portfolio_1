import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section  className="bg-[#14192B] py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF7A59]">
            Portfolio
          </p>

          <h2 className="mt-3 font-serif text-5xl font-medium leading-tight text-[#F2EFEA] sm:text-6xl">
            Featured work
          </h2>

          <p className="mt-5 text-[#9BA3C0]">
            A handful of projects showing how I approach full-stack web and
            mobile development, end to end.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-20 flex flex-col gap-24">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`relative flex flex-col gap-8 lg:flex-row lg:items-center ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Ghost numeral */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-16 left-0 select-none font-serif text-[10rem] font-medium leading-none text-[#E8B75E]/10 sm:text-[13rem]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Image */}
              <div className="relative z-10 w-full lg:w-1/2">
                <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/5 sm:h-96">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 w-full lg:w-1/2">
                <h3 className="font-serif text-3xl font-medium text-[#F2EFEA]">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}