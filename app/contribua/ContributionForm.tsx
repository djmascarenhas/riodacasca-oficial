"use client";

import { FormEvent, useState } from "react";

export default function ContributionForm() {
  const [sent, setSent] = useState(false);

  function submitContribution(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Contribuição para o acervo — ${form.get("titulo")}`;
    const body = [
      `Nome: ${form.get("nome")}`,
      `Contato: ${form.get("contato")}`,
      `Tipo de material: ${form.get("tipo")}`,
      `Título ou identificação: ${form.get("titulo")}`,
      `Local relacionado: ${form.get("local")}`,
      `Data ou período: ${form.get("data") || "Não informado"}`,
      "",
      "Descrição:",
      String(form.get("descricao")),
      "",
      "Origem/autoria:",
      String(form.get("origem")),
      "",
      "Declaro que estas informações podem ser analisadas pela equipe do portal e que qualquer publicação dependerá de confirmação posterior.",
      "",
      "Se houver arquivos, vou anexá-los manualmente a este e-mail antes de enviar.",
    ].join("\n");
    setSent(true);
    window.location.href = `mailto:contato@riodacasca.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contribution-form" onSubmit={submitContribution}>
    <div className="field-grid"><label>Seu nome<input name="nome" autoComplete="name" required /></label><label>E-mail ou telefone<input name="contato" autoComplete="email" required /></label></div>
    <div className="field-grid"><label>Tipo de contribuição<select name="tipo" required defaultValue=""><option value="" disabled>Selecione</option><option>Fotografia</option><option>Documento</option><option>Mapa ou localização</option><option>Relato ou memória</option><option>Correção de informação</option><option>Outro material</option></select></label><label>Título ou identificação<input name="titulo" required placeholder="Ex.: Festa do Cascaju de 1985" /></label></div>
    <div className="field-grid"><label>Local relacionado<input name="local" required placeholder="Comunidade, fazenda, rio ou cachoeira" /></label><label>Data ou período<input name="data" placeholder="Ex.: década de 1970" /></label></div>
    <label>Conte a história deste material<textarea name="descricao" rows={6} required placeholder="Quem aparece? O que aconteceu? Por que este registro é importante?" /></label>
    <label>Origem, autoria e direitos<textarea name="origem" rows={4} required placeholder="Informe quem produziu ou guardou o material e se você possui autorização para compartilhá-lo." /></label>
    <div className="attachment-note"><strong>Arquivos e fotografias</strong><p>Ao concluir, seu aplicativo de e-mail será aberto com os dados organizados. Anexe os arquivos antes de enviar. Prefira imagens originais e não alteradas.</p></div>
    <label className="consent-field"><input type="checkbox" required /> <span>Autorizo a equipe do Rio da Casca a analisar estas informações e entrar em contato. Entendo que nada será publicado sem nova confirmação de contexto, autoria e direitos.</span></label>
    <button className="button" type="submit">Preparar contribuição</button>
    {sent && <p className="form-status" role="status">Seu aplicativo de e-mail foi aberto. Revise a mensagem, acrescente os anexos e envie.</p>}
  </form>;
}
