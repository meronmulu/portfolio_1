import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Portfolio
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Here are some of the projects I've built, showcasing my experience
            in full-stack web and mobile application development.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
                  >
                    GitHub
                  </Link>

                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="rounded-lg border border-gray-300 px-5 py-2 font-medium transition hover:bg-gray-100"
                    >
                      Live Demo
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