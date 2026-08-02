import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";

const socials = [
  { label: "GitHub", href: "https://github.com/meronmulu", icon: SiGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/meron-mulu-307265286", icon: FaLinkedin },
  { label: "Email", href:"https://mail.google.com/mail/?view=cm&fs=1&to=meronmulu2121@gmail.com", icon: Mail },
  { label: "Instagram", href: "https://instagram.com/meron_1.2", icon: SiInstagram },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#F2EFEA]/10 bg-[#14192B] pt-16">
      <div className=" px-10">

        {/* Top row: name + socials */}
        <div className="flex flex-col items-start justify-between gap-8 pb-12 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-2xl text-[#F2EFEA]">Meron Mulu</p>
            <p className="mt-1 text-sm text-[#9BA3C0]">
              Software engineer
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F2EFEA]/15 text-[#9BA3C0] transition-colors hover:border-[#FF7A59] hover:text-[#FF7A59]"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[#F2EFEA]/10" />

        {/* Bottom row: quick links + copyright + back to top */}
        <div className="flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-[#9BA3C0] transition-colors hover:text-[#FF7A59]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <p className="text-sm text-[#9BA3C0]">
              © {new Date().getFullYear()} Meron Mulu. All rights reserved.
            </p>

            <Link
              href="#top"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F2EFEA]/15 text-[#9BA3C0] transition-colors hover:border-[#FF7A59] hover:text-[#FF7A59]"
            >
              <ArrowUp className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}