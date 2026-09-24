import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/entra", "/vicinity", "/convo", "/lets-eat"];
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }));
}
