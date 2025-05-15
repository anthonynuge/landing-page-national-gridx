"use client"; // Only needed if using /app directory in Next.js 13+

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logos/nationalgridblack.png"
              alt="Logo"
              width={80}
              height={80}
              className=" w-auto"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-800">
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/channel-partners">Channel Partners</Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg px-4 pb-4 space-y-2 text-gray-800">
          <div className="flex flex-col gap-4">
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link href="/channel-partners" onClick={() => setMenuOpen(false)}>
              Channel Partners
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
