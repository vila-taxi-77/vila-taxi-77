
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: getPublicUrl(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}

function getPublicUrl() {
  const deploymentUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (configuredUrl) return configuredUrl.replace(/\/$/, "");
  if (deploymentUrl) return `https://${deploymentUrl}`;

  return "http://localhost:3000";
}
