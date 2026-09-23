"use client";

import { useEffect, useRef } from "react";

const LINES: Array<[number, number, number, number, number]> = [
  [60, 70, 150, 40, 0.35],
  [150, 40, 240, 80, 0.4],
  [240, 80, 330, 55, 0.45],
  [60, 70, 40, 180, 0.5],
  [150, 40, 140, 160, 0.55],
  [240, 80, 250, 190, 0.6],
  [330, 55, 350, 165, 0.65],
  [40, 180, 140, 160, 0.7],
  [140, 160, 250, 190, 0.75],
  [250, 190, 350, 165, 0.8],
  [40, 180, 70, 290, 0.85],
  [140, 160, 170, 300, 0.9],
  [250, 190, 270, 285, 0.95],
  [350, 165, 350, 340, 1],
  [70, 290, 170, 300, 1.05],
  [170, 300, 270, 285, 1.1],
  [270, 285, 350, 340, 1.15],
];

const NODES: Array<[number, number, number, number]> = [
  [60, 70, 3.5, 0],
  [150, 40, 4.5, 0.05],
  [240, 80, 3.5, 0.1],
  [330, 55, 3, 0.15],
  [40, 180, 3, 0.2],
  [140, 160, 5.5, 0.25],
  [250, 190, 4.5, 0.3],
  [350, 165, 3, 0.35],
  [70, 290, 3.5, 0.4],
  [170, 300, 4, 0.45],
  [270, 285, 3.5, 0.5],
  [350, 340, 3, 0.55],
];

export function NodeMotif() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const svg = svgRef.current;
    if (!svg) return;

    const circles = Array.from(svg.querySelectorAll("circle"));
    const lines = Array.from(svg.querySelectorAll("line"));
    if (!circles.length) return;

    const nodes = circles.map((el, i) => ({
      el,
      bx: parseFloat(el.getAttribute("cx") || "0"),
      by: parseFloat(el.getAttribute("cy") || "0"),
      br: parseFloat(el.getAttribute("r") || "0"),
      ph: i * 1.27,
      sp: 0.28 + (i % 5) * 0.06,
      am: 3 + (i % 4) * 1.6,
      x: 0,
      y: 0,
    }));

    const near = (x: number, y: number) => {
      let best = nodes[0];
      let bd = Infinity;
      nodes.forEach((n) => {
        const d = (n.bx - x) ** 2 + (n.by - y) ** 2;
        if (d < bd) {
          bd = d;
          best = n;
        }
      });
      return best;
    };

    const edges = lines.map((el) => ({
      el,
      a: near(parseFloat(el.getAttribute("x1") || "0"), parseFloat(el.getAttribute("y1") || "0")),
      b: near(parseFloat(el.getAttribute("x2") || "0"), parseFloat(el.getAttribute("y2") || "0")),
    }));

    let mx = -999;
    let my = -999;
    let raf = 0;
    let started = false;
    const t0 = performance.now();

    const frame = (now: number) => {
      const t = (now - t0) / 1000;
      nodes.forEach((n) => {
        let ox = Math.sin(t * n.sp + n.ph) * n.am;
        let oy = Math.cos(t * n.sp * 0.82 + n.ph * 1.4) * n.am * 0.8;
        let grow = 0;
        const dx = mx - n.bx;
        const dy = my - n.by;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const f = 1 - dist / 150;
          const pull = f * f * 26;
          ox += (dx / (dist || 1)) * pull;
          oy += (dy / (dist || 1)) * pull;
          grow = f * f * 2.6;
        }
        n.x = n.bx + ox;
        n.y = n.by + oy;
        n.el.setAttribute("cx", n.x.toFixed(2));
        n.el.setAttribute("cy", n.y.toFixed(2));
        n.el.setAttribute("r", (n.br + grow).toFixed(2));
      });
      edges.forEach((e) => {
        e.el.setAttribute("x1", e.a.x.toFixed(2));
        e.el.setAttribute("y1", e.a.y.toFixed(2));
        e.el.setAttribute("x2", e.b.x.toFixed(2));
        e.el.setAttribute("y2", e.b.y.toFixed(2));
      });
      raf = requestAnimationFrame(frame);
    };

    const onMove = (ev: PointerEvent) => {
      const bb = svg.getBoundingClientRect();
      if (!bb.width) return;
      const vb = svg.viewBox.baseVal;
      mx = ((ev.clientX - bb.left) / bb.width) * (vb.width || 400);
      my = ((ev.clientY - bb.top) / bb.height) * (vb.height || 400);
      const pad = 90;
      if (
        ev.clientX < bb.left - pad ||
        ev.clientX > bb.right + pad ||
        ev.clientY < bb.top - pad ||
        ev.clientY > bb.bottom + pad
      ) {
        mx = -999;
        my = -999;
      }
      if (!started) {
        started = true;
        raf = requestAnimationFrame(frame);
      }
    };

    const startTimer = window.setTimeout(() => {
      if (!started) {
        started = true;
        raf = requestAnimationFrame(frame);
      }
    }, 1400);

    document.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      document.removeEventListener("pointermove", onMove);
      window.clearTimeout(startTimer);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-0 right-0 z-0 w-[62vw] max-w-[240px] opacity-25 min-[901px]:static min-[901px]:mx-auto min-[901px]:w-full min-[901px]:max-w-[460px] min-[901px]:opacity-55"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 400 400"
        className="block h-auto w-full overflow-visible"
      >
        <g stroke="#DDA94A" strokeWidth="1" fill="none" strokeLinecap="round" opacity=".65">
          {LINES.map(([x1, y1, x2, y2, delay], i) => (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              style={{
                strokeDasharray: 260,
                animation: `om-draw 1.1s cubic-bezier(.2,.7,.2,1) ${delay}s both`,
              }}
            />
          ))}
        </g>
        <g fill="#DDA94A">
          {NODES.map(([cx, cy, r, delay], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              style={{
                transformBox: "fill-box",
                transformOrigin: "center",
                animation: `om-node .7s cubic-bezier(.2,.7,.2,1) ${delay}s both`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
