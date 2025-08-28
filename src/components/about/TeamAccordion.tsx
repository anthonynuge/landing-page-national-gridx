"use client";

import Image from "next/image";

type TeamMember = {
  id: string;
  url: string;
  name: string;
  description: string;
  tags?: string[];
};

type TeamGroupProps = {
  members: TeamMember[];
};

export default function TeamGroup({ members }: TeamGroupProps) {
  return (
    <div
      className="group grid w-[100%] mx-auto mb-10 mt-3 gap-1
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                    lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5"
    >
      {members.map((item) => (
        <article
          key={item.id}
          className="group/article relative rounded-md overflow-hidden
                     transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)]
                     before:absolute before:inset-x-0 before:bottom-0 before:h-1/3
                     before:bg-gradient-to-t before:from-black/50
                     before:transition-opacity md:before:opacity-0
                     md:hover:before:opacity-100 focus-within:before:opacity-100
                     after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100
                     md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100
                     after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur
                     after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300"
        >
          <a
            className="absolute inset-0 text-white z-10 p-3 flex flex-col justify-end"
            href="#0"
          >
            <h1
              className="text-xl font-medium md:whitespace-nowrap md:truncate
                           md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100
                           md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0
                           transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)]
                           group-hover/article:delay-300 group-focus-within/article:delay-300"
            >
              {item.name}
            </h1>
            <span
              className="text-2xl md:text-lg font-medium md:whitespace-nowrap md:truncate
                             md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100
                             md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0
                             transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)]
                             group-hover/article:delay-500 group-focus-within/article:delay-500"
            >
              {item.description}
            </span>
          </a>

          <Image
            className="object-cover h-72 md:h-[420px] w-full"
            src={item.url}
            width={960}
            height={480}
            alt={item.name}
            sizes="(max-width: 640px) 100vw,
                   (max-width: 768px) 50vw,
                   (max-width: 1024px) 33vw,
                   (max-width: 1280px) 25vw,
                   (max-width: 1536px) 20vw,
                   16.6vw"
          />
        </article>
      ))}
    </div>
  );
}
