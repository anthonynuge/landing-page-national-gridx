"use client";

import { MouseEvent } from "react";

interface ScrollToButtonProps {
  targetId: string;
  className?: string;
}

export default function ScrollToButton({
  targetId,
  className = "",
}: ScrollToButtonProps) {
  const scrollToSection = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      onClick={scrollToSection}
      className={`cursor-pointer p-4 w-12 h-12 flex items-center justify-center bg-white rounded-full group ${className}`}
    >
      <div className="animate-bounce text-black">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 4v16M12 20l6-6M12 20l-6-6" />
        </svg>
      </div>
    </div>
  );
}
