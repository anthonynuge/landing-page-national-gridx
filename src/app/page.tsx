import CardsSection from "@/components/CardsSection";
import HeroSection from "@/components/home/HeroSection";
import SecureSection from "@/components/SecureSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SecureSection />
      <CardsSection />
    </>
  );
}
