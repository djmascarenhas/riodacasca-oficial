"use client";

import { useEffect, useState } from "react";

const slides = [
  { number: "01", title: "Valentim há de Voltar", detail: "Uma história de Mato Grosso", image: "/musicas/og/valentim-ha-de-voltar.png", href: "valentim-ha-de-voltar" },
  { number: "02", title: "Rio da Casca, Meu Chão", detail: "Memória, território e pertencimento", image: "/musicas/og/rio-da-casca-meu-chao.png", href: "rio-da-casca-meu-chao" },
  { number: "03", title: "Pedra Rara", detail: "Trabalho, busca e descoberta", image: "/musicas/og/pedra-rara.png", href: "pedra-rara" },
  { number: "04", title: "Joaquina de Mina", detail: "Memória, presença e resistência", image: "/musicas/og/joaquina-de-mina.png", href: "joaquina-de-mina" },
];

export default function FeaturedCarousel({ portalBase }: { portalBase: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];
  return <section className="featured-carousel" aria-label="Composições em destaque">
    <div className="featured-carousel-art" style={{ backgroundImage: `url('${slide.image}')` }} />
    <div className="featured-carousel-shade" />
    <div className="featured-carousel-copy">
      <p className="eyebrow">Em destaque · {slide.number}</p>
      <h2>{slide.title}</h2>
      <p>{slide.detail}</p>
      <a className="button button-light" href={`${portalBase}/${slide.href}`}>Conhecer e ouvir <span aria-hidden="true">→</span></a>
    </div>
    <div className="featured-carousel-controls" role="tablist" aria-label="Escolha uma composição em destaque">
      {slides.map((item, index) => <button key={item.href} type="button" role="tab" aria-selected={index === active} aria-label={`Mostrar ${item.title}`} className={index === active ? "is-active" : ""} onClick={() => setActive(index)}><span>{item.number}</span>{item.title}</button>)}
    </div>
  </section>;
}
