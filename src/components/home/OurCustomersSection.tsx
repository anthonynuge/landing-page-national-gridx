"use client";

import Image from "next/image";

const logos = [
  "/logos/coinbase.svg",
  "/logos/samsung.svg",
  "/logos/mlb.svg",
  "/logos/googlepay.svg",
  "/logos/lenovo.svg",
  "/logos/dior.svg",
];

const OurCustomersSection = () => {
  return (
    <section className="py-16 sm:py-20 px-6 bg-[#E0DBDB] overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          <span className="font-bold">Our</span> Customers
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-2xl md:text-4xl font-light text-neutral-700">
          Trusted by leading brands and companies.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {[...logos, ...logos].map((src, i) => (
            <div
              key={i}
              className="w-24 h-16 md:w-40 md:h-32 relative flex-shrink-0 opacity-80 grayscale hover:grayscale-0 transition"
            >
              <Image
                src={src}
                alt="Client logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mt-10 text-sm text-neutral-500 text-center">+100 more</p>
      </div>
    </section>
  );
};

export default OurCustomersSection;
