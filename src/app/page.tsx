import CardsSection from "@/components/CardsSection";
import HeroSection from "@/components/home/HeroSection";
import SecureSection from "@/components/SecureSection";
import ServiceSection from "@/components/home/ServiceSection";
import OurCustomersSection from "@/components/home/OurCustomersSection";
import StatsSection from "@/components/home/StatsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <StatsSection />
      <OurCustomersSection />
      <SecureSection />
      <CardsSection />
    </>
  );
}
