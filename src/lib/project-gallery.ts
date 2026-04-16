import type { CardImage } from "@/components/ui/3d-flip-card";
import {
  PROJECT_CATEGORY_IMAGES as GENERATED_PROJECT_CATEGORY_IMAGES,
  PROJECT_CATEGORY_COVERS as GENERATED_PROJECT_CATEGORY_COVERS,
  PROJECT_CATEGORY_META as GENERATED_PROJECT_CATEGORY_META,
  PROJECT_GALLERY_ITEMS as GENERATED_PROJECT_GALLERY_ITEMS,
  type ProjectCategory,
  type ProjectCategoryMeta,
  type ProjectGalleryItem,
} from "@/lib/project-gallery.generated";

export type { ProjectCategory, ProjectCategoryMeta, ProjectGalleryItem };

export const PROJECT_CATEGORY_META: ProjectCategoryMeta[] = GENERATED_PROJECT_CATEGORY_META;
export const PROJECT_GALLERY_ITEMS: ProjectGalleryItem[] = GENERATED_PROJECT_GALLERY_ITEMS;
export const PROJECT_CATEGORY_IMAGES = GENERATED_PROJECT_CATEGORY_IMAGES;
export const PROJECT_CATEGORY_COVERS = GENERATED_PROJECT_CATEGORY_COVERS;

const FALLBACK_CATEGORY_IMAGE: CardImage = {
  src: "/placeholder.svg",
  alt: "Imagem de projeto indisponivel",
};

export const getEnabledProjectCategories = () =>
  PROJECT_CATEGORY_META.filter((category) => PROJECT_CATEGORY_IMAGES[category.id].length > 0);

export const getCategoryCover = (category: ProjectCategory): CardImage =>
  PROJECT_CATEGORY_COVERS[category]?.[0] ?? PROJECT_CATEGORY_IMAGES[category]?.[0] ?? FALLBACK_CATEGORY_IMAGE;
