export function Footer() {
  return (
    <>
      <div
        aria-hidden="true"
        className="relative mt-[clamp(3rem,7vw,6rem)] w-full overflow-hidden pb-[clamp(1rem,3vw,2rem)]"
      >
        <span
          className="block w-full bg-clip-text font-display text-[16vw] leading-none font-extrabold tracking-[-0.03em] whitespace-nowrap text-transparent select-none"
          style={{
            backgroundImage:
              "linear-gradient(100deg, #2c2a30 0%, #2c2a30 38%, #a9843f 52%, #2c2a30 66%, #2c2a30 100%)",
          }}
        >
          ABAABAGRE
        </span>
      </div>

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
