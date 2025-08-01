import Image from "next/image";

export default function ServicesHeroSection() {
  return (
    <section className="relative text-white overflow-hidden h-[80vh] lg:h-[120vh] pl-4 lg:pl-6">
      {/* Dark section */}
      <div className="bg-[#1a1f23] h-[50vh] lg:h-[80vh] inset-0 absolute -z-10" />
      {/* Top Portion */}
      <div className="mt-8 w-full h-[40%] md:h-[30%] mx-auto pr-4 md:pr-0 2xl:max-w-7xl 2xl:mt-22">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 ">
          {/* Heading */}
          <h1 className="text-6xl lg:text-7xl 2xl:text-8xl font-semibold">
            Services
          </h1>

          <div className="flex flex-col justify-between md:gap-4 2xl:h-[12rem]">
            <p className="text-lg lg:text-xl 2xl:text-2xl font-semibold">
              Browse our services below to see how we can assist your business.
            </p>

            <div className="p-4 w-12 h-12 flex items-center justify-center bg-white rounded-full">
              <a href="#services" className="animate-bounce">
                <svg
                  width="24"
                  height="24"
                  className="text-foreground rounded-full"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 4v16M12 20l6-6M12 20l-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-[40%] md:h-[50%] 2xl:h-[50%] top-1/2 md:top-1/3 -translate-y-1/8 2xl:translate-y-0 2xl:left-[20rem]">
        <Image
          src="/services/1.jpg"
          alt="Services Hero"
          priority
          className="rounded-lg w-full h-full object-cover"
          fill
        />
      </div>
    </section>
  );
}
