import type { Metadata } from "next";
import "./music.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://riodacasca.chapada.ia.br"),
  title: { absolute: "Músicas de DJ Dalma | Chapada" },
  description: "Composições que conectam música, memória, pesquisa e as raízes de Mato Grosso.",
  alternates: { canonical: "/musicas" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/musicas",
    siteName: "Músicas de DJ Dalma",
    title: "Músicas de DJ Dalma",
    description: "Canções que guardam histórias de Mato Grosso.",
    images: [{ url: "/musicas/og/valentim-ha-de-voltar.png", width: 1200, height: 630, alt: "Valentim há de Voltar, de DJ Dalma" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Músicas de DJ Dalma",
    description: "Canções que guardam histórias de Mato Grosso.",
    images: ["/musicas/og/valentim-ha-de-voltar.png"],
  },
  icons: { icon: "/musicas/favicon.png", shortcut: "/musicas/favicon.png" },
};

export default function MusicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
