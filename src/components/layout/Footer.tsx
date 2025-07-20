import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import LinkHoverUnderline from "../shared/LinkHoverUnderline";

export default function Footer() {
  return (
    <footer className="bg-[#0d1319] text-gray-200 pt-24 pb-12 px-6">
      {/* Top CTA */}

      <Link href="/contact">
        <div className="max-w-7xl mx-auto border-b border-gray-700 pb-16 flex flex-col md:flex-row justify-between items-start gap-6 group relative">
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Get in touch
          </h2>
          <div className="text-3xl md:text-8xl mt-4 md:mt-0">↗</div>

          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gray-300/70 group-hover:w-full transition-all duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)]" />
        </div>
      </Link>

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
            <LinkHoverUnderline href="mailto:admin@nationalgridx.com">
              admin@nationalgridx.com
            </LinkHoverUnderline>
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
          <ul className="space-y-1 text-sm">
            <li>
              <LinkHoverUnderline href="/services">Services</LinkHoverUnderline>
            </li>
            <li>
              <LinkHoverUnderline href="/company">Company</LinkHoverUnderline>
            </li>
            <li>
              <LinkHoverUnderline href="/contact">Contact</LinkHoverUnderline>
            </li>
            <li>
              <LinkHoverUnderline href="/careers">Careers</LinkHoverUnderline>
            </li>
            <li>
              <LinkHoverUnderline href="/terms-conditions">
                Terms of Service
              </LinkHoverUnderline>
            </li>
            <li>
              <LinkHoverUnderline href="/privacy-policy">
                Privacy Policy
              </LinkHoverUnderline>
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
