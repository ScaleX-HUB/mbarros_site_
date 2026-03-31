import { PROJECT_CATEGORY_IMAGES } from "@/lib/project-images";

export const projectCategories = [
  { id: "todos", label: "Todos" },
  { id: "residenciais", label: "Residenciais" },
  { id: "corporativos", label: "Corporativos" },
  { id: "especiais", label: "Especiais" },
] as const;

export const projects = [
  {
    id: 1,
    title: "Home Office Moderno",
    category: "residenciais",
    image: "/imagens_mbarros/projetos_corporativos/casa-design-home-office-681x1024.jpg",
    description: "Home office planejado com estantes modulares, parede de tijolinho e bancada em madeira.",
    relatedImages: PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 2,
    title: "Sala de Reuniões Executiva",
    category: "corporativos",
    image: "/imagens_mbarros/projetos_corporativos/casa-design-moveis-sala-reuniao-3-bvg-1024x683.jpg",
    description: "Sala de reuniões com painel em laca escura, TV embutida e mesa central em cinza.",
    relatedImages: PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 3,
    title: "Escritório Pessoal",
    category: "residenciais",
    image: "/imagens_mbarros/projetos_corporativos/casa-design-office.jpg",
    description: "Escritório com estante em madeira escura, decoração personalizada e papel de parede tropical.",
    relatedImages: PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 4,
    title: "Recepção Corporativa",
    category: "corporativos",
    image: "/imagens_mbarros/projetos_corporativos/PHOTO-2017-01-30-17-42-15-1024x768.jpg",
    description: "Balcão de recepção em laminado branco com tampo de vidro e parede em azul.",
    relatedImages: PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 5,
    title: "Espaço de Trabalho Coletivo",
    category: "corporativos",
    image: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-8.jpeg",
    description: "Ambiente corporativo amplo com fileiras de mesas longas e divisórias planejadas.",
    relatedImages: PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 6,
    title: "Aeroporto de Recife",
    category: "especiais",
    image: "/imagens_mbarros/projetos_especiais/aeroportorecife2.jpg",
    description: "Balcão circular de atendimento instalado no Aeroporto Internacional de Recife.",
    relatedImages: PROJECT_CATEGORY_IMAGES.especiais,
  },
  {
    id: 7,
    title: "Ambiente Executivo",
    category: "corporativos",
    image: "/imagens_mbarros/projetos_corporativos/casa-design-sala-reuniao.jpg",
    description: "Sala de reunião com armários em laca vermelha, mesa central e iluminação de destaque.",
    relatedImages: PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 8,
    title: "Aeroporto de Natal",
    category: "especiais",
    image: "/imagens_mbarros/projetos_especiais/aeropotonatal2.jpg",
    description: "Balcões modulares de check-in instalados no Aeroporto Internacional de Natal.",
    relatedImages: PROJECT_CATEGORY_IMAGES.especiais,
  },
  {
    id: 9,
    title: "Instalação de Exposição",
    category: "especiais",
    image: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-9.jpeg",
    description: "Estrutura expositiva em estrela com nichos dourados e pedestais — projeto sob medida.",
    relatedImages: PROJECT_CATEGORY_IMAGES.especiais,
  },
] as const;

export type ProjectCategoryId = (typeof projectCategories)[number]["id"];
export type ProjectItem = (typeof projects)[number];