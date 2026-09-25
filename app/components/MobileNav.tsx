import Link from "next/link";

export default function MobileNav() {
  return <div className="mobile-nav">
    <Link className="mobile-brand" href="/" aria-label="Rio da Casca — início"><span>RC</span><b>Rio da Casca</b></Link>
    <details>
      <summary aria-label="Abrir menu de navegação"><span>Menu</span><i aria-hidden="true"></i></summary>
      <nav aria-label="Navegação móvel"><Link href="/">Início</Link><Link href="/historia">História</Link><Link href="/atrativos">Atrativos</Link><Link href="/territorio">Território</Link><Link href="/comunidade">Comunidade</Link><Link href="/rede-comunitaria">Rede comunitária</Link><Link href="/comunicados">Comunicados</Link><Link href="/acervo">Acervo</Link><Link href="/audiovisual">Audiovisual</Link><Link href="/guimaraes">Guimarães</Link><Link href="/musicas">Músicas</Link><Link href="/cavalgada">Cavalgada</Link><Link href="/contribua">Contribua</Link></nav>
    </details>
  </div>;
}
