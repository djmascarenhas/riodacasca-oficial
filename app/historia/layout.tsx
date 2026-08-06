import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "História",
  description: "Linha do tempo documentada da história do Rio da Casca, em Chapada dos Guimarães.",
  alternates: { canonical: "/historia" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
