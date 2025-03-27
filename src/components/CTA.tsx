"use client";

import Reveal from "@/components/animations/Reveal";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative py-20 px-4 bg-gray-900 text-white text-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/about/3.jpg"
          alt="Background"
          width={500}
          height={500}
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4">
            Get Started with National Grid X
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-6 text-lg">
            Contact us today to explore tailored energy solutions that meet your
            business needs.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-100 transition">
              Learn More
            </button>
            <button className="border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
