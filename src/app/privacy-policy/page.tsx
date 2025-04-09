// pages/privacy-policy.tsx

import Reveal from "@/components/animations/Reveal";

export default function PrivacyPolicy() {
  return (
    <Reveal>
      <main className="max-w-7xl mx-auto py-12">
        <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-2">
          Privacy Policy
        </h1>

        {/* Privacy Policy */}
        <section>
          <p className="text-sm text-gray-500 mb-2">
            Effective Date: January 1, 2025 · Last Updated: March 1, 2025
          </p>

          <p className="mb-4">
            This Privacy Policy (“Policy”) describes how National Grid X
            (“Company,” “we,” “us,” or “our”) collects, uses, stores, discloses,
            and protects personal information obtained through our website
            located at <strong>nationalgridx.com</strong> (the “Site”). By
            accessing or using our Site, you acknowledge that you have read and
            understood this Policy and agree to its terms.
          </p>

          <h3 className="font-semibold text-lg mb-2">
            1. Information We Collect
          </h3>
          <p className="mb-2">
            We collect both personal and non-personal information through the
            Site, including:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Information You Provide:</strong> Name, email address,
              phone number, company name, job title, and any information you
              submit through contact forms or email.
            </li>
            <li>
              <strong>Automatically Collected Data:</strong> IP address, browser
              type, device type, operating system, referring URLs, pages
              visited, time spent on pages, and usage data via cookies and
              analytics tools (e.g., Google Analytics).
            </li>
            <li>
              <strong>Cookies and Tracking:</strong> We use cookies, beacons,
              and similar technologies to enhance the user experience, gather
              analytics, and store user preferences.
            </li>
          </ul>

          <h3 className="font-semibold text-lg mb-2">
            2. How We Use Your Information
          </h3>
          <p className="mb-4">We may use collected information to:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Respond to inquiries and provide customer support;</li>
            <li>
              Send newsletters or service-related communications (only with
              consent);
            </li>
            <li>
              Monitor usage and improve Site functionality and performance;
            </li>
            <li>Ensure legal compliance and enforce our policies;</li>
            <li>Prevent fraudulent, unauthorized, or illegal activity.</li>
          </ul>

          <h3 className="font-semibold text-lg mb-2">
            3. Legal Basis for Processing (GDPR-Compliant)
          </h3>
          <p className="mb-4">
            If you are located in the European Economic Area (EEA), our legal
            basis for processing personal data includes consent (where
            required), performance of a contract, legal obligation, and
            legitimate interest (e.g., marketing, analytics, security).
          </p>

          <h3 className="font-semibold text-lg mb-2">
            4. Sharing and Disclosure of Information
          </h3>
          <p className="mb-4">
            We do not sell, rent, or trade your personal information. We may
            share your information with:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              <strong>Third-party service providers</strong> who perform
              services on our behalf (e.g., hosting, analytics, email delivery),
              subject to confidentiality agreements.
            </li>
            <li>
              <strong>Law enforcement or regulatory authorities</strong> if
              required to comply with legal obligations or protect the rights
              and safety of our Company or others.
            </li>
            <li>
              <strong>In the event of a business transfer,</strong> such as a
              merger, acquisition, or asset sale, your data may be transferred
              as part of that transaction.
            </li>
          </ul>

          <h3 className="font-semibold text-lg mb-2">5. Data Retention</h3>
          <p className="mb-4">
            We retain personal data only for as long as necessary to fulfill the
            purposes outlined in this Policy, unless a longer retention period
            is required by law. When no longer necessary, we securely delete or
            anonymize your data.
          </p>

          <h3 className="font-semibold text-lg mb-2">6. Data Security</h3>
          <p className="mb-4">
            We implement appropriate administrative, technical, and physical
            safeguards to protect your data against unauthorized access,
            alteration, disclosure, or destruction. However, no method of
            electronic storage or transmission over the Internet is 100% secure.
          </p>

          <h3 className="font-semibold text-lg mb-2">
            7. Your Rights and Choices
          </h3>
          <p className="mb-4">
            Depending on your jurisdiction, you may have rights regarding your
            personal information, including:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Access, correct, or delete your personal data;</li>
            <li>Withdraw consent where processing is based on consent;</li>
            <li>Object to or restrict processing of your data;</li>
            <li>Request data portability;</li>
            <li>
              Lodge a complaint with a data protection authority (for EEA
              residents).
            </li>
          </ul>
          <p className="mb-4">
            To exercise your rights, please contact us at{" "}
            <a
              href="mailto:admin@nationalgridx.com"
              className="text-blue-600 underline"
            >
              admin@nationalgridx.com
            </a>
            .
          </p>

          <h3 className="font-semibold text-lg mb-2">
            8. Children&apos;s Privacy
          </h3>
          <p className="mb-4">
            Our Site is not intended for individuals under the age of 13. We do
            not knowingly collect personal data from children. If we become
            aware that we have inadvertently collected such data, we will delete
            it promptly.
          </p>

          <h3 className="font-semibold text-lg mb-2">
            9. International Data Transfers
          </h3>
          <p className="mb-4">
            If you are located outside of the United States, please note that
            your data will be transferred to, stored, and processed in the
            United States. By using our Site, you consent to such transfer.
          </p>

          <h3 className="font-semibold text-lg mb-2">
            10. Updates to This Policy
          </h3>
          <p className="mb-4">
            We may update this Privacy Policy periodically to reflect changes in
            our practices or applicable law. When we do, we will revise the
            “Last Updated” date at the top of this page. Your continued use of
            the Site constitutes acceptance of those changes.
          </p>

          <h3 className="font-semibold text-lg mb-2">
            11. Contact Information
          </h3>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:admin@nationalgridx.com"
              className="text-blue-600 underline"
            >
              admin@nationalgridx.com
            </a>
          </p>
          <p className="mb-2">Address: 7005 Chase Oaks Blvd, Plano TX 75025</p>
          <p className="mb-4">Phone: 832.479.9846</p>
        </section>
      </main>
    </Reveal>
  );
}
