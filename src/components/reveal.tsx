"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0 },
    );
    io.observe(el);
    // Failsafe: browsers can throttle IntersectionObserver callbacks in
    // backgrounded/inactive tabs, which would otherwise leave content stuck
    // at opacity:0 indefinitely.
    const failsafe = window.setTimeout(() => {
      el.classList.add("is-visible");
    }, 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
