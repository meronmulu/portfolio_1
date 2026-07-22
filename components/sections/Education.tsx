import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Education
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            My Education
          </h2>

          <p className="mt-4 text-gray-600">
            My academic background and foundation in software engineering.
          </p>
        </div>


        {/* Education Card */}
        <div className="mx-auto mt-16 max-w-3xl space-y-8">

          {education.map((item) => (
            <div
              key={item.institution}
              className="rounded-2xl border bg-gray-50 p-8 shadow-sm transition hover:shadow-lg"
            >

              <div className="flex flex-col justify-between gap-4 md:flex-row">

                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.degree}
                  </h3>

                  <p className="mt-2 font-semibold text-blue-600">
                    {item.institution}
                  </p>
                </div>


                <div className="text-sm text-gray-500">
                  <p>
                    {new Date(item.startDate).getFullYear()} -{" "}
                    {new Date(item.endDate).getFullYear()}
                  </p>

                  <p>
                    {item.location}
                  </p>
                </div>

              </div>


              <p className="mt-6 leading-7 text-gray-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}