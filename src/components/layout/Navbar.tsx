"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import BtnHoverUnderline from "../shared/BtnHoverUnderline";
import HamburgerToggle from "../shared/HamburgerToggle";
import CoolBtn from "../shared/CoolBtn";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoBaseClass =
    "absolute top-0 left-0 object-contain transition-all duration-300 ease-in-out";
  const logoTransitionStyle = { transitionProperty: "opacity, transform" };

  return (
    <header className="sticky top-0 z-50 shadow-sm bg-white">
      {/* Top Bar */}
      <div
        className={`max-w-7xl mx-auto flex items-center px-4 py-2 md:py-4 gap-12 transition-all duration-300 ease-in-out ${
          scrolled ? "scale-100" : "2xl:scale-107"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative w-25 h-8 2xl:w-30 2xl:h-10 block"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logos/fullLogo.png"
            alt="Full Logo"
            fill
            className={`${logoBaseClass} ${
              scrolled ? "opacity-0 scale-100" : "opacity-100 scale-100"
            }`}
            sizes="100px"
            style={logoTransitionStyle}
            priority
          />
          <Image
            src="/logos/nationalgridblack.png"
            alt="Short Logo"
            fill
            className={`${logoBaseClass} ${
              scrolled ? "opacity-100 scale-90" : "opacity-0 scale-0"
            }`}
            sizes="100px"
            style={logoTransitionStyle}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 space-x-8 text-sm font-medium text-gray-800">
          <BtnHoverUnderline
            text="About Us"
            href="/about"
            currentPath={pathname}
          />
          <BtnHoverUnderline
            text="Services"
            href="/services"
            currentPath={pathname}
          />
          <BtnHoverUnderline
            text="Insights"
            href="/insights"
            currentPath={pathname}
          />
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CoolBtn href="/contact" label="Contact Us" />
        </div>

        {/* Mobile Menu Toggle */}
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
          {["about", "services", "insights"].map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className="text-4xl font-bold"
              onClick={() => setMenuOpen(false)}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-2xl"
          >
            <div className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition text-center">
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
