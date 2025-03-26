import CardsSection from "@/components/CardsSection";
import HeroSection from "@/components/HeroSection";
import PageWrapper from "@/components/PageWrapper";
import SecureSection from "@/components/SecureSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <ServicesSection />
      <SecureSection />
      <CardsSection />
    </PageWrapper>
  );
}
