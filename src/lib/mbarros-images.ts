export type MbarrosImage = {
  src: string;
  title: string;
  heroDurationMs?: number;
  heroFocusPosition?: string;
  heroProximity?: boolean;
};

const productionPanelInspectionWide =
  "/imagens_mbarros/trabalhador_observando_planta_na_industria.webp";

export const MBARROS_IMAGES: MbarrosImage[] = [
  {
    src: "/imagens_mbarros/FOTO%20DA%20INDUSTRIA%20-%20ATUALIZADA%20(1).png",
    title: "Foto atualizada da indústria",
    heroDurationMs: 12500,
    heroFocusPosition: "50% 78%",
    heroProximity: true,
  },
  { src: "/imagens_mbarros/imagem_de_cima_industria_mbarros.webp", title: "Vista aérea da indústria" },
  { src: "/imagens_mbarros/maquina_industria.webp", title: "Maquinário industrial" },
  { src: "/imagens_mbarros/trabalhador_na_maquina_industria.webp", title: "Processo de acabamento" },
  { src: productionPanelInspectionWide, title: "Linha de produção" },
  { src: "/imagens_mbarros/trabalhador_na_maquina_industria.webp", title: "Trabalhador na máquina" },
  { src: "/imagens_mbarros/trabalhador_observando_planta_na_industria.webp", title: "Trabalhador na planta" },
];
