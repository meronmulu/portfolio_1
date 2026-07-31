import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative  py-28">
    

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16  text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            skills 
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#F2EFEA] sm:text-5xl">
            What I build with
          </h2>
          <p className="mt-4 text-neutral-500">
            A running inventory of the tools, languages, and frameworks I reach for.
          </p>
        </div>

        {/* Skill Modules */}
        <div className="grid gap-px overflow-hidden border-2 border-[#F2EFEA]/10 rounded-3xl bg-[#1B1F34] sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, i) => (
            <div
              key={category.title}
              className="group relative bg-[#1B1F34] p-7 transition-colors hover:bg-[#1B1F34]/90"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#F2EFEA]">
                  {category.title}
                </h3>
                <span className="font-mono text-xs text-neutral-300 transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="h-px w-8 bg-primary transition-all duration-300 group-hover:w-16" />

              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-neutral-200 bg-[#1B1F34] px-2.5 py-1 font-mono text-xs text-neutral-300 transition-colors group-hover:border-primary group-hover:text-primary"
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