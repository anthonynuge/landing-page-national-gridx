import Image from "next/image";
import BtnHoverUnderline from "../shared/BtnHoverUnderline";

// const steps = [
//   {
//     title: "Consultation",
//     description:
//       "Our experienced advisors evaluate your business’s energy needs and create a tailored strategy — from plan selection to contract terms.",
//     link: "#",
//   },
//   {
//     title: "Analysis",
//     description:
//       "We run detailed usage and market analysis to identify cost-saving opportunities and supplier matches based on your goals.",
//     link: "#",
//   },
//   {
//     title: "Execution",
//     description:
//       "We finalize your procurement, manage supplier onboarding, and provide ongoing support — ensuring contract accuracy and clarity.",
//     link: "#",
//   },
// ];

export default function ProcessSection() {
  return (
    <section className=" h-full">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl uppercase tracking-wide font-bold text-black border-b border-black pb-2 mb-4">
          Our Process
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 grid-rows-4 lg:grid-rows-3 gap-x-4 gap-y-4 border rounded-md">
          <div className="col-start-1 row-start-1">
            {/* card 1 */}
            <div className="space-y-4 p-4">
              <h3 className="text-2xl font-medium ">Consultation</h3>
              <p className="text-xs text-neutral-700 ">
                Our experienced advisors evaluate your business’s energy needs
                and create a tailored strategy — from plan selection to contract
                terms.
              </p>
              <BtnHoverUnderline href="/" text="Learn More" />
            </div>
          </div>
          <div className="col-start-2 row-start-2">
            {/* card 1 */}
            <div className="space-y-4 p-4">
              <h3 className="text-2xl font-medium ">Analysis</h3>
              <p className="text-xs text-neutral-700">
                We run detailed usage and market analysis to identify
                cost-saving opportunities and supplier matches based on your
                goals.
              </p>
              <BtnHoverUnderline href="/" text="Learn More" />
            </div>
          </div>
          <div className="col-start-3 row-start-3">
            {/* card 1 */}
            <div className="space-y-4 p-4">
              <h3 className="text-2xl font-medium ">Execution</h3>
              <p className="text-xs text-neutral-700 ">
                We finalize your procurement, manage supplier onboarding, and
                provide ongoing support — ensuring contract accuracy and
                clarity.
              </p>
              <BtnHoverUnderline href="/" text="Learn More" />
            </div>
          </div>

          {/* 4 Panel Image */}
          <div className="relative col-start-4 col-span-2 row-span-3 min-h-[40rem]">
            <h4 className="absolute top-0 right-0 text-white text-5xl font-bold z-10 px-4 w-[70%] text-right leading-tight">
              Fuel Your <br />
              Business Simplify
              <br />
              Your Energy
            </h4>
            <Image
              src="/services/powerline3.jpg"
              alt="Process 1"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
