"use client";

import Link from "next/link";
import { cn } from "@/lib/utils"; // If you're using a `cn` helper for class merging

interface LinkHoverUnderlineProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkHoverUnderline({
  href,
  children,
  className,
}: LinkHoverUnderlineProps) {
  return (
    <Link href={href} className={cn("group inline-block", className)}>
      <span className="relative text-inherit">
        {children}
        <div className="relative h-[1px] bg-transparent overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full w-0 bg-[currentColor]
              transition-all duration-300 ease-[cubic-bezier(0.65,0.05,0.36,1)]
              group-hover:w-full"
          />
        </div>
      </span>
    </Link>
  );
}
