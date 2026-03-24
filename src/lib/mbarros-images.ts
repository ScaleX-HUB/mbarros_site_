import processSandingGridWide from "@/assets/process-sanding-grid-wide.png";
import productionPanelInspectionWide from "@/assets/production-panel-inspection-wide.png";

export type MbarrosImage = {
  src: string;
  title: string;
};

export const MBARROS_IMAGES: MbarrosImage[] = [
  { src: "/imagens_mbarros/imagem_de_cima_industria_mbarros.webp", title: "Vista aérea da indústria" },
  { src: "/imagens_mbarros/maquina_industria.webp", title: "Maquinário industrial" },
  { src: processSandingGridWide, title: "Processo de acabamento" },
  { src: productionPanelInspectionWide, title: "Linha de produção" },
  { src: "/imagens_mbarros/trabalhador_na_maquina_industria.webp", title: "Trabalhador na máquina" },
  { src: "/imagens_mbarros/trabalhador_observando_planta_na_industria.webp", title: "Trabalhador na planta" },
];
