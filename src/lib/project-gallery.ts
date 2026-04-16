import type { CardImage } from "@/components/ui/3d-flip-card";
import {
  PROJECT_CATEGORY_IMAGES as GENERATED_PROJECT_CATEGORY_IMAGES,
  PROJECT_CATEGORY_COVERS as GENERATED_PROJECT_CATEGORY_COVERS,
  PROJECT_CATEGORY_META as GENERATED_PROJECT_CATEGORY_META,
  PROJECT_GALLERY_ITEMS as GENERATED_PROJECT_GALLERY_ITEMS,
  type ProjectCategory as GeneratedProjectCategory,
  type ProjectCategoryMeta as GeneratedProjectCategoryMeta,
  type ProjectGalleryItem as GeneratedProjectGalleryItem,
} from "@/lib/project-gallery.generated";

export type ProjectCategory = GeneratedProjectCategory | "especiais";

export interface ProjectCategoryMeta {
  id: ProjectCategory;
  label: string;
  title: string;
  description: string;
  searchTerms: string[];
}

export interface ProjectGalleryItem {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  description: string;
  relatedImages: CardImage[];
}

const LEGACY_CATEGORY_META: ProjectCategoryMeta[] = [
  {
    id: "especiais",
    label: "Especiais",
    title: "Projetos Especiais",
    description: "Solucoes sob medida para necessidades especificas e ambientes unicos.",
    searchTerms: ["especiais", "aeroporto", "sob medida", "personalizado"],
  },
];

const LEGACY_CATEGORY_IMAGES: Partial<Record<ProjectCategory, CardImage[]>> = {
  residenciais: [
    {
      src: "/imagens_mbarros/projetos_corporativos/casa-design-home-office-681x1024.jpg",
      alt: "Home office planejado com estantes modulares e parede de tijolinho",
    },
    {
      src: "/imagens_mbarros/projetos_corporativos/casa-design-office.jpg",
      alt: "Escritorio pessoal com estante em madeira escura e papel de parede tropical",
    },
  ],
  corporativos: [
    {
      src: "/imagens_mbarros/projetos_corporativos/casa-design-moveis-sala-reuniao-3-bvg-1024x683.jpg",
      alt: "Sala de reunioes executiva com painel em laca escura e TV embutida",
    },
    {
      src: "/imagens_mbarros/projetos_corporativos/casa-design-sala-reuniao.jpg",
      alt: "Sala de reuniao com armarios em laca vermelha e mesa central",
    },
    {
      src: "/imagens_mbarros/projetos_corporativos/PHOTO-2017-01-30-17-42-15-1024x768.jpg",
      alt: "Balcao de recepcao corporativa em laminado branco com tampo de vidro",
    },
    {
      src: "/imagens_mbarros/projetos_corporativos/PHOTO-2017-01-30-17-38-45-1024x768.jpg",
      alt: "Balcao de recepcao em granito com painel de marcenaria ao fundo",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-6.jpeg",
      alt: "Grande salao com mesas longas em madeira e metal",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-8.jpeg",
      alt: "Espaco de trabalho coletivo com fileiras de mesas e divisorias",
    },
  ],
  especiais: [
    {
      src: "/imagens_mbarros/projetos_especiais/aeroportorecife2.jpg",
      alt: "Balcao circular no Aeroporto de Recife",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/aeropotonatal2.jpg",
      alt: "Balcao de check-in no Aeroporto de Natal",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-1.jpeg",
      alt: "Recepcao premium com frente ondulada em ripas de madeira e marmore",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-2.jpeg",
      alt: "Detalhe lateral da recepcao em MDF ripado com acabamento em marmore",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-3.jpeg",
      alt: "Vista frontal da recepcao ondulada com painel de ripas",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-9.jpeg",
      alt: "Instalacao expositiva em estrela com nichos dourados e pedestais",
    },
  ],
};

const toProjectMeta = (meta: GeneratedProjectCategoryMeta): ProjectCategoryMeta => ({
  ...meta,
  id: meta.id as ProjectCategory,
});

const toProjectItem = (item: GeneratedProjectGalleryItem): ProjectGalleryItem => ({
  ...item,
  title:
    item.title === "Projetos Corporativos"
      ? "Projeto Corporativo Geral"
      : item.title === "Projeto Hospitalar Geral"
      ? "Projeto Hospitalar Geral"
      : item.title,
  category: item.category as ProjectCategory,
});

const categoryExists = (categoryId: ProjectCategory, list: ProjectCategoryMeta[]) =>
  list.some((category) => category.id === categoryId);

const combinedCategoryMeta = [
  ...GENERATED_PROJECT_CATEGORY_META.map(toProjectMeta),
  ...LEGACY_CATEGORY_META.filter((meta) => !categoryExists(meta.id, GENERATED_PROJECT_CATEGORY_META.map(toProjectMeta))),
];

export const PROJECT_CATEGORY_META: ProjectCategoryMeta[] = combinedCategoryMeta;

export const PROJECT_CATEGORY_IMAGES: Record<ProjectCategory, CardImage[]> = combinedCategoryMeta.reduce(
  (acc, category) => {
    const generatedImages =
      (GENERATED_PROJECT_CATEGORY_IMAGES as Partial<Record<ProjectCategory, CardImage[]>>)[
        category.id
      ] ?? [];
    const legacyImages = LEGACY_CATEGORY_IMAGES[category.id] ?? [];

    acc[category.id] = [...generatedImages, ...legacyImages];
    return acc;
  },
  {} as Record<ProjectCategory, CardImage[]>
);

export const PROJECT_CATEGORY_COVERS: Record<ProjectCategory, CardImage[]> = combinedCategoryMeta.reduce(
  (acc, category) => {
    const generatedCovers =
      (GENERATED_PROJECT_CATEGORY_COVERS as Partial<Record<ProjectCategory, CardImage[]>>)[
        category.id
      ] ?? [];

    const categoryImages = PROJECT_CATEGORY_IMAGES[category.id] ?? [];
    const fallbackCovers = categoryImages.slice(0, Math.min(3, categoryImages.length));

    acc[category.id] = generatedCovers.length > 0 ? generatedCovers : fallbackCovers;
    return acc;
  },
  {} as Record<ProjectCategory, CardImage[]>
);

const LEGACY_GALLERY_ITEMS: ProjectGalleryItem[] = Object.entries(LEGACY_CATEGORY_IMAGES).flatMap(
  ([category, images]) => {
    const typedCategory = category as ProjectCategory;
    const categoryMeta = PROJECT_CATEGORY_META.find((meta) => meta.id === typedCategory);

    if (!images?.length || !categoryMeta) return [];

    const getLegacyTitle = (imageSrc: string, fallback: string) => {
      const normalized = imageSrc.toLowerCase();

      if (normalized.includes("casa-design-home-office")) return "Casa Design Home Office";
      if (normalized.includes("casa-design-office")) return "Casa Design Office";
      if (normalized.includes("casa-design-moveis-sala-reuniao")) {
        return "Casa Design Sala de Reuniao";
      }
      if (normalized.includes("casa-design-sala-reuniao")) return "Casa Design Sala de Reuniao";
      if (normalized.includes("photo-2017-01-30-17-42-15")) return "Recepcao Corporativa";
      if (normalized.includes("photo-2017-01-30-17-38-45")) {
        return "Recepcao Corporativa em Granito";
      }
      if (normalized.includes("aeroportorecife")) return "Aeroporto de Recife";
      if (normalized.includes("aeropotonatal")) return "Aeroporto de Natal";
      if (normalized.includes("planejados-1")) return "Recepcao Premium Ondulada";
      if (normalized.includes("planejados-2")) return "Recepcao em MDF Ripado";
      if (normalized.includes("planejados-3")) return "Recepcao Ondulada Frontal";
      if (normalized.includes("planejados-6")) return "Espaco Corporativo Integrado";
      if (normalized.includes("planejados-8")) return "Estacao de Trabalho Coletiva";
      if (normalized.includes("planejados-9")) return "Instalacao Expositiva Especial";

      return fallback;
    };

    return images.map((image, index) => ({
      id: `legacy-${typedCategory}-${index + 1}`,
      title: getLegacyTitle(image.src, image.alt),
      category: typedCategory,
      image: image.src,
      imageWidth: image.width,
      imageHeight: image.height,
      description: image.alt,
      relatedImages: PROJECT_CATEGORY_IMAGES[typedCategory],
    }));
  }
);

export const PROJECT_GALLERY_ITEMS: ProjectGalleryItem[] = [
  ...GENERATED_PROJECT_GALLERY_ITEMS.map(toProjectItem),
  ...LEGACY_GALLERY_ITEMS,
];

const FALLBACK_CATEGORY_IMAGE: CardImage = {
  src: "/placeholder.svg",
  alt: "Imagem de projeto indisponivel",
};

export const getEnabledProjectCategories = () =>
  PROJECT_CATEGORY_META.filter((category) => PROJECT_CATEGORY_IMAGES[category.id].length > 0);

export const getCategoryCover = (category: ProjectCategory): CardImage =>
  PROJECT_CATEGORY_COVERS[category]?.[0] ?? PROJECT_CATEGORY_IMAGES[category]?.[0] ?? FALLBACK_CATEGORY_IMAGE;
