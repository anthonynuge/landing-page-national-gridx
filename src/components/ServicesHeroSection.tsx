import Image from "next/image";
const ServicesHeroSection = () => {
  return (
    <section className="relative h-[40vh] w-full overflow-hidden">
      {/* Optimized Background Image */}
      <Image
        src="/services/1.jpg" // Replace with actual path
        alt="Our Services"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40 -z-10"
      />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Comprehensive
          <br />
          Energy Solutions
        </h1>
        <p className="text-base sm:text-lg text-gray-900 max-w-2xl">
          Explore our extensive range of services designed to optimize your
          energy management and reduce costs.
        </p>
      </div>
    </section>
  );
};

export default ServicesHeroSection;
