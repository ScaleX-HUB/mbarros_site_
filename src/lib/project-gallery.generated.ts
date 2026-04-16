/* AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
 * Run: npm run sync:projects
 */
import type { CardImage } from "@/components/ui/3d-flip-card";

export type ProjectCategory = "residenciais" | "corporativos" | "hospitalares" | "decorados";

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

export const PROJECT_CATEGORY_META: ProjectCategoryMeta[] = [
  {
    "id": "residenciais",
    "label": "Residenciais",
    "title": "Projetos Residenciais",
    "description": "Cozinhas, dormitorios, salas e ambientes personalizados para residencias.",
    "searchTerms": [
      "residencial",
      "residenciais",
      "sala",
      "dormitorio",
      "dormitorios",
      "cozinha",
      "closet",
      "banheiro"
    ]
  },
  {
    "id": "corporativos",
    "label": "Corporativos",
    "title": "Projetos Corporativos",
    "description": "Escritorios, ambientes empresariais e espacos de trabalho funcionais.",
    "searchTerms": [
      "corporativo",
      "corporativos",
      "escritorio",
      "escritorios",
      "empresarial",
      "empresa"
    ]
  },
  {
    "id": "hospitalares",
    "label": "Hospitalares",
    "title": "Projetos Hospitalares",
    "description": "Ambientes hospitalares e clinicos planejados com foco em eficiencia e higiene.",
    "searchTerms": [
      "hospitalar",
      "hospitalares",
      "hospital",
      "clinica",
      "clinicas"
    ]
  },
  {
    "id": "decorados",
    "label": "Decorados",
    "title": "Projetos Decorados",
    "description": "Ambientes decorados para apresentacao comercial e experiencia de compra.",
    "searchTerms": [
      "decorado",
      "decorados",
      "apartamento decorado",
      "showroom"
    ]
  }
]
;
export const PROJECT_CATEGORY_IMAGES: Record<ProjectCategory, CardImage[]> = {
  "residenciais": [],
  "corporativos": [],
  "hospitalares": [],
  "decorados": []
}
;
export const PROJECT_CATEGORY_COVERS: Record<ProjectCategory, CardImage[]> = {
  "residenciais": [],
  "corporativos": [],
  "hospitalares": [],
  "decorados": []
}
;
export const PROJECT_GALLERY_ITEMS: ProjectGalleryItem[] = []
;
export const LAST_GALLERY_SYNC = "2026-04-16T01:03:10.512Z";
export const SKIPPED_UNSUPPORTED_FILES = 0;
export const GALLERY_IMAGE_OPTIMIZATION = {
  "cover": {
    "width": 600,
    "height": 600,
    "quality": 78
  },
  "gallery": {
    "width": 1200,
    "height": 1200,
    "quality": 78
  },
  "effort": 6
}
;
