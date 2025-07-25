"use client";

import Image from "next/image";
import AnimatedNumber from "../animations/AnimatedNumber";

const stats = [
  {
    label: "Years Experience",
    value: 12,
    suffix: "",
  },
  {
    label: "Clients Served",
    value: 2000,
    suffix: "+",
  },
  {
    label: "Deals Closed",
    value: 2700,
    suffix: "+",
  },
  {
    label: "kWh Managed",
    value: 42000000,
    suffix: "+",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl uppercase tracking-wide font-bold text-black border-b border-black pb-2 mb-8">
          The Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:text-center gap-8 mb-8">
          {stats.map((stat, i) => (
            <div key={i}>
              <AnimatedNumber
                to={stat.value}
                suffix={stat.suffix}
                className="text-4xl md:text-4xl xl:text-5xl font-bold text-black"
              />
              <p className="mt-2 text-sm font-bold text-black">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-0 md:gap-8">
          <div className="relative h-[600px]">
            <Image
              src="/home/numbers.jpg"
              alt="Stats image"
              fill
              className="object-bottom object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            />
          </div>
          <div className="text-black space-y-4 mx-auto text-sm md:text-base 2xl:text-lg leading-relaxed col-start-2">
            <p>
              NGX Energy is a Texas-based energy brokerage built on
              transparency, performance, and long-term client relationships.
              With over a decade in the industry, we’ve helped thousands of
              businesses find the most competitive electricity and natural gas
              plans.
            </p>
            <p>
              From startups to enterprise clients, we manage energy procurement
              at scale — helping clients lock in rates, reduce usage, and make
              smarter energy decisions through data-backed strategies.
            </p>
            <p>
              Our broker network, supplier relationships, and hands-on support
              model ensure we’re not just a vendor, but a strategic energy
              partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
