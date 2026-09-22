import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function DecisionBlock({
  title,
  problem,
  decision,
  figure,
  bordered = false,
}: {
  title: string;
  problem: string;
  decision: string;
  figure?: ReactNode;
  bordered?: boolean;
}) {
  return (
    <Reveal
      as="div"
      className={`mt-[clamp(2.5rem,5vw,3.5rem)] border-t border-line ${
        bordered
          ? "border-b pt-[clamp(1.8rem,3vw,2.4rem)] pb-[clamp(1.8rem,3vw,2.4rem)]"
          : "pt-[clamp(1.8rem,3vw,2.4rem)]"
      }`}
    >
      <div className="flex items-baseline gap-4">
        <span aria-hidden="true" className="relative inline-flex h-3 w-3 flex-none items-center justify-center">
          <span className="absolute -inset-1.5 rounded-full border border-[rgba(221,169,74,.45)]" />
          <span className="h-[9px] w-[9px] rounded-full bg-gold shadow-[0_0_10px_rgba(221,169,74,.55)]" />
        </span>
        <h3 className="font-display text-[clamp(1.3rem,2vw,1.6rem)] font-semibold tracking-[-.02em] text-fg">
          {title}
        </h3>
      </div>
      <div className="mt-[1.4rem] grid gap-[1.1rem]">
        <div>
          <div className="font-display text-[.74rem] font-semibold tracking-[.14em] text-gold uppercase">
            Problem
          </div>
          <p className="mt-[.45rem] text-pretty text-[.99rem] leading-[1.68] text-muted">{problem}</p>
        </div>
        <div>
          <div className="font-display text-[.74rem] font-semibold tracking-[.14em] text-gold uppercase">
            Decision
          </div>
          <p className="mt-[.45rem] text-pretty text-[.99rem] leading-[1.68] text-muted">{decision}</p>
        </div>
        {figure}
      </div>
    </Reveal>
  );
}
