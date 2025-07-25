"use client";

import { MouseEvent } from "react";
import { animate } from "framer-motion";

interface ScrollToButtonProps {
  targetId: string;
  className?: string;
}

export default function ScrollToButton({
  targetId,
  className = "",
}: ScrollToButtonProps) {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const offset = 90;
    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + window.scrollY - offset;
    const duration = 0.8;

    animate(startY, endY, {
      duration: duration,
      ease: "easeInOut",
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
  };

  return (
    <div
      onClick={handleClick}
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
