import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CavalgadaStudio from "./studio";

export const metadata: Metadata = {
  title: "Eu na Cavalgada do Rio da Casca",
  description: "Crie uma lembrança sua na 1ª Cavalgada Guarda-Fios do Rio da Casca.",
};

export default function CavalgadaPage() {
  return <>
    <SiteHeader active="cavalgada" />
    <main className="cavalgada-page">
      <section className="cavalgada-intro">
        <p className="eyebrow">Chapada dos Guimarães · Mato Grosso</p>
        <h1>Seu rosto.<br /><em>Nossa história.</em></h1>
        <p className="cavalgada-lead">Entre na memória da 1ª Cavalgada Guarda-Fios do Rio da Casca. Envie uma foto e veja você na estrada, diante das paisagens que contam a história deste lugar.</p>
        <div className="cavalgada-note"><span aria-hidden="true">✳</span><p>Uma criação digital inspirada na arte da cavalgada. O cenário e o cavaleiro permanecem como referência; a imagem final pode apresentar pequenas variações.</p></div>
      </section>
      <CavalgadaStudio />
      <section className="cavalgada-story" aria-label="Sobre a arte">
        <div><span>01</span><p>Guarda-fios históricos</p></div>
        <div><span>02</span><p>Boqueirão e cachoeiras</p></div>
        <div><span>03</span><p>Memória do Rio da Casca</p></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
