import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d1319] text-gray-200 pt-24 pb-12 px-6">
      {/* Top CTA */}
      <div className="max-w-7xl mx-auto border-b border-gray-700 pb-16 flex flex-col md:flex-row justify-between items-start gap-6">
        <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Get in touch
        </h2>
        <Link
          href="/contact"
          className="text-white text-3xl md:text-4xl mt-4 md:mt-0 hover:scale-105 transition-transform"
        >
          ↗
        </Link>
      </div>

      {/* Bottom Grid */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo + Company Info */}
        <div>
          <div className="mb-4">
            <Image
              src="/logos/NGXwhite.png"
              alt="NGX Energy"
              width={140}
              height={40}
            />
          </div>
          <p className="text-sm max-w-sm text-gray-400 mb-4">
            NGX Energy is a modern energy brokerage helping clients find
            competitive electricity and gas rates with clarity and confidence.
          </p>

          <div className="text-sm text-gray-400 mb-4">
            <p className="font-semibold">Address:</p>
            <p>7005 Chase Oaks Blvd #215, Plano TX 75025</p>
          </div>
          <div className="text-sm text-gray-400 mb-4">
            <p className="font-semibold">Contact:</p>
            <p>
              <a
                href="mailto:admin@nationalgridx.com"
                className="hover:underline"
              >
                admin@nationalgridx.com
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-xl mt-2">
            <Link
              href="https://www.facebook.com/profile.php?id=61564068329354"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-white"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-white"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/company/ngxenergy/?viewAsMember=true"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-400">
            QUICK LINKS
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/company" className="hover:underline">
                Company
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Optional – Contact or Newsletter */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-400">HOURS</h4>
          <p className="text-sm text-gray-300">
            Monday – Friday <br />
            9:00am – 6:00pm CST
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-sm text-gray-600 text-center mt-16">
        <p>© 2025 nationalgridx.com. All rights reserved.</p>
      </div>
    </footer>
  );
}
