"use client";

import { useEffect, useRef, useState } from "react";

export function HabitItem({
  n,
  title,
  body,
}: {
  n: number;
  title: string;
  body: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(0);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setShown(true);
      setDisplay(n);
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setShown(true);
          if (reduced) {
            setDisplay(n);
          } else {
            const dur = 520;
            const t0 = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(eased * n));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
          io.unobserve(entry.target);
        });
      },
      { threshold: 0 },
    );
    io.observe(el);
    const failsafe = window.setTimeout(() => {
      setShown(true);
      setDisplay(n);
    }, 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [n]);

  return (
    <div ref={ref}>
      <div aria-hidden="true" className="flex items-center gap-[.7rem]">
        <span
          className="font-display text-[.86rem] font-semibold tracking-[.1em] text-gold tabular-nums transition-[opacity,transform] duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
          style={{ opacity: shown ? 1 : 0, transform: shown ? "none" : "translateY(6px)" }}
        >
          {String(display).padStart(2, "0")}
        </span>
        <div
          className="h-[2px] max-w-[34px] rounded-full bg-gold transition-[width] duration-[600ms] ease-[cubic-bezier(.2,.7,.2,1)]"
          style={{ width: shown ? "34px" : "0px" }}
        />
      </div>
      <h3 className="mt-[.7rem] font-display text-[1.28rem] font-semibold tracking-[-.02em] text-fg">
        {title}
      </h3>
      <p className="mt-[.6rem] text-[.98rem] leading-[1.62] text-muted">{body}</p>
    </div>
  );
}
