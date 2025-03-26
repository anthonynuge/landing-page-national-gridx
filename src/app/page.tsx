import CardsSection from "@/components/CardsSection";
import HeroSection from "@/components/HeroSection";
import SecureSection from "@/components/SecureSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <SecureSection />
      <CardsSection />
    </div>
  );
}
