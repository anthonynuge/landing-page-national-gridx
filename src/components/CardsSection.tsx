import React from "react";
import Reveal from "./animations/Reveal";
import Image from "next/image";

const CardsSection = () => {
  return (
    <Reveal>
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Empowering Your Energy Decisions with
            <br className="hidden sm:block" />
            Expert Consulting and Innovative Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="rounded-md overflow-hidden mb-4 w-full max-w-sm">
                <Image
                  src="/home/6.jpg"
                  width={350}
                  height={350}
                  alt="Energy Management"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Comprehensive Energy Management for Commercial Clients
              </h3>
              <p className="text-gray-600 text-sm">
                We provide tailored energy consulting services to optimize your
                costs and sustainability.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="rounded-md overflow-hidden mb-4 w-full max-w-sm">
                <Image
                  src="/home/7.jpg"
                  width={350}
                  height={350}
                  alt="Energy Markets"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Strategic Insights for Navigating Deregulated Energy Markets
                Effectively
              </h3>
              <p className="text-gray-600 text-sm">
                Our expertise helps you understand and leverage market dynamics
                for better outcomes.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="rounded-md overflow-hidden mb-4 w-full max-w-sm">
                <Image
                  src="/home/8.jpg"
                  width={350}
                  height={350}
                  alt="Sustainable Solutions"
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Sustainable Solutions for a Greener Future and Lower Energy
                Costs
              </h3>
              <p className="text-gray-600 text-sm">
                We guide you in implementing energy-efficient practices that
                align with your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default CardsSection;
