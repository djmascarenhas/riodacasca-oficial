import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const bonds = [
  { mark: "01", title: "Um nome que atravessou o Atlântico", text: "O território foi historicamente chamado de Chapada de Guimarães. O nome preserva a marca da formação portuguesa de Mato Grosso e permanece na memória regional." },
  { mark: "02", title: "Cidades-irmãs", text: "Chapada dos Guimarães e Guimarães mantêm uma relação de irmandade baseada em vínculos históricos e culturais. O portal apresenta esse elo sem confundir os dois lugares." },
  { mark: "03", title: "Memória compartilhada", text: "Documentos, pessoas, viagens e iniciativas culturais ajudam a reconstruir como essa relação se formou e como pode continuar viva." },
];

export default function Guimaraes() {
  return <main>
    <SiteHeader active="guimaraes" />
    <section className="guimaraes-hero"><p className="eyebrow">Cidades-irmãs · Brasil e Portugal</p><h1>Dois lugares.<br/><em>Uma história.</em></h1><p>Guimarães, em Portugal, não aparece neste portal por engano. O antigo nome Chapada de Guimarães e os laços de irmandade explicam por que essa cidade faz parte da nossa narrativa.</p></section>
    <section className="guimaraes-names"><div><span>Chapada de</span><strong>Guimarães</strong><small>Mato Grosso · Brasil</small></div><div className="sister-bridge" aria-hidden="true">↔</div><div><span>Cidade de</span><strong>Guimarães</strong><small>Minho · Portugal</small></div></section>
    <section className="guimaraes-bonds"><div><p className="section-index">01 — A relação</p><h2>O nome é o começo da conversa.</h2></div><div>{bonds.map((bond) => <article key={bond.mark}><span>{bond.mark}</span><h3>{bond.title}</h3><p>{bond.text}</p></article>)}</div></section>
    <section className="guimaraes-note"><p className="section-index">Acervo em construção</p><h2>Você possui documentos sobre essa irmandade?</h2><p>Convênios, fotografias, notícias, cartas e relatos de viagens podem ajudar a documentar essa relação com precisão.</p><div><a className="button light" href="/contribua">Contribuir com o acervo</a><a className="text-link light" href="https://riodacasca.com.br/wd/visite-guimaraes/" target="_blank" rel="noreferrer">Consultar a página original <span>↗</span></a></div></section>
    <SiteFooter />
  </main>;
}
