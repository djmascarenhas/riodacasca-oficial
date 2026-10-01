import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { attractions } from "../data/attractions";

export default function Atrativos() {
  return <main>
    <SiteHeader active="atrativos" />
    <section className="attractions-hero"><div><p className="eyebrow">Natureza · Patrimônio · Comunidade</p><h1>Lugares que contam<br/><em>o território.</em></h1></div><div><p>Este inventário reúne doze pontos ligados ao Rio da Casca. A situação de acesso aparece antes do convite à visita porque preservar pessoas, animais e paisagens vem primeiro.</p><div className="status-key"><span>Visitação documentada</span><span>Confirmar acesso</span><span>Acesso restrito</span><span>Interditado</span></div></div></section>
    <section className="attractions-alert" role="note"><strong>Antes de sair</strong><p>Condições de estrada, clima, propriedade e decisões ambientais podem mudar. Consulte a fonte de cada registro e confirme localmente.</p></section>
    <section className="attractions-grid" aria-label="Catálogo de atrativos do Rio da Casca">
      {attractions.map((item, index) => <article className="attraction-card" id={item.slug} key={item.slug}>
        <figure><img src={item.image} alt={item.imageAlt}/><figcaption>{item.photoCredit}{item.imageNote ? ` · ${item.imageNote}` : ""}</figcaption></figure>
        <div className="attraction-meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{item.kind}</span><strong className={`status status-${item.status.toLocaleLowerCase("pt-BR").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`}>{item.status}</strong></div>
        <h2>{item.name}</h2><p>{item.summary}</p><p className="access-note"><strong>Acesso:</strong> {item.access}</p>
        <div className="attraction-links"><a href={item.infoSource} target="_blank" rel="noreferrer">Informações <span>↗</span></a><a href={item.photoSource} target="_blank" rel="noreferrer">Fonte da imagem <span>↗</span></a></div>
      </article>)}
    </section>
    <section className="attractions-contribute"><p className="section-index">Inventário vivo</p><h2>Uma imagem correta também preserva a história.</h2><p>Se você possui fotografias identificadas do Poço do Pacu, das Estações Ecológicas ou das comunidades, envie-as com data, autoria e autorização.</p><a className="button light" href="/contribua">Enviar identificação</a></section>
    <SiteFooter />
  </main>;
}
