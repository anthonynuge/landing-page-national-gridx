import Image from "next/image";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-8">
        <div className="flex flex-col sm:flex-row justify-between">
          {/* Left: Logo and Info */}
          <div className="flex-1">
            {/* Replace with actual logo image if needed */}
            <div className="mb-4 w-[120px] h-auto">
              <Image
                src="/logos/NGXblack.png"
                alt="NGX Logo"
                width={120}
                height={40}
                priority
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
                href="https://www.facebook.com/profile.php?id=61564068329354"
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
                href="https://www.linkedin.com/company/ngxenergy/?viewAsMember=true"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/*Links  */}
          <div className="flex flex-col gap-2">
            <Link href="/terms-conditions" className="text-sm">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-sm">
              Privacy Policy
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
