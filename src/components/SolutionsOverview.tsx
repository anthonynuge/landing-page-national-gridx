"use client";

import Reveal from "@/components/animations/Reveal";
import { FaBolt, FaChartBar, FaMoneyBillWave } from "react-icons/fa";

export default function SolutionsOverview() {
  return (
    <section className="py-20 px-4 bg-white text-center">
      <Reveal>
        <h2 className="text-3xl font-bold mb-12">
          Tailored Energy Solutions for Your Unique Business Needs
        </h2>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        <Reveal delay={0.1}>
          <div className="flex flex-col items-center">
            <FaBolt className="text-4xl mb-4 text-red-500" />
            <h3 className="font-semibold text-lg mb-2">
              Empowering Your Business with Customized Energy Strategies
            </h3>
            <p className="text-sm text-gray-600">
              We design personalized energy strategies that align with your
              business objectives.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col items-center">
            <FaChartBar className="text-4xl mb-4 text-red-500" />
            <h3 className="font-semibold text-lg mb-2">
              Maximize Efficiency with Optimal Energy Performance Solutions
            </h3>
            <p className="text-sm text-gray-600">
              Our expert team ensures your energy systems operate at peak
              efficiency.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col items-center">
            <FaMoneyBillWave className="text-4xl mb-4 text-red-500" />
            <h3 className="font-semibold text-lg mb-2">
              Achieve Significant Cost Savings with Our Proven Strategies
            </h3>
            <p className="text-sm text-gray-600">
              We help you reduce energy costs while enhancing sustainability and
              performance.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
