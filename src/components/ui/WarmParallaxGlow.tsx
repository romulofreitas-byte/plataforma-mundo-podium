"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function WarmParallaxGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  if (reduced) return null;

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <motion.div
        style={{ y }}
        className="absolute bottom-0 left-1/2 h-[400px] w-[min(900px,100%)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,183,30,0.12)_0%,transparent_70%)]"
      />
    </div>
  );
}
