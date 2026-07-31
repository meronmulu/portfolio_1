import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="bg-[#14192B] py-28">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <div className=" text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Education
          </p>

          <h2 className="mt-3 font-serif text-5xl font-medium leading-tight text-[#F2EFEA] sm:text-6xl">
            Academic background
          </h2>

          <p className="mt-5 text-[#9BA3C0]">
            The foundation my engineering practice was built on.
          </p>
        </div>

        {/* Education List */}
        <div className="mt-20 space-y-0 border-2 border-[#F2EFEA]/10 rounded-3xl bg-[#1B1F34] p-6">
          {education.map((item, i) => (
            <div
              key={item.institution}
              className="group relative border-t border-[#F2EFEA]/10 py-10 first:border-t-0 first:pt-0"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                <div className="md:max-w-xl">
                  <p className="font-serif text-sm text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl font-medium text-[#F2EFEA]">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-lg font-semibold text-primary">
                    {item.institution}
                  </p>

                  <p className="mt-5 leading-relaxed text-[#9BA3C0]">
                    {item.description}
                  </p>
                </div>

                <div className="text-sm text-[#9BA3C0] md:text-right">
                  <p>
                    {new Date(item.startDate).getFullYear()} —{" "}
                    {new Date(item.endDate).getFullYear()}
                  </p>
                  <p className="mt-1">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}