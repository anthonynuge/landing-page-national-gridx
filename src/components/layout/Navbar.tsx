"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import BtnHoverUnderline from "../shared/BtnHoverUnderline";
import HamburgerToggle from "../shared/HamburgerToggle";
import ButtonCrossArrow from "../shared/ButtonCrossArrow";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white">
      <div
        className={`max-w-7xl mx-auto flex items-center px-4 py-2 md:py-4 transition-all duration-300 ease-in-out gap-12 ${
          scrolled ? "scale-100" : " scale-100 2xl:scale-107"
        }`}
      >
        {/* Logo */}
        <Link href="/">
          <div className="relative w-30 h-10">
            {/* Full Logo */}
            <Image
              src="/logos/fullLogo.png"
              alt="Full Logo"
              fill
              className={`absolute top-0 left-0 object-contain transition-all duration-300 ease-in-out 
                ${scrolled ? "opacity-0 scale-100" : "opacity-100 scale-100"}`}
              style={{ transitionProperty: "opacity, transform" }}
              priority
            />

            {/* Short Logo */}
            <Image
              src="/logos/nationalgridblack.png"
              alt="Short Logo"
              fill
              className={`absolute top-0 left-0 object-contain transition-all duration-300 ease-in-out 
                ${scrolled ? "opacity-100 scale-90" : "opacity-0 scale-0"}`}
              style={{ transitionProperty: "opacity, transform" }}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden flex-1 md:flex space-x-8 text-sm font-medium text-gray-800">
          <BtnHoverUnderline text="About Us" href="/about" />
          <BtnHoverUnderline text="Services" href="/services" />
          <BtnHoverUnderline text="Insights" href="/insights" />
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <ButtonCrossArrow text="Contact Us" href="/contact" />
        </div>

        {/* Mobile Menu Button */}
        <HamburgerToggle
          isOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-auto"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg px-4 pb-4 py-8 space-y-2 text-gray-800 h-[calc(100dvh)] transition-opacity duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-8">
          <Link
            href="/about"
            className="text-4xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-4xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/insights"
            className="text-4xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className="text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
