import Image from "next/image";
import AnimatedNumber from "../animations/AnimatedNumber";

export default function CaseStudySection() {
  return (
    <section className="bg-[#26333D] text-white py-16 px-6 md:px-12 mt-24 md:mt-52">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase text-gray-300 mb-3 font-semibold tracking-wide">
            Featured Case Study
          </p>

          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logos/NGXwhite.png"
              alt="NGX Energy Logo"
              width={100}
              height={100}
            />
          </div>

          <p className="text-lg leading-relaxed mb-6 max-w-lg">
            By transitioning to strategic procurement and tailored energy
            audits, NGX Energy helped a major commercial client cut waste, lock
            in competitive contracts, and secure long-term operational savings.
          </p>

          <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition mb-8">
            View Full Story →
          </button>

          <div>
            <p className="text-gray-400 text-sm uppercase mb-1 tracking-wide">
              Verified Energy Cost Savings
            </p>
            <AnimatedNumber
              to={500}
              suffix=" k"
              className="text-5xl font-bold text-white"
            />
            <span className="text-lg align-top">USD</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-70 md:h-140 relative rounded-lg overflow-hidden">
          <Image
            src="/home/three-panel/construction.jpg"
            alt="NGX Energy Client Building"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
