import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://riodacasca.chapada.ia.br";
  const pages = ["", "/historia", "/territorio", "/atrativos", "/comunidade", "/rede-comunitaria", "/comunicados", "/diretrizes", "/audiovisual", "/acervo", "/guimaraes", "/contribua", "/sobre", "/metodologia", "/privacidade", "/musicas"];
  return pages.map((path, index) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" : "monthly", priority: index === 0 ? 1 : 0.8 }));
}
