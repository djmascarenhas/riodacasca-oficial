"use client";

import { FormEvent, useState } from "react";

export default function ContributionForm() {
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Nome: ${data.get("name")}`,
      `E-mail: ${data.get("email")}`,
      `Tipo de contribuição: ${data.get("type")}`,
      `Título ou identificação: ${data.get("title")}`,
      `Data aproximada: ${data.get("date") || "Não informada"}`,
      `Local: ${data.get("place") || "Não informado"}`,
      `Link autorizado: ${data.get("link") || "Não informado"}`,
      "",
      "Descrição:",
      String(data.get("story")),
      "",
      "Declaro que posso compartilhar estas informações e compreendo que a publicação dependerá de confirmação posterior.",
    ].join("\n");
    setMessage("Mensagem preparada. Seu aplicativo de e-mail será aberto para você revisar e enviar.");
    window.location.href = `mailto:contato@riodacasca.com.br?subject=${encodeURIComponent(`Contribuição ao acervo — ${data.get("title")}`)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contribution-form" onSubmit={submit}>
    <p className="section-index">Formulário de contato</p>
    <div className="field-row"><label>Seu nome<input name="name" autoComplete="name" required /></label><label>Seu e-mail<input name="email" type="email" autoComplete="email" required /></label></div>
    <label>Tipo de contribuição<select name="type" required defaultValue=""><option value="" disabled>Selecione</option><option>Fotografia</option><option>Documento</option><option>Relato ou memória</option><option>Correção ou identificação</option><option>Lugar ou atrativo</option><option>Outro</option></select></label>
    <label>Título ou identificação<input name="title" required placeholder="Ex.: fotografia da Usina Casca II" /></label>
    <div className="field-row"><label>Data aproximada<input name="date" placeholder="Ex.: década de 1950" /></label><label>Local<input name="place" placeholder="Comunidade ou ponto de referência" /></label></div>
    <label>Conte a história<textarea name="story" required rows={7} placeholder="Quem aparece, o que aconteceu, de onde veio o material…" /></label>
    <label>Link autorizado para o arquivo <span>(opcional)</span><input name="link" type="url" placeholder="https://…" /></label>
    <label className="rights-check"><input name="rights" type="checkbox" required /><span>Posso compartilhar estas informações e entendo que a publicação dependerá de confirmação de autoria, contexto e autorização.</span></label>
    <button className="button" type="submit">Preparar mensagem por e-mail</button>
    {message && <p className="form-message" role="status">{message}</p>}
    <noscript>Para contribuir, envie uma mensagem para contato@riodacasca.com.br.</noscript>
  </form>;
}
