import type { CardImage } from "@/components/ui/3d-flip-card";

export type ProjectCategory = "residenciais" | "corporativos" | "especiais";

export const PROJECT_CATEGORY_IMAGES: Record<ProjectCategory, CardImage[]> = {
  residenciais: [
    {
      src: "/imagens_mbarros/projetos_corporativos/casa-design-home-office-681x1024.jpg",
      alt: "Home office planejado com estantes modulares e parede de tijolinho",
    },
    {
      src: "/imagens_mbarros/projetos_corporativos/casa-design-office.jpg",
      alt: "Escritório pessoal com estante em madeira escura e papel de parede tropical",
    },
  ],
  corporativos: [
    {
      src: "/imagens_mbarros/projetos_corporativos/casa-design-moveis-sala-reuniao-3-bvg-1024x683.jpg",
      alt: "Sala de reuniões executiva com painel em laca escura e TV embutida",
    },
    {
      src: "/imagens_mbarros/projetos_corporativos/casa-design-sala-reuniao.jpg",
      alt: "Sala de reunião com armários em laca vermelha e mesa central",
    },
    {
      src: "/imagens_mbarros/projetos_corporativos/PHOTO-2017-01-30-17-42-15-1024x768.jpg",
      alt: "Balcão de recepção corporativa em laminado branco com tampo de vidro",
    },
    {
      src: "/imagens_mbarros/projetos_corporativos/PHOTO-2017-01-30-17-38-45-1024x768.jpg",
      alt: "Balcão de recepção em granito com painel de marcenaria ao fundo",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-6.jpeg",
      alt: "Grande salão com mesas longas em madeira e metal — coworking ou auditório",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-8.jpeg",
      alt: "Espaço de trabalho coletivo com fileiras de mesas e divisórias",
    },
  ],
  especiais: [
    {
      src: "/imagens_mbarros/projetos_especiais/aeroportorecife2.jpg",
      alt: "Balcão circular no Aeroporto de Recife",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/aeropotonatal2.jpg",
      alt: "Balcão de check-in no Aeroporto de Natal",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-1.jpeg",
      alt: "Recepção premium com frente ondulada em ripas de madeira e mármore",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-2.jpeg",
      alt: "Detalhe lateral da recepção em MDF ripado com acabamento em mármore",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-3.jpeg",
      alt: "Vista frontal da recepção ondulada com painel de ripas e parede amadeirada",
    },
    {
      src: "/imagens_mbarros/projetos_especiais/projetos-especiais-mbarros-planejados-9.jpeg",
      alt: "Instalação expositiva em estrela com nichos dourados e pedestais",
    },
  ],
};

export const getCategoryCover = (category: ProjectCategory) =>
  PROJECT_CATEGORY_IMAGES[category][0];
