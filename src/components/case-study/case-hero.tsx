import Image from "next/image";
import { HeroTexture } from "@/components/hero-texture";

export function CaseHero({
  title,
  tagline,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  meta,
}: {
  title: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  meta: { label: string; value: string }[];
}) {
  return (
    <section className="relative mx-auto max-w-[76rem] px-[clamp(1.4rem,5vw,4rem)] pt-[clamp(8rem,14vw,11rem)]">
      <HeroTexture />
      <div className="relative z-[1]">
        <div className="animate-[om-rise_.7s_cubic-bezier(.2,.7,.2,1)_both] font-display text-[.78rem] font-semibold tracking-[.14em] text-gold uppercase">
          Case study
        </div>
        <h1 className="mt-[1.2rem] animate-[om-rise_.7s_cubic-bezier(.2,.7,.2,1)_.06s_both] font-display text-[clamp(2.9rem,7vw+0.5rem,7rem)] leading-[.98] font-bold tracking-[-.035em] text-fg">
          {title}
        </h1>
        <p className="mt-[1.6rem] max-w-[42ch] animate-[om-rise_.7s_cubic-bezier(.2,.7,.2,1)_.12s_both] text-pretty font-accent text-[clamp(1.25rem,2vw,1.8rem)] leading-[1.32] text-muted italic">
          {tagline}
        </p>
        <div className="mt-[clamp(2.5rem,5vw,4rem)] overflow-hidden rounded-[18px] border border-line bg-bg-raise">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            priority
            sizes="(min-width: 1280px) 1180px, (min-width: 768px) 90vw, 100vw"
            className="block h-auto w-full"
          />
        </div>
        <div
          className="mt-[clamp(2rem,4vw,3rem)] grid gap-[clamp(1.5rem,3vw,2.5rem)] border-b border-line pb-[clamp(2.5rem,5vw,4rem)]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}
        >
          {meta.map((m) => (
            <div key={m.label}>
              <div className="font-display text-[.74rem] font-semibold tracking-[.14em] text-gold uppercase">
                {m.label}
              </div>
              <div className="mt-[.6rem] text-base leading-[1.55] text-fg">{m.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
