import CardsSection from "@/components/CardsSection";
import HeroSection from "@/components/home/HeroSection";
import SecureSection from "@/components/SecureSection";
import ServiceSection from "@/components/home/ServiceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <SecureSection />
      <CardsSection />
    </>
  );
}
