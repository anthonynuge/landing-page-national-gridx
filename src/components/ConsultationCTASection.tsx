import Image from "next/image";
import Link from "next/link";
import Reveal from "./animations/Reveal";

const ConsultationCTASection = () => {
  return (
    <Reveal>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border border-gray-900 rounded-lg overflow-hidden flex flex-col lg:flex-row">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                Get Your Personalized Consultation
              </h2>
              <p className="text-gray-700 text-sm mb-6">
                Contact us today to explore tailored solutions for your energy
                needs and cost management.
              </p>
              <Link href="/contact">
                <button className="border border-black text-black px-5 py-2 rounded-md hover:bg-gray-100 transition w-fit">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 relative h-64 lg:h-auto">
              <Image
                src="/services/9.jpg"
                alt="Consultation Meeting"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default ConsultationCTASection;
