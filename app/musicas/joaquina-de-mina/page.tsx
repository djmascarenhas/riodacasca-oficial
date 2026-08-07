import { headers } from "next/headers";
import ReleasePage, { type Release } from "../components/ReleasePage";

export const metadata = {
  title: { absolute: "Joaquina de Mina | DJ Dalma" },
  description: "Uma canção sobre presença, memória e a força de Joaquina na história de Mato Grosso.",
  alternates: { canonical: "/joaquina-de-mina" },
  openGraph: { images: ["/musicas/images/rio-da-casca-meu-chao.png"] },
};

const release: Release = {
  mark: "04",
  title: "Joaquina de Mina",
  kicker: "Memória · presença · resistência",
  lead: "Uma composição que devolve centralidade à mulher cuja presença também sustenta a história de Valentim e do Rio da Casca.",
  image: "/musicas/images/rio-da-casca-meu-chao.png",
  imageAlt: "Paisagem do Rio da Casca usada como arte de apoio para Joaquina de Mina",
  storyTitle: "Uma história também se faz pela voz de Joaquina.",
  story: [
    "“Joaquina de Mina” amplia o universo de “Valentim há de Voltar” ao olhar para a personagem que dá profundidade humana à travessia, ao afeto e às raízes criadas no Rio da Casca.",
    "A página usa a paisagem do território como imagem de apoio enquanto a arte oficial da composição é organizada. O objetivo é apresentar a canção com contexto, respeito à memória e espaço para novas informações sobre a personagem.",
  ],
  details: [
    { label: "Presença", title: "Uma personagem no centro", text: "Joaquina não aparece apenas como parte da narrativa: sua presença ajuda a compreender a formação afetiva e social do território." },
    { label: "Memória", title: "Escutar outras perspectivas", text: "A composição convida a reconhecer histórias que muitas vezes foram contadas por um único ponto de vista." },
    { label: "Continuidade", title: "Uma canção que abre conversa", text: "O lançamento é também um convite para reunir lembranças, fontes e interpretações sobre Joaquina e o Rio da Casca." },
  ],
  themes: ["Joaquina", "Memória", "Resistência", "Rio da Casca"],
  listenHref: "https://open.spotify.com/artist/6BBDYGtCH719wJOuqq0vKk",
  listenLabel: "Ouvir DJ Dalma no Spotify",
  related: [{ title: "Valentim há de Voltar", href: "valentim-ha-de-voltar" }, { title: "Rio da Casca, Meu Chão", href: "rio-da-casca-meu-chao" }],
};

export default async function Page() {
  const requestHeaders = await headers();
  const host = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "").split(":")[0].toLowerCase();
  return <ReleasePage release={release} portalHref={host === "musicas.chapada.ia.br" ? "/" : "/musicas"} />;
}
