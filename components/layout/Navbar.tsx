import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/hero" className="text-2xl font-bold text-blue-600">
          Meron
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/skills" className="hover:text-blue-600 transition">
              Skills
            </Link>
          </li>
          
          <li>
            <Link href="/featuredProjects" className="hover:text-blue-600 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/experience" className="hover:text-blue-600 transition">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/education" className="hover:text-blue-600 transition">
              Education
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
