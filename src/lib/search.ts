import { blogPosts } from "@/lib/blog-data";
import { projects, projectCategories } from "@/lib/project-data-v2";

export interface SearchSuggestion {
  id: string;
  title: string;
  description: string;
  path: string;
  type: "page" | "project" | "category" | "blog";
  keywords: string[];
}

const staticPages: SearchSuggestion[] = [
  {
    id: "page-home",
    title: "Home",
    description: "Visao geral da MBarros, estrutura industrial e destaques da marca.",
    path: "/",
    type: "page",
    keywords: ["inicio", "pagina inicial", "mbarros", "industria"],
  },
  {
    id: "page-sobre",
    title: "Sobre a Industria",
    description: "Historia, estrutura fabril, equipe e posicionamento da MBarros.",
    path: "/sobre",
    type: "page",
    keywords: ["sobre", "historia", "estrutura", "empresa", "pernambuco"],
  },
  {
    id: "page-white-label",
    title: "White Label",
    description: "Modelo de parceria industrial para lojistas e marcas de moveis planejados.",
    path: "/white-label",
    type: "page",
    keywords: ["white label", "mdf", "mdp", "laca", "aluminio", "vidro"],
  },
  {
    id: "page-projetos",
    title: "Projetos",
    description: "Portfolio com ambientes residenciais, corporativos e especiais.",
    path: "/projetos",
    type: "page",
    keywords: ["portfolio", "cozinha", "quarto", "escritorio", "moveis"],
  },
  {
    id: "page-blog",
    title: "Blog",
    description: "Conteudos, tendencias e insights sobre moveis planejados e mercado.",
    path: "/blog",
    type: "page",
    keywords: ["blog", "artigos", "conteudo", "tendencias", "insights"],
  },
  {
    id: "page-contato",
    title: "Contato",
    description: "Fale com a equipe comercial da MBarros e envie sua mensagem.",
    path: "/contato",
    type: "page",
    keywords: ["contato", "telefone", "email", "endereco", "fale conosco"],
  },
  {
    id: "page-parceiro",
    title: "Seja um Parceiro",
    description: "Cadastro para lojistas interessados em crescer com estrutura industrial.",
    path: "/seja-parceiro",
    type: "page",
    keywords: ["parceiro", "lojista", "cadastro", "comercial", "franquia"],
  },
  {
    id: "page-carreiras",
    title: "Trabalhe Conosco",
    description: "Vagas, carreiras e envio de curriculo para a equipe MBarros.",
    path: "/trabalhe-conosco",
    type: "page",
    keywords: ["vagas", "trabalho", "carreira", "curriculo", "rh"],
  },
];

const categorySuggestions: SearchSuggestion[] = projectCategories
  .filter((category) => category.id !== "todos")
  .map((category) => ({
    id: `category-${category.id}`,
    title: category.label,
    description: `Projetos da categoria ${category.label.toLowerCase()}.`,
    path: `/projetos?categoria=${category.id}`,
    type: "category" as const,
    keywords: [category.label, category.id, "portfolio", "projetos"],
  }));

const projectSuggestions: SearchSuggestion[] = projects.map((project) => ({
  id: `project-${project.id}`,
  title: project.title,
  description: project.description,
  path: `/projetos?categoria=${project.category}&s=${encodeURIComponent(project.title)}`,
  type: "project" as const,
  keywords: [project.category, project.title, project.description],
}));

const blogSuggestions: SearchSuggestion[] = blogPosts.map((post) => ({
  id: `blog-${post.id}`,
  title: post.title,
  description: post.excerpt,
  path: `/blog/${post.slug}`,
  type: "blog" as const,
  keywords: [post.category, post.title, post.excerpt],
}));

const SEARCH_ENTRIES: SearchSuggestion[] = [
  ...staticPages,
  ...categorySuggestions,
  ...projectSuggestions,
  ...blogSuggestions,
];

const DEFAULT_SUGGESTION_IDS = [
  "page-projetos",
  "page-white-label",
  "page-blog",
  "page-contato",
  "category-residenciais",
  "category-corporativos",
];

export function normalizeSearchQuery(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function scoreSuggestion(entry: SearchSuggestion, normalizedQuery: string) {
  const normalizedTitle = normalizeSearchQuery(entry.title);
  const normalizedDescription = normalizeSearchQuery(entry.description);
  const normalizedKeywords = entry.keywords.map(normalizeSearchQuery);

  let score = 0;

  if (normalizedTitle === normalizedQuery) score += 120;
  if (normalizedKeywords.includes(normalizedQuery)) score += 100;
  if (normalizedTitle.startsWith(normalizedQuery)) score += 80;
  if (normalizedKeywords.some((keyword) => keyword.startsWith(normalizedQuery))) score += 60;
  if (normalizedTitle.includes(normalizedQuery)) score += 40;
  if (normalizedDescription.includes(normalizedQuery)) score += 20;
  if (normalizedKeywords.some((keyword) => keyword.includes(normalizedQuery))) score += 15;

  return score;
}

export function getDefaultSuggestions() {
  return DEFAULT_SUGGESTION_IDS
    .map((id) => SEARCH_ENTRIES.find((entry) => entry.id === id))
    .filter((entry): entry is SearchSuggestion => Boolean(entry));
}

export function getSearchSuggestions(query: string, limit = 8) {
  const normalizedQuery = normalizeSearchQuery(query);

  if (!normalizedQuery) {
    return getDefaultSuggestions().slice(0, limit);
  }

  return SEARCH_ENTRIES
    .map((entry) => ({ entry, score: scoreSuggestion(entry, normalizedQuery) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .slice(0, limit)
    .map((item) => item.entry);
}

export function searchAll(query: string) {
  return getSearchSuggestions(query, SEARCH_ENTRIES.length);
}

export function resolveSearchDestination(query: string) {
  const normalizedQuery = normalizeSearchQuery(query);

  if (!normalizedQuery) {
    return null;
  }

  const exactMatch = SEARCH_ENTRIES.find((entry) => {
    const normalizedTitle = normalizeSearchQuery(entry.title);
    const normalizedKeywords = entry.keywords.map(normalizeSearchQuery);

    return normalizedTitle === normalizedQuery || normalizedKeywords.includes(normalizedQuery);
  });

  if (exactMatch) {
    return exactMatch.path;
  }

  return `/busca?q=${encodeURIComponent(query.trim())}`;
}
