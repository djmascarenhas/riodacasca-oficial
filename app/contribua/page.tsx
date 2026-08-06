import type { Metadata } from "next";
import ContributionForm from "./ContributionForm";

export const metadata: Metadata = {
  title: "Contribua com o acervo",
  description: "Envie fotografias, documentos, relatos e correções para o acervo comunitário do Rio da Casca.",
  alternates: { canonical: "/contribua" },
};

export default function ContribuaPage() {
  return <main className="info-page contribution-page">
    <header className="topbar"><a className="brand" href="/"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></a><nav aria-label="Navegação principal"><a href="/historia">História</a><a href="/territorio">Território</a><a href="/comunidade">Comunidade</a><a href="/acervo">Acervo</a><a href="https://musicas.chapada.ia.br/">Músicas</a></nav><a className="menu-link" href="/acervo">Ver acervo <span>↗</span></a></header>
    <section className="info-hero"><p className="eyebrow">Participação comunitária</p><h1>Sua memória também<br/><em>faz parte da história.</em></h1><p>Use este formulário para apresentar fotografias, documentos, lugares, relatos ou correções. A equipe verificará contexto, autoria e autorização antes de publicar.</p></section>
    <section className="contribution-layout"><div><p className="section-index">Como funciona</p><ol><li><span>01</span><p>Você descreve o material e sua origem.</p></li><li><span>02</span><p>A equipe entra em contato para confirmar informações.</p></li><li><span>03</span><p>A publicação só acontece após autorização específica.</p></li></ol><a href="/privacidade">Como tratamos seus dados →</a></div><ContributionForm /></section>
  </main>;
}
