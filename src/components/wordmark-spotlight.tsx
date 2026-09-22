"use client";

import { useEffect, useRef, useState } from "react";

const TEXT = "ABAABAGRE";

const textClass =
  "block w-full select-none whitespace-nowrap font-display text-[16vw] leading-none font-extrabold tracking-[-0.03em]";

export function WordmarkSpotlight() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const onMove = (e: PointerEvent) => {
      const bb = el.getBoundingClientRect();
      const pad = 80;
      const hit =
        e.clientX >= bb.left - pad &&
        e.clientX <= bb.right + pad &&
        e.clientY >= bb.top - pad &&
        e.clientY <= bb.bottom + pad;
      setActive(hit);
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="relative mt-[clamp(3rem,7vw,6rem)] w-full overflow-hidden pb-[clamp(1rem,3vw,2rem)]"
    >
      <span className={textClass} style={{ color: "#444444" }}>
        {TEXT}
      </span>
      <span
        className={`${textClass} pointer-events-none absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(.2,.7,.2,1)]`}
        style={{ color: "#D3A248", opacity: active ? 1 : 0 }}
      >
        {TEXT}
      </span>
    </div>
  );
}
