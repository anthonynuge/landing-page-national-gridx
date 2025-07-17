import HeroSection from "@/components/home/HeroSection";
import SecureSection from "@/components/SecureSection";
import ServiceSection from "@/components/home/ServiceSection";
import OurCustomersSection from "@/components/home/OurCustomersSection";
import StatsSection from "@/components/home/StatsSection";
import PageWrapper from "@/components/layout/PageWrapper";
import EmpowerSection from "@/components/home/EmpowerSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <PageWrapper>
        <ServiceSection />
        <StatsSection />
      </PageWrapper>
      <OurCustomersSection />
      <PageWrapper>
        <SecureSection />
        <EmpowerSection />
      </PageWrapper>
    </>
  );
}
