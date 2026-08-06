import type { Metadata } from "next";
import "./globals.css";
import "./portal-refresh.css";
import "./community-network.css";
import MobileNav from "./components/MobileNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://riodacasca.chapada.ia.br"),
  title: { default: "Rio da Casca — Memória do território", template: "%s | Rio da Casca" },
  description: "Histórias, paisagens e pessoas do Rio da Casca, em Chapada dos Guimarães, Mato Grosso.",
  keywords: ["Rio da Casca", "Chapada dos Guimarães", "Mato Grosso", "história", "memória", "acervo", "território"],
  authors: [{ name: "Rio da Casca" }],
  creator: "Rio da Casca",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Rio da Casca",
    title: "Rio da Casca — Memória do território",
    description: "Histórias, paisagens e pessoas do Rio da Casca, em Chapada dos Guimarães, Mato Grosso.",
    images: [{ url: "/og.png", width: 2048, height: 1152, alt: "Rio da Casca — Memória do território" }],
  },
  twitter: { card: "summary_large_image", title: "Rio da Casca — Memória do território", description: "Histórias, paisagens e pessoas do Rio da Casca.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rio da Casca — Memória do território",
    url: "https://riodacasca.chapada.ia.br",
    inLanguage: "pt-BR",
    description: "Histórias, paisagens e pessoas do Rio da Casca, em Chapada dos Guimarães, Mato Grosso.",
    publisher: { "@type": "Organization", name: "Rio da Casca", url: "https://riodacasca.chapada.ia.br/sobre" },
  };
  return <html lang="pt-BR"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><MobileNav/><div id="conteudo">{children}</div></body></html>;
}
