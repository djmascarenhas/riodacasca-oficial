import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://riodacasca.chapada.ia.br";
  const portal: MetadataRoute.Sitemap = ["", "/historia", "/territorio", "/comunidade", "/acervo"].map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
    priority: index === 0 ? 1 : 0.8,
  }));

  return [
    ...portal,
    {
      url: "https://musicas.chapada.ia.br",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://musicas.chapada.ia.br/valentim-ha-de-voltar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
