import { headers } from "next/headers";

const artistPlatforms = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/6BBDYGtCH719wJOuqq0vKk",
  },
  {
    name: "Apple Music",
    href: "https://music.apple.com/br/artist/dj-dalma/1832286631",
  },
  {
    name: "YouTube Music",
    href: "https://music.youtube.com/channel/UCuBpQJGDfOD-g29-QhA2Ncg",
  },
];

const catalog = [
  {
    title: "Valentim há de Voltar",
    subtitle: "Uma história de Mato Grosso",
    image: "/musicas/images/teaser_valentim.webp",
    href: "valentim-ha-de-voltar",
    status: "Disponível",
    featured: true,
  },
  {
    title: "Rio da Casca, Meu Chão",
    subtitle: "Memória, território e pertencimento",
    image: "/musicas/images/rio-da-casca-meu-chao.png",
    href: "rio-da-casca-meu-chao",
    status: "Disponível na Apple Music",
    featured: false,
    external: "https://music.apple.com/br/album/rio-da-casca-meu-ch%C3%A3o/6789545608?i=6789545740",
  },
  {
    title: "Pedra Rara",
    subtitle: "Uma composição de DJ Dalma",
    image: "/musicas/images/pedra-rara.png",
    href: "pedra-rara",
    status: "Disponível no Spotify",
    featured: false,
    external: "https://open.spotify.com/track/4Tes1U92U6cQ0oiowHkw64",
  },
  {
    title: "Joaquina de Mina",
    subtitle: "Memória, presença e resistência",
    image: "/musicas/images/joaquina-de-mina.png",
    href: "joaquina-de-mina",
    status: "Conheça a história",
    featured: false,
  },
];

export default async function MusicPortal() {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();
  const portalBase = host === "musicas.chapada.ia.br" ? "" : "/musicas";
  const compositionHref = `${portalBase}/valentim-ha-de-voltar`;

  return (
    <main className="music-site portal">
      <nav className="portal-nav" aria-label="Navegação principal">
        <a className="portal-brand" href="#inicio" aria-label="Músicas de DJ Dalma — início">
          <span className="portal-brand-mark">DD</span>
          <span><strong>Músicas</strong><small>Chapada.ia · DJ Dalma</small></span>
        </a>
        <div className="portal-links">
          <a href="#acervo">Composições</a>
          <a href="#sobre">O artista</a>
          <a href="https://riodacasca.chapada.ia.br/" target="_blank" rel="noreferrer">Rio da Casca ↗</a>
        </div>
      </nav>

      <section className="portal-hero" id="inicio">
        <div className="portal-hero-copy">
          <p className="eyebrow">Música · memória · Mato Grosso</p>
          <h1>Canções que<br /><em>guardam histórias.</em></h1>
          <p>
            O acervo musical de DJ Dalma: composições que conectam paisagem, pesquisa, memória e as raízes do território mato-grossense.
          </p>
          <div className="portal-hero-actions">
            <a className="button button-light" href="#acervo">Explorar o acervo ↓</a>
            <div className="platform-links" aria-label="Ouça DJ Dalma nas plataformas digitais">
              {artistPlatforms.map((platform) => (
                <a key={platform.name} href={platform.href} target="_blank" rel="noreferrer">
                  {platform.name} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <a className="featured-disc" href={compositionHref} aria-label="Abrir página de Valentim há de Voltar">
          <span className="featured-badge">Em destaque</span>
          <div className="disc-art" />
          <div className="featured-meta">
            <span>01</span>
            <strong>Valentim há de Voltar</strong>
            <small>Conheça a história →</small>
          </div>
        </a>
      </section>

      <section className="catalog" id="acervo">
        <div className="catalog-heading">
          <div>
            <p className="section-kicker">Acervo de composições</p>
            <h2>Histórias para ouvir</h2>
          </div>
          <p>
            Cada obra nasce do encontro entre pesquisa, vivência e paisagem. O catálogo crescerá à medida que novas histórias forem organizadas e publicadas.
          </p>
        </div>

        <div className="song-grid">
          {catalog.map((song, index) => (
            <article className="song-card is-live" key={song.title}>
              <a
                href={song.featured ? compositionHref : `${portalBase}/${song.href}`}
                aria-label={`${song.title}: ${song.status}`}
              >
                <div className="song-image" style={{ backgroundImage: `url('${song.image}')` }}>
                  <span className="song-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="song-play" aria-hidden="true">▶</span>
                </div>
                <div className="song-info">
                  <span className="song-status">{song.status}</span>
                  <h3>{song.title}</h3>
                  <p>{song.subtitle}</p>
                  <span className="song-action">Conhecer e ouvir →</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="portal-about" id="sobre">
        <div className="portal-about-title">
          <p className="section-kicker">O artista e pesquisador</p>
          <h2>DJ Dalma</h2>
          <p>Djalma Mascarenhas</p>
        </div>
        <div className="portal-about-copy">
          <p>
            Com uma trajetória de mais de quatro décadas dedicada à tecnologia e à pesquisa, Djalma transforma histórias de Mato Grosso em documentos sonoros.
          </p>
          <p>
            Suas composições aproximam passado e futuro, celebram o território e preservam memórias que merecem continuar vivas.
          </p>
          <blockquote>“A música é uma forma de devolver a história às pessoas.”</blockquote>
        </div>
      </section>

      <section className="portal-rio">
        <div>
          <p className="eyebrow">Projeto relacionado</p>
          <h2>Conheça o<br />Rio da Casca</h2>
        </div>
        <div>
          <p>Um portal de memória, território, natureza e gente da região que inspira parte deste repertório.</p>
          <a className="button button-light" href="https://riodacasca.chapada.ia.br/" target="_blank" rel="noreferrer">Visitar o portal ↗</a>
        </div>
      </section>

      <footer className="portal-footer">
        <div className="portal-brand"><span className="portal-brand-mark">DD</span><span><strong>Músicas</strong><small>Chapada.ia · DJ Dalma</small></span></div>
        <p>Composições, histórias e memória de Mato Grosso.</p>
        <div className="portal-footer-links"><a href="https://riodacasca.chapada.ia.br/">Rio da Casca ↗</a><a href="#inicio">Voltar ao início ↑</a></div>
      </footer>
    </main>
  );
}
