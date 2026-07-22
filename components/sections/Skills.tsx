import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Skills
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            My Skills
          </h2>

          <p className="mt-4 text-gray-600">
            Technologies and skills I use to build software.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border p-6 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="mb-5 text-xl font-bold text-blue-600">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}