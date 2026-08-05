import type { Metadata } from "next";
import "./music.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://musicas.chapada.ia.br"),
  title: { absolute: "Músicas de DJ Dalma | Chapada" },
  description: "Composições que conectam música, memória, pesquisa e as raízes de Mato Grosso.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Músicas de DJ Dalma",
    title: "Músicas de DJ Dalma",
    description: "Canções que guardam histórias de Mato Grosso.",
    images: [{ url: "/musicas/og.png", width: 1200, height: 630, alt: "Músicas de DJ Dalma — canções que guardam histórias" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Músicas de DJ Dalma",
    description: "Canções que guardam histórias de Mato Grosso.",
    images: ["/musicas/og.png"],
  },
  icons: { icon: "/musicas/favicon.png", shortcut: "/musicas/favicon.png" },
};

export default function MusicLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
