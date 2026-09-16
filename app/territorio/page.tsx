import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const places = [
  {
    number: "01",
    title: "Cachoeira do Casca / Martinha",
    text: "Uma sequência de cinco quedas e um poço natural. O complexo está interditado por decisão judicial desde abril de 2025 e não recebe visitantes.",
    detail: "Águas e formações rochosas",
    href: "https://www.chapadadosguimaraes.mt.gov.br/Turismo/Atrativos-Turistico/39/",
  },
  {
    number: "02",
    title: "Cachoeira da Pedra Furada",
    text: "Localizada na comunidade do Rio da Casca, combina uma curta trilha de terra, relevo marcado e uma queda procurada para banho e contemplação.",
    detail: "Paisagem e caminhada",
    href: "https://www.chapadadosguimaraes.mt.gov.br/Turismo/Atrativos-Turistico/40/",
  },
  {
    number: "03",
    title: "Estação Ecológica",
    text: "Criada em 1994, reúne dois perímetros e aproximadamente 3.534 hectares destinados à proteção da natureza e à pesquisa científica.",
    detail: "Conservação e pesquisa",
    href: "https://www.chapadadosguimaraes.mt.gov.br/fotos_documentos_downloads/6067.pdf",
  },
];

export default function Territorio() {
  return (
    <main>
      <SiteHeader active="atrativos" />

      <section className="territory-hero">
        <div className="territory-hero-copy"><p className="eyebrow">Natureza e território · Chapada dos Guimarães</p><h1>Água que desenha<br/><em>a paisagem.</em></h1><p>O Rio da Casca atravessa um território de cerrado, rochas, quedas d&apos;água e comunidades. Conhecê-lo também significa compreender seus limites e ajudar a preservá-lo.</p></div>
        <div className="territory-photo"><img src="/atrativos/ponte-rio-da-casca.jpg" alt="Ponte sobre o Rio da Casca cercada pela vegetação"/><span>Ponte do Casca · Acervo Rio da Casca</span></div>
      </section>

      <section className="territory-facts" aria-label="Dados do território"><article><strong>05</strong><span>quedas na sequência Casca / Martinha</span></article><article><strong>3.534 ha</strong><span>na Estação Ecológica do Rio da Casca</span></article><article><strong>1994</strong><span>ano de criação da unidade de conservação</span></article></section>

      <section className="places"><div className="places-heading"><p className="section-index">01 — Paisagens</p><h2>Três formas de encontrar o território.</h2><p>Água, rocha e cerrado aparecem de maneiras diferentes ao longo do Rio da Casca. Cada lugar pede atenção às condições de acesso e respeito às áreas protegidas.</p></div><div className="place-list">{places.map((place) => <article key={place.number}><div className="place-number">{place.number}</div><div><span>{place.detail}</span><h3>{place.title}</h3><p>{place.text}</p><a href={place.href} target="_blank" rel="noreferrer">Consultar fonte e localização <b>↗</b></a></div></article>)}</div></section>

      <section className="care"><div><p className="section-index">02 — Visita responsável</p><h2>O melhor caminho deixa apenas lembranças.</h2></div><div className="care-list"><p><span>01</span> Confirme acesso, clima e condições da estrada antes de sair.</p><p><span>02</span> Respeite propriedades, moradores e áreas de proteção ambiental.</p><p><span>03</span> Não deixe resíduos e evite qualquer ação com risco de incêndio.</p><p><span>04</span> Em rios e cachoeiras, observe correnteza e mudanças repentinas no tempo.</p></div></section>

      <section className="territory-callout"><p className="section-index">Inventário do território</p><h2>Doze lugares, com imagens e situação de acesso.</h2><p>Consulte o catálogo de atrativos antes de planejar qualquer deslocamento. Ele diferencia visitação documentada, acesso a confirmar, áreas restritas e locais interditados.</p><a className="button light" href="/atrativos">Ver todos os atrativos</a></section>
      <SiteFooter />
    </main>
  );
}
