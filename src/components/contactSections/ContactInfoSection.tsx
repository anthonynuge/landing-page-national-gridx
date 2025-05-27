import Image from "next/image";
import Link from "next/link";

const ContactInfoSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Contact Info */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-700">
              We&apos;re here to assist you with your inquiries.
            </p>
          </div>

          {/* Email */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
            <p className="text-sm text-gray-700 mb-1">Reach us anytime at:</p>
            <a
              href="mailto:info@nationalgridx.com"
              className="text-red-600 underline"
            >
              info@nationalgridx.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
            <p className="text-sm text-gray-700 mb-1">
              Real humans behind the phones
            </p>
            <a href="tel:8324799846" className="text-red-600 underline">
              (832) 479-9846
            </a>
          </div>

          {/* Office */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-1">Office</h4>
            <p className="text-sm text-gray-700 mb-1">
              7005 Chase Oaks Blvd, Plano TX 75025
            </p>
            <Link
              href="https://maps.google.com/?q=7005+Chase+Oaks+Blvd,+Plano+TX+75025"
              target="_blank"
              className="text-sm text-red-600 underline"
            >
              Get Directions &rsaquo;
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 relative h-96">
          <Image
            src="/contact/2.jpg"
            alt="Contact Support"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
