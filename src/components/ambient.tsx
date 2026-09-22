export function Ambient() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(44rem 30rem at 84% -8%, rgba(221,169,74,.14) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
