import PageWrapper from "@/components/PageWrapper";
import TeamSection from "@/components/TeamSection";
import SolutionsOverview from "@/components/SolutionsOverview";
import CTA from "@/components/CTA";
import HeroBanner from "@/components/HeroBanner";
import Expertise from "@/components/Expertise";

export const metadata = {
  title: "About Us – National Grid X",
  description: "Learn how we empower the energy future.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <HeroBanner />
      <Expertise />
      <TeamSection />
      <SolutionsOverview />
      <CTA />
    </PageWrapper>
  );
}
