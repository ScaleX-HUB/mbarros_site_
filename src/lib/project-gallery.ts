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

const generatedCorporateImages =
  (GENERATED_PROJECT_CATEGORY_IMAGES as Partial<Record<ProjectCategory, CardImage[]>>)
    .corporativos ?? [];

const getGeneratedCorporateImage = (fileToken: string, alt: string): CardImage => {
  const image = generatedCorporateImages.find((item) => item.src.includes(fileToken));

  if (!image) {
    return { src: "/placeholder.svg", alt };
  }

  return { ...image, alt };
};

const corporateReceptionImages: CardImage[] = [
  getGeneratedCorporateImage(
    "001-2020-11-07-casadesign-fecomercio-fotocomph-07",
    "Recepção corporativa com painel ripado e balcão planejado"
  ),
  getGeneratedCorporateImage(
    "002-2020-11-07-casadesign-fecomercio-fotocomph-08",
    "Recepção corporativa com marcenaria clara e iluminação indireta"
  ),
  getGeneratedCorporateImage(
    "003-2020-11-07-casadesign-fecomercio-fotocomph-09",
    "Recepção corporativa com bancada de atendimento"
  ),
  getGeneratedCorporateImage(
    "004-2020-11-07-casadesign-fecomercio-fotocomph-10",
    "Recepção corporativa ampla com balcão branco"
  ),
];

const corporateMeetingImages: CardImage[] = [
  getGeneratedCorporateImage(
    "006-2020-11-07-casadesign-fecomercio-fotocomph-19",
    "Sala de reunião corporativa com mesa redonda e painel amadeirado"
  ),
  getGeneratedCorporateImage(
    "007-2020-11-07-casadesign-fecomercio-fotocomph-23",
    "Sala de reunião integrada com poltronas e mesa de apoio"
  ),
  getGeneratedCorporateImage(
    "008-2020-11-07-casadesign-fecomercio-fotocomph-29",
    "Sala de reunião com copa de apoio planejada"
  ),
];

const corporateAuditoriumImages: CardImage[] = [
  {
    src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-6.jpeg",
    alt: "Auditório corporativo com bancadas longas em madeira e estrutura metálica",
  },
  {
    src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-8.jpeg",
    alt: "Auditório corporativo com fileiras de mesas planejadas",
  },
];

const corporateOfficeImages: CardImage[] = [
  getGeneratedCorporateImage(
    "009-escritorio-celia",
    "Escritório corporativo com estações de trabalho e marcenaria planejada"
  ),
  getGeneratedCorporateImage(
    "010-escritorio-celia-beatriz",
    "Escritório corporativo com mesa compartilhada"
  ),
  getGeneratedCorporateImage(
    "011-escritorio-celia-beatriz-1",
    "Escritório corporativo com armários e estações de trabalho"
  ),
  getGeneratedCorporateImage(
    "012-escritorio-celia-beatriz-2",
    "Escritório corporativo com bancada e nichos superiores"
  ),
  getGeneratedCorporateImage(
    "013-escritorio-celia-beatriz-3",
    "Escritório corporativo com marcenaria sob medida"
  ),
];

const burilTavaresImages: CardImage[] = [
  {
    src: "/projetos/corporativos/buril-tavares/buril-tavares-escritorio-1.jpg",
    alt: "Escritório Buril Tavares com painel amadeirado e estante planejada",
    width: 1600,
    height: 1066,
  },
  {
    src: "/projetos/corporativos/buril-tavares/buril-tavares-escritorio-2.jpg",
    alt: "Escritório Buril Tavares com mesa de trabalho e divisória em vidro",
    width: 1600,
    height: 1066,
  },
  {
    src: "/projetos/corporativos/buril-tavares/buril-tavares-escritorio-3.jpg",
    alt: "Escritório Buril Tavares com estante iluminada",
    width: 1600,
    height: 1066,
  },
  {
    src: "/projetos/corporativos/buril-tavares/buril-tavares-escritorio-4.jpg",
    alt: "Sala de reunião Buril Tavares com painel iluminado e estante planejada",
    width: 1600,
    height: 900,
  },
];

const CORPORATE_SEGMENT_ITEMS: ProjectGalleryItem[] = [
  {
    id: "corporativos-sala-reuniao",
    title: "Corporativo - Sala de Reunião",
    category: "corporativos",
    image: corporateMeetingImages[0].thumbSrc ?? corporateMeetingImages[0].src,
    imageWidth: corporateMeetingImages[0].thumbWidth ?? corporateMeetingImages[0].width,
    imageHeight: corporateMeetingImages[0].thumbHeight ?? corporateMeetingImages[0].height,
    description: "Salas de reunião corporativas com marcenaria planejada.",
    relatedImages: corporateMeetingImages,
  },
  {
    id: "corporativos-auditorio",
    title: "Corporativo - Auditório",
    category: "corporativos",
    image: corporateAuditoriumImages[0].src,
    imageWidth: corporateAuditoriumImages[0].width,
    imageHeight: corporateAuditoriumImages[0].height,
    description: "Auditórios e espaços coletivos com bancadas e mobiliário sob medida.",
    relatedImages: corporateAuditoriumImages,
  },
  {
    id: "corporativos-recepcao",
    title: "Corporativo - Recepção",
    category: "corporativos",
    image: corporateReceptionImages[0].thumbSrc ?? corporateReceptionImages[0].src,
    imageWidth: corporateReceptionImages[0].thumbWidth ?? corporateReceptionImages[0].width,
    imageHeight: corporateReceptionImages[0].thumbHeight ?? corporateReceptionImages[0].height,
    description: "Recepções corporativas com balcões, painéis e acabamento planejado.",
    relatedImages: corporateReceptionImages,
  },
  {
    id: "corporativos-escritorio",
    title: "Corporativo - Escritório",
    category: "corporativos",
    image: corporateOfficeImages[0].thumbSrc ?? corporateOfficeImages[0].src,
    imageWidth: corporateOfficeImages[0].thumbWidth ?? corporateOfficeImages[0].width,
    imageHeight: corporateOfficeImages[0].thumbHeight ?? corporateOfficeImages[0].height,
    description: "Escritórios planejados com estações, estantes e painéis técnicos.",
    relatedImages: corporateOfficeImages,
  },
  {
    id: "corporativos-buril-tavares",
    title: "Corporativo - Buril Tavares",
    category: "corporativos",
    image: burilTavaresImages[0].src,
    imageWidth: burilTavaresImages[0].width,
    imageHeight: burilTavaresImages[0].height,
    description: "Projeto corporativo Buril Tavares com escritórios e sala de reunião planejados.",
    relatedImages: burilTavaresImages,
  },
];

const CORPORATE_CATEGORY_IMAGES = CORPORATE_SEGMENT_ITEMS.flatMap(
  (project) => project.relatedImages
);

const toProjectMeta = (meta: GeneratedProjectCategoryMeta): ProjectCategoryMeta => ({
  ...meta,
  id: meta.id as ProjectCategory,
});

const toProjectItem = (item: GeneratedProjectGalleryItem): ProjectGalleryItem => ({
  ...item,
  title: item.title === "Projeto Hospitalar Geral" ? "Projeto Hospitalar Geral" : item.title,
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

    acc[category.id] =
      category.id === "corporativos"
        ? CORPORATE_CATEGORY_IMAGES
        : [...generatedImages, ...legacyImages];
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

      if (normalized.includes("aeroportorecife")) return "Aeroporto de Recife";
      if (normalized.includes("aeropotonatal")) return "Aeroporto de Natal";
      if (normalized.includes("planejados-1")) return "Recepcao Premium Ondulada";
      if (normalized.includes("planejados-2")) return "Recepcao em MDF Ripado";
      if (normalized.includes("planejados-3")) return "Recepcao Ondulada Frontal";
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
  ...GENERATED_PROJECT_GALLERY_ITEMS.filter(
    (item) => item.category !== "corporativos"
  ).map(toProjectItem),
  ...CORPORATE_SEGMENT_ITEMS,
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
