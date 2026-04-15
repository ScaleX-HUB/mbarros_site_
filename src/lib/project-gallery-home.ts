export type HomeProjectCategoryId =
  | "residenciais"
  | "corporativos"
  | "hospitalares"
  | "decorados";

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
      "Cozinhas, dormitorios, salas e espacos personalizados para residencias.",
    covers: [
      { src: "/projetos/residenciais/banheiro/001-copia-de-img-2989-cover.webp" },
      { src: "/projetos/residenciais/banheiro/002-copy-of-img-3368-cover.webp" },
      { src: "/projetos/residenciais/banheiro/003-copy-of-img-3488-cover.webp" },
    ],
  },
  {
    id: "corporativos",
    title: "Projetos Corporativos",
    description:
      "Escritorios, ambientes empresariais e espacos de trabalho funcionais.",
    covers: [
      {
        src: "/projetos/corporativos/geral/001-2020-11-07-casadesign-fecomercio-fotocomph-07-cover.webp",
      },
      {
        src: "/projetos/corporativos/geral/002-2020-11-07-casadesign-fecomercio-fotocomph-08-cover.webp",
      },
      {
        src: "/projetos/corporativos/geral/003-2020-11-07-casadesign-fecomercio-fotocomph-09-cover.webp",
      },
    ],
  },
  {
    id: "hospitalares",
    title: "Projetos Hospitalares",
    description:
      "Ambientes hospitalares e clinicos planejados com foco em eficiencia e higiene.",
    covers: [
      {
        src: "/projetos/hospitalares/geral/001-copy-of-foto-10-10-2022-08-10-53-cover.webp",
      },
      {
        src: "/projetos/hospitalares/geral/002-copy-of-foto-10-10-2022-08-11-20-cover.webp",
      },
      {
        src: "/projetos/hospitalares/geral/003-copy-of-foto-10-10-2022-08-12-55-cover.webp",
      },
    ],
  },
  {
    id: "decorados",
    title: "Projetos Decorados",
    description:
      "Ambientes decorados para apresentacao comercial e experiencia de compra.",
    covers: [
      { src: "/projetos/decorados/decorado-vivant-rio-ave/001-001-1-cover.webp" },
      { src: "/projetos/decorados/decorado-vivant-rio-ave/001-1-cover.webp" },
      { src: "/projetos/decorados/decorado-vivant-rio-ave/002-001-1-cover.webp" },
    ],
  },
];

const HOME_CATEGORY_FALLBACK_COVER = { src: "/placeholder.svg" };

export const getHomeCategoryCover = (categoryId: HomeProjectCategoryId) =>
  HOME_PROJECT_CATEGORIES.find((category) => category.id === categoryId)?.covers[0] ??
  HOME_CATEGORY_FALLBACK_COVER;
