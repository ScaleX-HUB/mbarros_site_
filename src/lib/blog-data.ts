import { MBARROS_IMAGES } from "@/lib/mbarros-images";

export const blogPosts = [
  {
    id: 1,
    slug: "tendencias-moveis-planejados-2024",
    title: "Tendências em Móveis Planejados para 2024",
    excerpt:
      "Descubra as principais tendências que estão moldando o mercado de móveis planejados este ano.",
    date: "2024-01-15",
    category: "Tendências",
    image: MBARROS_IMAGES[0]?.src ?? "",
  },
  {
    id: 2,
    slug: "como-escolher-parceiro-white-label",
    title: "Como Escolher um Parceiro White Label Confiável",
    excerpt:
      "Critérios essenciais para avaliar antes de firmar parceria com uma indústria de móveis.",
    date: "2024-01-10",
    category: "Negócios",
    image: MBARROS_IMAGES[1]?.src ?? "",
  },
  {
    id: 3,
    slug: "materiais-qualidade-moveis-planejados",
    title: "A Importância da Qualidade dos Materiais",
    excerpt:
      "Entenda por que a escolha das matérias-primas impacta diretamente na satisfação do cliente.",
    date: "2024-01-05",
    category: "Qualidade",
    image: MBARROS_IMAGES[2]?.src ?? "",
  },
  {
    id: 4,
    slug: "otimizacao-projetos-promob",
    title: "Otimizando Projetos com o Software Promob",
    excerpt:
      "Dicas práticas para aproveitar ao máximo o software de projetos e reduzir erros.",
    date: "2023-12-28",
    category: "Tecnologia",
    image: MBARROS_IMAGES[3]?.src ?? "",
  },
  {
    id: 5,
    slug: "mercado-moveis-nordeste",
    title: "O Crescimento do Mercado de Móveis no Nordeste",
    excerpt:
      "Análise do cenário atual e as oportunidades para lojistas na região.",
    date: "2023-12-20",
    category: "Mercado",
    image: MBARROS_IMAGES[0]?.src ?? "",
  },
  {
    id: 6,
    slug: "vantagens-producao-industrial",
    title: "Vantagens da Produção Industrial vs Marcenaria",
    excerpt:
      "Comparativo entre os dois modelos e quando cada um faz mais sentido.",
    date: "2023-12-15",
    category: "Negócios",
    image: MBARROS_IMAGES[1]?.src ?? "",
  },
] as const;

export const formatBlogDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export type BlogPost = (typeof blogPosts)[number];