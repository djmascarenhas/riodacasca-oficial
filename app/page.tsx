const themes = [
  { number: "01", title: "História e memória", text: "Documentos, relatos e acontecimentos que atravessam gerações.", href: "/historia" },
  { number: "02", title: "Natureza e território", text: "O rio, as cachoeiras, o cerrado e as paisagens que formam este lugar.", href: "#territorio" },
  { number: "03", title: "Pessoas e comunidade", text: "Vozes, fotografias e saberes das famílias do Rio da Casca.", href: "#comunidade" },
];

const timeline = [
  ["1928", "Entra em operação a primeira usina hidrelétrica de Mato Grosso, aproveitando as águas do Rio da Casca."],
  ["1970", "A Usina Rio da Casca III passa a operar e amplia a presença do território na história da energia estadual."],
  ["1994", "É criada a Estação Ecológica do Rio da Casca, reunindo dois perímetros de proteção permanente."],
  ["Hoje", "O distrito reúne memória, natureza, comunidades e novos caminhos para o turismo responsável."],
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Rio da Casca — início">
          <span className="brand-mark">RC</span>
          <span>Rio da Casca<small>memória do território</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="/historia">História</a><a href="#territorio">Território</a><a href="#comunidade">Comunidade</a><a href="#acervo">Acervo</a>
        </nav>
        <a className="menu-link" href="#acervo">Explorar acervo <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-image">
          <img src="https://riodacasca.com.br/wd/wp-content/uploads/2018/01/ponte03-850x450.jpg" alt="Ponte sobre o Rio da Casca cercada pela vegetação" />
          <p>Ponte do Casca · Acervo Rio da Casca</p>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Chapada dos Guimarães · Mato Grosso</p>
          <h1>Onde a água passa,<br/><em>a história fica.</em></h1>
          <p className="lead">Um lugar para reconhecer as pessoas, as paisagens e os acontecimentos que fizeram do Rio da Casca um território singular.</p>
          <div className="hero-actions"><a className="button" href="#acervo">Conheça o acervo</a><a className="text-link" href="/historia">Percorra a história <span>→</span></a></div>
        </div>
      </section>

      <section className="manifesto" id="historia">
        <p className="section-index">01 — O território</p>
        <div><h2>Um rio.<br/>Muitas histórias.</h2></div>
        <div className="manifesto-copy"><p>O Rio da Casca não cabe em uma única narrativa. Sua história vive nas águas que moveram usinas, nos caminhos das comunidades, nas fotografias de família e nos saberes transmitidos entre gerações.</p><p>Este portal nasce para reunir essas memórias com rigor, cuidado e participação comunitária.</p></div>
      </section>

      <section className="themes" id="territorio">
        {themes.map((item) => <a className="theme-card" href={item.href} key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><b>→</b></a>)}
      </section>

      <section className="history" id="acervo">
        <div className="history-heading"><p className="section-index">02 — Linha do tempo</p><h2>Marcos de uma história em movimento.</h2><p>Uma primeira leitura do território. As datas e narrativas serão ampliadas a partir de fontes, documentos e relatos da comunidade.</p></div>
        <div className="timeline">{timeline.map(([year,text]) => <article key={year}><strong>{year}</strong><p>{text}</p></article>)}<a className="timeline-more" href="/historia">Ver linha do tempo completa <span>→</span></a></div>
      </section>

      <section className="community" id="comunidade">
        <p className="section-index">03 — Memória compartilhada</p>
        <h2>Esta história também pode ser contada por você.</h2>
        <p>Fotografias, documentos e relatos pessoais ajudam a formar um acervo vivo e plural do Rio da Casca.</p>
        <a className="button light" href="mailto:contato@riodacasca.com.br">Compartilhe uma memória</a>
      </section>

      <footer><div className="brand footer-brand"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></div><p>Um acervo comunitário dedicado à história, à natureza e às pessoas do Rio da Casca.</p><div className="footer-meta"><span>Chapada dos Guimarães · MT · Brasil</span><span>© 2026 Rio da Casca</span></div></footer>
    </main>
  );
}
