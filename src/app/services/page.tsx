import ConsultingServicesSection from "@/components/services/ConsultingServicesSection";
import PageWrapper from "@/components/layout/PageWrapper";
import FaqSection from "@/components/services/FaqSection";
import PropositionSection from "@/components/services/PropositionSection";
import IndustrySlider from "@/components/services/IndustrySlider";
import SolutionsSection from "@/components/services/Solutions";
import CaseStudySection from "@/components/shared/CaseStudySection";
import HeroLayout from "@/components/shared/HeroLayout";
import ServicesGrid from "@/components/services/ServicesGrid";

export const metadata = {
  title: "Our Services – National Grid X",
  description: "What we can do for you.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroLayout
        title="Services"
        description="We offer a range of services to help businesses take control of their energy decisions."
        imageUrl="/services/serviceshero.jpg"
        scrollTargetId="start"
      />
      <PageWrapper className="space-y-24 md:space-y-52">
        <span id="start" />
        <PropositionSection />
        <ServicesGrid />
        <SolutionsSection />
        <IndustrySlider />
        <FaqSection />
      </PageWrapper>
      <CaseStudySection />
      <PageWrapper className="space-y-24 md:space-y-52 mt-24 md:mt-52 mb-24">
        <ConsultingServicesSection />
      </PageWrapper>
    </>
  );
}
