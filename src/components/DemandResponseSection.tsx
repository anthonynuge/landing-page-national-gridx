import Image from "next/image";
import Reveal from "./animations/Reveal";

const features = [
  {
    icon: "/icons/lowercost.svg",
    text: "Reduce costs during peak energy demand periods.",
  },
  {
    icon: "/icons/sustainability.svg",
    text: "Enhance sustainability through smart energy management.",
  },
  {
    icon: "/icons/trending.svg",
    text: "Increase reliability and efficiency of energy use.",
  },
];

const DemandResponseSection = () => {
  return (
    <Reveal>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Text on the left */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Optimize Your Energy with
              <br />
              Demand Response Programs
            </h2>
            <p className="text-gray-700 text-base mb-8">
              Demand Response Programs are designed to manage and reduce peak
              energy usage effectively. By participating, businesses can lower
              costs and enhance sustainability.
            </p>

            <div className="space-y-6">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <Image
                    src={item.icon}
                    alt={`Feature ${index + 1}`}
                    width={60}
                    height={60}
                  />
                  <p className="">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image on the right */}
          <div className="w-full lg:w-1/2 relative h-96">
            <Image
              src="/services/8.jpg"
              alt="Demand Response Visualization"
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

export default DemandResponseSection;
