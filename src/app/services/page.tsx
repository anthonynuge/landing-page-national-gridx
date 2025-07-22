import ConsultingServicesSection from "@/components/ConsultingServicesSection";
import PageWrapper from "@/components/layout/PageWrapper";
import FaqSection from "@/components/services/FaqSection";
import PropositionSection from "@/components/services/PropositionSection";
import ServiceSlider from "@/components/services/ServiceSlider";
import SolutionsSection from "@/components/services/Solutions";
import CaseStudySection from "@/components/shared/CaseStudySection";
import HeroLayout from "@/components/shared/HeroLayout";

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
        scrollTargetId="start"
      />
      <PageWrapper className="space-y-24 md:space-y-52">
        <span id="start" />
        <PropositionSection />
        <SolutionsSection />
        <ServiceSlider />
        <FaqSection />
      </PageWrapper>
      <CaseStudySection />
      <PageWrapper className="space-y-24 md:space-y-52 mt-24 md:mt-52 mb-24">
        <ConsultingServicesSection />
      </PageWrapper>
    </>
  );
}
