"use client";

import { useMemo, useState } from "react";
import { archiveCategories, archiveRecords } from "@/app/data/archive";

export default function ArchiveExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof archiveCategories)[number]>("Todos");
  const normalizedQuery = query.trim().toLocaleLowerCase("pt-BR");
  const records = useMemo(() => archiveRecords.filter((record) => {
    const categoryMatches = category === "Todos" || record.category === category;
    const queryMatches = !normalizedQuery || [record.title, record.summary, record.type, record.year, record.location]
      .join(" ")
      .toLocaleLowerCase("pt-BR")
      .includes(normalizedQuery);
    return categoryMatches && queryMatches;
  }), [category, normalizedQuery]);

  return <>
    <section className="archive-toolbar" aria-label="Pesquisa e categorias do acervo">
      <label className="archive-search"><span>Pesquisar no acervo</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Lugar, assunto ou data" /></label>
      <div className="archive-filters" aria-label="Filtrar por categoria">{archiveCategories.map((item) => <button className={category === item ? "selected" : ""} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div>
      <small aria-live="polite">{records.length} {records.length === 1 ? "registro encontrado" : "registros encontrados"}</small>
    </section>
    <section className="archive-catalog"><div className="catalog-heading"><p className="section-index">01 — Catálogo inicial</p><h2>Registros de referência.</h2><p>Cada item apresenta sua origem, estado de verificação e ligação para a instituição que mantém o documento original.</p></div><div className="record-list">{records.map((record) => <article key={record.code}><div className="record-meta"><span>{record.code}</span><span>{record.type}</span><span>{record.year}</span></div><div className="record-copy"><span className="record-status">{record.status}</span><h3>{record.title}</h3><p>{record.summary}</p></div><a href={`/acervo/${record.slug}`}><span>Ver registro</span><b>→</b></a></article>)}{records.length === 0 && <div className="archive-empty"><h3>Nenhum registro encontrado.</h3><p>Tente outro termo ou selecione “Todos”.</p></div>}</div></section>
  </>;
}
