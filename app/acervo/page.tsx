import ArchiveExplorer from "./ArchiveExplorer";
import { archiveRecords } from "@/app/data/archive";

export default function Acervo() {
  return <main>
    <header className="topbar archive-topbar"><a className="brand" href="/" aria-label="Rio da Casca — início"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></a><nav aria-label="Navegação principal"><a href="/historia">História</a><a href="/territorio">Território</a><a href="/comunidade">Comunidade</a><a className="active" href="/acervo">Acervo</a><a href="https://musicas.chapada.ia.br/">Músicas</a></nav><a className="menu-link" href="/contribua">Contribua <span>↗</span></a></header>

    <section className="archive-hero"><div><p className="eyebrow">Acervo digital · Rio da Casca</p><h1>Guardar para<br/><em>compartilhar.</em></h1></div><div className="archive-intro"><p>Um catálogo vivo para reunir documentos, imagens, mapas e relatos sobre o território.</p><span>Primeiro lote migrado · {String(archiveRecords.length).padStart(2, "0")} registros públicos</span></div></section>

    <ArchiveExplorer />

    <section className="archive-method"><div><p className="section-index">02 — Como cuidamos</p><h2>Origem, contexto e respeito.</h2></div><div className="method-list"><article><span>01</span><h3>Identificar</h3><p>Registrar autoria, data, lugar, pessoas e origem sempre que essas informações estiverem disponíveis.</p></article><article><span>02</span><h3>Confirmar</h3><p>Comparar informações e sinalizar claramente aquilo que ainda estiver em pesquisa.</p></article><article><span>03</span><h3>Autorizar</h3><p>Publicar acervos particulares somente com a concordância de quem detém seus direitos.</p></article></div></section>

    <section className="archive-invite"><p className="section-index">Contribua com o acervo</p><h2>Um documento guardado pode revelar uma história inteira.</h2><p>Conte o que você possui. O formulário organiza as informações e registra sua autorização antes de qualquer publicação.</p><a className="button light" href="/contribua">Compartilhar um material</a></section>
    <footer><div className="brand footer-brand"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></div><p>Um acervo comunitário dedicado à história, à natureza e às pessoas do Rio da Casca.</p><div className="footer-links"><a href="/sobre">Sobre</a><a href="/metodologia">Metodologia</a><a href="/privacidade">Privacidade</a><a href="https://musicas.chapada.ia.br/">Músicas</a></div><div className="footer-meta"><span>Chapada dos Guimarães · MT · Brasil</span><span>© 2026 Rio da Casca</span></div></footer>
  </main>;
}
