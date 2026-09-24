import type { Metadata } from "next";

export const metadata: Metadata = { title: "Rede comunitária", description: "Espaço de participação, memória e articulação da comunidade do Rio da Casca.", alternates: { canonical: "/rede-comunitaria" } };

const groups = [
  ["01", "Moradores e antigos moradores", "Memórias do cotidiano, necessidades locais e conhecimento de quem vive ou viveu no território."],
  ["02", "Famílias e descendentes", "Fotografias, documentos, histórias familiares e identificação responsável de pessoas e lugares."],
  ["03", "Pesquisadores e educadores", "Fontes, estudos, projetos de história, educação ambiental e devolutivas para a comunidade."],
  ["04", "Produtores e associações", "Iniciativas da agricultura familiar, ofícios, festas e formas de organização comunitária."],
  ["05", "Amigos e defensores", "Apoio à preservação da memória, da água e do patrimônio do Rio da Casca."],
  ["06", "Jovens e criadores", "Entrevistas, música, vídeo e novas formas de transmitir o patrimônio entre gerações."],
];

export default function RedeComunitaria() {
  return <main className="network-page">
    <header className="topbar"><a className="brand" href="/"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></a><nav><a href="/comunidade">Comunidade</a><a href="/comunicados">Comunicados</a><a href="/diretrizes">Diretrizes</a><a href="/acervo">Acervo</a></nav><a className="menu-link" href="/contribua">Participar <span>↗</span></a></header>
    <section className="network-hero"><p className="eyebrow">Comunidade Rio da Casca</p><h1>Memória, água<br/><em>e futuro.</em></h1><p>Uma rede para aproximar pessoas ligadas ao território, preservar histórias e organizar contribuições de forma respeitosa, verificável e segura.</p></section>
    <section className="network-section"><div className="network-section-head"><p className="section-index">01 — Quem participa</p><div><h2>Uma comunidade com muitas formas de pertencimento.</h2><p>A participação não depende apenas de morar hoje no Rio da Casca. Ela também acolhe vínculos familiares, de pesquisa, trabalho, cuidado e memória.</p></div></div><div className="network-grid">{groups.map(([mark,title,text]) => <article key={mark}><span>{mark}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="network-status"><div><span className="status-pill">Integração em preparação</span><h2>Comunidade no WhatsApp.</h2></div><div><p>O canal será incorporado quando o convite oficial, os responsáveis pela moderação e as regras de privacidade estiverem confirmados. Até lá, o portal não exibirá links ou contatos não verificados.</p><a className="button light" href="/diretrizes">Conhecer as diretrizes</a></div></section>
    <section className="network-section"><div className="network-section-head"><p className="section-index">02 — Caminhos de participação</p><div><h2>Contribuir, acompanhar e preservar.</h2></div></div><div className="network-grid"><a href="/contribua"><span>Acervo vivo</span><h3>Enviar uma memória</h3><p>Fotografia, documento, relato, entrevista ou observação ambiental.</p><b>Preparar contribuição →</b></a><a href="/comunicados"><span>Transparência</span><h3>Acompanhar comunicados</h3><p>Atualizações públicas, com data, contexto e situação claramente identificados.</p><b>Ver comunicados →</b></a><a href="/audiovisual"><span>Novas gerações</span><h3>Conhecer o audiovisual</h3><p>Uma área em formação para entrevistas, história oral, vídeo e música.</p><b>Abrir audiovisual →</b></a></div></section>
    <section className="network-section"><div className="pending-box"><strong>Documento comunitário de 1987</strong><p>A referência ao documento de fundação de 15 de abril de 1987 está registrada como pista de pesquisa. Ele só será catalogado e publicado depois do recebimento do arquivo original, identificação de sua origem e definição dos direitos de uso.</p></div></section>
  </main>;
}
