"use client";

import Reveal from "@/components/animations/Reveal";

export default function AboutContent() {
  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <Reveal>
        <section className="relative h-[70vh] flex items-center justify-center text-center text-white px-4">
          <div className="absolute inset-0">
            <img
              src="/about-hero.jpg"
              alt="Hero Background"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Navigating Energy Futures
            </h1>
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

      {/* Section 2: Expertise */}
      <Reveal direction="up">
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="/about-meeting.jpg"
                alt="Team Meeting"
                className="rounded-xl w-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Empowering Your Energy Future with Expertise
              </h2>
              <p className="text-gray-700 mb-6">
                At National Grid X, we blend innovation with deep industry
                expertise to help businesses thrive in the evolving energy
                landscape. Our tailored solutions ensure that you navigate the
                complexities of energy procurement and sustainability with
                confidence.
              </p>
              <button className="text-black font-medium hover:underline">
                Meet Our Team &rarr;
              </button>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
