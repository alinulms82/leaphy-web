import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/contact",
    "/app-and-patient-access",
    "/epi-transformation",
    "/pharma",
    "/about",
    ...site.aisoPages,
  ];
  const uniquePaths = Array.from(new Set(paths));

  return uniquePaths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/contact" ? 0.9 : 0.7,
  }));
}
