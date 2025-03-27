import Reveal from "./animations/Reveal";

const ServicesHeroSection = () => {
  return (
    <Reveal>
      <section className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url("/services/1.jpg")' }} // ← use your actual image path
        ></div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
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
    </Reveal>
  );
};

export default ServicesHeroSection;
