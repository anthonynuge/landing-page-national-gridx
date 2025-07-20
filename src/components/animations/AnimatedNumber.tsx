"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  to: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
};

const AnimatedNumber = ({
  to,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
}: AnimatedNumberProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));
  const [current, setCurrent] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setCurrent(v));
    return () => unsubscribe();
  }, [rounded]);

  const handleInView = () => {
    animate(count, to, {
      duration,
      ease: "easeOut",
    });
  };

  return (
    <motion.span
      ref={spanRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={handleInView}
      viewport={{ once: true }}
      className={className}
    >
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </motion.span>
  );
};

export default AnimatedNumber;
