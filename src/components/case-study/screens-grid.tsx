import { Reveal } from "@/components/reveal";
import { CaseFigure } from "@/components/case-study/case-figure";

export function ScreensGrid({
  screens,
  light = true,
}: {
  screens: { src: string; alt: string; caption: string; width: number; height: number }[];
  light?: boolean;
}) {
  return (
    <Reveal
      as="div"
      className="mt-[clamp(2rem,4vw,2.5rem)] grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] items-start gap-[clamp(1.2rem,2.5vw,1.8rem)]"
    >
      {screens.map((s) => (
        <CaseFigure key={s.src} {...s} light={light} />
      ))}
    </Reveal>
  );
}
