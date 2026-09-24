import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="brand footer-brand"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></div>
      <p>Um acervo comunitário dedicado à história, à natureza e às pessoas do Rio da Casca.</p>
      <div className="footer-links"><Link href="/historia">História</Link><Link href="/atrativos">Atrativos</Link><Link href="/comunidade">Comunidade</Link><Link href="/acervo">Acervo</Link><Link href="/guimaraes">Guimarães</Link><Link href="/musicas">Músicas</Link><Link href="/contribua">Contribua</Link><Link href="/metodologia">Metodologia</Link><Link href="/privacidade">Privacidade</Link></div>
      <div className="footer-meta"><span>Chapada dos Guimarães · MT · Brasil</span><span>© 2026 Rio da Casca</span></div>
    </footer>
  );
}
