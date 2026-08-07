import Image from "next/image";

export type Release = {
  mark: string;
  title: string;
  kicker: string;
  lead: string;
  image: string;
  imageAlt: string;
  storyTitle: string;
  story: string[];
  details: { label: string; title: string; text: string }[];
  themes: string[];
  listenHref: string;
  listenLabel: string;
  listenLinks?: { label: string; href: string }[];
  related: { title: string; href: string }[];
};

export default function ReleasePage({ release, portalHref }: { release: Release; portalHref: string }) {
  const songBase = portalHref === "/" ? "" : portalHref;
  const listenLinks = release.listenLinks ?? [{ label: release.listenLabel, href: release.listenHref }];
  return <main className="music-site release-page">
    <nav className="release-nav" aria-label="Navegação da composição">
      <a className="portal-brand" href={portalHref}><span className="portal-brand-mark">DD</span><span><strong>Músicas</strong><small>Chapada.ia · DJ Dalma</small></span></a>
      <div><a href="#historia">A história</a><a href="#ouvir">Ouvir</a></div>
      <a className="release-back" href={portalHref}>Todas as músicas ↗</a>
    </nav>
    <section className="release-hero">
      <div className="release-cover"><Image src={release.image} alt={release.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 50vw" /></div>
      <div className="release-hero-copy"><p className="eyebrow">{release.kicker}</p><span className="release-number">{release.mark}</span><h1>{release.title}</h1><p>{release.lead}</p><a className="button button-light" href={release.listenHref} target="_blank" rel="noreferrer"><span className="play" aria-hidden="true">▶</span>{release.listenLabel}</a></div>
    </section>
    <section className="release-story" id="historia"><div><p className="section-kicker">A composição</p><h2>{release.storyTitle}</h2></div><div className="release-story-copy">{release.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="release-details">{release.details.map((detail, index) => <article key={detail.title}><span>{String(index + 1).padStart(2, "0")} · {detail.label}</span><h3>{detail.title}</h3><p>{detail.text}</p></article>)}</section>
    <section className="release-listen" id="ouvir"><div className="release-listen-art"><Image src={release.image} alt="" fill sizes="(max-width: 900px) 75vw, 34vw" /></div><div><p className="section-kicker">Disponível agora</p><h2>{release.title}</h2><p className="music-by">DJ Dalma · Djalma Mascarenhas</p><div className="themes">{release.themes.map((theme) => <span key={theme}>{theme}</span>)}</div><a className="button button-dark" href={release.listenHref} target="_blank" rel="noreferrer"><span className="play" aria-hidden="true">▶</span>{release.listenLabel}</a><div className="release-platforms" aria-label="Escolha onde ouvir"><span>Escolha onde ouvir</span>{listenLinks.map((platform) => <a key={platform.href} href={platform.href} target="_blank" rel="noreferrer">{platform.label} <span aria-hidden="true">↗</span></a>)}</div></div></section>
    <section className="release-related"><div><p className="section-kicker">Continue ouvindo</p><h2>Outras histórias em música.</h2></div><div>{release.related.map((item) => <a href={`${songBase}/${item.href}`} key={item.href}><span>Composição</span><strong>{item.title}</strong><b>→</b></a>)}</div></section>
    <footer className="portal-footer"><div className="portal-brand"><span className="portal-brand-mark">DD</span><span><strong>Músicas</strong><small>Chapada.ia · DJ Dalma</small></span></div><p>Composições, histórias e memória de Mato Grosso.</p><div className="portal-footer-links"><a href={portalHref}>Todas as músicas ↑</a><a href="https://riodacasca.chapada.ia.br/">Rio da Casca ↗</a></div></footer>
  </main>;
}
