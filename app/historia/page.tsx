const milestones = [
  { year: "Antes de 1928", title: "Um território vivido", text: "Muito antes das usinas, o vale já era formado por caminhos, fazendas, trabalhos e relações comunitárias. Esta parte da história será ampliada com documentos e relatos locais.", status: "Memória em pesquisa" },
  { year: "1928", title: "A força das águas", text: "É inaugurada a primeira usina hidrelétrica do estado de Mato Grosso, utilizando o potencial do Rio da Casca para levar energia à capital.", source: "https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?id=441551&view=detalhes", sourceLabel: "Acervo do IBGE" },
  { year: "1970", title: "Rio da Casca III", text: "A usina Rio da Casca III começa a operar em 1º de janeiro, ampliando a capacidade de geração do complexo hidrelétrico.", source: "https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?id=441551&view=detalhes", sourceLabel: "Acervo do IBGE" },
  { year: "1994", title: "Proteção do território", text: "A Lei estadual nº 6.437 cria a Estação Ecológica do Rio da Casca, composta por dois perímetros destinados à proteção permanente.", source: "https://www.chapadadosguimaraes.mt.gov.br/fotos_documentos_downloads/6067.pdf", sourceLabel: "Plano Diretor de Chapada dos Guimarães" },
  { year: "Hoje", title: "Um patrimônio em construção", text: "O Rio da Casca segue reunindo comunidades, paisagens, patrimônio energético e iniciativas de conservação. O portal nasce para tornar essas histórias mais visíveis e acessíveis.", status: "Arquivo vivo" },
];

export default function Historia() {
  return (
    <main>
      <header className="topbar history-topbar">
        <a className="brand" href="/" aria-label="Rio da Casca — início"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></a>
        <nav aria-label="Navegação principal"><a className="active" href="/historia">História</a><a href="/#territorio">Território</a><a href="/#comunidade">Comunidade</a><a href="/#acervo">Acervo</a></nav>
        <a className="menu-link" href="/">Voltar ao início <span>↗</span></a>
      </header>

      <section className="history-hero">
        <p className="eyebrow">História e memória · Rio da Casca</p>
        <h1>O tempo corre<br/><em>como o rio.</em></h1>
        <div className="history-intro"><p>Esta linha do tempo reúne marcos documentados e abre espaço para as lembranças de quem viveu o território.</p><p className="research-note"><span>Em construção</span> Datas antigas, nomes e relatos comunitários serão publicados conforme forem conferidos em fontes e documentos.</p></div>
      </section>

      <section className="history-line" aria-label="Linha do tempo do Rio da Casca">
        {milestones.map((item, index) => (
          <article className="milestone" key={item.year}>
            <div className="milestone-number">{String(index + 1).padStart(2, "0")}</div><time>{item.year}</time>
            <div className="milestone-copy"><h2>{item.title}</h2><p>{item.text}</p>{item.source ? <a href={item.source} target="_blank" rel="noreferrer">{item.sourceLabel} <span>↗</span></a> : <span className="status-label">{item.status}</span>}</div>
          </article>
        ))}
      </section>

      <section className="history-callout"><p className="section-index">Acervo comunitário</p><h2>Uma história fica mais inteira quando muitas vozes participam.</h2><p>Você tem fotografias, documentos, mapas ou lembranças do Rio da Casca? Sua contribuição pode ajudar a identificar lugares, pessoas e acontecimentos.</p><a className="button light" href="mailto:contato@riodacasca.com.br?subject=Memória%20do%20Rio%20da%20Casca">Compartilhar uma memória</a></section>
      <footer><div className="brand footer-brand"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></div><p>Um acervo comunitário dedicado à história, à natureza e às pessoas do Rio da Casca.</p><div className="footer-meta"><span>Chapada dos Guimarães · MT · Brasil</span><span>© 2026 Rio da Casca</span></div></footer>
    </main>
  );
}
