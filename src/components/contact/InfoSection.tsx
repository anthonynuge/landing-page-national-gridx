import Image from "next/image";
import { contactItems } from "./constants";

export default function InfoSection() {
  return (
    <section className="bg-[#26333D] text-white py-16 px-6 md:px-12 mt-24 md:mt-52">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <p className="text-sm uppercase text-gray-300 mb-3 font-semibold tracking-wide">
            Contact Information
          </p>

          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/logos/NGXwhite.png"
              alt="NGX Energy Logo"
              width={100}
              height={100}
            />
          </div>
          {contactItems.map(({ Icon, value, href }, i) => (
            <div key={i} className="flex items-center gap-4 mb-5">
              <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center mt-1">
                <Icon className="text-red-700 w-4 h-4" />
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={href}
                  className="inline-block mt-1 text-sm"
                  target={href.startsWith("http") ? "_blank" : "_self"}
                >
                  {value}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* {Right Image} */}
        <div className="relative w-full md:w-1/2 h-72 md:h-[35rem] 2xl:w-full">
          <Image
            src="/contact/dallas-night.jpg"
            alt="Contact"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
