import React from "react";
import Reveal from "./animations/Reveal";
import Image from "next/image";
const HeroBanner = () => {
  return (
    <Reveal>
      <section className="relative h-[70vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <Image
            src="/about/1.jpg"
            fill
            sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 100vw,
               100vw"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Navigating Energy Futures</h1>
          <p className="text-lg mb-6">
            Transforming energy challenges into opportunities for businesses
            through innovative solutions and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Learn More
            </button>
            <button className="border border-black text-black px-6 py-2 rounded hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default HeroBanner;
