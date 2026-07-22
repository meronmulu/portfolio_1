import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Experience
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            My Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            My professional journey and hands-on experience building software
            applications.
          </p>
        </div>


        {/* Experience Timeline */}
        <div className="relative mt-16">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 hidden h-full w-0.5 bg-gray-200 md:block"></div>


          <div className="space-y-10">

            {experiences.map((experience) => (
              <div
                key={`${experience.company}-${experience.role}`}
                className="relative md:pl-12"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 hidden h-8 w-8 items-center justify-center rounded-full bg-blue-600 md:flex">
                </div>


                {/* Card */}
                <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-lg">

                  <div className="flex flex-col justify-between gap-4 md:flex-row">

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {experience.role}
                      </h3>

                      <p className="mt-1 font-semibold text-blue-600">
                        {experience.company}
                      </p>
                    </div>


                    <div className="text-sm text-gray-500">
                      <p>
                        {new Date(experience.startDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            year: "numeric",
                          }
                        )}{" "}
                        -
                        {" "}
                        {new Date(experience.endDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>

                      <p className="mt-1">
                        {experience.location}
                      </p>
                    </div>

                  </div>


                  {/* Description */}
                  <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-600">

                    {experience.description.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}

                  </ul>


                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">

                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
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