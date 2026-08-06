import type { Metadata } from "next";
import "../territory-archive.css";
export const metadata: Metadata = {
  title: "Natureza e território",
  description: "Rio, cachoeiras, cerrado e conservação no território do Rio da Casca.",
  alternates: { canonical: "/territorio" },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
