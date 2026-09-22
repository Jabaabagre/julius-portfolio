import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal
      as="div"
      className="mt-[1.6rem] rounded-2xl border border-line bg-bg-raise p-[clamp(1.4rem,2.5vw,2rem)]"
    >
      <h3 className="font-display text-[1.15rem] font-semibold tracking-[-.015em] text-fg">
        {title}
      </h3>
      <p className="mt-[.9rem] text-[.98rem] leading-[1.6] text-muted">{children}</p>
    </Reveal>
  );
}
