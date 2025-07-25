import Image from "next/image";

export default function WhyUsSection() {
  return (
    <section className="h-full">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">
            Why Work With Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Smart Strategies.
            <br /> Bold Outcomes.
          </h2>
          <p className="text-gray-600 text-base mb-6">
            National Grid X is a privately owned energy brokerage and consulting
            firm with an established track record of helping clients navigate
            the complex energy market, yielding 15-40% in savings on energy
            spend.
          </p>
          <p className="text-gray-600 mb-8">
            From auditing and analysis to contract negotiation and renewable
            integration, our team is here to ensure your operations are
            cost-efficient, compliant, and future-ready.
          </p>

          <div className="space-y-12">
            {["Buying Power", "Strategic Advice", "Market Transparency"].map(
              (text, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-center  pb-2 cursor-pointer hover:text-black group">
                    <span className="text-lg font-medium text-gray-800 ">
                      {text}
                    </span>
                    <span className="text-sm text-gray-600 group-hover:text-black">
                      Read More
                    </span>
                  </div>
                  <div className="relative h-[1px] bg-border overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full w-0 bg-black
          transition-all duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)]
          group-hover:w-full"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <div className="overflow-hidden rounded-lg relative h-[100%]">
            <Image
              src="/home/whyus.jpg"
              alt="Workers inspecting site"
              fill
              className="object-cover w-full h-full rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
