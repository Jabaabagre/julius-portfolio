"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#how", label: "How I work" },
  { href: "/#experience", label: "Experience" },
];

export function Header({ variant = "home" }: { variant?: "home" | "case-study" }) {
  const [stuck, setStuck] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-40 border-b transition-[background,border-color,backdrop-filter] duration-[280ms] ease-[cubic-bezier(.2,.7,.2,1)]"
        style={{
          background: stuck ? "rgba(24,23,28,.82)" : "transparent",
          backdropFilter: stuck ? "blur(14px)" : "none",
          borderBottomColor: stuck ? "var(--color-line)" : "transparent",
        }}
      >
        <div className="mx-auto flex h-[74px] max-w-[76rem] items-center justify-between gap-6 px-[clamp(1.4rem,5vw,4rem)]">
          <Link
            href={variant === "home" ? "#top" : "/"}
            className="font-display text-[.95rem] font-semibold tracking-[-.01em] whitespace-nowrap text-fg"
          >
            Julius Abaabagre{" "}
            <span className="font-normal text-dim">— design</span>
          </Link>

          {variant === "home" ? (
            <>
              <nav className="hidden items-center gap-[clamp(1rem,2vw,1.9rem)] min-[761px]:flex">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-display text-[.875rem] font-medium text-muted transition-colors duration-150 hover:text-fg"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/#contact"
                  className="rounded-full bg-gold px-[1.05rem] py-[.55rem] font-display text-[.875rem] font-semibold text-bg transition-colors duration-150 hover:bg-gold-deep"
                >
                  Let&apos;s talk
                </Link>
              </nav>
              <button
                type="button"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-line-2 px-4 py-2 font-display text-[.85rem] font-semibold text-fg min-[761px]:hidden"
              >
                Menu
              </button>
            </>
          ) : (
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 font-display text-[.875rem] font-medium text-muted transition-colors duration-150 hover:text-gold"
            >
              <span aria-hidden="true">←</span> All work
            </Link>
          )}
        </div>
      </header>

      {variant === "home" && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 bg-bg px-[clamp(1.4rem,5vw,4rem)] py-[clamp(1.4rem,5vw,4rem)] min-[761px]:hidden"
          style={{ display: menuOpen ? "block" : "none" }}
        >
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="rounded-full border border-line-2 px-4 py-2 font-display text-[.85rem] font-semibold text-fg"
            >
              Close
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-[2rem] font-semibold tracking-[-.02em] text-fg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="font-display text-[2rem] font-semibold tracking-[-.02em] text-gold"
            >
              Let&apos;s talk
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
