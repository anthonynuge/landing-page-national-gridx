import Image from "next/image";

const services = [
  {
    title: "Optimize Your Energy Use with Expert Audits Tailored to Your Needs",
    description:
      "Our Energy Audits identify inefficiencies and recommend actionable improvements to reduce costs.",
    image: "/services/2.jpg",
    alt: "Energy Optimization Keyboard Key",
  },
  {
    title:
      "Strategic Energy Procurement to Secure the Best Rates for Your Business",
    description:
      "We leverage our market expertise to negotiate favorable energy contracts on your behalf.",
    image: "/services/3.jpg",
    alt: "Team Working on Charts",
  },
  {
    title:
      "Embrace Sustainability with Our Tailored Renewable Energy Solutions",
    description:
      "Our Renewable Energy Solutions help you transition to sustainable sources while saving money.",
    image: "/services/4.jpg",
    alt: "Hands Holding Green Energy Icons",
  },
];

const ConsultingServicesSection = () => {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Unlock Your Energy Potential with Our
          <br />
          Comprehensive Consulting Services
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-full h-48 relative mb-6">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 640px) 33.33vw, 100vw"
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingServicesSection;
