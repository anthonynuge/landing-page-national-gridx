"use client";

import Image from "next/image";
import ButtonCrossArrow from "../shared/ButtonCrossArrow";
export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full h-screen text-white">
      <Image
        src="/home/hero.jpg"
        alt="Hero image"
        fill
        className="object-cover object-center -z-10"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-9" />
      <div className="relative z-20 flex h-[85%] w-full px-6 md:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between w-full h-full max-w-7xl mx-auto">
          {/* Left - Heading */}
          <div className="flex items-start md:items-start justify-start md:justify-start w-full md:w-1/2 pt-24">
            <h1 className="text-4xl md:text-8xl font-bold leading-tight tracking-tight">
              Power
              <br />
              Reimagined
              <span className="text-xl align-super ml-1">™</span>
            </h1>
          </div>

          {/* Right - Description aligned bottom right */}
          <div className="flex flex-col items-end justify-end w-full md:w-1/2 pb-12 gap-4">
            <p className="text-lg md:text-2xl max-w-md text-right font-bold">
              We simplify energy decisions so your business can operate smarter,
              faster, and more efficiently.
            </p>
            <ButtonCrossArrow text="Contact me" href="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
