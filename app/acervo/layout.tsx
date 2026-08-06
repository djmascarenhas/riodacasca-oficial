import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acervo digital",
  description: "Fotografias, documentos, mapas e relatos do acervo digital do Rio da Casca.",
  alternates: { canonical: "/acervo" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
