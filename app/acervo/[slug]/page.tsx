import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { articles } from "../../data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function Registro({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.category === article.category && item.id !== article.id).slice(0, 3);
  return <main>
    <SiteHeader active="acervo" />
    <article className="record-page">
      <Link className="record-back" href="/acervo">← Voltar ao acervo</Link>
      <header><p className="eyebrow">{article.category} · {article.year} · RDC-{article.id}</p><h1>{article.title}</h1></header>
      {article.image && <figure><img src={article.image} alt={article.imageAlt ?? ""}/><figcaption>Imagem vinculada à publicação original do acervo Rio da Casca.</figcaption></figure>}
      <div className="record-page-copy"><p>{article.excerpt}</p><aside><strong>Sobre este registro</strong><p>Esta ficha organiza o índice do acervo. Para ler o texto integral, conferir créditos e consultar o contexto original, use o link abaixo.</p><a className="button" href={article.sourceUrl} target="_blank" rel="noreferrer">Abrir publicação original ↗</a></aside></div>
    </article>
    {related.length > 0 && <section className="record-related"><p className="section-index">Outros registros de {article.category}</p>{related.map((item) => <a href={`/acervo/${item.slug}`} key={item.id}><span>{item.year}</span><strong>{item.title}</strong><b>→</b></a>)}</section>}
    <SiteFooter />
  </main>;
}
