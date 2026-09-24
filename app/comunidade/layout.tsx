import type { Metadata } from "next";
import "../community-pillars.css";
export const metadata: Metadata = {
  title: "Pessoas e comunidade",
  description: "Memória, água e futuro: tradições, participação e patrimônio da comunidade do Rio da Casca.",
  alternates: { canonical: "/comunidade" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
