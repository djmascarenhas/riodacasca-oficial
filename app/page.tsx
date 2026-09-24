import Image from "next/image";
import Link from "next/link";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const themes = [
  { number: "01", title: "História e memória", text: "Documentos, relatos e acontecimentos que atravessam gerações.", href: "/historia" },
  { number: "02", title: "Atrativos e território", text: "Cachoeiras, patrimônio, comunidades e lugares de conservação.", href: "/atrativos" },
  { number: "03", title: "Pessoas e comunidade", text: "Vozes, fotografias e saberes das famílias do Rio da Casca.", href: "/comunidade" },
  { number: "04", title: "Acervo digital", text: "Setenta e seis registros históricos pesquisáveis e preservados.", href: "/acervo" },
];

const timeline = [["1928", "Entra em operação a primeira usina hidrelétrica de Mato Grosso, aproveitando as águas do Rio da Casca."], ["1970", "A Usina Rio da Casca III passa a operar e amplia a presença do território na história da energia estadual."], ["1994", "É criada a Estação Ecológica do Rio da Casca, reunindo dois perímetros de proteção permanente."], ["Hoje", "O distrito reúne memória, natureza, comunidades e novos caminhos para o turismo responsável."]];

export default function Home() {
  return <main>
    <SiteHeader />
    <section className="hero refreshed-hero" id="inicio">
      <div className="hero-media"><Image className="hero-waterfall" src="/portal/cachoeira-rio-da-casca.jpg" alt="Grande cachoeira do Rio da Casca cercada pela vegetação" fill priority sizes="(max-width: 850px) 100vw, 56vw" /><div className="hero-media-shade" /><p className="hero-credit">Cachoeira do Rio da Casca · Acervo legado · autoria em identificação</p><a className="hero-chale" href="/atrativos#chale-governadores" aria-label="Conhecer o Chalé dos Governadores"><span className="hero-chale-image"><Image src="/portal/chale-dos-governadores.jpg" alt="Chalé dos Governadores entre árvores" fill sizes="(max-width: 850px) 42vw, 22vw" /></span><span className="hero-chale-copy"><small>Patrimônio em pesquisa</small><strong>Chalé dos Governadores</strong><b>Conhecer o registro →</b></span></a></div>
      <div className="hero-copy"><p className="eyebrow">Chapada dos Guimarães · Mato Grosso</p><h1>Onde a água passa,<br/><em>a história fica.</em></h1><p className="lead">Um lugar para reconhecer as pessoas, as paisagens e os acontecimentos que fizeram do Rio da Casca um território singular.</p><div className="hero-actions"><Link className="button" href="/acervo">Conheça o acervo</Link><a className="text-link" href="/historia">Percorra a história <span>→</span></a></div></div>
    </section>
    <section className="manifesto" id="historia"><p className="section-index">01 — O território</p><div><h2>Um rio.<br/>Muitas histórias.</h2></div><div className="manifesto-copy"><p>O Rio da Casca não cabe em uma única narrativa. Sua história vive nas águas que moveram usinas, nos caminhos das comunidades, nas fotografias de família e nos saberes transmitidos entre gerações.</p><p>Este portal nasce para reunir essas memórias com rigor, cuidado e participação comunitária.</p></div></section>
    <section className="themes themes-four" id="territorio">{themes.map((item) => <a className="theme-card" href={item.href} key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><b>→</b></a>)}</section>
    <section className="history" id="acervo"><div className="history-heading"><p className="section-index">02 — Linha do tempo</p><h2>Marcos de uma história em movimento.</h2><p>Uma primeira leitura do território. As datas e narrativas serão ampliadas a partir de fontes, documentos e relatos da comunidade.</p></div><div className="timeline">{timeline.map(([year, text]) => <article key={year}><strong>{year}</strong><p>{text}</p></article>)}<a className="timeline-more" href="/historia">Ver linha do tempo completa <span>→</span></a></div></section>
    <section className="community" id="comunidade"><p className="section-index">03 — Memória compartilhada</p><h2>Esta história também pode ser contada por você.</h2><p>Fotografias, documentos e relatos pessoais ajudam a formar um acervo vivo e plural do Rio da Casca.</p><a className="button light" href="/contribua">Compartilhe uma memória</a></section>
    <section className="sister-home"><div><p className="section-index">04 — Cidades-irmãs</p><h2>Chapada de Guimarães<br/><em>&amp; Guimarães.</em></h2></div><div><p>O antigo nome “Chapada de Guimarães” registra uma relação que atravessa o Atlântico. A página dedicada reúne o contexto histórico e cultural dessa irmandade com Guimarães, em Portugal.</p><a className="text-link" href="/guimaraes">Conhecer essa história <span>→</span></a></div></section>
    <SiteFooter />
  </main>;
}
