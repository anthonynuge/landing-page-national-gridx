import React from "react";
import Reveal from "./animations/Reveal";
import Image from "next/image";

const EmpowerSection = () => {
  return (
    <Reveal>
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/home/5.jpg"
                width={500}
                height={500}
                alt="Energy Infrastructure"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-4 text-3xl">
              <span className="text-green-600">
                <Image
                  src="/icons/trusted.svg"
                  alt="trusted shield"
                  width={80}
                  height={80}
                />
              </span>
              <span className="text-black">
                <Image
                  src="/icons/lightning.svg"
                  alt="lightening bold"
                  width={80}
                  height={80}
                />
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
              Secured Energy Future with Us
            </h3>
            <p className="text-gray-700 text-base sm:text-lg">
              Consulting with National Grid X means gaining access to expert
              energy consulting tailored to your needs. Our innovative solutions
              help you navigate complex energy markets, ensuring cost efficiency
              and sustainability.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default EmpowerSection;
