import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function CaseSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-[120px] pt-[clamp(3.5rem,7vw,6rem)]"
    >
      <Reveal as="h2" className="font-display text-[clamp(1.8rem,3vw+0.8rem,2.8rem)] leading-[1.12] font-semibold tracking-[-.025em] text-fg">
        {title}
      </Reveal>
      {children}
    </section>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <Reveal
      as="p"
      className="mt-[1.4rem] text-pretty text-[clamp(1rem,0.35vw+0.95rem,1.12rem)] leading-[1.68] text-fg"
    >
      {children}
    </Reveal>
  );
}
