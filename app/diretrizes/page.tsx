import type { Metadata } from "next";

export const metadata: Metadata = { title: "Diretrizes da comunidade", description: "Princípios de convivência, publicação e proteção de dados da rede comunitária do Rio da Casca.", alternates: { canonical: "/diretrizes" } };

const rules = [
  ["Respeito entre pessoas", "Não serão aceitos ataques, discriminação, intimidação ou exposição indevida de moradores e participantes."],
  ["Contexto e comprovação", "Acusações sem comprovação não serão publicadas. Documentos devem vir acompanhados de origem, autoria e contexto conhecidos."],
  ["Proteção de dados", "Telefones, endereços, documentos pessoais e informações sensíveis permanecem privados, salvo autorização clara e finalidade legítima."],
  ["Memória com consentimento", "Retratos, depoimentos e histórias pessoais dependem da confirmação das pessoas envolvidas ou de seus responsáveis."],
  ["Interesse comunitário", "O portal evita propaganda partidária e não fala em nome da comunidade ou de instituições sem autorização formal."],
  ["Correção transparente", "Informações podem ser revistas quando surgirem fontes melhores. Alterações relevantes devem preservar a história da pesquisa."],
];

export default function Diretrizes() { return <main className="network-page"><header className="topbar"><a className="brand" href="/"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></a><nav><a href="/rede-comunitaria">Rede comunitária</a><a href="/comunicados">Comunicados</a><a href="/privacidade">Privacidade</a></nav><a className="menu-link" href="/contribua">Participar <span>↗</span></a></header><section className="network-hero"><p className="eyebrow">Convivência e cuidado</p><h1>Diretrizes<br/><em>da comunidade.</em></h1><p>Princípios para que a participação ajude a preservar vínculos, produzir conhecimento confiável e proteger as pessoas ligadas ao Rio da Casca.</p></section><section className="network-section"><div className="guideline-list">{rules.map(([title,text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}</div></section><section className="network-status"><div><h2>O que permanece privado.</h2></div><div><p>Conversas internas, dados pessoais, articulações institucionais não autorizadas e materiais sem permissão de uso não serão expostos no portal público.</p><a className="button light" href="/privacidade">Ler política de privacidade</a></div></section></main>; }
