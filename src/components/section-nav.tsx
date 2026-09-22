"use client";

import { useEffect, useState } from "react";

export function SectionNav({
  items,
}: {
  items: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const probe = window.innerHeight * 0.32;
      let current = items[0]?.id;
      items.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= probe) current = id;
      });
      if (current) setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <nav
      aria-label="Case study sections"
      className="sticky top-[74px] z-30 -mx-[clamp(1.4rem,5vw,4rem)] flex snap-x snap-mandatory gap-2 overflow-x-auto border-b border-line bg-bg/90 px-[clamp(1.4rem,5vw,4rem)] py-[.8rem] backdrop-blur-md min-[821px]:sticky min-[821px]:top-[110px] min-[821px]:mx-0 min-[821px]:flex-col min-[821px]:gap-[.1rem] min-[821px]:overflow-visible min-[821px]:border-none min-[821px]:bg-transparent min-[821px]:px-0 min-[821px]:py-0 min-[821px]:pt-[clamp(3.5rem,7vw,6rem)] min-[821px]:backdrop-blur-none"
    >
      {items.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className="shrink-0 snap-start rounded-full border border-line px-[.8rem] py-[.4rem] font-display text-[.85rem] font-medium whitespace-nowrap transition-colors duration-150 min-[821px]:rounded-none min-[821px]:border-0 min-[821px]:border-l min-[821px]:px-0 min-[821px]:py-[.4rem] min-[821px]:pl-[.9rem]"
            style={{
              color: isActive ? "var(--color-gold)" : "var(--color-dim)",
              borderColor: isActive ? "rgba(221,169,74,.5)" : "var(--color-line)",
            }}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
