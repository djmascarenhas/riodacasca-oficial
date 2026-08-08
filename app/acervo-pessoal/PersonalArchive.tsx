"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

type RecordStatus = "Em triagem" | "Catalogada" | "A confirmar";
type PhotoRecord = {
  id: string;
  title: string;
  photoUrl: string;
  year: string;
  location: string;
  people: string[];
  description: string;
  tags: string[];
  status: RecordStatus;
  addedAt: string;
};

type FormData = Omit<PhotoRecord, "id" | "addedAt" | "people" | "tags"> & { people: string; tags: string };

const storageKey = "rio-da-casca:acervo-pessoal:v1";
const ddAlbumUrl = "https://photos.google.com/album/AF1QipNck8X98YLBWNk35eObQvUmxJF1RZBt1qnruFOp";
const emptyForm: FormData = { title: "", photoUrl: "", year: "", location: "", people: "", description: "", tags: "", status: "Em triagem" };

function splitTerms(value: string) {
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function matches(record: PhotoRecord, term: string) {
  return !term || [record.title, record.year, record.location, record.description, ...record.people, ...record.tags]
    .join(" ").toLocaleLowerCase("pt-BR").includes(term.toLocaleLowerCase("pt-BR"));
}

export default function PersonalArchive() {
  const [records, setRecords] = useState<PhotoRecord[]>([]);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [person, setPerson] = useState("");
  const [notice, setNotice] = useState("Os registros ficam salvos neste navegador até você exportar ou configurar a base permanente.");

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) return;
    try { setRecords(JSON.parse(saved) as PhotoRecord[]); } catch { setNotice("Não foi possível ler a cópia local anterior."); }
  }, []);

  useEffect(() => { window.localStorage.setItem(storageKey, JSON.stringify(records)); }, [records]);

  const years = useMemo(() => [...new Set(records.map((record) => record.year).filter(Boolean))].sort(), [records]);
  const locations = useMemo(() => [...new Set(records.map((record) => record.location).filter(Boolean))].sort(), [records]);
  const people = useMemo(() => [...new Set(records.flatMap((record) => record.people))].sort(), [records]);
  const results = useMemo(() => records.filter((record) => matches(record, query) && (!year || record.year === year) && (!location || record.location === location) && (!person || record.people.includes(person))), [records, query, year, location, person]);

  function updateForm(key: keyof FormData, value: string) { setForm((current) => ({ ...current, [key]: value })); }

  function saveRecord(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.title.trim() || !form.photoUrl.trim()) { setNotice("Informe ao menos um título e o link da foto no Google Fotos."); return; }
    const record: PhotoRecord = { id: crypto.randomUUID(), title: form.title.trim(), photoUrl: form.photoUrl.trim(), year: form.year.trim(), location: form.location.trim(), people: splitTerms(form.people), description: form.description.trim(), tags: splitTerms(form.tags), status: form.status, addedAt: new Date().toISOString() };
    setRecords((current) => [record, ...current]);
    setForm(emptyForm);
    setNotice("Ficha adicionada. Ela já pode ser encontrada por ano, local e pessoas.");
  }

  function exportRecords() {
    const file = new Blob([JSON.stringify(records, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "acervo-pessoal-rio-da-casca.json";
    link.click();
    URL.revokeObjectURL(link.href);
    setNotice("Foi baixada uma cópia de segurança do catálogo.");
  }

  function importRecords(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(String(reader.result)) as PhotoRecord[];
        if (!Array.isArray(imported)) throw new Error("Formato inválido");
        setRecords(imported);
        setNotice(`${imported.length} ficha(s) restaurada(s) no catálogo.`);
      } catch { setNotice("Esse arquivo não parece ser uma cópia válida do catálogo."); }
    };
    reader.readAsText(file);
    event.target.value = "";
  }

  return <>
    <section className="private-hero">
      <div><p className="eyebrow">Acervo de DD · Djalma Mascarenhas</p><h1>Fotos com<br/><em>memória.</em></h1></div>
      <div className="private-intro"><p>Uma biblioteca de trabalho para identificar as fotografias do Google Fotos antes de qualquer seleção pública.</p><a href={ddAlbumUrl} target="_blank" rel="noreferrer">Abrir álbum “DD” no Google Fotos <span>↗</span></a></div>
    </section>

    <section className="private-guide"><strong>Como catalogar</strong><p>Abra uma foto no Google Fotos, copie o link individual e registre o que souber. Campos em branco ficam marcados para pesquisa posterior.</p><span>Origem inicial: álbum DD · 217 itens · 2008–2025</span></section>

    <section className="private-workspace">
      <form className="record-form" onSubmit={saveRecord}>
        <div className="form-heading"><p className="section-index">01 — Nova ficha</p><h2>Catalogar uma foto</h2></div>
        <label>Título ou identificação<input value={form.title} onChange={(event) => updateForm("title", event.target.value)} placeholder="Ex.: Djalma na reunião da escola" required /></label>
        <label>Link individual no Google Fotos<input type="url" value={form.photoUrl} onChange={(event) => updateForm("photoUrl", event.target.value)} placeholder="https://photos.google.com/..." required /></label>
        <div className="form-grid"><label>Ano<input inputMode="numeric" value={form.year} onChange={(event) => updateForm("year", event.target.value)} placeholder="Ex.: 1988" /></label><label>Local<input value={form.location} onChange={(event) => updateForm("location", event.target.value)} placeholder="Ex.: Rio da Casca" /></label></div>
        <label>Pessoas retratadas<input value={form.people} onChange={(event) => updateForm("people", event.target.value)} placeholder="Separe os nomes por vírgula" /></label>
        <label>Descrição<textarea value={form.description} onChange={(event) => updateForm("description", event.target.value)} placeholder="O que aparece na imagem? Que história ela guarda?" rows={4} /></label>
        <div className="form-grid"><label>Palavras-chave<input value={form.tags} onChange={(event) => updateForm("tags", event.target.value)} placeholder="família, trabalho, retrato" /></label><label>Situação<select value={form.status} onChange={(event) => updateForm("status", event.target.value)}><option>Em triagem</option><option>Catalogada</option><option>A confirmar</option></select></label></div>
        <button className="button" type="submit">Salvar ficha</button>
      </form>

      <aside className="private-side"><p className="section-index">02 — Cópia de segurança</p><h2>O catálogo é seu.</h2><p>Enquanto a base permanente não estiver conectada, cada ficha é salva somente neste navegador. Exporte a cópia ao fim de cada sessão de trabalho.</p><button className="text-button" type="button" onClick={exportRecords}>Baixar cópia JSON</button><label className="text-button upload-button">Restaurar cópia<input type="file" accept="application/json" onChange={importRecords} /></label><p className="private-notice" aria-live="polite">{notice}</p></aside>
    </section>

    <section className="private-search">
      <div><p className="section-index">03 — Pesquisa</p><h2>Encontrar para lembrar.</h2></div>
      <div className="search-controls"><label>Texto livre<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Assunto, detalhe ou palavra-chave" /></label><label>Ano<select value={year} onChange={(event) => setYear(event.target.value)}><option value="">Todos</option>{years.map((item) => <option key={item}>{item}</option>)}</select></label><label>Local<select value={location} onChange={(event) => setLocation(event.target.value)}><option value="">Todos</option>{locations.map((item) => <option key={item}>{item}</option>)}</select></label><label>Pessoa<select value={person} onChange={(event) => setPerson(event.target.value)}><option value="">Todas</option>{people.map((item) => <option key={item}>{item}</option>)}</select></label></div>
      <p className="result-count">{results.length} {results.length === 1 ? "ficha encontrada" : "fichas encontradas"}</p>
      <div className="photo-records">{results.map((record) => <article key={record.id}><div className="record-placeholder"><span>{record.year || "?"}</span><small>Google Fotos</small></div><div><p className="record-status">{record.status}</p><h3>{record.title}</h3><dl><div><dt>Local</dt><dd>{record.location || "A identificar"}</dd></div><div><dt>Pessoas</dt><dd>{record.people.join(", ") || "A identificar"}</dd></div></dl>{record.description && <p>{record.description}</p>}{record.tags.length > 0 && <ul>{record.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}<a href={record.photoUrl} target="_blank" rel="noreferrer">Abrir foto original <span>↗</span></a></div></article>)}{results.length === 0 && <div className="empty-records"><h3>Ainda não há fichas neste filtro.</h3><p>Comece pela primeira foto do álbum DD e registre o que já sabe.</p></div>}</div>
    </section>
  </>;
}
