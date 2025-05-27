import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Transform Your Energy Experience Today
        </h2>
        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          Unlock significant cost savings while enhancing your sustainability
          efforts. Our advanced technology solutions empower you to make
          informed energy decisions.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Features */}
          <div className="space-y-10">
            <div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="text-3xl mb-2">
                  <Image
                    src="/icons/savings.svg"
                    alt="Lauch"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="font-semibold text-lg">Cost Savings</h3>
                <p className="text-gray-600 text-sm">
                  Reduce your energy expenses with our strategic consulting and
                  optimization services tailored to your needs.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="text-3xl mb-2">
                  <Image
                    src="/icons/sustainability.svg"
                    alt="Lauch"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="font-semibold text-lg">Sustainability Focus</h3>
                <p className="text-gray-600 text-sm">
                  Achieve your sustainability goals with innovative solutions
                  that minimize your environmental impact.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-md max-w-md">
              <Image
                width={500}
                height={500}
                src="/home/4.jpg"
                alt="Energy Tech"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-10">
            <div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="text-3xl mb-2">
                  <Image
                    src="/icons/advanced.svg"
                    alt="Lauch"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="font-semibold text-lg">Advanced Technology</h3>
                <p className="text-gray-600 text-sm">
                  Leverage cutting-edge technology for smarter energy management
                  and improved operational efficiency.
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="text-3xl mb-2">
                  {/* <LaunchIcon className="w-12 h-12" /> */}
                  <Image
                    src="/icons/launch.svg"
                    alt="Lauch"
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="font-semibold text-lg">Get Started</h3>
                <p className="text-gray-600 text-sm">
                  Join us in revolutionizing your energy strategy for a
                  brighter, more sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-row justify-center gap-4">
          <Link href="/about">
            <button className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Learn More
            </button>
          </Link>
          <Link href="/contact" className="flex items-center gap-1">
            <button className="text-black hover:underline text-lg flex items-center gap-1">
              Contact Us <span className="text-xl">›</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
