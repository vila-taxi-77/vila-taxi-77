
import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${getSiteUrl()}/dat-xe-truoc` },
    {
      url: `${getSiteUrl()}/`,
    },
    {
      url: `${getSiteUrl()}/taxi-san-bay-phu-cat`,
    },
    {
      url: `${getSiteUrl()}/taxi-phu-cat-di-quy-nhon`,
    },
    {
      url: `${getSiteUrl()}/taxi-di-tinh`,
    },
  ];
}
