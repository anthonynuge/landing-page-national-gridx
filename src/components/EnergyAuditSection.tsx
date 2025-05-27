import Image from "next/image";
import Reveal from "./animations/Reveal";

const EnergyAuditsSection = () => {
  return (
    <Reveal>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Maximize Efficiency with
              <br />
              Comprehensive Energy Audits
              <br />
              Tailored to Your Needs
            </h2>
            <p className="text-gray-700 text-base mb-8">
              Our energy audits provide a thorough analysis of your energy
              consumption patterns. We identify opportunities for improvement,
              helping you reduce costs and enhance sustainability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/icons/analysis.svg"
                  alt="Expert Analysis"
                  width={50}
                  height={50}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Expert Analysis
                  </h4>
                  <p className="text-sm text-gray-700">
                    Receive a detailed report highlighting inefficiencies and
                    actionable recommendations for savings.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/icons/solutions.svg"
                  alt="Sustainable Solutions"
                  width={60}
                  height={60}
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Sustainable Solutions
                  </h4>
                  <p className="text-sm text-gray-700">
                    Align your energy use with sustainability goals while
                    optimizing operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 relative h-96">
            <Image
              src="/services/5.jpg"
              alt="Energy Audit"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default EnergyAuditsSection;
