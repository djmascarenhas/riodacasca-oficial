import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { archiveRecords } from "@/app/data/archive";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return archiveRecords.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const record = archiveRecords.find((item) => item.slug === slug);
  if (!record) return {};
  return {
    title: record.title,
    description: record.summary,
    alternates: { canonical: `/acervo/${record.slug}` },
    openGraph: { title: `${record.title} | Acervo Rio da Casca`, description: record.summary, url: `/acervo/${record.slug}` },
  };
}

export default async function ArchiveRecordPage({ params }: Props) {
  const { slug } = await params;
  const record = archiveRecords.find((item) => item.slug === slug);
  if (!record) notFound();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: record.title,
    description: record.summary,
    dateCreated: record.year,
    spatialCoverage: record.location,
    isBasedOn: record.sourceUrl,
    identifier: record.code,
  };

  return <main className="record-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header className="topbar archive-topbar"><a className="brand" href="/"><span className="brand-mark">RC</span><span>Rio da Casca<small>memória do território</small></span></a><nav aria-label="Navegação principal"><a href="/historia">História</a><a href="/territorio">Território</a><a href="/comunidade">Comunidade</a><a href="/acervo">Acervo</a><a href="https://musicas.chapada.ia.br/">Músicas</a></nav><a className="menu-link" href="/acervo">Voltar ao acervo <span>↗</span></a></header>
    <article className="record-detail"><p className="eyebrow">{record.code} · {record.type}</p><h1>{record.title}</h1>{record.image && <figure className="record-image"><Image src={record.image.src} alt={record.image.alt} width={1400} height={900} priority/><figcaption>{record.image.credit}</figcaption></figure>}<p className="record-lead">{record.summary}</p><dl><div><dt>Data ou período</dt><dd>{record.year}</dd></div><div><dt>Local relacionado</dt><dd>{record.location}</dd></div>{record.collection && <div><dt>Coleção</dt><dd>{record.collection}</dd></div>}<div><dt>Estado da informação</dt><dd>{record.status}</dd></div><div><dt>Fonte responsável</dt><dd>{record.source}</dd></div><div><dt>Última revisão</dt><dd>{record.reviewedAt}</dd></div></dl><div className="record-actions"><a className="button" href={record.sourceUrl} target="_blank" rel="noreferrer">Consultar fonte original ↗</a><a className="text-link" href="/contribua">Acrescentar informação →</a></div></article>
    <section className="record-note"><p className="section-index">Transparência editorial</p><h2>O que este registro representa.</h2><p>Esta página descreve e contextualiza uma fonte pública. O documento original permanece sob responsabilidade da instituição indicada. Correções e informações adicionais podem ser enviadas para análise.</p><a href="/metodologia">Conheça nossa metodologia →</a></section>
  </main>;
}
