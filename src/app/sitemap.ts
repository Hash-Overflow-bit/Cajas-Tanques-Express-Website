import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { TOWN_PAGES } from "@/content/zones";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly") => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  });

  return [
    page("", 1.0, "weekly"),
    page("/envio-de-cajas-a-republica-dominicana", 0.9, "monthly"),
    page("/envio-de-tanques-a-republica-dominicana", 0.9, "monthly"),
    page("/precios", 0.9, "monthly"),
    page("/reservar", 0.9, "weekly"),
    page("/zonas", 0.8, "monthly"),
    ...TOWN_PAGES.map((t) => page(`/zonas/${t.slug}`, 0.8, "monthly")),
    page("/servicios", 0.7, "monthly"),
    page("/contacto", 0.7, "monthly"),
    page("/privacidad", 0.3, "yearly"),
    page("/terminos", 0.3, "yearly"),
  ];
}
