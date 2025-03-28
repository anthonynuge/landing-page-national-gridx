import Image from "next/image";
import Link from "next/link";
import Reveal from "../animations/Reveal";

const LocationSection = () => {
  return (
    <Reveal>
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Location</h2>
          <p className="text-gray-700 mb-10">
            Find our Office for your convenience.
          </p>

          <div className="w-full h-80 relative mb-10 rounded-lg overflow-hidden">
            <Image
              src="/contact/3.jpg" // Replace with your actual path
              alt="Office Location"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-2xl font-semibold text-gray-900">Dallas, TX</h3>
          <p className="text-sm text-gray-700">
            7005 Chase Oaks Blvd, Plano TX 75025
          </p>

          <Link
            href="https://maps.google.com/?q=7005+Chase+Oaks+Blvd,+Plano+TX+75025"
            target="_blank"
            className="text-sm text-red-600 underline mt-2 inline-block"
          >
            Get Directions &rsaquo;
          </Link>
        </div>
      </section>
    </Reveal>
  );
};

export default LocationSection;
