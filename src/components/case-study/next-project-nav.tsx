import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function NextProjectNav({
  text,
  nextHref,
  nextLabel,
}: {
  text: string;
  nextHref: string;
  nextLabel: string;
}) {
  return (
    <Reveal
      as="div"
      className="mt-[clamp(4rem,8vw,7rem)] border-t border-line pt-[clamp(2rem,4vw,3rem)]"
    >
      <p className="m-0 text-base leading-[1.62] text-muted">{text}</p>
      <div className="mt-[1.4rem] flex flex-wrap gap-4">
        <Link
          href={nextHref}
          className="rounded-[11px] bg-gold px-[1.5rem] py-[.85rem] font-display text-[.95rem] font-semibold text-bg transition-colors duration-150 hover:bg-gold-deep"
        >
          {nextLabel}
        </Link>
        <Link
          href="/#work"
          className="rounded-[11px] border border-line-2 px-[1.5rem] py-[.85rem] font-display text-[.95rem] font-medium text-fg transition-colors duration-150 hover:border-gold hover:text-gold"
        >
          Back to all work
        </Link>
      </div>
    </Reveal>
  );
}
