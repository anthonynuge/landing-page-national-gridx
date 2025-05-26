import Reveal from "@/components/animations/Reveal";
import Image from "next/image";
import React from "react";

const Elite4Page = () => {
  return (
    <Reveal>
      <div className="bg-gray-300/30 h-[250px] flex justify-center items-center relative">
        <Image
          src="/team/Elite-4-Realty-Final.png"
          alt="partner"
          fill
          className="object-contain"
        />
      </div>
      <main className="lg:max-w-3xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row justify-around gap-6">
          <div className="flex items-center w-full lg:w-[50%] justify-center lg:justify-end">
            <div className="w-64 h-84 relative">
              <Image
                src="/team/channelPartner.jpg"
                alt="Agent"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="text-center space-y-2 ">
            <h1 className="text-4xl font-bold">
              Empowering your home with utility convenience
            </h1>
            <p className="py-4 ">
              We take care of your utility set up, with ease.
            </p>
            <ul className="space-y-1 font-semibold text-2xl">
              <li>Electricity</li>
              <li>Internet</li>
              <li>Insurance</li>
            </ul>
          </div>
        </div>

        {/* Services Section */}
        <div className="w-full md:text-left text-center space-y-6 py-6">
          <div>
            <h3 className="lg:text-xl font-bold">Residential Electricity</h3>
            <a
              href="https://www.gotrhythm.com/?utm_source=UtilityBuddies&utm_medium=Utility%20Concierge&utm_campaign=Utility%20Concierge_UtilityBuddies_5_DEC_2024&utm_content=UtilityBuddies&rcid=Cmu"
              className="text-blue-600 underline"
            >
              Sign Up Here
            </a>
          </div>
          <div>
            <h3 className="lg:text-xl font-bold">Internet</h3>
            <a
              href="https://www.attspoc.com/?key=xJ7dLUgJb5zNAwTe"
              className="text-blue-600 underline"
            >
              Sign Up Here
            </a>
          </div>
          <div>
            <h3 className="lg:text-xl font-bold">Home & Auto Insurance</h3>
            <a
              href="https://www.brightway.com/agencies/tx/richardson/0225"
              className="text-blue-600 underline"
            >
              Sign Up Here
            </a>
          </div>
        </div>
      </main>
    </Reveal>
  );
};

export default Elite4Page;
