import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://musicas.chapada.ia.br";
  const pages: MetadataRoute.Sitemap = ["", "/valentim-ha-de-voltar", "/rio-da-casca-meu-chao", "/pedra-rara"].map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
    priority: index === 0 ? 1 : 0.9,
  }));

  return pages;
}
