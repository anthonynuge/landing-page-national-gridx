import Link from "next/link";
import { cn } from "@/lib/utils"; // Optional: Tailwind class merge helper

interface CoolBtnProps {
  href?: string;
  label?: string;
  className?: string;
}

export default function CoolBtn({
  href = "/",
  label = "",
  className = "",
}: CoolBtnProps) {
  return (
    <Link href={href}>
      <button
        className={cn(
          "relative overflow-hidden px-4 py-3 font-semibold text-white group rounded-full items-center flex",
          className
        )}
      >
        <span
          className="absolute right-0 top-0 h-full w-full bg-primary z-0 rounded-full
          transition-all duration-500 ease-in-out
          transform group-hover:translate-x-[calc(100%-3rem)] group-hover:w-12"
        />
        <div className="flex justify-between w-full flex-wrap items-center gap-6 z-10">
          <span className="transition-colors duration-300 group-hover:text-black">
            {label}
          </span>
          <span className="bg-primary rounded-full">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-white group-hover:rotate-45 transition-transform duration-300 ease-in-out"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </button>
    </Link>
  );
}
