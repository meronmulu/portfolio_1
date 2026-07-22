import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Meron Mulu. All rights reserved.
        </p>

        <div className="flex gap-5">

          <Link
            href="https://github.com/yourusername"
            target="_blank"
          >
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
          >
          </Link>

        </div>

      </div>

    </footer>
  );
}