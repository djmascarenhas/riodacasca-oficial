import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://riodacasca.chapada.ia.br";
  return ["", "/historia", "/territorio", "/atrativos", "/comunidade", "/acervo", "/guimaraes", "/contribua"].map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
