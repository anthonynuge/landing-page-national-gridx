"use client";

import Reveal from "@/components/animations/Reveal";

const team = [
  {
    name: "Anselm Ng",
    title: "President",
    image: "/team/anselm.png",
  },
  {
    name: "Natasha Allen",
    title: "Admin Team | Manager",
    image: "/team/natasha.png",
  },
  {
    name: "Fanny Tung",
    title: "Commercial Energy Advisor",
    image: "/team/fanny.jpeg",
  },
  {
    name: "Tyler Albrecht",
    title: "Commercial Energy Advisor",
    image: "/team/tyler.png",
  },
  {
    name: "Minh Thu",
    title: "Commercial Energy Advisor",
    image: "/team/minh.jpg",
  },
  {
    name: "Jessica Tran",
    title: "Commercial Energy Advisor | Affiliate",
    image: "/team/jessica.png",
  },
  {
    name: "Karen Cooper",
    title: "Commercial Energy Advisor",
    image: "/team/karen.png",
  },
  {
    name: "Jose Christiano",
    title: "Commercial Energy Advisor",
    image: "/team/jose.png",
  },
  {
    name: "Juan Carlos",
    title: "Commercial Energy Advisor",
    image: "/team/juan.jpg",
  },
  {
    name: "Ashley Kim",
    title: "Commercial Energy Advisor",
    image: "/team/ashley.png",
  },
  {
    name: "Nick Johnson",
    title: "Commercial Energy Advisor",
    image: "/team/nick.png",
  },
  {
    name: "Cindy Hatzfeld",
    title: "Commercial Energy Advisor",
    image: "/team/cindy.png",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl font-bold mb-2">Our Team</h2>
          <p className="text-gray-600 mb-10">
            Meet the professionals driving energy innovation at NGX Energy
            Consulting.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.05}>
              <div className="flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full max-w-[250px] aspect-square object-cover rounded-lg shadow"
                />
                <h3 className="font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.title}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to Action */}
        <Reveal delay={0.2}>
          <div>
            <h3 className="text-2xl font-bold mb-2">We’re Expanding!</h3>
            <p className="text-gray-600 mb-4">
              Join our team and shape the future of energy.
            </p>
            <button className="border border-black px-5 py-2 rounded hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
