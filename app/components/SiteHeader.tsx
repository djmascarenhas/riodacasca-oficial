import Link from "next/link";

type SiteHeaderProps = {
  active?: "historia" | "atrativos" | "comunidade" | "acervo" | "guimaraes" | "musicas" | "cavalgada";
};

const links = [
  ["historia", "História", "/historia"],
  ["atrativos", "Atrativos", "/atrativos"],
  ["comunidade", "Comunidade", "/comunidade"],
  ["acervo", "Acervo", "/acervo"],
  ["guimaraes", "Guimarães", "/guimaraes"],
  ["musicas", "Músicas", "/musicas"],
  ["cavalgada", "Cavalgada", "/cavalgada"],
] as const;

export default function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="topbar">
      <Link className="brand" href="/" aria-label="Rio da Casca — início">
        <span className="brand-mark">RC</span>
        <span>Rio da Casca<small>memória do território</small></span>
      </Link>
      <nav aria-label="Navegação principal">
        {links.map(([key, label, href]) => <Link className={active === key ? "active" : undefined} href={href} key={key}>{label}</Link>)}
      </nav>
      <Link className="menu-link" href="/contribua">Contribua <span>↗</span></Link>
    </header>
  );
}
