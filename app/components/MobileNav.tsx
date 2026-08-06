export default function MobileNav() {
  return <div className="mobile-nav">
    <a className="mobile-brand" href="/" aria-label="Rio da Casca — início"><span>RC</span><b>Rio da Casca</b></a>
    <details>
      <summary aria-label="Abrir menu de navegação"><span>Menu</span><i aria-hidden="true"></i></summary>
      <nav aria-label="Navegação móvel"><a href="/">Início</a><a href="/historia">História</a><a href="/territorio">Território</a><a href="/comunidade">Comunidade</a><a href="/acervo">Acervo</a><a href="/contribua">Contribua</a><a href="https://musicas.chapada.ia.br/">Músicas</a></nav>
    </details>
  </div>;
}
