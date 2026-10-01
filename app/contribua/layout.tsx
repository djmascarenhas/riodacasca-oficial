import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contribua com o acervo",
  description: "Envie uma descrição de fotografia, documento, relato ou lugar ligado ao Rio da Casca.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
