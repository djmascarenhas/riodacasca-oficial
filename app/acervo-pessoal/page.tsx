import type { Metadata } from "next";
import PersonalArchive from "./PersonalArchive";
import "./private-archive.css";

export const metadata: Metadata = {
  title: "Biblioteca pessoal",
  description: "Catálogo privado de fotografias de Djalma Mascarenhas.",
  robots: { index: false, follow: false },
};

export default function PersonalArchivePage() {
  return <main className="private-archive">
    <header className="private-header">
      <a className="brand" href="/" aria-label="Rio da Casca — início"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></a>
      <p>Biblioteca pessoal · acesso restrito</p>
    </header>
    <PersonalArchive />
  </main>;
}
