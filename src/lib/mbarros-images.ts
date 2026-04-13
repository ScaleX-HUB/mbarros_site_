export type MbarrosImage = {
  src: string;
  title: string;
  heroDurationMs?: number;
  heroFocusPosition?: string;
  heroProximity?: boolean;
};

export const MBARROS_IMAGES: MbarrosImage[] = [
  {
    src: "/imagens_mbarros/FOTO%20DA%20INDUSTRIA%20-%20ATUALIZADA%20(1).png",
    title: "Foto atualizada da indústria",
    heroDurationMs: 12500,
    heroFocusPosition: "50% 78%",
    heroProximity: true,
  },
];
