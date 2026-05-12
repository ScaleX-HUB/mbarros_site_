export type HomeProjectCategoryId =
  | "residenciais"
  | "corporativos"
  | "hospitalares"
  | "decorados"
  | "especiais";

export interface HomeProjectCategoryCover {
  src: string;
  width?: number;
  height?: number;
}

export interface HomeProjectCategory {
  id: HomeProjectCategoryId;
  title: string;
  description: string;
  covers: HomeProjectCategoryCover[];
}

export const HOME_PROJECT_CATEGORIES: HomeProjectCategory[] = [
  {
    id: "residenciais",
    title: "Projetos Residenciais",
    description:
      "Cozinhas, dormitórios, salas e espaços personalizados para residências.",
    covers: [{ src: "/projetos/residenciais/banheiro/001-copia-de-img-2989-cover.webp" }],
  },
  {
    id: "corporativos",
    title: "Projetos Corporativos",
    description:
      "Escritórios, ambientes empresariais e espaços de trabalho funcionais.",
    covers: [
      {
        src: "/projetos/corporativos/geral/001-2020-11-07-casadesign-fecomercio-fotocomph-07-cover.webp",
      },
    ],
  },
  {
    id: "hospitalares",
    title: "Projetos Hospitalares",
    description:
      "Ambientes hospitalares e clínicos planejados com foco em eficiência e higiene.",
    covers: [
      {
        src: "/projetos/hospitalares/geral/001-copy-of-foto-10-10-2022-08-10-53-cover.webp",
      },
    ],
  },
  {
    id: "decorados",
    title: "Projetos Decorados",
    description:
      "Ambientes decorados para apresentação comercial e experiência de compra.",
    covers: [{ src: "/projetos/decorados/decorado-vivant-rio-ave/001-001-1-cover.webp" }],
  },
  {
    id: "especiais",
    title: "Projetos Especiais",
    description: "Soluções sob medida para necessidades específicas e projetos únicos.",
    covers: [{ src: "/imagens_mbarros/projetos_especiais/aeroportorecife2.jpg" }],
  },
];

const HOME_CATEGORY_FALLBACK_COVER = { src: "/placeholder.svg" };

export const getHomeCategoryCover = (categoryId: HomeProjectCategoryId) =>
  HOME_PROJECT_CATEGORIES.find((category) => category.id === categoryId)?.covers[0] ??
  HOME_CATEGORY_FALLBACK_COVER;
