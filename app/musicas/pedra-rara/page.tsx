import { headers } from "next/headers";
import ReleasePage, { type Release } from "../components/ReleasePage";

export const metadata = { title: { absolute: "Pedra Rara | DJ Dalma" }, description: "Trabalho, busca e descoberta em uma composição de DJ Dalma.", alternates: { canonical: "/pedra-rara" }, openGraph: { images: ["/musicas/images/pedra-rara.png"] } };

const release: Release = {
  mark: "03",
  title: "Pedra Rara",
  kicker: "Trabalho · busca · descoberta",
  lead: "Uma composição sobre aquilo que exige tempo, atenção e persistência até revelar seu verdadeiro valor.",
  image: "/musicas/images/pedra-rara.png",
  imageAlt: "Capa de Pedra Rara, com um garimpeiro segurando uma peneira junto ao rio",
  storyTitle: "O valor escondido no caminho.",
  story: ["“Pedra Rara” aproxima busca e descoberta. A imagem do garimpo funciona como uma linguagem visual para o trabalho paciente de reconhecer o que tem valor em meio ao tempo e à matéria.", "Na capa, o rio, a peneira e a luz concentrada na pedra constroem uma atmosfera de persistência. A página preserva essa identidade sem substituir pela ficção o contexto que ainda será ampliado pelo autor."],
  details: [{ label: "Busca", title: "Olhar com atenção", text: "O que é raro nem sempre aparece de imediato; é preciso tempo para distinguir e reconhecer." }, { label: "Trabalho", title: "Persistência e ofício", text: "A imagem do garimpeiro destaca o gesto repetido, a experiência e a relação direta com o rio." }, { label: "Descoberta", title: "O brilho encontrado", text: "A pedra iluminada concentra o instante em que esforço, memória e valor finalmente se encontram." }],
  themes: ["Garimpo", "Persistência", "Descoberta", "Memória"],
  listenHref: "https://somvibe.lnk.to/sg545264",
  listenLabel: "Ouvir no Smartlink Somvibe",
  listenLinks: [{ label: "Smartlink Somvibe", href: "https://somvibe.lnk.to/sg545264" }, { label: "Spotify", href: "https://open.spotify.com/track/4Tes1U92U6cQ0oiowHkw64" }],
  related: [{ title: "Valentim há de Voltar", href: "valentim-ha-de-voltar" }, { title: "Rio da Casca, Meu Chão", href: "rio-da-casca-meu-chao" }],
};

export default async function Page() { const requestHeaders = await headers(); const host = (requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "").split(":")[0].toLowerCase(); return <ReleasePage release={release} portalHref={host === "musicas.chapada.ia.br" ? "/" : "/musicas"} />; }
