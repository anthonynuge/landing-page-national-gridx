import ConsultingServicesSection from "@/components/ConsultingServicesSection";
import DemandResponseSection from "@/components/DemandResponseSection";
import EnergyAuditSection from "@/components/EnergyAuditSection";
import EnergyProcurementSection from "@/components/EnergyProcurment";
import PageWrapper from "@/components/PageWrapper";
import ServicesHeroSection from "@/components/ServicesHeroSection";
import UtilityBillManagementSection from "@/components/UtilityBillManagementSection";

export const metadata = {
  title: "Our Services – National Grid X",
  description: "What we can do for you.",
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      <ServicesHeroSection />
      <ConsultingServicesSection />
      <EnergyAuditSection />
      <EnergyProcurementSection />
      <DemandResponseSection />
      <UtilityBillManagementSection />
    </PageWrapper>
  );
}
