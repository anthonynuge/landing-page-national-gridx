import Image from "next/image";
const ContactHeroSection = () => {
  return (
    <section
      className="relative min-h-[20vh] sm:min-h-[40vh] w-full overflow-hidden flex items-center"
      role="region"
      aria-label="Contact Hero Section"
    >
      {/* Optimized Background Image */}
      <Image
        src="/contact/1.jpg"
        alt="Contact Background"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 opacity-50"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Let’s Get Connected
        </h1>
        <p className="text-base sm:text-lg text-gray-800">
          We’re here to assist you with inquiries, consultations, and support.
          <br />
          Reach out today!
        </p>
      </div>
    </section>
  );
};

export default ContactHeroSection;
