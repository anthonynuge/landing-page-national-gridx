import PageWrapper from "@/components/PageWrapper";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us – National Grid X",
  description: "Learn how we empower the energy future.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <AboutContent />
    </PageWrapper>
  );
}
