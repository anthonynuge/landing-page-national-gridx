import ThreePanel from "./layout/ThreePanel";
import { threePanelItems } from "./services/constants";

const ConsultingServicesSection = () => {
  return (
    <section className="h-full ">
      <div className="max-w-7xl mx-auto">
        <ThreePanel
          title="Unlock Your Energy Potential"
          subTitle="Consulting Services"
          items={threePanelItems}
        />
      </div>
    </section>
  );
};

export default ConsultingServicesSection;
