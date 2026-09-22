import { WordmarkSpotlight } from "@/components/wordmark-spotlight";

export function Footer() {
  return (
    <>
      <WordmarkSpotlight />

      <footer className="border-t border-line">
        <div className="mx-auto max-w-[76rem] px-[clamp(1.4rem,5vw,4rem)] pt-[2.4rem] pb-[3rem]">
          <div className="font-display text-[.92rem] font-medium text-muted">
            Julius Abaabagre — Product &amp; UX Design
          </div>
          <div className="mt-[.35rem] text-[.85rem] text-dim">
            Accra, Ghana · 2025/2026
          </div>
        </div>
      </footer>
    </>
  );
}
