import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rio da Casca — Memória do território",
    short_name: "Rio da Casca",
    description: "Histórias, paisagens e pessoas do Rio da Casca, em Chapada dos Guimarães.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3efe6",
    theme_color: "#254c38",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
