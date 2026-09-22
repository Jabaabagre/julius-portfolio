export function HeroTexture() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="grain-layer absolute inset-0 bg-repeat" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 62% 18%, rgba(255,255,255,.055) 0%, transparent 68%)",
          mixBlendMode: "soft-light",
        }}
      />
    </div>
  );
}
