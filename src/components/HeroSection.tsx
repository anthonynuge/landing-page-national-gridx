import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className=" relative">
      {/* Optional background image (like your cloudy mountain view) */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-70"
        style={{ backgroundImage: 'url("/home/3.jpg")' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-gray-900">
            Empowering Your
            <br />
            Energy Decision for a<br />
            Sustainable Future
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-8">
            At National Grid X, we redefine energy consulting by integrating
            innovative grid optimization strategies tailored for both
            residential and commercial clients. Our mission is to simplify
            complex energy systems, enabling you to achieve your cost and
            sustainability goals with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Learn More
            </button>
            <button className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden border-4 border-red-300">
            <Image
              src="/home/hero.jpg"
              alt="Energy Grid"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
