import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

const modalControlButtonClass =
  "h-12 w-12 min-h-12 min-w-12 rounded-full border border-white/25 bg-white/15 text-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-[4px] transition-all duration-200 hover:scale-110 hover:bg-white/30 focus-visible:ring-2 focus-visible:ring-white/70";

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

  return (
    <Layout>
      <section className="section-container bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Portfolio
          </span>
          <h1 className="section-title mt-4">
            Projetos que <span className="text-gradient">transformam espacos</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4">
            Galeria atualizada a partir das pastas de projetos com imagens reais.
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORY_BUTTONS.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as CategoryFilter)}
                className={cn(
                  "px-6 py-2 text-sm font-medium uppercase tracking-wider rounded-sm transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => {
              const isAboveFold = index < 3;
              return (
              <div
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-secondary"
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProjectId(project.id);
                    setIsStackOpen(true);
                  }}
                  className="absolute inset-0 z-10"
                  aria-label={`Ver imagens relacionadas: ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    width={project.imageWidth ?? 600}
                    height={project.imageHeight ?? 450}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                    loading={isAboveFold ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="async"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </button>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs uppercase tracking-wider drop-shadow-sm">
                    {CATEGORY_LABEL_BY_ID[project.category] ?? project.category}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground mt-1 drop-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>
                </div>
              </div>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum projeto encontrado nesta categoria.
              </p>
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
