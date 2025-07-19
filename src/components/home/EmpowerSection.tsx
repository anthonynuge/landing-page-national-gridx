import ThreePanel from "../layout/ThreePanel";

const services = [
  {
    title: "Brokerage & Procurement",
    description:
      "Customized electricity and gas plans tailored to business usage and goals. Empower negotiates directly with top suppliers to secure competitive rates.",
    image: "/home/three-panel/windmill.jpg",
  },
  {
    title: "Energy Management Consulting",
    description:
      "Analyze, monitor, and optimize your energy usage through detailed reporting and hands-on consulting. We help reduce waste and improve margins.",
    image: "/home/three-panel/construction.jpg",
  },
  {
    title: "Compliance & Risk Review",
    description:
      "Stay compliant with evolving energy regulations. Empower ensures contracts, usage, and billing align with legal and market standards.",
    image: "/home/three-panel/engineer2.jpg",
  },
];

export default function EmpowerSection() {
  return (
    <section className="py-24 min-h-[90vh]">
      <div className="max-w-7xl mx-auto">
        <ThreePanel
          title="Empower Your Energy Decisions"
          subTitle="Energy Solutions"
          items={services}
        />
      </div>
    </section>
  );
}
