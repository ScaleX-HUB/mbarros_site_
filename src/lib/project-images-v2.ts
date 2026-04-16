import type { CardImage } from "@/components/ui/3d-flip-card";
import {
  GENERATED_PROJECT_GALLERY_BY_CATEGORY,
  GENERATED_PROJECT_GALLERY_BY_GROUP,
  type GeneratedProjectCategory,
} from "@/lib/project-gallery.generated";

export type ProjectCategory =
  | "residenciais"
  | "corporativos"
  | "especiais"
  | "hospitalares"
  | "decorados";

type CategoryWithGenerated = Exclude<ProjectCategory, "especiais">;

const LEGACY_CATEGORY_IMAGES: Record<"residenciais" | "corporativos" | "especiais", CardImage[]> = {
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
      alt: "Vista frontal da recepcao ondulada com painel de ripas e parede amadeirada",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-9.jpeg",
      alt: "Instalacao expositiva em estrela com nichos dourados e pedestais",
    },
  ],
};

const mergeUniqueImages = (...items: CardImage[][]): CardImage[] => {
  const merged: CardImage[] = [];
  const known = new Set<string>();

  for (const block of items) {
    for (const image of block) {
      if (known.has(image.src)) continue;
      known.add(image.src);
      merged.push(image);
    }
  }

  return merged;
};

const getGeneratedCategoryImages = (category: CategoryWithGenerated) =>
  GENERATED_PROJECT_GALLERY_BY_CATEGORY[category as GeneratedProjectCategory] ?? [];

export const PROJECT_CATEGORY_IMAGES: Record<ProjectCategory, CardImage[]> = {
  residenciais: mergeUniqueImages(
    LEGACY_CATEGORY_IMAGES.residenciais,
    getGeneratedCategoryImages("residenciais")
  ),
  corporativos: mergeUniqueImages(
    LEGACY_CATEGORY_IMAGES.corporativos,
    getGeneratedCategoryImages("corporativos")
  ),
  especiais: LEGACY_CATEGORY_IMAGES.especiais,
  hospitalares: getGeneratedCategoryImages("hospitalares"),
  decorados: getGeneratedCategoryImages("decorados"),
};

export const PROJECT_IMAGE_GROUPS = GENERATED_PROJECT_GALLERY_BY_GROUP;

export const getCategoryCover = (category: ProjectCategory) =>
  PROJECT_CATEGORY_IMAGES[category][0] ?? PROJECT_CATEGORY_IMAGES.corporativos[0];
