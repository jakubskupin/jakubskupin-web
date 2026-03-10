import type { MetadataRoute } from "next";

const siteUrl = "https://jakubskupin.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/work/martin-vymetal`,
      lastModified: new Date("2026-03-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/work/simrani`,
      lastModified: new Date("2026-03-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/knowledge-athlete`,
      lastModified: new Date("2026-03-10"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
