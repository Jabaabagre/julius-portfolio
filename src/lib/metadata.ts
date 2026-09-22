import type { Metadata } from "next";

export const siteConfig = {
  name: "Julius Abaabagre",
  title: "Julius Abaabagre — Product & UX Design",
  description:
    "Product & UX designer turning complicated systems — feeds, permissions, states, edge cases — into experiences people can actually understand.",
  url: "https://julius-designs.vercel.app",
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
