import type { Metadata } from "next";
import "./globals.css";
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><MobileNav/><div id="conteudo">{children}</div></body></html>;
}
