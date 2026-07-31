import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const channels = [
    {
      label: "Email",
      value: "meron@email.com",
      href: "mailto:meron@email.com",
    },
    {
      label: "GitHub",
      value: "github.com/yourusername",
      href: "https://github.com/yourusername",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/yourusername",
      href: "https://linkedin.com/in/yourusername",
    },
  ];

  return (
    <section id="contact" className="bg-[#14192B] py-28">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FF7A59]">
            Contact
          </p>

          <h2 className="mt-3 font-serif text-5xl font-medium leading-tight text-[#F2EFEA] sm:text-6xl">
            Let&apos;s work together.
          </h2>

          <p className="mt-5 max-w-lg text-[#9BA3C0]">
            Open to opportunities, collaborations, and interesting problems.
            The fastest way to reach me is email.
          </p>
        </div>

        {/* Contact List */}
        <div className="mt-16 space-y-0">
          {channels.map(({ label, value, href, icon: Icon }, i) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              className="group flex items-center justify-between border-t border-[#F2EFEA]/10 py-7 first:border-t-0 first:pt-0"
            >
              <div className="flex items-center gap-5">
                <span className="font-serif text-sm text-[#E8B75E]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* <Icon className="h-5 w-5 text-[#9BA3C0] transition-colors group-hover:text-[#FF7A59]" /> */}

                <div>
                  <p className="text-sm uppercase tracking-wider text-[#9BA3C0]">
                    {label}
                  </p>
                  <p className="font-serif text-2xl text-[#F2EFEA] transition-colors group-hover:text-[#FF7A59]">
                    {value}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="h-6 w-6 text-[#F2EFEA]/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF7A59]" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}