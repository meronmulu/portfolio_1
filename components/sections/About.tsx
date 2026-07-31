import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className=" py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-primary font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="mt-2 text-4xl font-bold text-[#F2EFEA]">
            Get to Know Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            A passionate Software Engineer focused on building modern,
            responsive, and scalable web and mobile applications.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 grid lg:grid-cols-2 lg:items-center">
          {/* Left Side */}
          <div className="flex justify-center">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/photo_2.jpg"
                alt="Meron Mulu"
                width={400}
                height={300}
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
              modern, scalable, and user-friendly applications. I enjoy
              transforming ideas into reliable software solutions through clean
              code, thoughtful architecture, and continuous improvement.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              My experience includes developing full-stack web applications
              using React.js, Next.js, TypeScript, Node.js, Laravel, and
              relational databases such as MySQL and PostgreSQL. I also have
              experience building cross-platform mobile applications using
              Flutter and Dart.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Throughout my academic journey and project experiences, I have
              worked on real-world applications involving authentication, REST
              APIs, database design, real-time communication, and responsive
              user interfaces. I enjoy solving complex problems and creating
              software that provides meaningful value to users.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              I believe in writing maintainable code, following software
              engineering best practices, and continuously improving my skills
              by learning new technologies. I am excited to collaborate with
              talented teams and contribute to impactful software projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
