import ContactFormSectionSection from "@/components/contactSections/ContactFormSection";
import ContactHeroSection from "@/components/contactSections/ContactHeroSection";
import ContactInfoSection from "@/components/contactSections/ContactInfoSection";
import LocationSection from "@/components/contactSections/LocationSection";
import NewsletterSignupSection from "@/components/contactSections/NewsLetterSignup";
import PageWrapper from "@/components/PageWrapper";

export const metadata = {
  title: "Contact Us – National Grid X",
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSectionSection />
      <LocationSection />
      <NewsletterSignupSection />
    </PageWrapper>
  );
}
