"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const [enableAnimation, setEnableAnimation] = useState(false);

  useEffect(() => {
    // Wait until after page paint and layout is settled
    requestAnimationFrame(() => {
      setTimeout(() => setEnableAnimation(true), 100); // adjust delay if needed
    });
  }, []);

  const offset = 80;
  const directionalProps = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: -offset },
    right: { x: offset },
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      ...directionalProps[direction],
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={enableAnimation ? "show" : undefined}
      variants={variants}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
