import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#14192B] ">
      <div className="mx-auto max-w-5xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            /experience — timeline
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#F2EFEA] sm:text-5xl">
            Where I've worked
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-500">
            My professional journey building and shipping software.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative mt-20">

          {/* Vertical Line */}
          <div className="absolute left-4.75 top-2 hidden h-[calc(100%-1rem)] w-px bg-neutral-200 md:block" />

          <div className="space-y-12">
            {experiences.map((experience, i) => (
              <div
                key={`${experience.company}-${experience.role}`}
                className="relative md:pl-16"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-2 hidden h-10 w-10 items-center justify-center rounded-xl border border-primary bg-[#1B1F34] font-mono text-xs font-semibold text-primary shadow-sm md:flex">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Card */}
                <div className="group rounded-2xl border-2 border-[#F2EFEA]/10  bg-[#1B1F34] p-8 transition-all hover:-translate-y-0.5 hover:shadow-md">

                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-[#F2EFEA]">
                        {experience.role}
                      </h3>
                      <p className="mt-1 font-semibold text-primary">
                        {experience.company}
                      </p>
                    </div>

                    <div className="font-mono text-xs text-neutral-500 md:text-right">
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
                      <p className="mt-1 text-neutral-400">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="mt-6 space-y-2.5 text-neutral-600">
                    {experience.description.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                    className="rounded-md border border-neutral-200 bg-[#1B1F34] px-2.5 py-1 font-mono text-xs text-neutral-300 transition-colors group-hover:border-primary group-hover:text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}