import { PROJECT_CATEGORY_IMAGES, PROJECT_IMAGE_GROUPS } from "@/lib/project-images-v2";

const residenciaisGroups = PROJECT_IMAGE_GROUPS.residenciais;
const corporativosGroups = PROJECT_IMAGE_GROUPS.corporativos;
const hospitalaresGroups = PROJECT_IMAGE_GROUPS.hospitalares;
const decoradosGroups = PROJECT_IMAGE_GROUPS.decorados;

const byGroup = (groups: typeof PROJECT_IMAGE_GROUPS.residenciais, id: string) =>
  groups.find((group) => group.id === id)?.images ?? [];

const firstImage = (images: { src: string }[], fallback: string) => images[0]?.src ?? fallback;

export const projectCategories = [
  { id: "todos", label: "Todos" },
  { id: "residenciais", label: "Residenciais" },
  { id: "corporativos", label: "Corporativos" },
  { id: "especiais", label: "Especiais" },
  { id: "hospitalares", label: "Hospitalares" },
  { id: "decorados", label: "Decorados" },
] as const;

const residenciaisBanheiro = byGroup(residenciaisGroups, "banheiro");
const residenciaisCloset = byGroup(residenciaisGroups, "closet");
const residenciaisCozinha = byGroup(residenciaisGroups, "cozinha");
const residenciaisDormitorios = byGroup(residenciaisGroups, "dormitorios");
const residenciaisSala = byGroup(residenciaisGroups, "sala");
const corporativosGeral = byGroup(corporativosGroups, "geral");
const hospitalaresGeral = byGroup(hospitalaresGroups, "geral");
const decoradoVivant = byGroup(decoradosGroups, "decorado-vivant-rio-ave");
const decoradoRaizes = byGroup(decoradosGroups, "raizes-rio-ave-2025");

const fallbackResidenciais = PROJECT_CATEGORY_IMAGES.residenciais[0]?.src ?? "/placeholder.svg";
const fallbackCorporativos = PROJECT_CATEGORY_IMAGES.corporativos[0]?.src ?? fallbackResidenciais;
const fallbackDecorados = PROJECT_CATEGORY_IMAGES.decorados[0]?.src ?? fallbackCorporativos;

export const projects = [
  {
    id: 1,
    title: "Home Office Moderno",
    category: "residenciais",
    image: "/imagens_mbarros/projetos_corporativos/casa-design-home-office-681x1024.jpg",
    description:
      "Home office planejado com estantes modulares, parede de tijolinho e bancada em madeira.",
    relatedImages: PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 2,
    title: "Sala de Reunioes Executiva",
    category: "corporativos",
    image: "/imagens_mbarros/projetos_corporativos/casa-design-moveis-sala-reuniao-3-bvg-1024x683.jpg",
    description: "Sala de reunioes com painel em laca escura, TV embutida e mesa central em cinza.",
    relatedImages: PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 3,
    title: "Escritorio Pessoal",
    category: "residenciais",
    image: "/imagens_mbarros/projetos_corporativos/casa-design-office.jpg",
    description: "Escritorio com estante em madeira escura e decoracao personalizada.",
    relatedImages: PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 4,
    title: "Recepcao Corporativa",
    category: "corporativos",
    image: "/imagens_mbarros/projetos_corporativos/PHOTO-2017-01-30-17-42-15-1024x768.jpg",
    description: "Balcao de recepcao em laminado branco com tampo de vidro e parede em azul.",
    relatedImages: PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 5,
    title: "Espaco de Trabalho Coletivo",
    category: "corporativos",
    image: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-8.jpeg",
    description: "Ambiente corporativo amplo com fileiras de mesas longas e divisorias planejadas.",
    relatedImages: PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 6,
    title: "Aeroporto de Recife",
    category: "especiais",
    image: "/imagens_mbarros/projetos_especiais/aeroportorecife2.jpg",
    description: "Balcao circular de atendimento instalado no Aeroporto Internacional de Recife.",
    relatedImages: PROJECT_CATEGORY_IMAGES.especiais,
  },
  {
    id: 7,
    title: "Ambiente Executivo",
    category: "corporativos",
    image: "/imagens_mbarros/projetos_corporativos/casa-design-sala-reuniao.jpg",
    description: "Sala de reuniao com armarios em laca vermelha, mesa central e iluminacao de destaque.",
    relatedImages: PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 8,
    title: "Aeroporto de Natal",
    category: "especiais",
    image: "/imagens_mbarros/projetos_especiais/aeropotonatal2.jpg",
    description: "Balcoes modulares de check-in instalados no Aeroporto Internacional de Natal.",
    relatedImages: PROJECT_CATEGORY_IMAGES.especiais,
  },
  {
    id: 9,
    title: "Instalacao de Exposicao",
    category: "especiais",
    image: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-9.jpeg",
    description: "Estrutura expositiva em estrela com nichos dourados e pedestais sob medida.",
    relatedImages: PROJECT_CATEGORY_IMAGES.especiais,
  },
  {
    id: 10,
    title: "Ambiente Banheiro",
    category: "residenciais",
    image: firstImage(residenciaisBanheiro, fallbackResidenciais),
    description: "Projetos residenciais para banheiro com marcenaria sob medida.",
    relatedImages: residenciaisBanheiro.length ? residenciaisBanheiro : PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 11,
    title: "Ambiente Closet",
    category: "residenciais",
    image: firstImage(residenciaisCloset, fallbackResidenciais),
    description: "Projetos residenciais para closet com organizacao e acabamento premium.",
    relatedImages: residenciaisCloset.length ? residenciaisCloset : PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 12,
    title: "Ambiente Cozinha",
    category: "residenciais",
    image: firstImage(residenciaisCozinha, fallbackResidenciais),
    description: "Projetos de cozinha planejada com foco em fluxo e funcionalidade.",
    relatedImages: residenciaisCozinha.length ? residenciaisCozinha : PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 13,
    title: "Ambiente Dormitorios",
    category: "residenciais",
    image: firstImage(residenciaisDormitorios, fallbackResidenciais),
    description: "Projetos de dormitorios com composicao sob medida e conforto visual.",
    relatedImages: residenciaisDormitorios.length ? residenciaisDormitorios : PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 14,
    title: "Ambiente Sala",
    category: "residenciais",
    image: firstImage(residenciaisSala, fallbackResidenciais),
    description: "Projetos de sala com paineis, racks e marcenaria integrada ao ambiente.",
    relatedImages: residenciaisSala.length ? residenciaisSala : PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 15,
    title: "Corporativos Geral",
    category: "corporativos",
    image: firstImage(corporativosGeral, fallbackCorporativos),
    description: "Projetos corporativos com mobiliario planejado para operacao e atendimento.",
    relatedImages: corporativosGeral.length ? corporativosGeral : PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 16,
    title: "Hospitalares",
    category: "hospitalares",
    image: firstImage(hospitalaresGeral, fallbackCorporativos),
    description: "Projetos hospitalares com foco em durabilidade, higiene e eficiencia.",
    relatedImages: hospitalaresGeral.length ? hospitalaresGeral : PROJECT_CATEGORY_IMAGES.hospitalares,
  },
  {
    id: 17,
    title: "Decorado Vivant Rio Ave",
    category: "decorados",
    image: firstImage(decoradoVivant, fallbackDecorados),
    description: "Linha de decorados Vivant Rio Ave.",
    relatedImages: decoradoVivant.length ? decoradoVivant : PROJECT_CATEGORY_IMAGES.decorados,
  },
  {
    id: 18,
    title: "Decorado Raizes Rio Ave 2025",
    category: "decorados",
    image: firstImage(decoradoRaizes, fallbackDecorados),
    description: "Linha de decorados Raizes Rio Ave 2025.",
    relatedImages: decoradoRaizes.length ? decoradoRaizes : PROJECT_CATEGORY_IMAGES.decorados,
  },
] as const;

export type ProjectCategoryId = (typeof projectCategories)[number]["id"];
export type ProjectItem = (typeof projects)[number];
