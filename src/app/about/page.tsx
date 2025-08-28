import TeamSection from "@/components/about/TeamSection";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroLayout from "@/components/shared/HeroLayout";
import AboutCompanySection from "@/components/about/AboutCompanySection";

export const metadata = {
  title: "About Us – National Grid X",
  description: "Learn how we empower the energy future.",
};

export default function AboutPage() {
  return (
    <>
      <HeroLayout
        title="About Us"
        description="Learn more about who we are and how we're helping businesses take control of their energy decisions."
        imageUrl="/about/1.jpg"
        scrollTargetId="start"
      />
      <PageWrapper>
        <span id="start" />
        <AboutCompanySection />

        <TeamSection />
      </PageWrapper>
    </>
  );
}
