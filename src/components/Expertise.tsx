import React from "react";
import Reveal from "./animations/Reveal";
import Image from "next/image";

const Expertise = () => {
  return (
    <Reveal direction="up">
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/about/2.jpg"
              width={450}
              height={450}
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
  );
};

export default Expertise;
