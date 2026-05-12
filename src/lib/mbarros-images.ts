export type MbarrosImage = {
  src: string;
  title: string;
  heroDurationMs?: number;
  heroFocusPosition?: string;
  heroFocusPositionMobile?: string;
  heroProximity?: boolean;
};

export const MBARROS_IMAGES: MbarrosImage[] = [
  {
    src: "/imagens_mbarros/FOTO%20DA%20INDUSTRIA%20-%20ATUALIZADA%20(1).png",
    title: "Foto atualizada da indústria",
    heroDurationMs: 12500,
    heroFocusPosition: "50% 100%",
    heroFocusPositionMobile: "55% 100%",
    heroProximity: true,
  },
];
