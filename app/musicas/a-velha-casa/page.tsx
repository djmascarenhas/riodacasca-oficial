import { headers } from "next/headers";
import ReleasePage, { type Release } from "../components/ReleasePage";

export const metadata = {
  title: { absolute: "A Velha Casa | DJ Dalma" },
  description: "Uma canção sobre os encontros, a amizade e as lembranças construídas no Casca I.",
  alternates: { canonical: "/musicas/a-velha-casa" },
  openGraph: {
    url: "/musicas/a-velha-casa",
    type: "music.song",
    title: "A Velha Casa | DJ Dalma",
    description: "Uma canção sobre os encontros, a amizade e as lembranças construídas no Casca I.",
    images: [{ url: "/musicas/images/a-velha-casa.jpg", width: 640, height: 640, alt: "Capa de A Velha Casa, de DJ Dalma" }],
  },
  twitter: { card: "summary_large_image", images: ["/musicas/images/a-velha-casa.jpg"] },
};

const spotifyAlbum = "https://open.spotify.com/intl-pt/album/45fIPcsI74zrZvIdaNDo5n";

const release: Release = {
  mark: "03",
  title: "A Velha Casa",
  kicker: "Casca I · amizade · memória",
  lead: "Uma canção que guarda os encontros na casa de Seu Romeu, no Casca I, e a amizade construída na lida das usinas.",
  image: "/musicas/images/a-velha-casa.jpg",
  imageAlt: "Capa oficial de A Velha Casa, de DJ Dalma",
  storyTitle: "A casa onde a amizade se encontrava.",
  story: [
    "Em “A Velha Casa”, o letrista recorda os encontros na casa de Seu Romeu, no Casca I. Depois da jornada nas usinas do Casca, funcionários se reuniam ali para prolongar a convivência em amizade.",
    "Havia partidas de truco, muita conversa, uma dose de cachaça e um pedaço de caju cortado — fruto típico da região. A composição devolve valor a esses gestos simples do cotidiano, que fizeram da casa um lugar de lembrança coletiva.",
  ],
  details: [
    { label: "Encontro", title: "A casa de Seu Romeu", text: "Um ponto de reunião no Casca I, onde a convivência seguia para além do horário de trabalho." },
    { label: "Amizade", title: "Construída na lida", text: "A canção reconhece os vínculos criados no dia a dia entre funcionários das usinas do Casca." },
    { label: "Memória", title: "Truco, cachaça e caju", text: "Conversas, jogo e sabores da região aparecem como marcas afetivas de uma época compartilhada." },
  ],
  themes: ["Casca I", "Amizade", "Trabalho", "Memória", "Caju"],
  listenHref: spotifyAlbum,
  listenLabel: "Ouvir no Spotify",
  spotifyHref: spotifyAlbum,
  listenLinks: [{ label: "Spotify", href: spotifyAlbum }],
  related: [
    { title: "Rio da Casca, Meu Chão", href: "rio-da-casca-meu-chao" },
    { title: "Joaquina de Mina", href: "joaquina-de-mina" },
  ],
};

export default async function Page() {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "").split(":")[0].toLowerCase();
  return <ReleasePage release={release} portalHref={host === "musicas.chapada.ia.br" ? "/" : "/musicas"} sharePath="/musicas/a-velha-casa" />;
}
