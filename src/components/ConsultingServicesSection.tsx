import ThreePanel from "./layout/ThreePanel";

const services = [
  {
    title: "Optimize Your Energy Use with Expert Audits Tailored to Your Needs",
    description:
      "Our Energy Audits identify inefficiencies and recommend actionable improvements to reduce costs.",
    image: "/services/2.jpg",
    alt: "Energy Optimization Keyboard Key",
  },
  {
    title:
      "Strategic Energy Procurement to Secure the Best Rates for Your Business",
    description:
      "We leverage our market expertise to negotiate favorable energy contracts on your behalf.",
    image: "/services/3.jpg",
    alt: "Team Working on Charts",
  },
  {
    title:
      "Embrace Sustainability with Our Tailored Renewable Energy Solutions",
    description:
      "Our Renewable Energy Solutions help you transition to sustainable sources while saving money.",
    image: "/services/4.jpg",
    alt: "Hands Holding Green Energy Icons",
  },
];

const ConsultingServicesSection = () => {
  return (
    <section className="h-full ">
      <div className="max-w-7xl mx-auto">
        <ThreePanel
          title="Unlock Your Energy Potential with Our Comprehensive Consulting Services"
          items={services}
        />
      </div>
    </section>
  );
};

export default ConsultingServicesSection;
