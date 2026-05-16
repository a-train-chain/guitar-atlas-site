import type { MetadataRoute } from "next";

const BASE = "https://guitaratlas.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/features", "/about", "/download", "/contact", "/privacy", "/terms"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : 0.7,
  }));
}
