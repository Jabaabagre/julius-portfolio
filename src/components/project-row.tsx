import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function ProjectRow({
  href,
  title,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  details,
  meta,
}: {
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  details: { label: string; value: string }[];
  meta: string;
}) {
  return (
    <Reveal
      as="article"
      className="mt-[clamp(3rem,6vw,5rem)] border-t border-line pt-[clamp(2.5rem,5vw,4rem)]"
    >
      <div className="flex flex-wrap items-baseline gap-[clamp(1rem,3vw,2.5rem)]">
        <span
          aria-hidden="true"
          className="relative inline-flex h-3 w-3 flex-none items-center justify-center"
        >
          <span
            className="bullet-ring absolute -inset-1.5 rounded-full border border-[rgba(221,169,74,.45)]"
          />
          <span className="h-[9px] w-[9px] rounded-full bg-gold shadow-[0_0_10px_rgba(221,169,74,.55)]" />
        </span>
        <Link
          href={href}
          className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-none font-bold tracking-[-.035em] text-fg transition-colors duration-[220ms] ease-[cubic-bezier(.2,.7,.2,1)] hover:text-gold"
        >
          {title}
        </Link>
      </div>

      <p className="mt-[1.4rem] text-[clamp(1rem,0.35vw+0.95rem,1.12rem)] leading-[1.62] text-muted">
        {description}
      </p>

      <Link
        href={href}
        className="group relative mt-[clamp(2rem,4vw,3rem)] block overflow-hidden rounded-[18px] border border-line bg-bg-raise transition-colors duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:border-[rgba(221,169,74,.4)]"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-[350ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 110%, rgba(221,169,74,.18), transparent 70%)",
          }}
        />
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          sizes="(min-width: 1280px) 1180px, (min-width: 768px) 90vw, 100vw"
          className="block h-auto w-full"
        />
      </Link>

      <div
        className="mt-[clamp(2rem,4vw,2.8rem)] grid gap-[clamp(1.5rem,3vw,2.5rem)]"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
      >
        {details.map((d) => (
          <div key={d.label}>
            <div className="font-display text-[.74rem] font-semibold tracking-[.14em] text-gold uppercase">
              {d.label}
            </div>
            <p className="mt-[.7rem] text-[.98rem] leading-[1.6] text-muted">{d.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-[1.8rem] flex flex-wrap items-center gap-[.8rem] text-[.85rem] text-dim">
        <span>{meta}</span>
        <Link
          href={href}
          className="group/link inline-flex items-center gap-2 font-display text-[.95rem] font-semibold text-gold"
        >
          View case study{" "}
          <span className="inline-block transition-transform duration-[220ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover/link:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </Reveal>
  );
}
