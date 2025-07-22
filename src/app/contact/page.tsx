import ContactForm from "@/components/contact/ContactForm";
import InfoSection from "@/components/contact/InfoSection";
import PageWrapper from "@/components/layout/PageWrapper";
import HeroLayout from "@/components/shared/HeroLayout";

export const metadata = {
  title: "Contact Us – National Grid X",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <>
      <HeroLayout
        title="Contact Us"
        description="Reach out to learn more about our services or to speak directly with an NGX Energy advisor — we’re here to help you make smarter energy decisions."
        imageUrl="/contact/1.jpg"
        scrollTargetId="start"
      />
      <PageWrapper>
        <span id="start" />
        <ContactForm />
      </PageWrapper>

      <InfoSection />
    </>
  );
}
