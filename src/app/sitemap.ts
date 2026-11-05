import { MetadataRoute } from "next";
import { propertiesData } from "../data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mahaproperties.in";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const propertyRoutes: MetadataRoute.Sitemap = propertiesData
    .filter((prop) => prop.published)
    .map((prop) => ({
      url: `${baseUrl}/properties/${prop.slug}`,
      lastModified: new Date(prop.createdAt),
      changeFrequency: "weekly",
      priority: prop.featured ? 0.95 : 0.8,
    }));

  return [...staticRoutes, ...propertyRoutes];
}

