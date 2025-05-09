// File: src/components/header/header.component.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="group relative text-white uppercase tracking-wide text-sm"
    >
      {label}
      <span
        className={`block h-[1.5px] bg-[#CFA04F] absolute -bottom-1 left-0 transition-all duration-300 ease-in-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 text-white font-sans">
      {/* Top gold bar 
      <div className="bg-[#1B1B1B] text-xs tracking-wide px-4 py-1 text-gold flex justify-center">
        Gold / $ · 1927.87 · TBD
      </div> */}

      {/* Main nav */}
      <div className="flex items-end justify-center gap-28 max-w-7xl mx-auto px-6 py-4">
        {/* Left links */}
        <nav className="hidden md:flex gap-12 text-sm uppercase font-medium pb-4">
          <NavLink href="/group" label="The Group" />
          <NavLink href="/companies" label="Companies" />
        </nav>

        {/* Logo */}
        <Link href="/">
          <img
            src="/images/MKS-PAMP-GROUP-logo.png"
            alt="MKS PAMP"
            className="w-auto"
          />
        </Link>

        {/* Right links */}
        <nav className="hidden md:flex gap-12 text-sm uppercase font-medium pb-4">
          <NavLink href="/sustainability" label="Sustainability" />
          <NavLink href="/news" label="News" />
          
        </nav>
      </div>
    </header>
  );
}
