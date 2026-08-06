export type ArchiveRecord = {
  slug: string;
  code: string;
  type: "Fotografia" | "Documento" | "Localização" | "Evento" | "Comunidade";
  category: "Fotografias" | "Documentos" | "Mapas" | "Eventos" | "Relatos";
  year: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string;
  location: string;
  status: "Fonte institucional" | "Em pesquisa";
  reviewedAt: string;
};

export const archiveRecords: ArchiveRecord[] = [
  {
    slug: "usina-hidreletrica-rio-da-casca",
    code: "FOT-001",
    type: "Fotografia",
    category: "Fotografias",
    year: "Século XX",
    title: "Usina Hidrelétrica do Rio da Casca",
    summary: "Registro fotográfico em preto e branco das obras da Usina Rio da Casca III, preservado no acervo dos municípios brasileiros.",
    source: "IBGE Biblioteca",
    sourceUrl: "https://biblioteca.ibge.gov.br/index.php/biblioteca-catalogo?id=441551&view=detalhes",
    location: "Rio da Casca, Chapada dos Guimarães — MT",
    status: "Fonte institucional",
    reviewedAt: "6 de agosto de 2026",
  },
  {
    slug: "criacao-estacao-ecologica",
    code: "DOC-001",
    type: "Documento",
    category: "Documentos",
    year: "1994",
    title: "Criação da Estação Ecológica",
    summary: "Referência à Lei estadual nº 6.437, que criou a Estação Ecológica do Rio da Casca em dois perímetros de proteção.",
    source: "Plano Diretor Municipal",
    sourceUrl: "https://www.chapadadosguimaraes.mt.gov.br/fotos_documentos_downloads/6067.pdf",
    location: "Chapada dos Guimarães — MT",
    status: "Fonte institucional",
    reviewedAt: "6 de agosto de 2026",
  },
  {
    slug: "cachoeira-casca-martinha",
    code: "MAP-001",
    type: "Localização",
    category: "Mapas",
    year: "Atual",
    title: "Cachoeira do Casca / Martinha",
    summary: "Descrição pública do atrativo, distância desde o centro de Chapada, coordenadas e ligação para localização.",
    source: "Prefeitura de Chapada",
    sourceUrl: "https://www.chapadadosguimaraes.mt.gov.br/Turismo/Atrativos-Turistico/39/",
    location: "Rodovia MT-251, Chapada dos Guimarães — MT",
    status: "Fonte institucional",
    reviewedAt: "6 de agosto de 2026",
  },
  {
    slug: "cachoeira-pedra-furada",
    code: "MAP-002",
    type: "Localização",
    category: "Mapas",
    year: "Atual",
    title: "Cachoeira da Pedra Furada",
    summary: "Registro municipal da cachoeira situada na comunidade do Rio da Casca, com orientação geral de acesso e coordenadas.",
    source: "Prefeitura de Chapada",
    sourceUrl: "https://www.chapadadosguimaraes.mt.gov.br/Turismo/Atrativos-Turistico/40/",
    location: "Comunidade do Rio da Casca — MT",
    status: "Fonte institucional",
    reviewedAt: "6 de agosto de 2026",
  },
  {
    slug: "festa-do-cascaju-2025",
    code: "EVE-001",
    type: "Evento",
    category: "Eventos",
    year: "2025",
    title: "22ª Festa do Cascaju",
    summary: "Registro da celebração organizada pela comunidade, reunindo cultura, gastronomia, economia local e integração.",
    source: "Prefeitura de Chapada",
    sourceUrl: "https://www.chapadadosguimaraes.mt.gov.br/Noticias/Chapada-dos-guimaraes-celebra-a-tradicao-e-a-cultura-local-na-22-festa-do-cascaju-2758/",
    location: "Comunidade do Rio da Casca — MT",
    status: "Fonte institucional",
    reviewedAt: "6 de agosto de 2026",
  },
  {
    slug: "apoio-agricultura-familiar",
    code: "COM-001",
    type: "Comunidade",
    category: "Relatos",
    year: "2023",
    title: "Apoio à agricultura familiar",
    summary: "Registro da entrega de estruturas para feiras à Associação de Moradores e Produtores da Comunidade Rio da Casca.",
    source: "Prefeitura de Chapada",
    sourceUrl: "https://www.chapadadosguimaraes.mt.gov.br/Noticias/Seaf-mt-entrega-ao-rio-da-casca-05--unidades-de-tendas-de-feira-1946/",
    location: "Comunidade do Rio da Casca — MT",
    status: "Fonte institucional",
    reviewedAt: "6 de agosto de 2026",
  },
];

export const archiveCategories = ["Todos", "Fotografias", "Documentos", "Mapas", "Eventos", "Relatos"] as const;
