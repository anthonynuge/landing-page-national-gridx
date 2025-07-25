import HeroSection from "@/components/home/HeroSection";
import ServiceSection from "@/components/home/ServiceSection";
import OurCustomersSection from "@/components/home/OurCustomersSection";
import StatsSection from "@/components/home/StatsSection";
import PageWrapper from "@/components/layout/PageWrapper";
import EmpowerSection from "@/components/home/EmpowerSection";
import SolutionsSection from "@/components/services/Solutions";
import CaseStudySection from "@/components/shared/CaseStudySection";
import WhyUsSection from "@/components/home/WhyUsSection";

export default function Home() {
  return (
    <>
      <HeroSection scrollTargetId="start" />
      <PageWrapper className="mt-24 md:mt-32 space-y-24 md:space-y-52">
        <span id="start" />
        <ServiceSection />
        <WhyUsSection />
        <StatsSection />
      </PageWrapper>
      <OurCustomersSection />
      <PageWrapper className="space-y-24 md:space-y-52">
        <SolutionsSection />
      </PageWrapper>
      <CaseStudySection />
      <PageWrapper className="space-y-24 md:space-y-52">
        <EmpowerSection />
      </PageWrapper>
    </>
  );
}
