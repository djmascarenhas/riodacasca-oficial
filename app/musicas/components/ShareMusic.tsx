"use client";

import { useState } from "react";

export default function ShareMusic({ title, path }: { title: string; path: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://riodacasca.chapada.ia.br${path}`;
  const text = `Ouça “${title}”, de DJ Dalma.`;

  async function share() {
    if (navigator.share) {
      await navigator.share({ title, text, url });
      return;
    }
    await copy();
  }

  async function copy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return <div className="music-share" aria-label={`Compartilhar ${title}`}>
    <span>Compartilhe esta música</span>
    <div className="music-share-actions">
      <button type="button" className="share-native" onClick={share}>Compartilhar <span aria-hidden="true">↗</span></button>
      <a href={`https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`} target="_blank" rel="noreferrer">WhatsApp</a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">Facebook</a>
      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer">X</a>
      <button type="button" onClick={copy}>{copied ? "Link copiado" : "Copiar link"}</button>
    </div>
  </div>;
}
