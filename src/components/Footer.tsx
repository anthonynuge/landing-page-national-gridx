import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-8">
        {/* Left: Logo and Info */}
        <div>
          {/* Replace with actual logo image if needed */}
          <div className="mb-4">
            <Image
              src="/logos/ngxblack.png"
              alt="NGX Logo"
              width={150}
              height={50}
            />
          </div>

          <div className="text-sm text-gray-800 mb-4">
            <p className="font-bold">Address:</p>
            <p>7005 Chase Oaks Blvd #215, Plano TX 75025</p>
          </div>

          <div className="text-sm text-gray-800 mb-4">
            <p className="font-bold">Contact:</p>
            <p>admin@nationalgridx.com</p>
          </div>

          {/* Socials */}
          <div className="flex items-center space-x-4 text-xl">
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

        {/* Right: Spacer or Additions (optional) */}
        <div className="text-sm text-gray-600 self-end md:self-center mt-8 md:mt-0">
          <p>By 2025 nationalgridx.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
