import { headers } from "next/headers";

export const metadata = {
  title: { absolute: "Valentim há de Voltar | DJ Dalma" },
  description: "A saga de Valentim, o Rio da Casca e as raízes de Mato Grosso em uma composição de DJ Dalma.",
  alternates: { canonical: "/valentim-ha-de-voltar" },
};

const journey = [
  {
    number: "01",
    title: "A partida",
    text: "Valentim deixa Portugal levando pouco além da coragem, da memória de casa e da promessa de voltar.",
  },
  {
    number: "02",
    title: "A chegada",
    text: "No coração de Mato Grosso, o Rio da Casca se torna trabalho, travessia e possibilidade de um novo começo.",
  },
  {
    number: "03",
    title: "O amor",
    text: "Ao encontrar Joaquina, Valentim descobre uma riqueza maior que qualquer fortuna: um amor capaz de criar raízes.",
  },
  {
    number: "04",
    title: "A saudade",
    text: "A promessa de regressar permanece, mas a vida já escreveu outra geografia para o seu coração.",
  },
];

const themes = [
  "Imigração e adaptação",
  "Formação cultural",
  "Memória e legado",
  "Desenvolvimento regional",
];

const materials = [
  {
    tag: "Estratégia",
    title: "Campanha e conteúdo teaser",
    text: "Objetivo, público, mensagem central, fases da campanha e a legenda de pré-lançamento.",
    href: "/musicas/materiais/campanha_valentim_teaser.md",
  },
  {
    tag: "Lançamento",
    title: "Instagram e Facebook",
    text: "Publicação emocional sobre a história de Valentim e Joaquina, pronta para as redes sociais.",
    href: "/musicas/materiais/post_lancamento_instagram_facebook.md",
  },
  {
    tag: "Lançamento",
    title: "LinkedIn",
    text: "Uma leitura sobre formação cultural, resiliência e a música como documento sonoro.",
    href: "/musicas/materiais/post_lancamento_linkedin.md",
  },
  {
    tag: "Continuidade",
    title: "Roteiro de Stories e Reels",
    text: "Dois Reels, três Stories, chamadas para ação e orientações de engajamento.",
    href: "/musicas/materiais/roteiro_stories_reels.md",
  },
];

export default async function ValentimPage() {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();
  const portalHref = host === "musicas.chapada.ia.br" ? "/" : "/musicas";

  return (
    <main className="music-site">
      <nav className="nav" aria-label="Navegação principal">
        <a className="brand" href={portalHref} aria-label="Voltar ao portal Músicas de DJ Dalma">
          <span className="brand-mark">VDV</span>
          <span>DJ Dalma</span>
        </a>
        <div className="nav-links">
          <a href="#jornada">A jornada</a>
          <a href="#musica">A música</a>
          <a href="#campanha">Campanha</a>
        </div>
        <a className="nav-cta" href="https://music.youtube.com/watch?v=Vs4xX8BRgN4" target="_blank" rel="noreferrer">
          Ouvir agora <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Uma história de Mato Grosso</p>
          <h1>
            Valentim
            <span>há de voltar</span>
          </h1>
          <p className="hero-lead">
            Uma canção sobre travessia, amor e as raízes que transformam uma promessa em legado.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="https://music.youtube.com/watch?v=Vs4xX8BRgN4" target="_blank" rel="noreferrer">
              <span className="play" aria-hidden="true">▶</span> Ouça a canção
            </a>
            <a className="text-link" href="#historia">Conheça a história <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-caption">
          <span>Rio da Casca</span>
          <span>Chapada dos Guimarães · MT</span>
        </div>
      </section>

      <section className="intro" id="historia">
        <p className="section-kicker">A canção</p>
        <div className="intro-grid">
          <h2>Uma ponte entre o passado e o futuro de Mato Grosso.</h2>
          <div className="intro-copy">
            <p>
              “Valentim há de Voltar” acompanha um imigrante português que encontra no Rio da Casca não apenas trabalho, mas um novo lar e um amor profundo com Joaquina.
            </p>
            <p>
              A obra de DJ Dalma transforma memória, paisagem e formação cultural em música — um convite para reconhecer as histórias que construíram nossa identidade.
            </p>
          </div>
        </div>
      </section>

      <section className="journey" id="jornada">
        <div className="section-heading light-heading">
          <div>
            <p className="section-kicker">A jornada</p>
            <h2>Quatro movimentos.<br />Uma vida inteira.</h2>
          </div>
          <p>Do oceano ao cerrado, cada capítulo aproxima Valentim do lugar que passaria a chamar de seu.</p>
        </div>
        <div className="timeline">
          {journey.map((item) => (
            <article className="timeline-card" key={item.number}>
              <span className="timeline-number">{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="place">
        <div className="place-image" role="img" aria-label="Pôr do sol no Rio da Casca com mapa antigo e relógio de bolso" />
        <div className="place-copy">
          <p className="section-kicker">O lugar</p>
          <h2>Rio da Casca</h2>
          <p className="place-lead">Onde a história de Valentim ganhou chão, tempo e permanência.</p>
          <p>
            Entre a força das águas e a paisagem da Chapada dos Guimarães, o Rio da Casca guarda capítulos da mineração, da agricultura e dos encontros que ajudaram a formar Mato Grosso.
          </p>
          <div className="coordinate">
            <span aria-hidden="true">⌖</span>
            <div>
              <strong>Chapada dos Guimarães</strong>
              <small>Mato Grosso · Brasil</small>
            </div>
          </div>
        </div>
      </section>

      <section className="music" id="musica">
        <div className="record" aria-hidden="true">
          <div className="record-ring"><span>VDV</span></div>
        </div>
        <div className="music-copy">
          <p className="section-kicker">Escute agora</p>
          <h2>Valentim há de Voltar</h2>
          <p className="music-by">DJ Dalma · Djalma Mascarenhas</p>
          <p>
            Mais que uma melodia, um documento sonoro sobre a força dos laços humanos e a capacidade de criar raízes, mesmo diante da saudade e das adversidades.
          </p>
          <a className="button button-dark" href="https://music.youtube.com/watch?v=Vs4xX8BRgN4" target="_blank" rel="noreferrer">
            <span className="play" aria-hidden="true">▶</span> Abrir no YouTube Music
          </a>
          <div className="themes" aria-label="Temas da música">
            {themes.map((theme) => <span key={theme}>{theme}</span>)}
          </div>
        </div>
      </section>

      <section className="creator">
        <div>
          <p className="section-kicker">Sobre o criador</p>
          <h2>Djalma Mascarenhas</h2>
          <p className="creator-role">DJ Dalma · Pesquisador · Criador</p>
        </div>
        <div className="creator-copy">
          <p>
            Com mais de 40 anos dedicados à tecnologia e à pesquisa, Djalma acredita no poder das narrativas para conectar pessoas e inspirar o futuro.
          </p>
          <p>
            Sob o nome DJ Dalma, utiliza a arte para comunicar a história de Mato Grosso, aproximando memória, inovação e desenvolvimento regional.
          </p>
          <blockquote>“Entender nossas raízes é fundamental para inovar e construir o futuro.”</blockquote>
        </div>
      </section>

      <section className="campaign" id="campanha">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Materiais de divulgação</p>
            <h2>A campanha completa</h2>
          </div>
          <p>Textos e roteiros recuperados do projeto original, organizados para executar o lançamento e manter a conversa viva.</p>
        </div>
        <div className="material-grid">
          {materials.map((material) => (
            <article className="material-card" key={material.href}>
              <span className="material-tag">{material.tag}</span>
              <h3>{material.title}</h3>
              <p>{material.text}</p>
              <a href={material.href} download>Baixar Markdown <span aria-hidden="true">↓</span></a>
            </article>
          ))}
        </div>
        <div className="campaign-note">
          <strong>Mensagem central</strong>
          <p>A música como ponte entre o passado e o futuro, celebrando as raízes de Mato Grosso e a importância de conhecer a história para construir o amanhã.</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Uma história para ouvir e guardar</p>
        <h2>Algumas promessas<br />nos trazem de volta.</h2>
        <a className="button button-light" href="https://music.youtube.com/watch?v=Vs4xX8BRgN4" target="_blank" rel="noreferrer">
          Ouça “Valentim há de Voltar” <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark">VDV</span><span>DJ Dalma</span></div>
        <p>História, música e memória de Mato Grosso.</p>
        <a href="#inicio">Voltar ao início ↑</a>
      </footer>
    </main>
  );
}
