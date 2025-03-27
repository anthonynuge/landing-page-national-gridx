const ContactHeroSection = () => {
  return (
    <section className="relative">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-70"
        style={{ backgroundImage: 'url("/contact/hero.jpg")' }} // Replace with your actual image path
      ></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Let’s Get Connected
        </h1>
        <p className="text-base sm:text-lg text-gray-700">
          We’re here to assist you with inquiries, consultations, and support.
          <br />
          Reach out today!
        </p>
      </div>
    </section>
  );
};

export default ContactHeroSection;
