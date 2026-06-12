"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: string;
  className?: string;
};

function parseCounter(
  value: string,
): { prefix: string; number: number; suffix: string } | null {
  const match = value.match(/^(\+?)(\d+)(.*)$/);
  if (!match) return null;
  return {
    prefix: match[1],
    number: parseInt(match[2], 10),
    suffix: match[3],
  };
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();
  const parsed = parseCounter(value);

  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    hasAnimated.current = false;
    setCount(0);
  }, [value]);

  useEffect(() => {
    const p = parseCounter(value);
    if (!p || !inView) return;

    if (reduced) {
      setCount(p.number);
      hasAnimated.current = true;
      return;
    }

    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const target = p.number;
    const duration = 1000;
    const start = performance.now();
    let frameId = 0;

    setCount(0);

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, reduced, value]);

  if (!parsed) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const shown = !inView ? 0 : reduced ? parsed.number : count;

  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {parsed.prefix}
      {shown}
      {parsed.suffix}
    </span>
  );
}
