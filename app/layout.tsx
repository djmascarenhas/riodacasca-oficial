import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rio da Casca — Memória do território",
  description: "Histórias, paisagens e pessoas do Rio da Casca, em Chapada dos Guimarães, Mato Grosso.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
