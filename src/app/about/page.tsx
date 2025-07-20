import TeamSection from "@/components/about/TeamSection";
// import Expertise from "@/components/Expertise";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroLayout from "@/components/shared/HeroLayout";

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
        {/* <Expertise /> */}
        <div id="start">
          <TeamSection />
        </div>
      </PageWrapper>
    </>
  );
}
