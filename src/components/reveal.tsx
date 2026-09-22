import type { ElementType, ReactNode } from "react";

/**
 * Scroll-reveal wrapper. The animation itself is pure CSS (see `.reveal`
 * in globals.css) — this component only applies the class, so it never
 * needs to be a client component or run an IntersectionObserver.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  return <Tag className={`reveal ${className}`}>{children}</Tag>;
}
