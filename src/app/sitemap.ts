import { MetadataRoute } from "next";
import { getPublishedProperties } from "../data/properties";
import { companyData } from "../data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = companyData.websiteUrl;

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
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const propertyRoutes: MetadataRoute.Sitemap = getPublishedProperties().map((prop) => ({
    url: `${baseUrl}/properties/${prop.slug}`,
    lastModified: new Date(prop.createdAt),
    changeFrequency: "weekly",
    priority: prop.featured ? 0.95 : 0.8,
  }));

  return [...staticRoutes, ...propertyRoutes];
}
