import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/mentions-legales", "/politique-confidentialite", "/cgv"];
  return paths.map((path) => ({ url: `${siteConfig.url}${path}` }));
}
