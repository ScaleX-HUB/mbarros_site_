import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { CardStack3D } from "@/components/ui/3d-flip-card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  PROJECT_CATEGORY_META,
  PROJECT_GALLERY_ITEMS,
  type ProjectCategory,
} from "@/lib/project-gallery";

type CategoryFilter = "todos" | ProjectCategory;

const CATEGORY_BUTTONS = [
  { id: "todos", label: "Todos" },
  ...PROJECT_CATEGORY_META.map((category) => ({
    id: category.id,
    label: category.label,
  })),
];

const PROJECT_CATEGORY_SET = new Set(PROJECT_CATEGORY_META.map((category) => category.id));

const isProjectCategory = (value: string | null): value is ProjectCategory =>
  value !== null && PROJECT_CATEGORY_SET.has(value as ProjectCategory);

const CATEGORY_LABEL_BY_ID = PROJECT_CATEGORY_META.reduce<Record<string, string>>(
  (acc, category) => ({ ...acc, [category.id]: category.label }),
  {}
);

/** Remove prefixos automáticos e duplicatas do título gerado. */
const cleanTitle = (title: string): string =>
  title
    .replace(/^Ambientes?\s+/i, "")
    .replace(/^Projetos?\s+/i, "")
    .replace(/\b(\w+)\s+\1\b/gi, "$1") // "Decorado Decorado" → "Decorado"
    .trim();

const modalControlButtonClass =
  "h-12 w-12 min-h-12 min-w-12 rounded-full border border-white/25 bg-white/15 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-[4px] transition-all duration-200 hover:scale-110 hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white/70";

interface ProjectCardProps {
  project: (typeof PROJECT_GALLERY_ITEMS)[number];
  isAboveFold: boolean;
  showCategory: boolean;
  onOpen: () => void;
}

const ProjectCard = ({ project, isAboveFold, showCategory, onOpen }: ProjectCardProps) => (
  <div className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary cursor-pointer" onClick={onOpen}>
    <button
      type="button"
      className="sr-only"
      aria-label={`Ver galeria: ${cleanTitle(project.title)}`}
    />
    <img
      src={project.image}
      alt={cleanTitle(project.title)}
      width={project.imageWidth ?? 600}
      height={project.imageHeight ?? 450}
      className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.04]"
      loading={isAboveFold ? "eager" : "lazy"}
      fetchPriority={isAboveFold ? "high" : "auto"}
      decoding="async"
      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
    />
    {/* Gradiente base permanente */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
    {/* Overlay de hover */}
    <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
    {/* Contagem de fotos — canto superior direito */}
    {project.relatedImages.length > 1 && (
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white/80 text-[10px] px-2 py-0.5 rounded-full">
        <Images className="h-2.5 w-2.5" />
        <span>{project.relatedImages.length}</span>
      </div>
    )}
    {/* Texto do projeto */}
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 md:p-5">
      {showCategory && (
        <span className="inline-block text-primary text-[10px] uppercase tracking-[0.14em] font-semibold mb-1.5">
          {CATEGORY_LABEL_BY_ID[project.category] ?? project.category}
        </span>
      )}
      <h3 className="text-[15px] md:text-base font-display font-semibold text-white leading-snug drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
        {cleanTitle(project.title)}
      </h3>
      {/* Hint de galeria — aparece no hover */}
      <p className="flex items-center gap-1 text-white/60 text-[11px] mt-2 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <Images className="h-3 w-3" />
        ver galeria
      </p>
    </div>
  </div>
);

const ProjetosGaleria = () => {
  const [searchParams] = useSearchParams();
  const isMobile = useIsMobile();

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("todos");
  const [isStackOpen, setIsStackOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [frontIndex, setFrontIndex] = useState<number>(0);

  const selectedCategoryFromQuery = searchParams.get("categoria");
  const searchTerm = (searchParams.get("s") ?? "").trim().toLowerCase();

  useEffect(() => {
    setActiveCategory(
      isProjectCategory(selectedCategoryFromQuery) ? selectedCategoryFromQuery : "todos"
    );
  }, [selectedCategoryFromQuery]);

  const filteredProjects = useMemo(() => {
    const projectsByCategory =
      activeCategory === "todos"
        ? PROJECT_GALLERY_ITEMS
        : PROJECT_GALLERY_ITEMS.filter((project) => project.category === activeCategory);

    if (!searchTerm) return projectsByCategory;

    return projectsByCategory.filter((project) =>
      `${project.title} ${project.description}`.toLowerCase().includes(searchTerm)
    );
  }, [activeCategory, searchTerm]);

  const selectedProject = useMemo(
    () =>
      selectedProjectId
        ? PROJECT_GALLERY_ITEMS.find((project) => project.id === selectedProjectId)
        : undefined,
    [selectedProjectId]
  );

  const selectedImagesCount = useMemo(
    () => selectedProject?.relatedImages?.length ?? 0,
    [selectedProject]
  );

  useEffect(() => {
    if (!isStackOpen) return;
    setFrontIndex(0);
  }, [isStackOpen, selectedProjectId]);

  const goPrev = () => {
    if (!selectedImagesCount) return;
    setFrontIndex((prev) => (prev - 1 + selectedImagesCount) % selectedImagesCount);
  };

  const goNext = () => {
    if (!selectedImagesCount) return;
    setFrontIndex((prev) => (prev + 1) % selectedImagesCount);
  };

  /** Quando em "todos", agrupa por categoria para evitar repetição de badges. */
  const groupedProjects = useMemo(() => {
    if (activeCategory !== "todos") return null;
    const groups = new Map<string, typeof filteredProjects>();
    for (const project of filteredProjects) {
      const group = groups.get(project.category) ?? [];
      group.push(project);
      groups.set(project.category, group);
    }
    return Array.from(groups.entries()).map(([categoryId, items]) => ({
      categoryId,
      label: CATEGORY_LABEL_BY_ID[categoryId] ?? categoryId,
      items,
    }));
  }, [activeCategory, filteredProjects]);

  return (
    <Layout>
      {/* Hero compacto + filtros integrados */}
      <section className="bg-card/50 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-5 md:pt-10 md:pb-0">
          <p className="text-primary text-[11px] uppercase tracking-[0.16em] font-medium">
            Portfólio
          </p>
          <h1 className="text-2xl md:text-3xl font-display font-semibold mt-2 text-foreground">
            Projetos que{" "}
            <span className="text-primary">transformam espaços</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1.5 max-w-xl">
            Ambientes planejados com design, funcionalidade e acabamento de alto padrão.
          </p>
        </div>

        {/* Filtros — continuação natural do header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          {searchTerm && (
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
              Resultados para{" "}
              <span className="text-foreground font-medium">"{searchTerm}"</span>
            </p>
          )}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORY_BUTTONS.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as CategoryFilter)}
                className={cn(
                  "px-5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-sm transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                )}
              >
                {category.label}
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* Grid de Projetos */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8">
        <div className="max-w-6xl mx-auto">

          {/* Modo "Todos" — agrupado por categoria */}
          {groupedProjects ? (
            <div className="space-y-8">
              {groupedProjects.map(({ categoryId, label, items }) => (
                <div key={categoryId}>
                  {/* Divisor de categoria — discreto */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] uppercase tracking-[0.16em] font-semibold text-muted-foreground">
                      {label}
                    </span>
                    <span className="flex-1 h-px bg-border/60" />
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {items.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        isAboveFold={index < 3}
                        showCategory={false}
                        onOpen={() => {
                          setSelectedProjectId(project.id);
                          setIsStackOpen(true);
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
              {groupedProjects.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">Nenhum projeto encontrado.</p>
                </div>
              )}
            </div>
          ) : (
            /* Modo filtro específico — grid plano, sem badge de categoria */
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isAboveFold={index < 3}
                  showCategory={false}
                  onOpen={() => {
                    setSelectedProjectId(project.id);
                    setIsStackOpen(true);
                  }}
                />
              ))}
              {filteredProjects.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <p className="text-muted-foreground">Nenhum projeto encontrado nesta categoria.</p>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      <Dialog
        open={isStackOpen}
        onOpenChange={(open) => {
          setIsStackOpen(open);
          if (!open) setSelectedProjectId(null);
        }}
      >
        <DialogContent className="w-[92vw] max-w-6xl max-h-[90vh] overflow-hidden border-white/15 bg-[#111111] p-0 text-white sm:rounded-2xl [&>button]:right-4 [&>button]:top-4 [&>button]:h-12 [&>button]:w-12 [&>button]:rounded-full [&>button]:border [&>button]:border-white/25 [&>button]:bg-white/15 [&>button]:p-0 [&>button]:text-white [&>button]:opacity-100 [&>button]:shadow-[0_8px_24px_rgba(0,0,0,0.35)] [&>button]:backdrop-blur-[4px] [&>button]:transition-all [&>button]:duration-200 [&>button]:inline-flex [&>button]:items-center [&>button]:justify-center [&>button>svg]:h-5 [&>button>svg]:w-5 [&>button:hover]:scale-110 [&>button:hover]:bg-white/30">
          <div className="flex h-full max-h-[90vh] flex-col p-4 sm:p-5">
            <DialogTitle
              className="pr-16 text-left font-display font-semibold leading-tight text-white"
              style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
            >
              {selectedProject?.title ?? "Imagens do projeto"}
            </DialogTitle>

            {selectedProject && (
              <div className="relative mt-4 flex min-h-0 flex-1 items-center justify-center rounded-xl bg-[#0a0a0a] p-4">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={goPrev}
                  aria-label="Imagem anterior"
                  className={cn(modalControlButtonClass, "absolute left-4 top-1/2 z-30 -translate-y-1/2")}
                >
                  <ChevronLeft className="h-6 w-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]" />
                </Button>

                <div className="flex h-full w-full items-center justify-center">
                  <CardStack3D
                    images={selectedProject.relatedImages}
                    cardWidth={isMobile ? 300 : 700}
                    cardHeight={isMobile ? 190 : 430}
                    spacing={isMobile ? { x: 0, y: 24 } : { x: 60, y: 40 }}
                    adjacentMode="hidden"
                    frontIndex={frontIndex}
                    onFrontIndexChange={(idx) => setFrontIndex(idx ?? 0)}
                    allowDeselect={false}
                  />
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={goNext}
                  aria-label="Proxima imagem"
                  className={cn(modalControlButtonClass, "absolute right-4 top-1/2 z-30 -translate-y-1/2")}
                >
                  <ChevronRight className="h-6 w-6 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]" />
                </Button>
              </div>
            )}

            <p className="mt-3 text-center text-[13px] text-white/45">
              Clique nas imagens para destacar ou use as setas.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default ProjetosGaleria;
