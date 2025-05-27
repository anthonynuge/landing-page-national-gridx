// export default HeroSection;
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[60vh] w-full overflow-hidden"
      aria-label="Home Hero Section"
    >
      {/* Background Image */}
      <Image
        src="/home/3.jpg"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10 opacity-70"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
            Empowering Your
            <br />
            Energy Decision for a<br />
            Sustainable Future
          </h1>
          <p className="text-base sm:text-lg mb-8">
            At National Grid X, we redefine energy consulting by integrating
            innovative grid optimization strategies tailored for both
            residential and commercial clients. Our mission is to simplify
            complex energy systems, enabling you to achieve your cost and
            sustainability goals with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/about">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition w-full">
                Learn More
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100 transition w-full">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-xl overflow-hidden border-4 border-red-300 w-[300px] sm:w-[500px]">
            <Image
              src="/home/hero.jpg"
              alt="Energy Grid"
              width={600}
              height={400}
              priority
              className="w-full h-auto object-cover"
              sizes="(min-width: 1024px) 500px, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
