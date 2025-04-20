'use client';

import Image from "next/image";
import Link from "next/link";
import { Rye } from "next/font/google";

const rye = Rye({
  subsets: ['latin'],
  weight: '400',
});

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "MENU", path: "/menu" },
  { name: "ANALYTICS", path: "/analytics" },
  { name: "ABOUT US", path: "/about" },
];

export default function Navbar() {
  return (
    <header className={`${rye.className} flex justify-between items-center px-10 py-4 border-b-2 border-[#3e2c1c] bg-[#f5ecd9]/90`}>
      <nav className="flex gap-8 text-lg font-semibold text-[#3e2c1c]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="relative block px-4 py-2 font-bold text-[#3e2c1c] transition duration-300 ease-in-out hover:bg-[#3e2c1c] hover:text-white hover:opacity-80 group rounded"
          >
            {link.name}
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
      <Image
        src="/saucy-sales-logo-removebg.png"
        alt="Saucy Sales"
        width={120}
        height={60}
        className="h-12 w-auto"
        style={{ transform: "scale(1.8)" }}
        priority
      />
    </header>
  );
}
