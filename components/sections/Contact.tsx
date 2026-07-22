import Link from "next/link";
import { Mail } from "lucide-react";
     
export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>

          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-600">
            Feel free to contact me for opportunities, collaborations, or projects.
          </p>
        </div>


        {/* Contact Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {/* Email */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <Mail className="mx-auto h-10 w-10 text-blue-600" />

            <h3 className="mt-4 text-xl font-bold">
              Email
            </h3>

            <p className="mt-2 text-gray-600">
              meron@email.com
            </p>
          </div>


          {/* Github */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">

            <h3 className="mt-4 text-xl font-bold">
              GitHub
            </h3>

            <Link
              href="https://github.com/yourusername"
              target="_blank"
              className="mt-2 text-gray-600 hover:text-blue-600"
            >
              github.com/yourusername
            </Link>
          </div>


          {/* LinkedIn */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">

            <h3 className="mt-4 text-xl font-bold">
              LinkedIn
            </h3>

            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="mt-2 text-gray-600 hover:text-blue-600"
            >
              linkedin.com/in/yourusername
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}