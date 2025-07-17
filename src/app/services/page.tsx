import ConsultationCTASection from "@/components/ConsultationCTASection";
import ConsultingServicesSection from "@/components/ConsultingServicesSection";
import DemandResponseSection from "@/components/DemandResponseSection";
import EnergyAuditSection from "@/components/EnergyAuditSection";
import EnergyProcurementSection from "@/components/EnergyProcurment";
import PageWrapper from "@/components/layout/PageWrapper";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import UtilityBillManagementSection from "@/components/UtilityBillManagementSection";

export const metadata = {
  title: "Our Services – National Grid X",
  description: "What we can do for you.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHeroSection />
      <PageWrapper>
        <ConsultingServicesSection />
        <EnergyAuditSection />
        <EnergyProcurementSection />
        <DemandResponseSection />
        <UtilityBillManagementSection />
        <ConsultationCTASection />
      </PageWrapper>
    </>
  );
}
