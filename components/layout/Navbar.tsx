"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { Menu, X } from "lucide-react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skill" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/featuredProjects" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-[#F2EFEA]/10 bg-[#14192B]/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="#home"
          className={`${playfair.className} text-xl font-bold text-[#F2EFEA] transition-colors hover:text-[#FF7A59]`}
        >
          Meron 
           <span className="text-[#FF7A59]">
            Mulu
           </span>
           
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-[#9BA3C0] md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition-colors hover:text-[#FF7A59]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F2EFEA]/15 text-[#F2EFEA] md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-[#F2EFEA]/10 bg-[#14192B] px-6 py-4 text-sm font-medium text-[#9BA3C0] md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-[#FF7A59]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}