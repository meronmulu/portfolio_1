import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Get to Know Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A passionate Software Engineer focused on building modern,
            responsive, and scalable web and mobile applications.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Side */}
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/profile.jpg"
                alt="Meron Mulu"
                width={450}
                height={500}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>

            <h3 className="text-3xl font-bold text-gray-900">
              Software Engineer & Full-Stack Developer
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              I'm a Software Engineering graduate passionate about building
              modern, scalable, and user-friendly applications. I enjoy solving
              real-world problems through clean code and thoughtful software
              design.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              My experience includes developing web applications with React,
              Next.js, Node.js, Laravel, and MySQL, as well as creating
              cross-platform mobile applications using Flutter. I'm always
              eager to learn new technologies and grow as a developer.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">

              {[
                "Full-Stack Development",
                "Frontend Development",
                "Backend Development",
                "REST APIs",
                "Mobile Development",
                "Database Design",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span>{item}</span>
                </div>
              ))}

            </div>

            {/* Info Cards */}
            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-xl border p-4">
                <h4 className="font-semibold text-gray-900">Education</h4>
                <p className="mt-2 text-gray-600">
                  B.Sc. Software Engineering
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <h4 className="font-semibold text-gray-900">Location</h4>
                <p className="mt-2 text-gray-600">
                  Ethiopia
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <h4 className="font-semibold text-gray-900">Experience</h4>
                <p className="mt-2 text-gray-600">
                  Internship & Personal Projects
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="mt-2 text-gray-600">
                  your@email.com
                </p>
              </div>

            </div>

            {/* Button */}
            <div className="mt-10">
              <Link
                href="/resume/Meron_Mulu_CV.pdf"
                target="_blank"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Download CV
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}