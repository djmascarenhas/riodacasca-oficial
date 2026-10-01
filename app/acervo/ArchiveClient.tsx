"use client";

import { useMemo, useState } from "react";
import type { ArticleRecord } from "../data/articles";

function normalized(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
}

export default function ArchiveClient({ articles }: { articles: ArticleRecord[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const categories = useMemo(() => ["Todos", ...Array.from(new Set(articles.map((article) => article.category))).sort()], [articles]);
  const visible = useMemo(() => {
    const term = normalized(query.trim());
    return articles.filter((article) => {
      const categoryMatches = category === "Todos" || article.category === category;
      const textMatches = !term || normalized(`${article.title} ${article.excerpt} ${article.year} ${article.category}`).includes(term);
      return categoryMatches && textMatches;
    });
  }, [articles, category, query]);

  return <>
    <section className="archive-toolbar" aria-label="Pesquisa e categorias do acervo">
      <label className="archive-search"><span>Pesquisar no acervo</span><input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Ex.: usina, comunidade, 1954…" /></label>
      <div className="archive-filters" role="group" aria-label="Filtrar por tema">{categories.map((item) => <button className={category === item ? "selected" : ""} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div>
      <small aria-live="polite">{visible.length} {visible.length === 1 ? "registro encontrado" : "registros encontrados"}</small>
    </section>
    <section className="archive-catalog"><div className="catalog-heading"><p className="section-index">01 — Catálogo histórico</p><h2>Registros para pesquisar.</h2><p>Os resumos preservam a trilha até a publicação original. A classificação editorial facilita a descoberta sem substituir a fonte.</p></div><div className="record-list">
      {visible.map((record) => <article key={record.id}><div className="record-meta"><span>RDC-{record.id}</span><span>{record.category}</span><span>{record.year}</span></div><div className="record-copy">{record.image && <img src={record.image} alt={record.imageAlt ?? ""} loading="lazy"/>}<div><h3>{record.title}</h3><p>{record.excerpt}</p></div></div><a href={`/acervo/${record.slug}`}><span>Ver registro</span><b>→</b></a></article>)}
      {!visible.length && <div className="archive-empty"><h3>Nenhum registro encontrado.</h3><p>Tente outra palavra ou selecione “Todos”.</p><button type="button" onClick={() => { setQuery(""); setCategory("Todos"); }}>Limpar pesquisa</button></div>}
    </div></section>
  </>;
}
