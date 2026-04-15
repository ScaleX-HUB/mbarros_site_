import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appRoot = path.resolve(__dirname, "..");
const workspaceRoot = path.resolve(appRoot, "..");
const publicProjectsRoot = path.join(appRoot, "public", "projetos");
const generatedModulePath = path.join(
  appRoot,
  "src",
  "lib",
  "project-gallery.generated.ts"
);
const GENERATED_MARKER_FILE = ".sync-generated";

const IMAGE_OPTIMIZATION = {
  cover: {
    width: 600,
    height: 600,
    quality: 78,
  },
  gallery: {
    width: 1200,
    height: 1200,
    quality: 78,
  },
  effort: 6,
};

const CATEGORY_CONFIGS = [
  {
    id: "residenciais",
    label: "Residenciais",
    title: "Projetos Residenciais",
    description:
      "Cozinhas, dormitorios, salas e ambientes personalizados para residencias.",
    searchTerms: [
      "residencial",
      "residenciais",
      "sala",
      "dormitorio",
      "dormitorios",
      "cozinha",
      "closet",
      "banheiro",
    ],
    sourceCandidates: [
      "PROJETOS RESIDENCIAIS",
      "mbarros_site_/public/projetos/residenciais",
    ],
    projectMode: "ordered-subfolders",
    preferredSubfolderOrder: [
      "SALA",
      "DORMITORIOS",
      "COZINHA",
      "CLOSET",
      "BANHEIRO",
    ],
    folderTitleByNormalizedName: {
      sala: "Sala",
      dormitorios: "Dormitorios",
      cozinha: "Cozinha",
      closet: "Closet",
      banheiro: "Banheiro",
    },
  },
  {
    id: "corporativos",
    label: "Corporativos",
    title: "Projetos Corporativos",
    description:
      "Escritorios, ambientes empresariais e espacos de trabalho funcionais.",
    searchTerms: [
      "corporativo",
      "corporativos",
      "escritorio",
      "escritorios",
      "empresarial",
      "empresa",
    ],
    sourceCandidates: [
      "PROJETOS CORPORATIVOS",
      "mbarros_site_/public/projetos/corporativos",
    ],
    projectMode: "auto",
  },
  {
    id: "hospitalares",
    label: "Hospitalares",
    title: "Projetos Hospitalares",
    description:
      "Ambientes hospitalares e clinicos planejados com foco em eficiencia e higiene.",
    searchTerms: ["hospitalar", "hospitalares", "hospital", "clinica", "clinicas"],
    sourceCandidates: [
      "HOSPITALAR",
      "HOSPITALARES",
      "PROJETOS HOSPITALARES",
      "mbarros_site_/public/projetos/hospitalar",
      "mbarros_site_/public/projetos/hospitalares",
    ],
    projectMode: "auto",
  },
  {
    id: "decorados",
    label: "Decorados",
    title: "Projetos Decorados",
    description:
      "Ambientes decorados para apresentacao comercial e experiencia de compra.",
    searchTerms: ["decorado", "decorados", "apartamento decorado", "showroom"],
    sourceCandidates: [
      "DECORADOS",
      "PROJETOS DECORADOS",
      "mbarros_site_/public/projetos/decorados",
    ],
    projectMode: "auto",
    excludeIfContains: ["DIRECIONAL"],
  },
];

const projectTitleByCategory = {
  residenciais: "Ambiente",
  corporativos: "Projeto Corporativo",
  hospitalares: "Projeto Hospitalar",
  decorados: "Projeto Decorado",
};

const normalizeText = (value) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const slugify = (value) => {
  const normalized = normalizeText(value).replace(/[^a-z0-9]+/g, "-");
  return normalized.replace(/^-+|-+$/g, "") || "item";
};

const toDisplayTitle = (value) =>
  value
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

const publicRoot = path.join(appRoot, "public");

const toPublicUrl = (absolutePath) => {
  const relativePath = path.relative(publicRoot, absolutePath);
  return `/${relativePath}`.replace(/\\/g, "/");
};

const isSupportedImage = (filename) =>
  IMAGE_EXTENSIONS.has(path.extname(filename).toLowerCase());

const listTopLevelEntries = async (directoryPath) => {
  try {
    return await fs.readdir(directoryPath, { withFileTypes: true });
  } catch {
    return [];
  }
};

const listImageFilesRecursive = async (directoryPath) => {
  const result = [];
  const queue = [directoryPath];

  while (queue.length > 0) {
    const currentPath = queue.shift();
    const entries = await listTopLevelEntries(currentPath);

    for (const entry of entries) {
      const absoluteEntryPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        queue.push(absoluteEntryPath);
        continue;
      }

      if (entry.isFile() && isSupportedImage(entry.name)) {
        result.push(absoluteEntryPath);
      }
    }
  }

  result.sort((a, b) =>
    path.basename(a).localeCompare(path.basename(b), "pt-BR", {
      sensitivity: "base",
      numeric: true,
    })
  );

  return result;
};

const existsDirectory = async (directoryPath) => {
  try {
    const stat = await fs.stat(directoryPath);
    return stat.isDirectory();
  } catch {
    return false;
  }
};

const existsFile = async (filePath) => {
  try {
    const stat = await fs.stat(filePath);
    return stat.isFile();
  } catch {
    return false;
  }
};

const pickSourceDirectory = async (sourceCandidates) => {
  let firstExistingDirectory = null;

  for (const candidate of sourceCandidates) {
    const candidatePath = path.join(workspaceRoot, candidate);
    if (!(await existsDirectory(candidatePath))) continue;
    if (!firstExistingDirectory) firstExistingDirectory = candidatePath;

    const files = await listImageFilesRecursive(candidatePath);
    const hasRenderableImage = files.some(
      (filepath) => !path.basename(filepath).toLowerCase().endsWith("-cover.webp")
    );
    if (hasRenderableImage) return candidatePath;
  }

  return firstExistingDirectory;
};

const shouldExcludeByName = (categoryConfig, filename) => {
  if (!categoryConfig.excludeIfContains?.length) return false;
  const normalizedFilename = normalizeText(filename);
  return categoryConfig.excludeIfContains.some((token) =>
    normalizedFilename.includes(normalizeText(token))
  );
};

const ensureDirectory = async (directoryPath) => {
  await fs.mkdir(directoryPath, { recursive: true });
};

const isGeneratedOutputDirectory = async (directoryPath) => {
  const markerPath = path.join(directoryPath, GENERATED_MARKER_FILE);
  try {
    await fs.access(markerPath);
    return true;
  } catch {
    // no marker, continue heuristic checks
  }

  const entries = await listTopLevelEntries(directoryPath);
  return entries.some(
    (entry) =>
      entry.isFile() &&
      entry.name.toLowerCase().endsWith("-cover.webp")
  );
};

const optimizeToWebp = async ({
  sourceFile,
  outputFilePath,
  width,
  height,
  quality,
}) => {
  const output = await sharp(sourceFile, { failOn: "none" })
    .rotate()
    .resize({
      width,
      height,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality,
      effort: IMAGE_OPTIMIZATION.effort,
    })
    .toFile(outputFilePath);
  return { width: output.width, height: output.height };
};

const copyImagesToPublic = async ({
  imageFiles,
  categoryId,
  projectSlug,
  projectTitle,
}) => {
  const targetFolder = path.join(publicProjectsRoot, categoryId, projectSlug);
  await ensureDirectory(targetFolder);
  await fs.writeFile(path.join(targetFolder, GENERATED_MARKER_FILE), "generated-by-sync\n");

  const relatedImages = [];
  let coverImageSrc = "/placeholder.svg";
  let coverImageWidth;
  let coverImageHeight;

  for (let index = 0; index < imageFiles.length; index += 1) {
    const sourceFile = imageFiles[index];
    const parsed = path.parse(sourceFile);
    const imageOrder = String(index + 1).padStart(3, "0");
    const imageNameSlug = slugify(parsed.name);
    const outputBaseName = `${imageOrder}-${imageNameSlug}`;
    const coverFileName = `${outputBaseName}-cover.webp`;
    const galleryFileName = `${outputBaseName}.webp`;
    const coverFilePath = path.join(targetFolder, coverFileName);
    const galleryFilePath = path.join(targetFolder, galleryFileName);

    let gallerySrc = `/projetos/${categoryId}/${projectSlug}/${galleryFileName}`;
    let coverSrc = `/projetos/${categoryId}/${projectSlug}/${coverFileName}`;
    let coverDims;
    let galleryDims;

    try {
      [coverDims, galleryDims] = await Promise.all([
        optimizeToWebp({
          sourceFile,
          outputFilePath: coverFilePath,
          width: IMAGE_OPTIMIZATION.cover.width,
          height: IMAGE_OPTIMIZATION.cover.height,
          quality: IMAGE_OPTIMIZATION.cover.quality,
        }),
        optimizeToWebp({
          sourceFile,
          outputFilePath: galleryFilePath,
          width: IMAGE_OPTIMIZATION.gallery.width,
          height: IMAGE_OPTIMIZATION.gallery.height,
          quality: IMAGE_OPTIMIZATION.gallery.quality,
        }),
      ]);
    } catch (error) {
      const fallbackExtension = path.extname(sourceFile).toLowerCase();
      const fallbackFileName = `${outputBaseName}${fallbackExtension}`;
      const fallbackPath = path.join(targetFolder, fallbackFileName);

      await fs.copyFile(sourceFile, fallbackPath);
      gallerySrc = `/projetos/${categoryId}/${projectSlug}/${fallbackFileName}`;
      coverSrc = gallerySrc;

      console.warn(
        `[warn] Falha ao otimizar imagem: ${sourceFile}. Mantendo original.`
      );
      console.warn(String(error));
    }

    if (index === 0) {
      coverImageSrc = coverSrc.replace(/\\/g, "/");
      coverImageWidth = coverDims?.width;
      coverImageHeight = coverDims?.height;
    }

    relatedImages.push({
      src: gallerySrc.replace(/\\/g, "/"),
      alt: `${projectTitle} - imagem ${index + 1}`,
      width: galleryDims?.width,
      height: galleryDims?.height,
      thumbSrc: coverSrc.replace(/\\/g, "/"),
      thumbWidth: coverDims?.width,
      thumbHeight: coverDims?.height,
    });
  }

  return {
    coverImageSrc,
    coverImageWidth,
    coverImageHeight,
    relatedImages,
  };
};

const readImageDimensions = async (filepath) => {
  try {
    const meta = await sharp(filepath).metadata();
    return { width: meta.width, height: meta.height };
  } catch {
    return { width: undefined, height: undefined };
  }
};

const buildImagesFromExistingFiles = async ({ imageFiles, projectTitle }) => {
  const filtered = imageFiles.filter(
    (filepath) => !path.basename(filepath).toLowerCase().endsWith("-cover.webp")
  );

  const dedupedBySequence = new Map();
  for (const filepath of filtered) {
    const basename = path.basename(filepath);
    const nameWithoutExt = basename.replace(path.extname(basename), "");
    const match = nameWithoutExt.match(/^(\d{3})-/);
    const key = match?.[1] ?? nameWithoutExt;
    const current = dedupedBySequence.get(key);

    if (!current) {
      dedupedBySequence.set(key, filepath);
      continue;
    }

    const currentName = path.basename(current).replace(path.extname(current), "");
    if (nameWithoutExt.length < currentName.length) {
      dedupedBySequence.set(key, filepath);
    }
  }

  const deduped = Array.from(dedupedBySequence.entries())
    .sort((a, b) =>
      a[0].localeCompare(b[0], "pt-BR", {
        sensitivity: "base",
        numeric: true,
      })
    )
    .map(([, filepath]) => filepath);

  const coverByKey = new Map();
  for (const filepath of imageFiles) {
    const basename = path.basename(filepath).toLowerCase();
    if (!basename.endsWith("-cover.webp")) continue;
    const nameWithoutExt = basename.replace(/-cover\.webp$/, "");
    const match = nameWithoutExt.match(/^(\d{3})-/);
    const key = match?.[1] ?? nameWithoutExt;
    coverByKey.set(key, filepath);
  }

  const relatedImages = await Promise.all(
    deduped.map(async (filepath, index) => {
      const basename = path.basename(filepath);
      const nameWithoutExt = basename.replace(path.extname(basename), "");
      const match = nameWithoutExt.match(/^(\d{3})-/);
      const key = match?.[1] ?? nameWithoutExt;
      const coverPath = coverByKey.get(key);
      const [galleryDims, coverDims] = await Promise.all([
        readImageDimensions(filepath),
        coverPath ? readImageDimensions(coverPath) : Promise.resolve({ width: undefined, height: undefined }),
      ]);

      return {
        src: toPublicUrl(filepath),
        alt: `${projectTitle} - imagem ${index + 1}`,
        width: galleryDims.width,
        height: galleryDims.height,
        thumbSrc: coverPath ? toPublicUrl(coverPath) : toPublicUrl(filepath),
        thumbWidth: coverDims.width ?? galleryDims.width,
        thumbHeight: coverDims.height ?? galleryDims.height,
      };
    })
  );

  const preferredCoverFile = imageFiles.find((filepath) =>
    path.basename(filepath).toLowerCase().endsWith("-cover.webp")
  );
  const coverSrc = preferredCoverFile
    ? toPublicUrl(preferredCoverFile)
    : relatedImages[0]?.src ?? "/placeholder.svg";
  const coverDims = preferredCoverFile
    ? await readImageDimensions(preferredCoverFile)
    : { width: relatedImages[0]?.width, height: relatedImages[0]?.height };

  return {
    coverImageSrc: coverSrc,
    coverImageWidth: coverDims.width,
    coverImageHeight: coverDims.height,
    relatedImages,
  };
};

const buildOrderedSubfolderProjects = async (categoryConfig, sourceDirectory) => {
  const sourceIsCategoryOutputRoot =
    path.resolve(sourceDirectory) === path.resolve(path.join(publicProjectsRoot, categoryConfig.id));
  const topLevelEntries = await listTopLevelEntries(sourceDirectory);
  const subfolders = topLevelEntries.filter((entry) => entry.isDirectory());

  const normalizedSubfolderByName = new Map(
    subfolders.map((entry) => [normalizeText(entry.name), entry.name])
  );

  const orderedFolderNames = [];
  for (const preferred of categoryConfig.preferredSubfolderOrder ?? []) {
    const mappedName = normalizedSubfolderByName.get(normalizeText(preferred));
    if (mappedName) orderedFolderNames.push(mappedName);
  }

  const remainingFolderNames = subfolders
    .map((entry) => entry.name)
    .filter((name) => !orderedFolderNames.includes(name))
    .sort((a, b) => a.localeCompare(b, "pt-BR", { sensitivity: "base", numeric: true }));

  const allFolderNames = [...orderedFolderNames, ...remainingFolderNames];
  const projects = [];

  for (const folderName of allFolderNames) {
    const folderPath = path.join(sourceDirectory, folderName);
    if (!sourceIsCategoryOutputRoot && (await isGeneratedOutputDirectory(folderPath))) continue;
    const imageFiles = (await listImageFilesRecursive(folderPath)).filter(
      (filepath) => !path.basename(filepath).toLowerCase().endsWith("-cover.webp")
    );
    if (imageFiles.length === 0) continue;

    const normalizedFolderName = normalizeText(folderName);
    const mappedTitle =
      categoryConfig.folderTitleByNormalizedName?.[normalizedFolderName] ??
      toDisplayTitle(folderName);

    const projectSlug = slugify(folderName);
    const projectId = `${categoryConfig.id}-${projectSlug}`;
    const projectTitle = `${projectTitleByCategory[categoryConfig.id]} ${mappedTitle}`;
    const description = `${mappedTitle} - ${categoryConfig.label.toLowerCase()}.`;

    const { coverImageSrc, coverImageWidth, coverImageHeight, relatedImages } = sourceIsCategoryOutputRoot
      ? await buildImagesFromExistingFiles({ imageFiles, projectTitle })
      : await copyImagesToPublic({
          imageFiles,
          categoryId: categoryConfig.id,
          projectSlug,
          projectTitle,
        });

    projects.push({
      id: projectId,
      title: projectTitle,
      category: categoryConfig.id,
      image: coverImageSrc,
      imageWidth: coverImageWidth,
      imageHeight: coverImageHeight,
      description,
      relatedImages,
    });
  }

  return projects;
};

const buildAutoProjects = async (categoryConfig, sourceDirectory) => {
  const sourceIsCategoryOutputRoot =
    path.resolve(sourceDirectory) === path.resolve(path.join(publicProjectsRoot, categoryConfig.id));
  const topLevelEntries = await listTopLevelEntries(sourceDirectory);
  const rootFiles = topLevelEntries
    .filter((entry) => entry.isFile() && isSupportedImage(entry.name))
    .map((entry) => entry.name)
    .filter((name) => !name.toLowerCase().endsWith("-cover.webp"))
    .filter((name) => !shouldExcludeByName(categoryConfig, name))
    .sort((a, b) => a.localeCompare(b, "pt-BR", { sensitivity: "base", numeric: true }))
    .map((name) => path.join(sourceDirectory, name));

  const directories = topLevelEntries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b, "pt-BR", { sensitivity: "base", numeric: true }));

  const projects = [];

  if (rootFiles.length > 0) {
    const projectSlug = "geral";
    const projectTitle = categoryConfig.title;
    const description = `${categoryConfig.label} - selecao geral.`;

    const { coverImageSrc, coverImageWidth, coverImageHeight, relatedImages } = sourceIsCategoryOutputRoot
      ? await buildImagesFromExistingFiles({ imageFiles: rootFiles, projectTitle })
      : await copyImagesToPublic({
          imageFiles: rootFiles,
          categoryId: categoryConfig.id,
          projectSlug,
          projectTitle,
        });

    projects.push({
      id: `${categoryConfig.id}-geral`,
      title: projectTitle,
      category: categoryConfig.id,
      image: coverImageSrc,
      imageWidth: coverImageWidth,
      imageHeight: coverImageHeight,
      description,
      relatedImages,
    });
  }

  for (const directoryName of directories) {
    if (shouldExcludeByName(categoryConfig, directoryName)) continue;

    const folderPath = path.join(sourceDirectory, directoryName);
    if (!sourceIsCategoryOutputRoot && (await isGeneratedOutputDirectory(folderPath))) continue;
    let imageFiles = await listImageFilesRecursive(folderPath);
    imageFiles = imageFiles.filter((filepath) =>
      !shouldExcludeByName(categoryConfig, path.basename(filepath)) &&
      !path.basename(filepath).toLowerCase().endsWith("-cover.webp")
    );

    if (imageFiles.length === 0) continue;

    const folderTitle = toDisplayTitle(directoryName);
    const projectSlug = slugify(directoryName);
    const projectTitle = `${projectTitleByCategory[categoryConfig.id]} ${folderTitle}`;
    const description = `${folderTitle} - ${categoryConfig.label.toLowerCase()}.`;

    const { coverImageSrc, coverImageWidth, coverImageHeight, relatedImages } = sourceIsCategoryOutputRoot
      ? await buildImagesFromExistingFiles({ imageFiles, projectTitle })
      : await copyImagesToPublic({
          imageFiles,
          categoryId: categoryConfig.id,
          projectSlug,
          projectTitle,
        });

    projects.push({
      id: `${categoryConfig.id}-${projectSlug}`,
      title: projectTitle,
      category: categoryConfig.id,
      image: coverImageSrc,
      imageWidth: coverImageWidth,
      imageHeight: coverImageHeight,
      description,
      relatedImages,
    });
  }

  return projects;
};

const collectSkippedUnsupported = async (categoryConfig, sourceDirectory) => {
  const skipped = [];
  const queue = [sourceDirectory];

  while (queue.length > 0) {
    const currentPath = queue.shift();
    const entries = await listTopLevelEntries(currentPath);

    for (const entry of entries) {
      const absoluteEntryPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        queue.push(absoluteEntryPath);
        continue;
      }

      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (IMAGE_EXTENSIONS.has(ext)) continue;
      if (shouldExcludeByName(categoryConfig, entry.name)) continue;
      skipped.push(absoluteEntryPath);
    }
  }

  return skipped;
};

const removeLegacyOutputFiles = async (rootDirectory) => {
  const queue = [rootDirectory];
  let removedCount = 0;
  let failedToRemoveCount = 0;

  while (queue.length > 0) {
    const currentPath = queue.shift();
    const managedBySync = await existsFile(path.join(currentPath, GENERATED_MARKER_FILE));
    const entries = await listTopLevelEntries(currentPath);

    for (const entry of entries) {
      const absoluteEntryPath = path.join(currentPath, entry.name);
      if (entry.isDirectory()) {
        queue.push(absoluteEntryPath);
        continue;
      }

      if (!managedBySync) continue;
      if (!entry.isFile()) continue;
      if (entry.name === GENERATED_MARKER_FILE) continue;
      if (path.extname(entry.name).toLowerCase() === ".webp") continue;

      try {
        await fs.unlink(absoluteEntryPath);
        removedCount += 1;
      } catch (error) {
        try {
          await fs.chmod(absoluteEntryPath, 0o666);
          await fs.unlink(absoluteEntryPath);
          removedCount += 1;
        } catch {
          failedToRemoveCount += 1;
        }
      }
    }
  }

  return {
    removedCount,
    failedToRemoveCount,
  };
};

const toTsLiteral = (value) => `${JSON.stringify(value, null, 2)}\n`;

const writeGeneratedModule = async ({
  categoryMeta,
  categoryImages,
  categoryCovers,
  projects,
  skippedUnsupportedCount,
}) => {
  const categoryUnion = CATEGORY_CONFIGS.map((category) => `"${category.id}"`).join(" | ");

  const source = `/* AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
 * Run: npm run sync:projects
 */
import type { CardImage } from "@/components/ui/3d-flip-card";

export type ProjectCategory = ${categoryUnion};

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

export const PROJECT_CATEGORY_META: ProjectCategoryMeta[] = ${toTsLiteral(categoryMeta)};
export const PROJECT_CATEGORY_IMAGES: Record<ProjectCategory, CardImage[]> = ${toTsLiteral(
    categoryImages
  )};
export const PROJECT_CATEGORY_COVERS: Record<ProjectCategory, CardImage[]> = ${toTsLiteral(
    categoryCovers
  )};
export const PROJECT_GALLERY_ITEMS: ProjectGalleryItem[] = ${toTsLiteral(projects)};
export const LAST_GALLERY_SYNC = "${new Date().toISOString()}";
export const SKIPPED_UNSUPPORTED_FILES = ${skippedUnsupportedCount};
export const GALLERY_IMAGE_OPTIMIZATION = ${toTsLiteral(IMAGE_OPTIMIZATION)};
`;

  await fs.writeFile(generatedModulePath, source, "utf8");
};

const run = async () => {
  await ensureDirectory(publicProjectsRoot);

  const categoryMeta = CATEGORY_CONFIGS.map((category) => ({
    id: category.id,
    label: category.label,
    title: category.title,
    description: category.description,
    searchTerms: category.searchTerms,
  }));

  const categoryImages = Object.fromEntries(
    CATEGORY_CONFIGS.map((category) => [category.id, []])
  );
  const categoryCovers = Object.fromEntries(
    CATEGORY_CONFIGS.map((category) => [category.id, []])
  );
  const projects = [];
  let skippedUnsupportedCount = 0;

  for (const categoryConfig of CATEGORY_CONFIGS) {
    const sourceDirectory = await pickSourceDirectory(categoryConfig.sourceCandidates);
    if (!sourceDirectory) continue;

    const skippedUnsupported = await collectSkippedUnsupported(categoryConfig, sourceDirectory);
    skippedUnsupportedCount += skippedUnsupported.length;

    const categoryProjects =
      categoryConfig.projectMode === "ordered-subfolders"
        ? await buildOrderedSubfolderProjects(categoryConfig, sourceDirectory)
        : await buildAutoProjects(categoryConfig, sourceDirectory);

    if (categoryProjects.length === 0) continue;

    projects.push(...categoryProjects);
    categoryImages[categoryConfig.id] = categoryProjects.flatMap(
      (project) => project.relatedImages
    );
    categoryCovers[categoryConfig.id] = categoryProjects.flatMap((project) =>
      project.relatedImages.map((image) => ({
        src: image.thumbSrc ?? image.src,
        alt: image.alt,
        width: image.thumbWidth ?? image.width,
        height: image.thumbHeight ?? image.height,
      }))
    );
  }

  await writeGeneratedModule({
    categoryMeta,
    categoryImages,
    categoryCovers,
    projects,
    skippedUnsupportedCount,
  });

  const { removedCount, failedToRemoveCount } = await removeLegacyOutputFiles(
    publicProjectsRoot
  );

  const summaryByCategory = CATEGORY_CONFIGS.map((category) => {
    const projectCount = projects.filter((project) => project.category === category.id).length;
    const imageCount = categoryImages[category.id].length;
    return `${category.label}: ${projectCount} projeto(s), ${imageCount} imagem(ns)`;
  });

  console.log("Galeria sincronizada com sucesso.");
  for (const line of summaryByCategory) {
    console.log(`- ${line}`);
  }
  if (skippedUnsupportedCount > 0) {
    console.log(
      `- Arquivos ignorados por formato nao suportado: ${skippedUnsupportedCount} (ex.: HEIC)`
    );
  }
  if (removedCount > 0) {
    console.log(`- Arquivos legados removidos do public/projetos: ${removedCount}`);
  }
  if (failedToRemoveCount > 0) {
    console.log(
      `- Arquivos legados que nao puderam ser removidos (travados): ${failedToRemoveCount}`
    );
  }
};

run().catch((error) => {
  console.error("Falha ao sincronizar galeria de projetos.");
  console.error(error);
  process.exitCode = 1;
});
