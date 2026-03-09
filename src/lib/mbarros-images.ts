export type MbarrosImage = {
  src: string;
  title: string;
};

const titleFromFilename = (filename: string) => {
  const base = filename
    .replace(/^.*\//, "")
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .trim();

  // Keep it simple: filenames are the "titles" per your convention.
  return base;
};

const sources = [
  "/imagens_mbarros/imagem_de_cima_industria_mbarros.webp",
  "/imagens_mbarros/maquina_industria.webp",
  "/imagens_mbarros/trabalhador_na_maquina_industria.webp",
  "/imagens_mbarros/trabalhador_observando_planta_na_industria.webp",
] as const;

export const MBARROS_IMAGES: MbarrosImage[] = sources.map((src) => ({
  src,
  title: titleFromFilename(src),
}));
