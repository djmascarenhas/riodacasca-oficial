import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { articles } from "../data/articles";
import ArchiveClient from "./ArchiveClient";

export default function Acervo() {
  return <main>
    <SiteHeader active="acervo" />
    <section className="archive-hero"><div><p className="eyebrow">Acervo digital · Rio da Casca</p><h1>Guardar para<br/><em>compartilhar.</em></h1></div><div className="archive-intro"><p>Setenta e seis registros do portal histórico, organizados para pesquisa e ligados à publicação original.</p><span>76 registros preservados · busca por texto e tema</span></div></section>
    <ArchiveClient articles={articles} />
    <section className="archive-method"><div><p className="section-index">02 — Como cuidamos</p><h2>Origem, contexto e respeito.</h2></div><div className="method-list"><article><span>01</span><h3>Identificar</h3><p>Registrar autoria, data, lugar, pessoas e origem sempre que essas informações estiverem disponíveis.</p></article><article><span>02</span><h3>Confirmar</h3><p>Comparar informações e sinalizar claramente aquilo que ainda estiver em pesquisa.</p></article><article><span>03</span><h3>Autorizar</h3><p>Publicar acervos particulares somente com a concordância de quem detém seus direitos.</p></article></div></section>
    <section className="archive-invite"><p className="section-index">Contribua com o acervo</p><h2>Um documento guardado pode revelar uma história inteira.</h2><p>Descreva o material que você possui. Nenhum item será publicado antes da confirmação de contexto e autorização.</p><a className="button light" href="/contribua">Indicar um material</a></section>
    <SiteFooter />
  </main>;
}
