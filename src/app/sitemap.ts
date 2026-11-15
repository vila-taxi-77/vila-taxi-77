
import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getSiteUrl()}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${getSiteUrl()}/taxi-san-bay-phu-cat`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${getSiteUrl()}/taxi-phu-cat-di-quy-nhon`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
