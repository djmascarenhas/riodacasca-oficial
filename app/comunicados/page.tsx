import type { Metadata } from "next";

export const metadata: Metadata = { title: "Comunicados", description: "Atualizações públicas do portal e da rede comunitária do Rio da Casca.", alternates: { canonical: "/comunicados" } };

const notices = [
  { date: "6 ago. 2026", status: "Concluído", title: "Primeiro lote do acervo legado incorporado", text: "Nove registros do portal anterior passaram a integrar o novo acervo. Materiais ainda sem autoria, data ou contexto completos continuam marcados como em revisão." },
  { date: "6 ago. 2026", status: "Em implantação", title: "Rede Comunitária: Memória, Água e Futuro", text: "O portal ganhou espaços para participação, diretrizes, organização comunitária, audiovisual e acompanhamento ambiental." },
  { date: "6 ago. 2026", status: "Pendente de fonte", title: "Documento comunitário de 1987", text: "A catalogação aguarda o arquivo original e a confirmação de origem, contexto e direitos. Nenhuma versão foi publicada como documento histórico confirmado." },
];

export default function Comunicados() { return <main className="network-page"><header className="topbar"><a className="brand" href="/"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></a><nav><a href="/rede-comunitaria">Rede comunitária</a><a href="/diretrizes">Diretrizes</a><a href="/acervo">Acervo</a></nav><a className="menu-link" href="/">Início <span>↗</span></a></header><section className="network-hero"><p className="eyebrow">Informação pública</p><h1>Comunicados<br/><em>com contexto.</em></h1><p>Atualizações sobre o portal, o acervo e a rede comunitária. Cada item informa data e situação para separar entregas concluídas, trabalhos em andamento e conteúdos ainda pendentes.</p></section><section className="network-section"><div className="notice-list">{notices.map((notice) => <article key={notice.title}><div><time>{notice.date}</time><br/><span>{notice.status}</span></div><div><h2>{notice.title}</h2><p>{notice.text}</p></div></article>)}</div></section></main>; }
