import type { ReactNode } from "react";
import { SectionNav } from "@/components/section-nav";

export function CaseBody({
  navItems,
  children,
}: {
  navItems: { id: string; label: string }[];
  children: ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-[76rem] grid-cols-1 items-start gap-[clamp(2rem,5vw,5rem)] px-[clamp(1.4rem,5vw,4rem)] pb-[clamp(4rem,8vw,7rem)] min-[821px]:grid-cols-[200px_minmax(0,1fr)]">
      <SectionNav items={navItems} />
      <div className="max-w-[66ch]">{children}</div>
    </div>
  );
}
