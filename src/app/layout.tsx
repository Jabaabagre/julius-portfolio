import type { Metadata } from "next";
import { geist, hanken, fraunces } from "@/lib/fonts";
import { siteConfig } from "@/lib/metadata";
import { Ambient } from "@/components/ambient";
import { CursorLight } from "@/components/cursor-light";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${hanken.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <Ambient />
        <CursorLight />
        <div className="relative z-[1] flex min-h-full flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
