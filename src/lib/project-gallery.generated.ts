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
  "residenciais": [
    {
      "src": "/projetos/residenciais/sala/001-a7bd26b8-35cc-4789-a38b-9f4a8b02a656.webp",
      "alt": "Ambiente Sala - imagem 1",
      "width": 766,
      "height": 1024,
      "thumbSrc": "/projetos/residenciais/sala/001-a7bd26b8-35cc-4789-a38b-9f4a8b02a656-cover.webp",
      "thumbWidth": 449,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/sala/002-ad99c4c0-cfd8-4b2a-b8db-9a8fc50702bb.webp",
      "alt": "Ambiente Sala - imagem 2",
      "width": 766,
      "height": 1024,
      "thumbSrc": "/projetos/residenciais/sala/002-ad99c4c0-cfd8-4b2a-b8db-9a8fc50702bb-cover.webp",
      "thumbWidth": 449,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/sala/003-b9c3aa9c-634a-4475-accf-e41ebf84bef6.webp",
      "alt": "Ambiente Sala - imagem 3",
      "width": 766,
      "height": 1024,
      "thumbSrc": "/projetos/residenciais/sala/003-b9c3aa9c-634a-4475-accf-e41ebf84bef6-cover.webp",
      "thumbWidth": 449,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/sala/004-copia-de-foto-15-12-2022-11-51-56.webp",
      "alt": "Ambiente Sala - imagem 4",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/004-copia-de-foto-15-12-2022-11-51-56-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/005-copia-de-foto-15-12-2022-12-04-22.webp",
      "alt": "Ambiente Sala - imagem 5",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/005-copia-de-foto-15-12-2022-12-04-22-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/006-copia-de-foto-15-12-2022-13-35-48.webp",
      "alt": "Ambiente Sala - imagem 6",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/006-copia-de-foto-15-12-2022-13-35-48-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/007-copia-de-foto-15-12-2022-13-36-34.webp",
      "alt": "Ambiente Sala - imagem 7",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/007-copia-de-foto-15-12-2022-13-36-34-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/008-copia-de-foto-24-05-2022-15-30-11.webp",
      "alt": "Ambiente Sala - imagem 8",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/008-copia-de-foto-24-05-2022-15-30-11-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/009-copia-de-foto-24-05-2022-15-33-06.webp",
      "alt": "Ambiente Sala - imagem 9",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/009-copia-de-foto-24-05-2022-15-33-06-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/010-copia-de-foto-24-05-2022-15-35-55.webp",
      "alt": "Ambiente Sala - imagem 10",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/010-copia-de-foto-24-05-2022-15-35-55-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/011-copia-de-img-3096.webp",
      "alt": "Ambiente Sala - imagem 11",
      "width": 1200,
      "height": 1137,
      "thumbSrc": "/projetos/residenciais/sala/011-copia-de-img-3096-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 569
    },
    {
      "src": "/projetos/residenciais/sala/012-copia-de-img-3102.webp",
      "alt": "Ambiente Sala - imagem 12",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/012-copia-de-img-3102-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/013-copia-de-img-3126.webp",
      "alt": "Ambiente Sala - imagem 13",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/013-copia-de-img-3126-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/014-copia-de-img-6936.webp",
      "alt": "Ambiente Sala - imagem 14",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/014-copia-de-img-6936-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/015-copia-de-img-6939.webp",
      "alt": "Ambiente Sala - imagem 15",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/015-copia-de-img-6939-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/016-copia-de-img-6947.webp",
      "alt": "Ambiente Sala - imagem 16",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/016-copia-de-img-6947-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/017-copia-de-img-6972.webp",
      "alt": "Ambiente Sala - imagem 17",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/sala/017-copia-de-img-6972-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/sala/018-copy-of-img-3498.webp",
      "alt": "Ambiente Sala - imagem 18",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/sala/018-copy-of-img-3498-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/sala/019-copy-of-img-3522.webp",
      "alt": "Ambiente Sala - imagem 19",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/019-copy-of-img-3522-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/020-copy-of-img-3987-1.webp",
      "alt": "Ambiente Sala - imagem 20",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/020-copy-of-img-3987-1-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/021-copy-of-img-4037.webp",
      "alt": "Ambiente Sala - imagem 21",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/021-copy-of-img-4037-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/022-copy-of-img-4073.webp",
      "alt": "Ambiente Sala - imagem 22",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/022-copy-of-img-4073-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/023-copy-of-img-7103.webp",
      "alt": "Ambiente Sala - imagem 23",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/023-copy-of-img-7103-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/024-copy-of-img-7112.webp",
      "alt": "Ambiente Sala - imagem 24",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/sala/024-copy-of-img-7112-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/sala/025-d50c3580-01b0-4a78-9c3f-7acd483620b7.webp",
      "alt": "Ambiente Sala - imagem 25",
      "width": 766,
      "height": 1024,
      "thumbSrc": "/projetos/residenciais/sala/025-d50c3580-01b0-4a78-9c3f-7acd483620b7-cover.webp",
      "thumbWidth": 449,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/sala/026-e9d0c100-a919-4e67-b1b5-1b4a0721b3af.webp",
      "alt": "Ambiente Sala - imagem 26",
      "width": 766,
      "height": 1024,
      "thumbSrc": "/projetos/residenciais/sala/026-e9d0c100-a919-4e67-b1b5-1b4a0721b3af-cover.webp",
      "thumbWidth": 449,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/sala/027-img-3470.webp",
      "alt": "Ambiente Sala - imagem 27",
      "width": 900,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/sala/027-img-3470-cover.webp",
      "thumbWidth": 450,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/sala/028-img-3513.webp",
      "alt": "Ambiente Sala - imagem 28",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/028-img-3513-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/029-img-3522.webp",
      "alt": "Ambiente Sala - imagem 29",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/029-img-3522-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/030-img-3709.webp",
      "alt": "Ambiente Sala - imagem 30",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/sala/030-img-3709-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/sala/031-whatsapp-image-2025-06-10-at-11-27-39-1.webp",
      "alt": "Ambiente Sala - imagem 31",
      "width": 766,
      "height": 1024,
      "thumbSrc": "/projetos/residenciais/sala/031-whatsapp-image-2025-06-10-at-11-27-39-1-cover.webp",
      "thumbWidth": 449,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/sala/032-whatsapp-image-2025-06-10-at-11-38-57.webp",
      "alt": "Ambiente Sala - imagem 32",
      "width": 1024,
      "height": 768,
      "thumbSrc": "/projetos/residenciais/sala/032-whatsapp-image-2025-06-10-at-11-38-57-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 450
    },
    {
      "src": "/projetos/residenciais/dormitorios/001-copia-de-copia-de-img-3035.webp",
      "alt": "Ambiente Dormitorios - imagem 1",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/001-copia-de-copia-de-img-3035-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/002-copia-de-foto-15-12-2022-12-47-34.webp",
      "alt": "Ambiente Dormitorios - imagem 2",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/002-copia-de-foto-15-12-2022-12-47-34-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/003-copia-de-foto-15-12-2022-13-16-01.webp",
      "alt": "Ambiente Dormitorios - imagem 3",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/003-copia-de-foto-15-12-2022-13-16-01-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/004-copia-de-foto-15-12-2022-13-16-21.webp",
      "alt": "Ambiente Dormitorios - imagem 4",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/004-copia-de-foto-15-12-2022-13-16-21-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/005-copia-de-foto-15-12-2022-13-16-41.webp",
      "alt": "Ambiente Dormitorios - imagem 5",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/005-copia-de-foto-15-12-2022-13-16-41-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/006-copia-de-img-3032.webp",
      "alt": "Ambiente Dormitorios - imagem 6",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/006-copia-de-img-3032-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/007-copia-de-img-3038.webp",
      "alt": "Ambiente Dormitorios - imagem 7",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/007-copia-de-img-3038-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/008-copia-de-img-3060.webp",
      "alt": "Ambiente Dormitorios - imagem 8",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/008-copia-de-img-3060-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/009-copy-of-11-2023-06-07-dsc3813-hdr-4.webp",
      "alt": "Ambiente Dormitorios - imagem 9",
      "width": 801,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/dormitorios/009-copy-of-11-2023-06-07-dsc3813-hdr-4-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/dormitorios/010-copy-of-11-2023-06-07-dsc3813-hdr-5.webp",
      "alt": "Ambiente Dormitorios - imagem 10",
      "width": 801,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/dormitorios/010-copy-of-11-2023-06-07-dsc3813-hdr-5-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/dormitorios/011-copy-of-img-3399.webp",
      "alt": "Ambiente Dormitorios - imagem 11",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/011-copy-of-img-3399-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/012-copy-of-img-3425.webp",
      "alt": "Ambiente Dormitorios - imagem 12",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/012-copy-of-img-3425-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/013-copy-of-img-4140.webp",
      "alt": "Ambiente Dormitorios - imagem 13",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/013-copy-of-img-4140-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/014-img-3329.webp",
      "alt": "Ambiente Dormitorios - imagem 14",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/dormitorios/014-img-3329-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/dormitorios/015-img-3334.webp",
      "alt": "Ambiente Dormitorios - imagem 15",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/015-img-3334-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/016-img-3405.webp",
      "alt": "Ambiente Dormitorios - imagem 16",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/016-img-3405-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/017-img-3425.webp",
      "alt": "Ambiente Dormitorios - imagem 17",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/017-img-3425-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/018-img-3451.webp",
      "alt": "Ambiente Dormitorios - imagem 18",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/018-img-3451-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/019-img-3477.webp",
      "alt": "Ambiente Dormitorios - imagem 19",
      "width": 1200,
      "height": 900,
      "thumbSrc": "/projetos/residenciais/dormitorios/019-img-3477-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 450
    },
    {
      "src": "/projetos/residenciais/dormitorios/020-img-3941.webp",
      "alt": "Ambiente Dormitorios - imagem 20",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/020-img-3941-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/021-img-3943.webp",
      "alt": "Ambiente Dormitorios - imagem 21",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/021-img-3943-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/022-img-4000.webp",
      "alt": "Ambiente Dormitorios - imagem 22",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/dormitorios/022-img-4000-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/dormitorios/023-img-4005-1.webp",
      "alt": "Ambiente Dormitorios - imagem 23",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/023-img-4005-1-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/024-img-4009.webp",
      "alt": "Ambiente Dormitorios - imagem 24",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/dormitorios/024-img-4009-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/025-img-5188.webp",
      "alt": "Ambiente Dormitorios - imagem 25",
      "width": 900,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/dormitorios/025-img-5188-cover.webp",
      "thumbWidth": 450,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/dormitorios/026-img-5189.webp",
      "alt": "Ambiente Dormitorios - imagem 26",
      "width": 900,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/dormitorios/026-img-5189-cover.webp",
      "thumbWidth": 450,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/cozinha/001-copy-of-img-3791.webp",
      "alt": "Ambiente Cozinha - imagem 1",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/cozinha/001-copy-of-img-3791-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/002-copy-of-img-3821.webp",
      "alt": "Ambiente Cozinha - imagem 2",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/cozinha/002-copy-of-img-3821-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/003-foto-15-12-2022-12-57-25.webp",
      "alt": "Ambiente Cozinha - imagem 3",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/cozinha/003-foto-15-12-2022-12-57-25-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/004-gedp0271.webp",
      "alt": "Ambiente Cozinha - imagem 4",
      "width": 960,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/cozinha/004-gedp0271-cover.webp",
      "thumbWidth": 480,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/cozinha/005-img-3131.webp",
      "alt": "Ambiente Cozinha - imagem 5",
      "width": 1200,
      "height": 900,
      "thumbSrc": "/projetos/residenciais/cozinha/005-img-3131-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 450
    },
    {
      "src": "/projetos/residenciais/cozinha/006-img-3768.webp",
      "alt": "Ambiente Cozinha - imagem 6",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/cozinha/006-img-3768-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/007-img-3791.webp",
      "alt": "Ambiente Cozinha - imagem 7",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/cozinha/007-img-3791-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/008-img-3852.webp",
      "alt": "Ambiente Cozinha - imagem 8",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/cozinha/008-img-3852-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/009-img-3857.webp",
      "alt": "Ambiente Cozinha - imagem 9",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/cozinha/009-img-3857-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/010-img-3858.webp",
      "alt": "Ambiente Cozinha - imagem 10",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/cozinha/010-img-3858-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/011-img-3864.webp",
      "alt": "Ambiente Cozinha - imagem 11",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/cozinha/011-img-3864-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/012-img-3868.webp",
      "alt": "Ambiente Cozinha - imagem 12",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/cozinha/012-img-3868-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/013-img-5550.webp",
      "alt": "Ambiente Cozinha - imagem 13",
      "width": 1200,
      "height": 900,
      "thumbSrc": "/projetos/residenciais/cozinha/013-img-5550-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 450
    },
    {
      "src": "/projetos/residenciais/closet/001-copy-of-img-4025.webp",
      "alt": "Ambiente Closet - imagem 1",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/closet/001-copy-of-img-4025-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/closet/002-copy-of-img-7170.webp",
      "alt": "Ambiente Closet - imagem 2",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/closet/002-copy-of-img-7170-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/closet/003-copy-of-img-7173.webp",
      "alt": "Ambiente Closet - imagem 3",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/closet/003-copy-of-img-7173-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/closet/004-img-3975-1.webp",
      "alt": "Ambiente Closet - imagem 4",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/closet/004-img-3975-1-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/closet/005-img-3982-1.webp",
      "alt": "Ambiente Closet - imagem 5",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/closet/005-img-3982-1-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/closet/006-img-3999-1.webp",
      "alt": "Ambiente Closet - imagem 6",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/closet/006-img-3999-1-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/closet/007-img-6872.webp",
      "alt": "Ambiente Closet - imagem 7",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/closet/007-img-6872-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/closet/008-img-6873.webp",
      "alt": "Ambiente Closet - imagem 8",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/closet/008-img-6873-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/closet/009-img-6874.webp",
      "alt": "Ambiente Closet - imagem 9",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/closet/009-img-6874-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/closet/010-penteadeira.webp",
      "alt": "Ambiente Closet - imagem 10",
      "width": 1000,
      "height": 667,
      "thumbSrc": "/projetos/residenciais/closet/010-penteadeira-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/banheiro/001-copia-de-img-2989.webp",
      "alt": "Ambiente Banheiro - imagem 1",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/banheiro/001-copia-de-img-2989-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/banheiro/002-copy-of-img-3368.webp",
      "alt": "Ambiente Banheiro - imagem 2",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/banheiro/002-copy-of-img-3368-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/banheiro/003-copy-of-img-3488.webp",
      "alt": "Ambiente Banheiro - imagem 3",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/banheiro/003-copy-of-img-3488-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/banheiro/004-copy-of-img-4129.webp",
      "alt": "Ambiente Banheiro - imagem 4",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/banheiro/004-copy-of-img-4129-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/residenciais/banheiro/005-foto-15-12-2022-12-45-27.webp",
      "alt": "Ambiente Banheiro - imagem 5",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/residenciais/banheiro/005-foto-15-12-2022-12-45-27-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/residenciais/banheiro/006-ngooe0630.webp",
      "alt": "Ambiente Banheiro - imagem 6",
      "width": 900,
      "height": 1200,
      "thumbSrc": "/projetos/residenciais/banheiro/006-ngooe0630-cover.webp",
      "thumbWidth": 450,
      "thumbHeight": 600
    }
  ],
  "corporativos": [
    {
      "src": "/projetos/corporativos/geral/001-2020-11-07-casadesign-fecomercio-fotocomph-07.webp",
      "alt": "Projetos Corporativos - imagem 1",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/001-2020-11-07-casadesign-fecomercio-fotocomph-07-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/corporativos/geral/002-2020-11-07-casadesign-fecomercio-fotocomph-08.webp",
      "alt": "Projetos Corporativos - imagem 2",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/002-2020-11-07-casadesign-fecomercio-fotocomph-08-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/corporativos/geral/003-2020-11-07-casadesign-fecomercio-fotocomph-09.webp",
      "alt": "Projetos Corporativos - imagem 3",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/003-2020-11-07-casadesign-fecomercio-fotocomph-09-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/corporativos/geral/004-2020-11-07-casadesign-fecomercio-fotocomph-10.webp",
      "alt": "Projetos Corporativos - imagem 4",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/004-2020-11-07-casadesign-fecomercio-fotocomph-10-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/corporativos/geral/005-2020-11-07-casadesign-fecomercio-fotocomph-17.webp",
      "alt": "Projetos Corporativos - imagem 5",
      "width": 800,
      "height": 1200,
      "thumbSrc": "/projetos/corporativos/geral/005-2020-11-07-casadesign-fecomercio-fotocomph-17-cover.webp",
      "thumbWidth": 400,
      "thumbHeight": 600
    },
    {
      "src": "/projetos/corporativos/geral/006-2020-11-07-casadesign-fecomercio-fotocomph-19.webp",
      "alt": "Projetos Corporativos - imagem 6",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/006-2020-11-07-casadesign-fecomercio-fotocomph-19-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/corporativos/geral/007-2020-11-07-casadesign-fecomercio-fotocomph-23.webp",
      "alt": "Projetos Corporativos - imagem 7",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/007-2020-11-07-casadesign-fecomercio-fotocomph-23-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/corporativos/geral/008-2020-11-07-casadesign-fecomercio-fotocomph-29.webp",
      "alt": "Projetos Corporativos - imagem 8",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/008-2020-11-07-casadesign-fecomercio-fotocomph-29-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/corporativos/geral/009-escritorio-celia.webp",
      "alt": "Projetos Corporativos - imagem 9",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/009-escritorio-celia-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/corporativos/geral/010-escritorio-celia-beatriz.webp",
      "alt": "Projetos Corporativos - imagem 10",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/010-escritorio-celia-beatriz-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/corporativos/geral/011-escritorio-celia-beatriz-1.webp",
      "alt": "Projetos Corporativos - imagem 11",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/011-escritorio-celia-beatriz-1-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/corporativos/geral/012-escritorio-celia-beatriz-2.webp",
      "alt": "Projetos Corporativos - imagem 12",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/012-escritorio-celia-beatriz-2-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    },
    {
      "src": "/projetos/corporativos/geral/013-escritorio-celia-beatriz-3.webp",
      "alt": "Projetos Corporativos - imagem 13",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/corporativos/geral/013-escritorio-celia-beatriz-3-cover.webp",
      "thumbWidth": 600,
      "thumbHeight": 400
    }
  ],
  "hospitalares": [
    {
      "src": "/projetos/hospitalares/geral/001-copy-of-foto-10-10-2022-08-10-53.webp",
      "alt": "Projeto Hospitalar Geral - imagem 1",
      "width": 1600,
      "height": 1067,
      "thumbSrc": "/projetos/hospitalares/geral/001-copy-of-foto-10-10-2022-08-10-53.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1067
    },
    {
      "src": "/projetos/hospitalares/geral/002-copy-of-foto-10-10-2022-08-11-20.webp",
      "alt": "Projeto Hospitalar Geral - imagem 2",
      "width": 1600,
      "height": 1067,
      "thumbSrc": "/projetos/hospitalares/geral/002-copy-of-foto-10-10-2022-08-11-20.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1067
    },
    {
      "src": "/projetos/hospitalares/geral/003-copy-of-foto-10-10-2022-08-12-55.webp",
      "alt": "Projeto Hospitalar Geral - imagem 3",
      "width": 1067,
      "height": 1600,
      "thumbSrc": "/projetos/hospitalares/geral/003-copy-of-foto-10-10-2022-08-12-55.webp",
      "thumbWidth": 1067,
      "thumbHeight": 1600
    },
    {
      "src": "/projetos/hospitalares/geral/004-copy-of-foto-10-10-2022-08-14-30.webp",
      "alt": "Projeto Hospitalar Geral - imagem 4",
      "width": 1600,
      "height": 1067,
      "thumbSrc": "/projetos/hospitalares/geral/004-copy-of-foto-10-10-2022-08-14-30.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1067
    },
    {
      "src": "/projetos/hospitalares/geral/005-copy-of-foto-10-10-2022-08-15-29.webp",
      "alt": "Projeto Hospitalar Geral - imagem 5",
      "width": 1600,
      "height": 1067,
      "thumbSrc": "/projetos/hospitalares/geral/005-copy-of-foto-10-10-2022-08-15-29.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1067
    },
    {
      "src": "/projetos/hospitalares/geral/006-copy-of-foto-10-10-2022-08-16-15.webp",
      "alt": "Projeto Hospitalar Geral - imagem 6",
      "width": 1600,
      "height": 1067,
      "thumbSrc": "/projetos/hospitalares/geral/006-copy-of-foto-10-10-2022-08-16-15.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1067
    },
    {
      "src": "/projetos/hospitalares/geral/007-copy-of-foto-10-10-2022-08-39-10-2.webp",
      "alt": "Projeto Hospitalar Geral - imagem 7",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/hospitalares/geral/007-copy-of-foto-10-10-2022-08-39-10-2.webp",
      "thumbWidth": 1200,
      "thumbHeight": 800
    },
    {
      "src": "/projetos/hospitalares/geral/008-copy-of-foto-10-10-2022-08-41-25-3.webp",
      "alt": "Projeto Hospitalar Geral - imagem 8",
      "width": 1200,
      "height": 800,
      "thumbSrc": "/projetos/hospitalares/geral/008-copy-of-foto-10-10-2022-08-41-25-3.webp",
      "thumbWidth": 1200,
      "thumbHeight": 800
    },
    {
      "src": "/projetos/hospitalares/geral/009-solb-clinica.webp",
      "alt": "Projeto Hospitalar Geral - imagem 9",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/hospitalares/geral/009-solb-clinica.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    }
  ],
  "decorados": [
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/001-1.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 1",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/001-1.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/002-2.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 2",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/002-2.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/003-3.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 3",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/003-3.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/004-4.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 4",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/004-4.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/005-5.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 5",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/005-5.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/006-6.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 6",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/006-6.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/007-7.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 7",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/007-7.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/008-8.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 8",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/008-8.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/009-9.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 9",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/009-9.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/010-10.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 10",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/010-10.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/011-11.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 11",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/011-11.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/012-12.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 12",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/012-12.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/013-13.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 13",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/013-13.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/014-14.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 14",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/014-14.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/015-15.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 15",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/015-15.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/016-16.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 16",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/016-16.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/017-17.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 17",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/017-17.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/018-18.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 18",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/018-18.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/019-19.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 19",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/019-19.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/020-20.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 20",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/020-20.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/022-011-11.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 21",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/022-011-11.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/024-012-12.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 22",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/024-012-12.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/026-013-13.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 23",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/026-013-13.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/028-014-14.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 24",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/028-014-14.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/030-015-15.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 25",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/030-015-15.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/032-016-16.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 26",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/032-016-16.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/034-017-17.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 27",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/034-017-17.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/036-018-18.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 28",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/036-018-18.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/038-019-19.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 29",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/038-019-19.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/040-020-20.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 30",
      "width": 1600,
      "height": 1040,
      "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/040-020-20.webp",
      "thumbWidth": 1600,
      "thumbHeight": 1040
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/001-1-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 1",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/001-1-1.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/002-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 2",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/002-1.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/003-2-2.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 3",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/003-2-2.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/004-3.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 4",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/004-3.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/005-4-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 5",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/005-4-1.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/006-4.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 6",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/006-4.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/007-5-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 7",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/007-5-1.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/008-5.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 8",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/008-5.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/009-6.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 9",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/009-6.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/010-7.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 10",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/010-7.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/011-8-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 11",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/011-8-1.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/012-9.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 12",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/012-9.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/013-10.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 13",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/013-10.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/014-11.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 14",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/014-11.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/015-12-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 15",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/015-12-1.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/016-13.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 16",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/016-13.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/017-14.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 17",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/017-14.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/018-15.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 18",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/018-15.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/019-16.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 19",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/019-16.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/020-17.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 20",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/020-17.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/021-19.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 21",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/021-19.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/022-20-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 22",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/022-20-1.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/023-20.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 23",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/023-20.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/024-21.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 24",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/024-21.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/025-22-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 25",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/025-22-1.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/026-22.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 26",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/026-22.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/027-29.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 27",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/027-29.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/028-30.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 28",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/028-30.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/029-31.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 29",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/029-31.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/030-32.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 30",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/030-32.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/031-33.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 31",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/031-33.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/032-34.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 32",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/032-34.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/033-35.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 33",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/033-35.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/034-36.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 34",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/034-36.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/035-37.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 35",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/035-37.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/036-38.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 36",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/036-38.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/037-39.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 37",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/037-39.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/038-40.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 38",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/038-40.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/039-41.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 39",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/039-41.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/040-42.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 40",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/040-42.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/041-43.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 41",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/041-43.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/042-44.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 42",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/042-44.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/043-46.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 43",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/043-46.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/044-022-20-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 44",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/044-022-20-1.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/046-023-20.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 45",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/046-023-20.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/048-024-21.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 46",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/048-024-21.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/050-025-22-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 47",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/050-025-22-1.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/052-026-22.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 48",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/052-026-22.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/054-027-29.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 49",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/054-027-29.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/056-028-30.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 50",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/056-028-30.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/058-029-31.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 51",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/058-029-31.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/060-030-32.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 52",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/060-030-32.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/062-031-33.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 53",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/062-031-33.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/064-032-34.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 54",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/064-032-34.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/066-033-35.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 55",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/066-033-35.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/068-034-36.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 56",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/068-034-36.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/070-035-37.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 57",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/070-035-37.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/072-036-38.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 58",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/072-036-38.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/074-037-39.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 59",
      "width": 1600,
      "height": 900,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/074-037-39.webp",
      "thumbWidth": 1600,
      "thumbHeight": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/076-038-40.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 60",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/076-038-40.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/078-039-41.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 61",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/078-039-41.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/080-040-42.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 62",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/080-040-42.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/082-041-43.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 63",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/082-041-43.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/084-042-44.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 64",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/084-042-44.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/086-043-46.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 65",
      "width": 1080,
      "height": 1350,
      "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/086-043-46.webp",
      "thumbWidth": 1080,
      "thumbHeight": 1350
    }
  ]
}
;
export const PROJECT_CATEGORY_COVERS: Record<ProjectCategory, CardImage[]> = {
  "residenciais": [
    {
      "src": "/projetos/residenciais/sala/001-a7bd26b8-35cc-4789-a38b-9f4a8b02a656-cover.webp",
      "alt": "Ambiente Sala - imagem 1",
      "width": 449,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/sala/002-ad99c4c0-cfd8-4b2a-b8db-9a8fc50702bb-cover.webp",
      "alt": "Ambiente Sala - imagem 2",
      "width": 449,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/sala/003-b9c3aa9c-634a-4475-accf-e41ebf84bef6-cover.webp",
      "alt": "Ambiente Sala - imagem 3",
      "width": 449,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/sala/004-copia-de-foto-15-12-2022-11-51-56-cover.webp",
      "alt": "Ambiente Sala - imagem 4",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/005-copia-de-foto-15-12-2022-12-04-22-cover.webp",
      "alt": "Ambiente Sala - imagem 5",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/006-copia-de-foto-15-12-2022-13-35-48-cover.webp",
      "alt": "Ambiente Sala - imagem 6",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/007-copia-de-foto-15-12-2022-13-36-34-cover.webp",
      "alt": "Ambiente Sala - imagem 7",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/008-copia-de-foto-24-05-2022-15-30-11-cover.webp",
      "alt": "Ambiente Sala - imagem 8",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/009-copia-de-foto-24-05-2022-15-33-06-cover.webp",
      "alt": "Ambiente Sala - imagem 9",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/010-copia-de-foto-24-05-2022-15-35-55-cover.webp",
      "alt": "Ambiente Sala - imagem 10",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/011-copia-de-img-3096-cover.webp",
      "alt": "Ambiente Sala - imagem 11",
      "width": 600,
      "height": 569
    },
    {
      "src": "/projetos/residenciais/sala/012-copia-de-img-3102-cover.webp",
      "alt": "Ambiente Sala - imagem 12",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/013-copia-de-img-3126-cover.webp",
      "alt": "Ambiente Sala - imagem 13",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/014-copia-de-img-6936-cover.webp",
      "alt": "Ambiente Sala - imagem 14",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/015-copia-de-img-6939-cover.webp",
      "alt": "Ambiente Sala - imagem 15",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/016-copia-de-img-6947-cover.webp",
      "alt": "Ambiente Sala - imagem 16",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/017-copia-de-img-6972-cover.webp",
      "alt": "Ambiente Sala - imagem 17",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/sala/018-copy-of-img-3498-cover.webp",
      "alt": "Ambiente Sala - imagem 18",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/sala/019-copy-of-img-3522-cover.webp",
      "alt": "Ambiente Sala - imagem 19",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/020-copy-of-img-3987-1-cover.webp",
      "alt": "Ambiente Sala - imagem 20",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/021-copy-of-img-4037-cover.webp",
      "alt": "Ambiente Sala - imagem 21",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/022-copy-of-img-4073-cover.webp",
      "alt": "Ambiente Sala - imagem 22",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/023-copy-of-img-7103-cover.webp",
      "alt": "Ambiente Sala - imagem 23",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/024-copy-of-img-7112-cover.webp",
      "alt": "Ambiente Sala - imagem 24",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/sala/025-d50c3580-01b0-4a78-9c3f-7acd483620b7-cover.webp",
      "alt": "Ambiente Sala - imagem 25",
      "width": 449,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/sala/026-e9d0c100-a919-4e67-b1b5-1b4a0721b3af-cover.webp",
      "alt": "Ambiente Sala - imagem 26",
      "width": 449,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/sala/027-img-3470-cover.webp",
      "alt": "Ambiente Sala - imagem 27",
      "width": 450,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/sala/028-img-3513-cover.webp",
      "alt": "Ambiente Sala - imagem 28",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/029-img-3522-cover.webp",
      "alt": "Ambiente Sala - imagem 29",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/030-img-3709-cover.webp",
      "alt": "Ambiente Sala - imagem 30",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/sala/031-whatsapp-image-2025-06-10-at-11-27-39-1-cover.webp",
      "alt": "Ambiente Sala - imagem 31",
      "width": 449,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/sala/032-whatsapp-image-2025-06-10-at-11-38-57-cover.webp",
      "alt": "Ambiente Sala - imagem 32",
      "width": 600,
      "height": 450
    },
    {
      "src": "/projetos/residenciais/dormitorios/001-copia-de-copia-de-img-3035-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 1",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/002-copia-de-foto-15-12-2022-12-47-34-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 2",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/003-copia-de-foto-15-12-2022-13-16-01-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 3",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/004-copia-de-foto-15-12-2022-13-16-21-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 4",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/005-copia-de-foto-15-12-2022-13-16-41-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 5",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/006-copia-de-img-3032-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 6",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/007-copia-de-img-3038-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 7",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/008-copia-de-img-3060-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 8",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/009-copy-of-11-2023-06-07-dsc3813-hdr-4-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 9",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/dormitorios/010-copy-of-11-2023-06-07-dsc3813-hdr-5-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 10",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/dormitorios/011-copy-of-img-3399-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 11",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/012-copy-of-img-3425-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 12",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/013-copy-of-img-4140-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 13",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/014-img-3329-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 14",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/dormitorios/015-img-3334-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 15",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/016-img-3405-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 16",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/017-img-3425-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 17",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/018-img-3451-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 18",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/019-img-3477-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 19",
      "width": 600,
      "height": 450
    },
    {
      "src": "/projetos/residenciais/dormitorios/020-img-3941-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 20",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/021-img-3943-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 21",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/022-img-4000-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 22",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/dormitorios/023-img-4005-1-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 23",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/024-img-4009-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 24",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/dormitorios/025-img-5188-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 25",
      "width": 450,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/dormitorios/026-img-5189-cover.webp",
      "alt": "Ambiente Dormitorios - imagem 26",
      "width": 450,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/cozinha/001-copy-of-img-3791-cover.webp",
      "alt": "Ambiente Cozinha - imagem 1",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/002-copy-of-img-3821-cover.webp",
      "alt": "Ambiente Cozinha - imagem 2",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/003-foto-15-12-2022-12-57-25-cover.webp",
      "alt": "Ambiente Cozinha - imagem 3",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/004-gedp0271-cover.webp",
      "alt": "Ambiente Cozinha - imagem 4",
      "width": 480,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/cozinha/005-img-3131-cover.webp",
      "alt": "Ambiente Cozinha - imagem 5",
      "width": 600,
      "height": 450
    },
    {
      "src": "/projetos/residenciais/cozinha/006-img-3768-cover.webp",
      "alt": "Ambiente Cozinha - imagem 6",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/007-img-3791-cover.webp",
      "alt": "Ambiente Cozinha - imagem 7",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/008-img-3852-cover.webp",
      "alt": "Ambiente Cozinha - imagem 8",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/009-img-3857-cover.webp",
      "alt": "Ambiente Cozinha - imagem 9",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/010-img-3858-cover.webp",
      "alt": "Ambiente Cozinha - imagem 10",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/011-img-3864-cover.webp",
      "alt": "Ambiente Cozinha - imagem 11",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/012-img-3868-cover.webp",
      "alt": "Ambiente Cozinha - imagem 12",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/cozinha/013-img-5550-cover.webp",
      "alt": "Ambiente Cozinha - imagem 13",
      "width": 600,
      "height": 450
    },
    {
      "src": "/projetos/residenciais/closet/001-copy-of-img-4025-cover.webp",
      "alt": "Ambiente Closet - imagem 1",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/closet/002-copy-of-img-7170-cover.webp",
      "alt": "Ambiente Closet - imagem 2",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/closet/003-copy-of-img-7173-cover.webp",
      "alt": "Ambiente Closet - imagem 3",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/closet/004-img-3975-1-cover.webp",
      "alt": "Ambiente Closet - imagem 4",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/closet/005-img-3982-1-cover.webp",
      "alt": "Ambiente Closet - imagem 5",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/closet/006-img-3999-1-cover.webp",
      "alt": "Ambiente Closet - imagem 6",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/closet/007-img-6872-cover.webp",
      "alt": "Ambiente Closet - imagem 7",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/closet/008-img-6873-cover.webp",
      "alt": "Ambiente Closet - imagem 8",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/closet/009-img-6874-cover.webp",
      "alt": "Ambiente Closet - imagem 9",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/closet/010-penteadeira-cover.webp",
      "alt": "Ambiente Closet - imagem 10",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/banheiro/001-copia-de-img-2989-cover.webp",
      "alt": "Ambiente Banheiro - imagem 1",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/banheiro/002-copy-of-img-3368-cover.webp",
      "alt": "Ambiente Banheiro - imagem 2",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/banheiro/003-copy-of-img-3488-cover.webp",
      "alt": "Ambiente Banheiro - imagem 3",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/banheiro/004-copy-of-img-4129-cover.webp",
      "alt": "Ambiente Banheiro - imagem 4",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/residenciais/banheiro/005-foto-15-12-2022-12-45-27-cover.webp",
      "alt": "Ambiente Banheiro - imagem 5",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/residenciais/banheiro/006-ngooe0630-cover.webp",
      "alt": "Ambiente Banheiro - imagem 6",
      "width": 450,
      "height": 600
    }
  ],
  "corporativos": [
    {
      "src": "/projetos/corporativos/geral/001-2020-11-07-casadesign-fecomercio-fotocomph-07-cover.webp",
      "alt": "Projetos Corporativos - imagem 1",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/corporativos/geral/002-2020-11-07-casadesign-fecomercio-fotocomph-08-cover.webp",
      "alt": "Projetos Corporativos - imagem 2",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/corporativos/geral/003-2020-11-07-casadesign-fecomercio-fotocomph-09-cover.webp",
      "alt": "Projetos Corporativos - imagem 3",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/corporativos/geral/004-2020-11-07-casadesign-fecomercio-fotocomph-10-cover.webp",
      "alt": "Projetos Corporativos - imagem 4",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/corporativos/geral/005-2020-11-07-casadesign-fecomercio-fotocomph-17-cover.webp",
      "alt": "Projetos Corporativos - imagem 5",
      "width": 400,
      "height": 600
    },
    {
      "src": "/projetos/corporativos/geral/006-2020-11-07-casadesign-fecomercio-fotocomph-19-cover.webp",
      "alt": "Projetos Corporativos - imagem 6",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/corporativos/geral/007-2020-11-07-casadesign-fecomercio-fotocomph-23-cover.webp",
      "alt": "Projetos Corporativos - imagem 7",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/corporativos/geral/008-2020-11-07-casadesign-fecomercio-fotocomph-29-cover.webp",
      "alt": "Projetos Corporativos - imagem 8",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/corporativos/geral/009-escritorio-celia-cover.webp",
      "alt": "Projetos Corporativos - imagem 9",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/corporativos/geral/010-escritorio-celia-beatriz-cover.webp",
      "alt": "Projetos Corporativos - imagem 10",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/corporativos/geral/011-escritorio-celia-beatriz-1-cover.webp",
      "alt": "Projetos Corporativos - imagem 11",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/corporativos/geral/012-escritorio-celia-beatriz-2-cover.webp",
      "alt": "Projetos Corporativos - imagem 12",
      "width": 600,
      "height": 400
    },
    {
      "src": "/projetos/corporativos/geral/013-escritorio-celia-beatriz-3-cover.webp",
      "alt": "Projetos Corporativos - imagem 13",
      "width": 600,
      "height": 400
    }
  ],
  "hospitalares": [
    {
      "src": "/projetos/hospitalares/geral/001-copy-of-foto-10-10-2022-08-10-53.webp",
      "alt": "Projeto Hospitalar Geral - imagem 1",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/projetos/hospitalares/geral/002-copy-of-foto-10-10-2022-08-11-20.webp",
      "alt": "Projeto Hospitalar Geral - imagem 2",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/projetos/hospitalares/geral/003-copy-of-foto-10-10-2022-08-12-55.webp",
      "alt": "Projeto Hospitalar Geral - imagem 3",
      "width": 1067,
      "height": 1600
    },
    {
      "src": "/projetos/hospitalares/geral/004-copy-of-foto-10-10-2022-08-14-30.webp",
      "alt": "Projeto Hospitalar Geral - imagem 4",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/projetos/hospitalares/geral/005-copy-of-foto-10-10-2022-08-15-29.webp",
      "alt": "Projeto Hospitalar Geral - imagem 5",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/projetos/hospitalares/geral/006-copy-of-foto-10-10-2022-08-16-15.webp",
      "alt": "Projeto Hospitalar Geral - imagem 6",
      "width": 1600,
      "height": 1067
    },
    {
      "src": "/projetos/hospitalares/geral/007-copy-of-foto-10-10-2022-08-39-10-2.webp",
      "alt": "Projeto Hospitalar Geral - imagem 7",
      "width": 1200,
      "height": 800
    },
    {
      "src": "/projetos/hospitalares/geral/008-copy-of-foto-10-10-2022-08-41-25-3.webp",
      "alt": "Projeto Hospitalar Geral - imagem 8",
      "width": 1200,
      "height": 800
    },
    {
      "src": "/projetos/hospitalares/geral/009-solb-clinica.webp",
      "alt": "Projeto Hospitalar Geral - imagem 9",
      "width": 1600,
      "height": 900
    }
  ],
  "decorados": [
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/001-1.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 1",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/002-2.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 2",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/003-3.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 3",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/004-4.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 4",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/005-5.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 5",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/006-6.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 6",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/007-7.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 7",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/008-8.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 8",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/009-9.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 9",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/010-10.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 10",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/011-11.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 11",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/012-12.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 12",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/013-13.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 13",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/014-14.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 14",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/015-15.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 15",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/016-16.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 16",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/017-17.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 17",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/018-18.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 18",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/019-19.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 19",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/020-20.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 20",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/022-011-11.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 21",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/024-012-12.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 22",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/026-013-13.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 23",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/028-014-14.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 24",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/030-015-15.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 25",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/032-016-16.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 26",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/034-017-17.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 27",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/036-018-18.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 28",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/038-019-19.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 29",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/decorado-vivant-rio-ave/040-020-20.webp",
      "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 30",
      "width": 1600,
      "height": 1040
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/001-1-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 1",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/002-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 2",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/003-2-2.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 3",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/004-3.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 4",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/005-4-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 5",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/006-4.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 6",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/007-5-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 7",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/008-5.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 8",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/009-6.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 9",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/010-7.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 10",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/011-8-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 11",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/012-9.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 12",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/013-10.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 13",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/014-11.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 14",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/015-12-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 15",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/016-13.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 16",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/017-14.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 17",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/018-15.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 18",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/019-16.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 19",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/020-17.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 20",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/021-19.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 21",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/022-20-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 22",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/023-20.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 23",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/024-21.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 24",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/025-22-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 25",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/026-22.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 26",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/027-29.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 27",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/028-30.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 28",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/029-31.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 29",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/030-32.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 30",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/031-33.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 31",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/032-34.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 32",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/033-35.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 33",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/034-36.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 34",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/035-37.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 35",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/036-38.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 36",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/037-39.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 37",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/038-40.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 38",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/039-41.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 39",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/040-42.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 40",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/041-43.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 41",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/042-44.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 42",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/043-46.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 43",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/044-022-20-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 44",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/046-023-20.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 45",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/048-024-21.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 46",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/050-025-22-1.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 47",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/052-026-22.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 48",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/054-027-29.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 49",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/056-028-30.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 50",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/058-029-31.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 51",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/060-030-32.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 52",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/062-031-33.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 53",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/064-032-34.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 54",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/066-033-35.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 55",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/068-034-36.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 56",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/070-035-37.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 57",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/072-036-38.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 58",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/074-037-39.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 59",
      "width": 1600,
      "height": 900
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/076-038-40.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 60",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/078-039-41.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 61",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/080-040-42.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 62",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/082-041-43.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 63",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/084-042-44.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 64",
      "width": 1080,
      "height": 1350
    },
    {
      "src": "/projetos/decorados/raizes-rio-ave-2025/086-043-46.webp",
      "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 65",
      "width": 1080,
      "height": 1350
    }
  ]
}
;
export const PROJECT_GALLERY_ITEMS: ProjectGalleryItem[] = [
  {
    "id": "residenciais-sala",
    "title": "Ambiente Sala",
    "category": "residenciais",
    "image": "/projetos/residenciais/sala/001-a7bd26b8-35cc-4789-a38b-9f4a8b02a656-cover.webp",
    "imageWidth": 449,
    "imageHeight": 600,
    "description": "Sala - residenciais.",
    "relatedImages": [
      {
        "src": "/projetos/residenciais/sala/001-a7bd26b8-35cc-4789-a38b-9f4a8b02a656.webp",
        "alt": "Ambiente Sala - imagem 1",
        "width": 766,
        "height": 1024,
        "thumbSrc": "/projetos/residenciais/sala/001-a7bd26b8-35cc-4789-a38b-9f4a8b02a656-cover.webp",
        "thumbWidth": 449,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/sala/002-ad99c4c0-cfd8-4b2a-b8db-9a8fc50702bb.webp",
        "alt": "Ambiente Sala - imagem 2",
        "width": 766,
        "height": 1024,
        "thumbSrc": "/projetos/residenciais/sala/002-ad99c4c0-cfd8-4b2a-b8db-9a8fc50702bb-cover.webp",
        "thumbWidth": 449,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/sala/003-b9c3aa9c-634a-4475-accf-e41ebf84bef6.webp",
        "alt": "Ambiente Sala - imagem 3",
        "width": 766,
        "height": 1024,
        "thumbSrc": "/projetos/residenciais/sala/003-b9c3aa9c-634a-4475-accf-e41ebf84bef6-cover.webp",
        "thumbWidth": 449,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/sala/004-copia-de-foto-15-12-2022-11-51-56.webp",
        "alt": "Ambiente Sala - imagem 4",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/004-copia-de-foto-15-12-2022-11-51-56-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/005-copia-de-foto-15-12-2022-12-04-22.webp",
        "alt": "Ambiente Sala - imagem 5",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/005-copia-de-foto-15-12-2022-12-04-22-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/006-copia-de-foto-15-12-2022-13-35-48.webp",
        "alt": "Ambiente Sala - imagem 6",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/006-copia-de-foto-15-12-2022-13-35-48-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/007-copia-de-foto-15-12-2022-13-36-34.webp",
        "alt": "Ambiente Sala - imagem 7",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/007-copia-de-foto-15-12-2022-13-36-34-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/008-copia-de-foto-24-05-2022-15-30-11.webp",
        "alt": "Ambiente Sala - imagem 8",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/008-copia-de-foto-24-05-2022-15-30-11-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/009-copia-de-foto-24-05-2022-15-33-06.webp",
        "alt": "Ambiente Sala - imagem 9",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/009-copia-de-foto-24-05-2022-15-33-06-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/010-copia-de-foto-24-05-2022-15-35-55.webp",
        "alt": "Ambiente Sala - imagem 10",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/010-copia-de-foto-24-05-2022-15-35-55-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/011-copia-de-img-3096.webp",
        "alt": "Ambiente Sala - imagem 11",
        "width": 1200,
        "height": 1137,
        "thumbSrc": "/projetos/residenciais/sala/011-copia-de-img-3096-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 569
      },
      {
        "src": "/projetos/residenciais/sala/012-copia-de-img-3102.webp",
        "alt": "Ambiente Sala - imagem 12",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/012-copia-de-img-3102-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/013-copia-de-img-3126.webp",
        "alt": "Ambiente Sala - imagem 13",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/013-copia-de-img-3126-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/014-copia-de-img-6936.webp",
        "alt": "Ambiente Sala - imagem 14",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/014-copia-de-img-6936-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/015-copia-de-img-6939.webp",
        "alt": "Ambiente Sala - imagem 15",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/015-copia-de-img-6939-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/016-copia-de-img-6947.webp",
        "alt": "Ambiente Sala - imagem 16",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/016-copia-de-img-6947-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/017-copia-de-img-6972.webp",
        "alt": "Ambiente Sala - imagem 17",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/sala/017-copia-de-img-6972-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/sala/018-copy-of-img-3498.webp",
        "alt": "Ambiente Sala - imagem 18",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/sala/018-copy-of-img-3498-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/sala/019-copy-of-img-3522.webp",
        "alt": "Ambiente Sala - imagem 19",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/019-copy-of-img-3522-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/020-copy-of-img-3987-1.webp",
        "alt": "Ambiente Sala - imagem 20",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/020-copy-of-img-3987-1-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/021-copy-of-img-4037.webp",
        "alt": "Ambiente Sala - imagem 21",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/021-copy-of-img-4037-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/022-copy-of-img-4073.webp",
        "alt": "Ambiente Sala - imagem 22",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/022-copy-of-img-4073-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/023-copy-of-img-7103.webp",
        "alt": "Ambiente Sala - imagem 23",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/023-copy-of-img-7103-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/024-copy-of-img-7112.webp",
        "alt": "Ambiente Sala - imagem 24",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/sala/024-copy-of-img-7112-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/sala/025-d50c3580-01b0-4a78-9c3f-7acd483620b7.webp",
        "alt": "Ambiente Sala - imagem 25",
        "width": 766,
        "height": 1024,
        "thumbSrc": "/projetos/residenciais/sala/025-d50c3580-01b0-4a78-9c3f-7acd483620b7-cover.webp",
        "thumbWidth": 449,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/sala/026-e9d0c100-a919-4e67-b1b5-1b4a0721b3af.webp",
        "alt": "Ambiente Sala - imagem 26",
        "width": 766,
        "height": 1024,
        "thumbSrc": "/projetos/residenciais/sala/026-e9d0c100-a919-4e67-b1b5-1b4a0721b3af-cover.webp",
        "thumbWidth": 449,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/sala/027-img-3470.webp",
        "alt": "Ambiente Sala - imagem 27",
        "width": 900,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/sala/027-img-3470-cover.webp",
        "thumbWidth": 450,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/sala/028-img-3513.webp",
        "alt": "Ambiente Sala - imagem 28",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/028-img-3513-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/029-img-3522.webp",
        "alt": "Ambiente Sala - imagem 29",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/029-img-3522-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/030-img-3709.webp",
        "alt": "Ambiente Sala - imagem 30",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/sala/030-img-3709-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/sala/031-whatsapp-image-2025-06-10-at-11-27-39-1.webp",
        "alt": "Ambiente Sala - imagem 31",
        "width": 766,
        "height": 1024,
        "thumbSrc": "/projetos/residenciais/sala/031-whatsapp-image-2025-06-10-at-11-27-39-1-cover.webp",
        "thumbWidth": 449,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/sala/032-whatsapp-image-2025-06-10-at-11-38-57.webp",
        "alt": "Ambiente Sala - imagem 32",
        "width": 1024,
        "height": 768,
        "thumbSrc": "/projetos/residenciais/sala/032-whatsapp-image-2025-06-10-at-11-38-57-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 450
      }
    ]
  },
  {
    "id": "residenciais-dormitorios",
    "title": "Ambiente Dormitorios",
    "category": "residenciais",
    "image": "/projetos/residenciais/dormitorios/001-copia-de-copia-de-img-3035-cover.webp",
    "imageWidth": 600,
    "imageHeight": 400,
    "description": "Dormitorios - residenciais.",
    "relatedImages": [
      {
        "src": "/projetos/residenciais/dormitorios/001-copia-de-copia-de-img-3035.webp",
        "alt": "Ambiente Dormitorios - imagem 1",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/001-copia-de-copia-de-img-3035-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/002-copia-de-foto-15-12-2022-12-47-34.webp",
        "alt": "Ambiente Dormitorios - imagem 2",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/002-copia-de-foto-15-12-2022-12-47-34-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/003-copia-de-foto-15-12-2022-13-16-01.webp",
        "alt": "Ambiente Dormitorios - imagem 3",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/003-copia-de-foto-15-12-2022-13-16-01-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/004-copia-de-foto-15-12-2022-13-16-21.webp",
        "alt": "Ambiente Dormitorios - imagem 4",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/004-copia-de-foto-15-12-2022-13-16-21-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/005-copia-de-foto-15-12-2022-13-16-41.webp",
        "alt": "Ambiente Dormitorios - imagem 5",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/005-copia-de-foto-15-12-2022-13-16-41-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/006-copia-de-img-3032.webp",
        "alt": "Ambiente Dormitorios - imagem 6",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/006-copia-de-img-3032-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/007-copia-de-img-3038.webp",
        "alt": "Ambiente Dormitorios - imagem 7",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/007-copia-de-img-3038-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/008-copia-de-img-3060.webp",
        "alt": "Ambiente Dormitorios - imagem 8",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/008-copia-de-img-3060-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/009-copy-of-11-2023-06-07-dsc3813-hdr-4.webp",
        "alt": "Ambiente Dormitorios - imagem 9",
        "width": 801,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/dormitorios/009-copy-of-11-2023-06-07-dsc3813-hdr-4-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/dormitorios/010-copy-of-11-2023-06-07-dsc3813-hdr-5.webp",
        "alt": "Ambiente Dormitorios - imagem 10",
        "width": 801,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/dormitorios/010-copy-of-11-2023-06-07-dsc3813-hdr-5-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/dormitorios/011-copy-of-img-3399.webp",
        "alt": "Ambiente Dormitorios - imagem 11",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/011-copy-of-img-3399-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/012-copy-of-img-3425.webp",
        "alt": "Ambiente Dormitorios - imagem 12",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/012-copy-of-img-3425-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/013-copy-of-img-4140.webp",
        "alt": "Ambiente Dormitorios - imagem 13",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/013-copy-of-img-4140-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/014-img-3329.webp",
        "alt": "Ambiente Dormitorios - imagem 14",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/dormitorios/014-img-3329-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/dormitorios/015-img-3334.webp",
        "alt": "Ambiente Dormitorios - imagem 15",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/015-img-3334-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/016-img-3405.webp",
        "alt": "Ambiente Dormitorios - imagem 16",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/016-img-3405-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/017-img-3425.webp",
        "alt": "Ambiente Dormitorios - imagem 17",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/017-img-3425-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/018-img-3451.webp",
        "alt": "Ambiente Dormitorios - imagem 18",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/018-img-3451-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/019-img-3477.webp",
        "alt": "Ambiente Dormitorios - imagem 19",
        "width": 1200,
        "height": 900,
        "thumbSrc": "/projetos/residenciais/dormitorios/019-img-3477-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 450
      },
      {
        "src": "/projetos/residenciais/dormitorios/020-img-3941.webp",
        "alt": "Ambiente Dormitorios - imagem 20",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/020-img-3941-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/021-img-3943.webp",
        "alt": "Ambiente Dormitorios - imagem 21",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/021-img-3943-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/022-img-4000.webp",
        "alt": "Ambiente Dormitorios - imagem 22",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/dormitorios/022-img-4000-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/dormitorios/023-img-4005-1.webp",
        "alt": "Ambiente Dormitorios - imagem 23",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/023-img-4005-1-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/024-img-4009.webp",
        "alt": "Ambiente Dormitorios - imagem 24",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/dormitorios/024-img-4009-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/dormitorios/025-img-5188.webp",
        "alt": "Ambiente Dormitorios - imagem 25",
        "width": 900,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/dormitorios/025-img-5188-cover.webp",
        "thumbWidth": 450,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/dormitorios/026-img-5189.webp",
        "alt": "Ambiente Dormitorios - imagem 26",
        "width": 900,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/dormitorios/026-img-5189-cover.webp",
        "thumbWidth": 450,
        "thumbHeight": 600
      }
    ]
  },
  {
    "id": "residenciais-cozinha",
    "title": "Ambiente Cozinha",
    "category": "residenciais",
    "image": "/projetos/residenciais/cozinha/001-copy-of-img-3791-cover.webp",
    "imageWidth": 600,
    "imageHeight": 400,
    "description": "Cozinha - residenciais.",
    "relatedImages": [
      {
        "src": "/projetos/residenciais/cozinha/001-copy-of-img-3791.webp",
        "alt": "Ambiente Cozinha - imagem 1",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/cozinha/001-copy-of-img-3791-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/cozinha/002-copy-of-img-3821.webp",
        "alt": "Ambiente Cozinha - imagem 2",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/cozinha/002-copy-of-img-3821-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/cozinha/003-foto-15-12-2022-12-57-25.webp",
        "alt": "Ambiente Cozinha - imagem 3",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/cozinha/003-foto-15-12-2022-12-57-25-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/cozinha/004-gedp0271.webp",
        "alt": "Ambiente Cozinha - imagem 4",
        "width": 960,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/cozinha/004-gedp0271-cover.webp",
        "thumbWidth": 480,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/cozinha/005-img-3131.webp",
        "alt": "Ambiente Cozinha - imagem 5",
        "width": 1200,
        "height": 900,
        "thumbSrc": "/projetos/residenciais/cozinha/005-img-3131-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 450
      },
      {
        "src": "/projetos/residenciais/cozinha/006-img-3768.webp",
        "alt": "Ambiente Cozinha - imagem 6",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/cozinha/006-img-3768-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/cozinha/007-img-3791.webp",
        "alt": "Ambiente Cozinha - imagem 7",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/cozinha/007-img-3791-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/cozinha/008-img-3852.webp",
        "alt": "Ambiente Cozinha - imagem 8",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/cozinha/008-img-3852-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/cozinha/009-img-3857.webp",
        "alt": "Ambiente Cozinha - imagem 9",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/cozinha/009-img-3857-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/cozinha/010-img-3858.webp",
        "alt": "Ambiente Cozinha - imagem 10",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/cozinha/010-img-3858-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/cozinha/011-img-3864.webp",
        "alt": "Ambiente Cozinha - imagem 11",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/cozinha/011-img-3864-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/cozinha/012-img-3868.webp",
        "alt": "Ambiente Cozinha - imagem 12",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/cozinha/012-img-3868-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/cozinha/013-img-5550.webp",
        "alt": "Ambiente Cozinha - imagem 13",
        "width": 1200,
        "height": 900,
        "thumbSrc": "/projetos/residenciais/cozinha/013-img-5550-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 450
      }
    ]
  },
  {
    "id": "residenciais-closet",
    "title": "Ambiente Closet",
    "category": "residenciais",
    "image": "/projetos/residenciais/closet/001-copy-of-img-4025-cover.webp",
    "imageWidth": 400,
    "imageHeight": 600,
    "description": "Closet - residenciais.",
    "relatedImages": [
      {
        "src": "/projetos/residenciais/closet/001-copy-of-img-4025.webp",
        "alt": "Ambiente Closet - imagem 1",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/closet/001-copy-of-img-4025-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/closet/002-copy-of-img-7170.webp",
        "alt": "Ambiente Closet - imagem 2",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/closet/002-copy-of-img-7170-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/closet/003-copy-of-img-7173.webp",
        "alt": "Ambiente Closet - imagem 3",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/closet/003-copy-of-img-7173-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/closet/004-img-3975-1.webp",
        "alt": "Ambiente Closet - imagem 4",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/closet/004-img-3975-1-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/closet/005-img-3982-1.webp",
        "alt": "Ambiente Closet - imagem 5",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/closet/005-img-3982-1-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/closet/006-img-3999-1.webp",
        "alt": "Ambiente Closet - imagem 6",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/closet/006-img-3999-1-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/closet/007-img-6872.webp",
        "alt": "Ambiente Closet - imagem 7",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/closet/007-img-6872-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/closet/008-img-6873.webp",
        "alt": "Ambiente Closet - imagem 8",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/closet/008-img-6873-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/closet/009-img-6874.webp",
        "alt": "Ambiente Closet - imagem 9",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/closet/009-img-6874-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/closet/010-penteadeira.webp",
        "alt": "Ambiente Closet - imagem 10",
        "width": 1000,
        "height": 667,
        "thumbSrc": "/projetos/residenciais/closet/010-penteadeira-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      }
    ]
  },
  {
    "id": "residenciais-banheiro",
    "title": "Ambiente Banheiro",
    "category": "residenciais",
    "image": "/projetos/residenciais/banheiro/001-copia-de-img-2989-cover.webp",
    "imageWidth": 400,
    "imageHeight": 600,
    "description": "Banheiro - residenciais.",
    "relatedImages": [
      {
        "src": "/projetos/residenciais/banheiro/001-copia-de-img-2989.webp",
        "alt": "Ambiente Banheiro - imagem 1",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/banheiro/001-copia-de-img-2989-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/banheiro/002-copy-of-img-3368.webp",
        "alt": "Ambiente Banheiro - imagem 2",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/banheiro/002-copy-of-img-3368-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/banheiro/003-copy-of-img-3488.webp",
        "alt": "Ambiente Banheiro - imagem 3",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/banheiro/003-copy-of-img-3488-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/banheiro/004-copy-of-img-4129.webp",
        "alt": "Ambiente Banheiro - imagem 4",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/banheiro/004-copy-of-img-4129-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/residenciais/banheiro/005-foto-15-12-2022-12-45-27.webp",
        "alt": "Ambiente Banheiro - imagem 5",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/residenciais/banheiro/005-foto-15-12-2022-12-45-27-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/residenciais/banheiro/006-ngooe0630.webp",
        "alt": "Ambiente Banheiro - imagem 6",
        "width": 900,
        "height": 1200,
        "thumbSrc": "/projetos/residenciais/banheiro/006-ngooe0630-cover.webp",
        "thumbWidth": 450,
        "thumbHeight": 600
      }
    ]
  },
  {
    "id": "corporativos-geral",
    "title": "Projetos Corporativos",
    "category": "corporativos",
    "image": "/projetos/corporativos/geral/001-2020-11-07-casadesign-fecomercio-fotocomph-07-cover.webp",
    "imageWidth": 600,
    "imageHeight": 400,
    "description": "Corporativos - selecao geral.",
    "relatedImages": [
      {
        "src": "/projetos/corporativos/geral/001-2020-11-07-casadesign-fecomercio-fotocomph-07.webp",
        "alt": "Projetos Corporativos - imagem 1",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/001-2020-11-07-casadesign-fecomercio-fotocomph-07-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/corporativos/geral/002-2020-11-07-casadesign-fecomercio-fotocomph-08.webp",
        "alt": "Projetos Corporativos - imagem 2",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/002-2020-11-07-casadesign-fecomercio-fotocomph-08-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/corporativos/geral/003-2020-11-07-casadesign-fecomercio-fotocomph-09.webp",
        "alt": "Projetos Corporativos - imagem 3",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/003-2020-11-07-casadesign-fecomercio-fotocomph-09-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/corporativos/geral/004-2020-11-07-casadesign-fecomercio-fotocomph-10.webp",
        "alt": "Projetos Corporativos - imagem 4",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/004-2020-11-07-casadesign-fecomercio-fotocomph-10-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/corporativos/geral/005-2020-11-07-casadesign-fecomercio-fotocomph-17.webp",
        "alt": "Projetos Corporativos - imagem 5",
        "width": 800,
        "height": 1200,
        "thumbSrc": "/projetos/corporativos/geral/005-2020-11-07-casadesign-fecomercio-fotocomph-17-cover.webp",
        "thumbWidth": 400,
        "thumbHeight": 600
      },
      {
        "src": "/projetos/corporativos/geral/006-2020-11-07-casadesign-fecomercio-fotocomph-19.webp",
        "alt": "Projetos Corporativos - imagem 6",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/006-2020-11-07-casadesign-fecomercio-fotocomph-19-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/corporativos/geral/007-2020-11-07-casadesign-fecomercio-fotocomph-23.webp",
        "alt": "Projetos Corporativos - imagem 7",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/007-2020-11-07-casadesign-fecomercio-fotocomph-23-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/corporativos/geral/008-2020-11-07-casadesign-fecomercio-fotocomph-29.webp",
        "alt": "Projetos Corporativos - imagem 8",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/008-2020-11-07-casadesign-fecomercio-fotocomph-29-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/corporativos/geral/009-escritorio-celia.webp",
        "alt": "Projetos Corporativos - imagem 9",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/009-escritorio-celia-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/corporativos/geral/010-escritorio-celia-beatriz.webp",
        "alt": "Projetos Corporativos - imagem 10",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/010-escritorio-celia-beatriz-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/corporativos/geral/011-escritorio-celia-beatriz-1.webp",
        "alt": "Projetos Corporativos - imagem 11",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/011-escritorio-celia-beatriz-1-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/corporativos/geral/012-escritorio-celia-beatriz-2.webp",
        "alt": "Projetos Corporativos - imagem 12",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/012-escritorio-celia-beatriz-2-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      },
      {
        "src": "/projetos/corporativos/geral/013-escritorio-celia-beatriz-3.webp",
        "alt": "Projetos Corporativos - imagem 13",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/corporativos/geral/013-escritorio-celia-beatriz-3-cover.webp",
        "thumbWidth": 600,
        "thumbHeight": 400
      }
    ]
  },
  {
    "id": "hospitalares-geral",
    "title": "Projeto Hospitalar Geral",
    "category": "hospitalares",
    "image": "/projetos/hospitalares/geral/001-copy-of-foto-10-10-2022-08-10-53.webp",
    "imageWidth": 1600,
    "imageHeight": 1067,
    "description": "Geral - hospitalares.",
    "relatedImages": [
      {
        "src": "/projetos/hospitalares/geral/001-copy-of-foto-10-10-2022-08-10-53.webp",
        "alt": "Projeto Hospitalar Geral - imagem 1",
        "width": 1600,
        "height": 1067,
        "thumbSrc": "/projetos/hospitalares/geral/001-copy-of-foto-10-10-2022-08-10-53.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1067
      },
      {
        "src": "/projetos/hospitalares/geral/002-copy-of-foto-10-10-2022-08-11-20.webp",
        "alt": "Projeto Hospitalar Geral - imagem 2",
        "width": 1600,
        "height": 1067,
        "thumbSrc": "/projetos/hospitalares/geral/002-copy-of-foto-10-10-2022-08-11-20.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1067
      },
      {
        "src": "/projetos/hospitalares/geral/003-copy-of-foto-10-10-2022-08-12-55.webp",
        "alt": "Projeto Hospitalar Geral - imagem 3",
        "width": 1067,
        "height": 1600,
        "thumbSrc": "/projetos/hospitalares/geral/003-copy-of-foto-10-10-2022-08-12-55.webp",
        "thumbWidth": 1067,
        "thumbHeight": 1600
      },
      {
        "src": "/projetos/hospitalares/geral/004-copy-of-foto-10-10-2022-08-14-30.webp",
        "alt": "Projeto Hospitalar Geral - imagem 4",
        "width": 1600,
        "height": 1067,
        "thumbSrc": "/projetos/hospitalares/geral/004-copy-of-foto-10-10-2022-08-14-30.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1067
      },
      {
        "src": "/projetos/hospitalares/geral/005-copy-of-foto-10-10-2022-08-15-29.webp",
        "alt": "Projeto Hospitalar Geral - imagem 5",
        "width": 1600,
        "height": 1067,
        "thumbSrc": "/projetos/hospitalares/geral/005-copy-of-foto-10-10-2022-08-15-29.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1067
      },
      {
        "src": "/projetos/hospitalares/geral/006-copy-of-foto-10-10-2022-08-16-15.webp",
        "alt": "Projeto Hospitalar Geral - imagem 6",
        "width": 1600,
        "height": 1067,
        "thumbSrc": "/projetos/hospitalares/geral/006-copy-of-foto-10-10-2022-08-16-15.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1067
      },
      {
        "src": "/projetos/hospitalares/geral/007-copy-of-foto-10-10-2022-08-39-10-2.webp",
        "alt": "Projeto Hospitalar Geral - imagem 7",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/hospitalares/geral/007-copy-of-foto-10-10-2022-08-39-10-2.webp",
        "thumbWidth": 1200,
        "thumbHeight": 800
      },
      {
        "src": "/projetos/hospitalares/geral/008-copy-of-foto-10-10-2022-08-41-25-3.webp",
        "alt": "Projeto Hospitalar Geral - imagem 8",
        "width": 1200,
        "height": 800,
        "thumbSrc": "/projetos/hospitalares/geral/008-copy-of-foto-10-10-2022-08-41-25-3.webp",
        "thumbWidth": 1200,
        "thumbHeight": 800
      },
      {
        "src": "/projetos/hospitalares/geral/009-solb-clinica.webp",
        "alt": "Projeto Hospitalar Geral - imagem 9",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/hospitalares/geral/009-solb-clinica.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      }
    ]
  },
  {
    "id": "decorados-decorado-vivant-rio-ave",
    "title": "Projeto Decorado Decorado Vivant Rio Ave",
    "category": "decorados",
    "image": "/projetos/decorados/decorado-vivant-rio-ave/001-1.webp",
    "imageWidth": 1600,
    "imageHeight": 1040,
    "description": "Decorado Vivant Rio Ave - decorados.",
    "relatedImages": [
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/001-1.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 1",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/001-1.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/002-2.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 2",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/002-2.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/003-3.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 3",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/003-3.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/004-4.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 4",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/004-4.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/005-5.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 5",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/005-5.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/006-6.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 6",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/006-6.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/007-7.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 7",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/007-7.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/008-8.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 8",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/008-8.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/009-9.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 9",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/009-9.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/010-10.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 10",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/010-10.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/011-11.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 11",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/011-11.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/012-12.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 12",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/012-12.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/013-13.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 13",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/013-13.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/014-14.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 14",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/014-14.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/015-15.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 15",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/015-15.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/016-16.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 16",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/016-16.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/017-17.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 17",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/017-17.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/018-18.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 18",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/018-18.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/019-19.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 19",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/019-19.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/020-20.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 20",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/020-20.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/022-011-11.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 21",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/022-011-11.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/024-012-12.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 22",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/024-012-12.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/026-013-13.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 23",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/026-013-13.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/028-014-14.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 24",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/028-014-14.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/030-015-15.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 25",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/030-015-15.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/032-016-16.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 26",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/032-016-16.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/034-017-17.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 27",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/034-017-17.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/036-018-18.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 28",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/036-018-18.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/038-019-19.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 29",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/038-019-19.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      },
      {
        "src": "/projetos/decorados/decorado-vivant-rio-ave/040-020-20.webp",
        "alt": "Projeto Decorado Decorado Vivant Rio Ave - imagem 30",
        "width": 1600,
        "height": 1040,
        "thumbSrc": "/projetos/decorados/decorado-vivant-rio-ave/040-020-20.webp",
        "thumbWidth": 1600,
        "thumbHeight": 1040
      }
    ]
  },
  {
    "id": "decorados-raizes-rio-ave-2025",
    "title": "Projeto Decorado Raizes Rio Ave 2025",
    "category": "decorados",
    "image": "/projetos/decorados/raizes-rio-ave-2025/001-1-1.webp",
    "imageWidth": 1080,
    "imageHeight": 1350,
    "description": "Raizes Rio Ave 2025 - decorados.",
    "relatedImages": [
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/001-1-1.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 1",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/001-1-1.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/002-1.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 2",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/002-1.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/003-2-2.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 3",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/003-2-2.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/004-3.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 4",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/004-3.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/005-4-1.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 5",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/005-4-1.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/006-4.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 6",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/006-4.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/007-5-1.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 7",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/007-5-1.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/008-5.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 8",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/008-5.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/009-6.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 9",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/009-6.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/010-7.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 10",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/010-7.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/011-8-1.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 11",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/011-8-1.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/012-9.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 12",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/012-9.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/013-10.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 13",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/013-10.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/014-11.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 14",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/014-11.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/015-12-1.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 15",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/015-12-1.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/016-13.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 16",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/016-13.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/017-14.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 17",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/017-14.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/018-15.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 18",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/018-15.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/019-16.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 19",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/019-16.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/020-17.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 20",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/020-17.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/021-19.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 21",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/021-19.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/022-20-1.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 22",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/022-20-1.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/023-20.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 23",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/023-20.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/024-21.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 24",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/024-21.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/025-22-1.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 25",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/025-22-1.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/026-22.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 26",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/026-22.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/027-29.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 27",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/027-29.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/028-30.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 28",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/028-30.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/029-31.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 29",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/029-31.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/030-32.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 30",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/030-32.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/031-33.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 31",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/031-33.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/032-34.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 32",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/032-34.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/033-35.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 33",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/033-35.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/034-36.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 34",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/034-36.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/035-37.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 35",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/035-37.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/036-38.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 36",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/036-38.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/037-39.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 37",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/037-39.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/038-40.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 38",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/038-40.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/039-41.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 39",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/039-41.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/040-42.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 40",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/040-42.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/041-43.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 41",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/041-43.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/042-44.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 42",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/042-44.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/043-46.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 43",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/043-46.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/044-022-20-1.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 44",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/044-022-20-1.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/046-023-20.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 45",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/046-023-20.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/048-024-21.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 46",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/048-024-21.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/050-025-22-1.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 47",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/050-025-22-1.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/052-026-22.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 48",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/052-026-22.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/054-027-29.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 49",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/054-027-29.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/056-028-30.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 50",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/056-028-30.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/058-029-31.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 51",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/058-029-31.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/060-030-32.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 52",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/060-030-32.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/062-031-33.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 53",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/062-031-33.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/064-032-34.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 54",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/064-032-34.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/066-033-35.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 55",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/066-033-35.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/068-034-36.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 56",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/068-034-36.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/070-035-37.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 57",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/070-035-37.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/072-036-38.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 58",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/072-036-38.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/074-037-39.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 59",
        "width": 1600,
        "height": 900,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/074-037-39.webp",
        "thumbWidth": 1600,
        "thumbHeight": 900
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/076-038-40.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 60",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/076-038-40.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/078-039-41.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 61",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/078-039-41.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/080-040-42.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 62",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/080-040-42.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/082-041-43.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 63",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/082-041-43.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/084-042-44.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 64",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/084-042-44.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      },
      {
        "src": "/projetos/decorados/raizes-rio-ave-2025/086-043-46.webp",
        "alt": "Projeto Decorado Raizes Rio Ave 2025 - imagem 65",
        "width": 1080,
        "height": 1350,
        "thumbSrc": "/projetos/decorados/raizes-rio-ave-2025/086-043-46.webp",
        "thumbWidth": 1080,
        "thumbHeight": 1350
      }
    ]
  }
]
;
export const LAST_GALLERY_SYNC = "2026-04-15T19:31:07.386Z";
export const SKIPPED_UNSUPPORTED_FILES = 4;
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
