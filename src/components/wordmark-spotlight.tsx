"use client";

import { useEffect, useId, useRef } from "react";

const TEXT = "ABAABAGRE";
const H = 152;
const RADIUS = 230;

export function WordmarkSpotlight() {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const gradId = `wmspot-${uid}`;
  const maskId = `wmmask-${uid}`;

  const svgRef = useRef<SVGSVGElement | null>(null);
  const textRef = useRef<SVGTextElement | null>(null);
  const gradRef = useRef<SVGRadialGradientElement | null>(null);
  const rectRef = useRef<SVGRectElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const text = textRef.current;
    const grad = gradRef.current;
    const rect = rectRef.current;
    if (!svg || !text || !grad || !rect) return;

    const fit = () => {
      const w = Math.round(text.getComputedTextLength());
      if (!w) return;
      svg.setAttribute("viewBox", `0 0 ${w} ${H}`);
      rect.setAttribute("width", String(w));
      grad.setAttribute("cy", String(H / 2));
    };
    fit();
    if (document.fonts?.ready) document.fonts.ready.then(fit);
    window.addEventListener("resize", fit);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return () => window.removeEventListener("resize", fit);
    }

    let raf = 0;
    let tx = -400;
    let ty = H / 2;
    let cx = -400;
    let cy = H / 2;
    let tr = 0;
    let r = 0;
    let inside = false;

    const loop = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      r += (tr - r) * 0.14;
      grad.setAttribute("cx", cx.toFixed(1));
      grad.setAttribute("cy", cy.toFixed(1));
      grad.setAttribute("r", Math.max(0, r).toFixed(1));
      if (Math.abs(tx - cx) > 0.4 || Math.abs(ty - cy) > 0.4 || Math.abs(tr - r) > 0.4) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const bb = svg.getBoundingClientRect();
      if (!bb.width || !bb.height) return;
      const pad = 40;
      const hit =
        e.clientX >= bb.left - pad &&
        e.clientX <= bb.right + pad &&
        e.clientY >= bb.top - pad &&
        e.clientY <= bb.bottom + pad;
      if (!hit) {
        if (inside) {
          inside = false;
          tr = 0;
          kick();
        }
        return;
      }
      const vb = svg.viewBox.baseVal;
      const nx = ((e.clientX - bb.left) / bb.width) * (vb.width || 1000);
      const ny = ((e.clientY - bb.top) / bb.height) * (vb.height || H);
      if (!inside) {
        inside = true;
        cx = nx;
        cy = ny;
      }
      tx = nx;
      ty = ny;
      tr = RADIUS;
      kick();
    };

    document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("resize", fit);
      document.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="relative mt-[clamp(3rem,7vw,6rem)] w-full overflow-hidden pb-[clamp(1rem,3vw,2rem)]"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1000 152"
        className="block h-auto w-full"
        preserveAspectRatio="xMinYMid meet"
      >
        <defs>
          <radialGradient ref={gradRef} id={gradId} gradientUnits="userSpaceOnUse" cx="-400" cy="76" r="0">
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset=".55" stopColor="#fff" stopOpacity=".6" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height={H}>
            <rect ref={rectRef} x="0" y="0" width="1000" height={H} fill={`url(#${gradId})`} />
          </mask>
        </defs>
        <text
          ref={textRef}
          x="0"
          y="132"
          fontFamily="var(--font-display), ui-sans-serif, system-ui, sans-serif"
          fontWeight="800"
          fontSize="190"
          letterSpacing="-5"
          fill="#444444"
        >
          {TEXT}
        </text>
        <g mask={`url(#${maskId})`}>
          <text
            x="0"
            y="132"
            fontFamily="var(--font-display), ui-sans-serif, system-ui, sans-serif"
            fontWeight="800"
            fontSize="190"
            letterSpacing="-5"
            fill="#D3A248"
          >
            {TEXT}
          </text>
        </g>
      </svg>
    </div>
  );
}
