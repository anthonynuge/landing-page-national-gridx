"use client";
import Image from "next/image";
import { useState } from "react";

const options = [
  {
    title: "Buying Power",
    description:
      "National Grid X leverages aggregated client demand to enhance purchasing strength within the energy markets. By strategically consolidating consumption across our portfolio, we are able to secure preferential pricing, improved contract terms, and long-term stability from suppliers. This collective buying power allows our clients to benefit from efficiencies and cost advantages typically available only to the largest organizations, while maintaining the flexibility required to meet evolving business objectives.",
  },
  {
    title: "Strategic Advice",
    description:
      "At National Grid X, we provide data-driven strategic advice that aligns energy procurement with broader business objectives. Our advisory services extend beyond rate negotiations to encompass risk management, regulatory compliance, sustainability initiatives, and long-term energy planning. By combining market intelligence with deep industry expertise, we equip our clients with the insights and strategies necessary to optimize performance, reduce exposure, and position their organizations for sustainable growth.",
  },
  {
    title: "Market Transparency",
    description:
      "National Grid X is committed to delivering complete visibility into the complexities of the energy market. We provide our clients with clear, unbiased data and real-time market intelligence, ensuring that procurement decisions are informed by fact rather than speculation. By demystifying market dynamics and supplier practices, we empower organizations to make confident, well-grounded choices that drive both cost efficiency and long-term value.",
  },
];

// TODO: Add Drop down
export default function WhyUsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleOpen = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="h-full">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          {/* <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
            Why Work With Us
          </p> */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Smart Strategies.
            <br /> Bold Outcomes.
          </h2>
          <p className="text-gray-600 text-base mb-6">
            National Grid X is a privately owned energy brokerage and consulting
            firm with an established track record of helping clients navigate
            the complex energy market, yielding 15-40% in savings on energy
            spend.
          </p>
          <p className="text-gray-600 mb-8">
            From auditing and analysis to contract negotiation and renewable
            integration, our team is here to ensure your operations are
            cost-efficient, compliant, and future-ready.
          </p>

          <div className="space-y-12">
            {options.map((option, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="group">
                  <div className="flex justify-between items-center pb-2 cursor-pointer hover:text-black">
                    <button
                      onClick={() => handleOpen(idx)}
                      className="flex items-center justify-between w-full"
                      aria-expanded={isOpen}
                      aria-controls={`option-${idx}`}
                    >
                      <span className="text-lg font-medium text-gray-800">
                        {option.title}
                      </span>

                      {/* Right label: overlapped spans, but still in flex flow */}
                      <span className="grid w-24 text-right leading-6 text-sm text-gray-600 group-hover:text-black">
                        <span
                          className={`col-start-1 row-start-1 transition-all duration-300 ${
                            isOpen
                              ? "opacity-0 translate-y-1"
                              : "opacity-100 translate-y-0"
                          }`}
                        >
                          Read More
                        </span>
                        <span
                          className={`col-start-1 row-start-1 transition-all duration-300 ${
                            isOpen
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 -translate-y-1"
                          }`}
                        >
                          Hide
                        </span>
                      </span>
                    </button>
                  </div>

                  <div
                    className={`text-gray-600 mb-4 text-sm transition-all duration-300 ease-in-out ${
                      isOpen ? "block" : "hidden"
                    }`}
                  >
                    {option.description}
                  </div>
                  <div className="relative h-[1px] bg-border overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full w-0 bg-black
          transition-all duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)]
          group-hover:w-full"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <div className="overflow-hidden rounded-lg relative md:h-[42rem]">
            <Image
              src="/home/whyus.jpg"
              alt="Workers inspecting site"
              fill
              className="object-cover w-full h-full rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
