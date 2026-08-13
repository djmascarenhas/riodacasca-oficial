import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://riodacasca.chapada.ia.br/musicas";
  const pages: MetadataRoute.Sitemap = ["", "/valentim-ha-de-voltar", "/rio-da-casca-meu-chao", "/pedra-rara", "/joaquina-de-mina"].map((path, index) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
    priority: index === 0 ? 1 : 0.9,
  }));

  return pages;
}
