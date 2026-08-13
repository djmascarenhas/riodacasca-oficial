import { headers } from "next/headers";
import ReleasePage, { type Release } from "../components/ReleasePage";

export const metadata = { title: { absolute: "Rio da Casca, Meu Chão | DJ Dalma" }, description: "Memória, território e pertencimento em uma composição de DJ Dalma.", alternates: { canonical: "/musicas/rio-da-casca-meu-chao" }, openGraph: { url: "/musicas/rio-da-casca-meu-chao", type: "music.song", title: "Rio da Casca, Meu Chão | DJ Dalma", description: "Memória, território e pertencimento em uma composição de DJ Dalma.", images: [{ url: "/musicas/og/rio-da-casca-meu-chao.png", width: 1200, height: 630, alt: "Rio da Casca, Meu Chão, de DJ Dalma" }] }, twitter: { card: "summary_large_image", images: ["/musicas/og/rio-da-casca-meu-chao.png"] } };

const release: Release = {
  mark: "02",
  title: "Rio da Casca, Meu Chão",
  kicker: "Memória · território · pertencimento",
  lead: "Uma canção que transforma a paisagem do Rio da Casca em lugar de memória, identidade e afeto.",
  image: "/musicas/images/rio-da-casca-meu-chao.png",
  imageAlt: "Capa de Rio da Casca, Meu Chão, com cachoeira, construções históricas, sanfona e violão",
  storyTitle: "Um território que também se escuta.",
  story: ["“Rio da Casca, Meu Chão” nasce da relação entre paisagem e pertencimento. A composição apresenta o território não apenas como cenário, mas como parte da identidade de quem guarda suas histórias.", "A arte do lançamento reúne a força da cachoeira, referências ao patrimônio construído e instrumentos ligados à canção brasileira. É um encontro entre água, trabalho, lembrança e continuidade."],
  details: [{ label: "Paisagem", title: "A água como memória", text: "O curso do rio conecta lugares, acontecimentos e gerações em uma mesma narrativa territorial." }, { label: "Patrimônio", title: "Marcas do tempo", text: "Construções e caminhos históricos aparecem como sinais de uma paisagem transformada pelo trabalho humano." }, { label: "Pertencimento", title: "Um chão para chamar de seu", text: "A canção celebra a ligação afetiva com o lugar e a responsabilidade de preservar sua memória." }],
  themes: ["Rio da Casca", "Pertencimento", "Paisagem", "Memória"],
  listenHref: "https://somvibe.lnk.to/ab43529",
  listenLabel: "Ouvir no Smartlink Somvibe",
  listenLinks: [{ label: "Smartlink Somvibe", href: "https://somvibe.lnk.to/ab43529" }, { label: "Apple Music", href: "https://music.apple.com/br/album/rio-da-casca-meu-ch%C3%A3o/6789545608?i=6789545740" }],
  related: [{ title: "Valentim há de Voltar", href: "valentim-ha-de-voltar" }, { title: "Pedra Rara", href: "pedra-rara" }],
};

export default async function Page() { const requestHeaders = await headers(); const host = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "").split(":")[0].toLowerCase(); return <ReleasePage release={release} portalHref={host === "musicas.chapada.ia.br" ? "/" : "/musicas"} />; }
