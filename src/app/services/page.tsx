import ConsultationCTASection from "@/components/ConsultationCTASection";
import ConsultingServicesSection from "@/components/ConsultingServicesSection";
import DemandResponseSection from "@/components/DemandResponseSection";
import EnergyAuditSection from "@/components/EnergyAuditSection";
import EnergyProcurementSection from "@/components/EnergyProcurment";
import PageWrapper from "@/components/layout/PageWrapper";
import FaqSection from "@/components/services/FaqSection";
import HeroLayout from "@/components/shared/HeroLayout";
import UtilityBillManagementSection from "@/components/UtilityBillManagementSection";

export const metadata = {
  title: "Our Services – National Grid X",
  description: "What we can do for you.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroLayout
        title="Our Services"
        description="We offer a range of services to help businesses take control of their energy decisions."
        imageUrl="/services/1.jpg"
      />
      <PageWrapper>
        <ConsultingServicesSection />
        <FaqSection />
        <EnergyAuditSection />
        <EnergyProcurementSection />
        <DemandResponseSection />
        <UtilityBillManagementSection />
        <ConsultationCTASection />
      </PageWrapper>
    </>
  );
}
