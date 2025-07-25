import ThreePanel from "../layout/ThreePanel";
import { threePanelItems } from "./constants";

export default function EmpowerSection() {
  return (
    <section className="py-24 min-h-[90vh]">
      <div className="max-w-7xl mx-auto">
        <ThreePanel
          title="Empower Your Energy Decisions"
          subTitle="Energy Solutions"
          items={threePanelItems}
        />
      </div>
    </section>
  );
}
