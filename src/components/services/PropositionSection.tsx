import { Bolt, Globe } from "lucide-react";

export default function PropositionSection() {
  return (
    <section className="h-full flex items-center">
      <div className="max-w-7xl mx-auto space-y-4 md:space-y-12 ">
        <h2 className="text-3xl md:text-4xl xl:text-7xl font-bold text-gray-900 leading-tight mb-12">
          Empowering Companies and Industries through Smarter Energy Solutions
        </h2>

        <div className="flex flex-col md:flex-row gap-10 justify-center h-full md:max-h-[16rem]">
          <div className="flex-1 max-w-md text-left">
            <div className=" bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 ">
              <Bolt className="text-red-500" />
            </div>

            <h3 className="text-xl font-semibold mb-2">
              Smarter Energy Procurement
            </h3>

            <p className="text-gray-600">
              NGX helps businesses secure the best energy rates through
              data-driven procurement and market expertise.
            </p>
          </div>

          <div className="flex-1 max-w-md text-left">
            <div className=" bg-red-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="text-red-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Sustainable Energy Solutions
            </h3>
            <p className="text-gray-600">
              Transition to renewable energy and reduce your footprint with
              solutions tailored to your sustainability goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
