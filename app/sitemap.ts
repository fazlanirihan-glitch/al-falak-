import { MetadataRoute } from "next";
import { products } from "@/data/products";

const baseUrl = "https://alfalakuae.com";
const locales = ["en", "ar"];
const staticRoutes = ["", "/about", "/products", "/brands", "/industries", "/catalogue", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Core Static Pages
  for (const locale of locales) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }

    // Product Detail Pages
    for (const product of products) {
      entries.push({
        url: `${baseUrl}/${locale}/products/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
