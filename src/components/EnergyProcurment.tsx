import Image from "next/image";

const EnergyProcurementSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Image on the left */}
        <div className="w-full lg:w-1/2 relative h-96">
          <Image
            src="/services/6.jpg"
            alt="Energy Procurement"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Text on the right */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Maximize Your Energy
            <br />
            Procurement Strategy Today
          </h2>
          <p className="text-gray-700 text-base">
            Our energy procurement services focus on negotiating optimal
            contracts tailored to your business needs. We leverage market
            insights to secure the best rates and terms, ensuring your energy
            costs are managed effectively.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnergyProcurementSection;
