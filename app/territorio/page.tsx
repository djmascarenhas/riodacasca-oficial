import Image from "next/image";

const places = [
  {
    number: "01",
    title: "Cachoeira do Casca / Martinha",
    text: "Uma sequência de cinco quedas e um poço natural, próxima à MT-251 e a cerca de 42 km do centro de Chapada dos Guimarães.",
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
      <header className="topbar territory-topbar">
        <a className="brand" href="/" aria-label="Rio da Casca — início"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></a>
        <nav aria-label="Navegação principal"><a href="/historia">História</a><a className="active" href="/territorio">Território</a><a href="/comunidade">Comunidade</a><a href="/acervo">Acervo</a><a href="https://musicas.chapada.ia.br/">Músicas</a></nav>
        <a className="menu-link" href="/">Voltar ao início <span>↗</span></a>
      </header>

      <section className="territory-hero">
        <div className="territory-hero-copy"><p className="eyebrow">Natureza e território · Chapada dos Guimarães</p><h1>Água que desenha<br/><em>a paisagem.</em></h1><p>O Rio da Casca atravessa um território de cerrado, rochas, quedas d&apos;água e comunidades. Conhecê-lo também significa compreender seus limites e ajudar a preservá-lo.</p></div>
        <div className="territory-photo"><Image src="/acervo/legado/ponte-do-casca.jpg" alt="Ponte sobre o Rio da Casca cercada pela vegetação" fill sizes="(max-width: 850px) 100vw, 50vw"/><span>Ponte do Casca · Acervo legado · autoria em identificação</span></div>
      </section>

      <section className="territory-facts" aria-label="Dados do território"><article><strong>05</strong><span>quedas na sequência Casca / Martinha</span></article><article><strong>3.534 ha</strong><span>na Estação Ecológica do Rio da Casca</span></article><article><strong>1994</strong><span>ano de criação da unidade de conservação</span></article></section>

      <section className="places"><div className="places-heading"><p className="section-index">01 — Paisagens</p><h2>Três formas de encontrar o território.</h2><p>Água, rocha e cerrado aparecem de maneiras diferentes ao longo do Rio da Casca. Cada lugar pede atenção às condições de acesso e respeito às áreas protegidas.</p></div><div className="place-list">{places.map((place) => <article key={place.number}><div className="place-number">{place.number}</div><div><span>{place.detail}</span><h3>{place.title}</h3><p>{place.text}</p><a href={place.href} target="_blank" rel="noreferrer">Consultar fonte e localização <b>↗</b></a></div></article>)}</div></section>

      <section className="territory-archive"><div><p className="section-index">02 — Memória ambiental</p><h2>A paisagem também guarda acontecimentos.</h2><p>O portal anterior reuniu pistas sobre biodiversidade, proteção patrimonial e cheias. Elas passam a integrar o acervo como registros em revisão.</p></div><div className="territory-archive-links"><a href="/acervo/andorinhoes-rio-da-casca"><span>Biodiversidade</span><strong>Os andorinhões do Rio da Casca</strong><b>→</b></a><a href="/acervo/tombamento-cachoeiras-martinha"><span>Proteção</span><strong>Tombamento das Cachoeiras da Martinha</strong><b>→</b></a><a href="/acervo/transbordamento-rio-da-casca-2016"><span>Memória das águas</span><strong>Transbordamento de 2016</strong><b>→</b></a></div></section>

      <section className="network-section"><div className="network-section-head"><p className="section-index">03 — Observação ambiental</p><div><h2>Um acompanhamento feito com cuidado.</h2><p>Moradores e visitantes poderão registrar mudanças percebidas na água e na paisagem. O portal organiza os relatos como observações, sem substituir laudos técnicos ou canais oficiais de emergência.</p></div></div><div className="network-grid"><article><span>Água</span><h3>Nascente e afluentes</h3><p>Data, localização, condições visíveis e fotografias originais ajudam a comparar registros.</p></article><article><span>Paisagem</span><h3>Vegetação e margens</h3><p>Mudanças na cobertura, erosão e resíduos devem ser descritos sem conclusões não comprovadas.</p></article><a href="/contribua"><span>Participar</span><h3>Enviar observação</h3><p>Use a categoria “Observação ambiental” e informe local, data, autoria e contexto.</p><b>Preparar registro →</b></a></div></section>

      <section className="care"><div><p className="section-index">04 — Visita responsável</p><h2>O melhor caminho deixa apenas lembranças.</h2></div><div className="care-list"><p><span>01</span> Confirme acesso, clima e condições da estrada antes de sair.</p><p><span>02</span> Respeite propriedades, moradores e áreas de proteção ambiental.</p><p><span>03</span> Não deixe resíduos e evite qualquer ação com risco de incêndio.</p><p><span>04</span> Em rios e cachoeiras, observe correnteza e mudanças repentinas no tempo.</p></div></section>

      <section className="territory-callout"><p className="section-index">Mapa vivo</p><h2>Conhece outro lugar que deve fazer parte deste mapa?</h2><p>Envie o nome, a localização e uma breve história. As contribuições serão verificadas antes de integrar o acervo.</p><a className="button light" href="/contribua">Indicar um lugar</a></section>
      <footer><div className="brand footer-brand"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></div><p>Um acervo comunitário dedicado à história, à natureza e às pessoas do Rio da Casca.</p><div className="footer-meta"><span>Chapada dos Guimarães · MT · Brasil</span><span>© 2026 Rio da Casca</span></div></footer>
    </main>
  );
}
