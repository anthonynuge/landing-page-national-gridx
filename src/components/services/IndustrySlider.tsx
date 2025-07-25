"use client";

import { useState } from "react";
import Image from "next/image";
import { INDUSTRIES } from "./constants";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function IndustrySlider() {
  const [industryIdx, setIndustryIdx] = useState(0);
  const industry = INDUSTRIES[industryIdx];
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(1);
    setIndustryIdx(
      (prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length
    );
  };
  const handleNext = () => {
    setDirection(-1);
    setIndustryIdx((prev) => (prev + 1) % INDUSTRIES.length);
  };

  return (
    <section className="">
      <div className="relative max-w-7xl mx-auto h-160">
        <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
          Industries
        </p>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          We Serve
        </h2>
        {/* slider */}
        {/* left */}
        {/* Text Block */}
        <div className="bg-gray-200 w-full md:w-1/3 z-30 h-1/2 md:h-2/3 block md:absolute top-1/2 -translate-y-1/2 left-0 p-6 rounded-lg overflow-hidden">
          <div className="flex flex-col space-y-6 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={industry.title}
                initial={{ x: direction > 0 ? 25 : -25, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -25 : 25, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <h3 className="text-2xl md:text-4xl font-semibold mt-2 md:mt-16 mb-6">
                  {industry.title}
                </h3>
                <p className="flex-1 text-lg">{industry.summary}</p>
              </motion.div>
            </AnimatePresence>

            {/* Static Buttons */}
            <div className="flex gap-4 md:mt-auto ml-auto mt-0">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={handlePrev}
              >
                <ArrowLeft />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={handleNext}
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="h-1/2 md:h-full w-full md:w-3/4 z-20 block md:absolute top-1/2 -translate-y-1/2 right-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={industry.image}
              initial={{ x: direction > 0 ? 25 : -25, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -25 : 25, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
