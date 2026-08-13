import { headers } from "next/headers";
import ReleasePage, { type Release } from "../components/ReleasePage";

export const metadata = {
  title: { absolute: "Joaquina de Mina | DJ Dalma" },
  description: "Uma canção sobre presença, memória e a força de Joaquina na história de Mato Grosso.",
  alternates: { canonical: "/musicas/joaquina-de-mina" },
  openGraph: { url: "/musicas/joaquina-de-mina", type: "music.song", title: "Joaquina de Mina | DJ Dalma", description: "Uma canção sobre presença, memória e a força de Joaquina na história de Mato Grosso.", images: [{ url: "/musicas/og/joaquina-de-mina.png", width: 1200, height: 630, alt: "Joaquina de Mina, de DJ Dalma" }] },
  twitter: { card: "summary_large_image", images: ["/musicas/og/joaquina-de-mina.png"] },
};

const release: Release = {
  mark: "04",
  title: "Joaquina de Mina",
  kicker: "Memória · presença · resistência",
  lead: "Uma composição que devolve centralidade à mulher cuja presença também sustenta a história de Valentim e do Rio da Casca.",
  image: "/musicas/images/joaquina-de-mina.png",
  imageAlt: "Capa de Joaquina de Mina, com uma mulher negra trabalhando em um pilão, entre cestos e utensílios de uma casa de farinha",
  storyTitle: "Uma história também se faz pela voz de Joaquina.",
  story: [
    "“Joaquina de Mina” amplia o universo de “Valentim há de Voltar” ao olhar para a personagem que dá profundidade humana à travessia, ao afeto e às raízes criadas no Rio da Casca.",
    "A capa apresenta Joaquina em seu espaço de trabalho, entre cestos, raízes e utensílios de uma casa de farinha. A imagem aproxima a canção do cotidiano, do ofício e da força de uma mulher que sustenta a memória do território.",
  ],
  details: [
    { label: "Presença", title: "Uma personagem no centro", text: "Joaquina não aparece apenas como parte da narrativa: sua presença ajuda a compreender a formação afetiva e social do território." },
    { label: "Memória", title: "Escutar outras perspectivas", text: "A composição convida a reconhecer histórias que muitas vezes foram contadas por um único ponto de vista." },
    { label: "Continuidade", title: "Uma canção que abre conversa", text: "O lançamento é também um convite para reunir lembranças, fontes e interpretações sobre Joaquina e o Rio da Casca." },
  ],
  themes: ["Joaquina", "Memória", "Resistência", "Rio da Casca"],
  listenHref: "https://somvibe.lnk.to/60OkDeVy",
  listenLabel: "Ouvir no Smartlink Somvibe",
  listenLinks: [{ label: "Smartlink Somvibe", href: "https://somvibe.lnk.to/60OkDeVy" }, { label: "Spotify", href: "https://open.spotify.com/intl-pt/track/4334raXNzJesn8WDJT2rYD" }],
  related: [{ title: "Valentim há de Voltar", href: "valentim-ha-de-voltar" }, { title: "Rio da Casca, Meu Chão", href: "rio-da-casca-meu-chao" }],
};

export default async function Page() {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "").split(":")[0].toLowerCase();
  return <ReleasePage release={release} portalHref={host === "musicas.chapada.ia.br" ? "/" : "/musicas"} />;
}
