import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { CardStack3D } from "@/components/ui/3d-flip-card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { normalizeSearchQuery } from "@/lib/search";
import { projectCategories as categories, projects } from "@/lib/project-data";

const Projetos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("todos");
  const isMobile = useIsMobile();
  const [isStackOpen, setIsStackOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [frontIndex, setFrontIndex] = useState<number>(0);
  const searchTerm = searchParams.get("s") ?? "";

  const filteredProjects = useMemo(() => {
    const normalizedSearchTerm = normalizeSearchQuery(searchTerm);

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "todos" || project.category === activeCategory;

      if (!matchesCategory) {
        return false;
      }

      if (!normalizedSearchTerm) {
        return true;
      }

      const categoryLabel = categories.find((category) => category.id === project.category)?.label ?? "";
      const searchableContent = normalizeSearchQuery(
        `${project.title} ${project.description} ${categoryLabel}`
      );

      return searchableContent.includes(normalizedSearchTerm);
    });
  }, [activeCategory, searchTerm]);

  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId)
    : undefined;

  const selectedImagesCount = useMemo(
    () => selectedProject?.relatedImages?.length ?? 0,
    [selectedProject]
  );

  useEffect(() => {
    if (!isStackOpen) return;
    setFrontIndex(0);
  }, [isStackOpen, selectedProjectId]);

  useEffect(() => {
    const requestedCategory = searchParams.get("categoria");
    const categoryExists = categories.some((category) => category.id === requestedCategory);

    setActiveCategory(categoryExists && requestedCategory ? requestedCategory : "todos");
  }, [searchParams]);

  const handleCategoryChange = (categoryId: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (categoryId === "todos") {
      nextParams.delete("categoria");
    } else {
      nextParams.set("categoria", categoryId);
    }

    setSearchParams(nextParams);
  };

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
      {/* Hero */}
      <section className="bg-card/60 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <p className="text-primary text-[11px] uppercase tracking-[0.16em] font-medium">
            Portfólio
          </p>
          <h1 className="text-2xl md:text-3xl font-display font-semibold mt-2 text-foreground">
            Projetos que transformam espaços
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-2xl">
            Conheça alguns dos ambientes produzidos pela MBarros com design, funcionalidade e acabamento de alto padrão.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          {searchTerm && (
            <div className="mb-6 text-center">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                Resultados para <span className="text-foreground font-medium">{searchTerm}</span>
              </p>
            </div>
          )}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
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

      {/* Projects Grid */}
      <section className="section-container pt-8 md:pt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
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
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                </button>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent" />
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-primary text-xs uppercase tracking-wider drop-shadow-sm">
                    {categories.find((c) => c.id === project.category)?.label}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground mt-1 drop-shadow-sm">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum projeto encontrado com os filtros atuais.
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
        <DialogContent className="max-w-5xl p-4 sm:p-6">
          <div className="space-y-4">
            <DialogTitle className="font-display font-semibold">
              {selectedProject?.title ?? "Imagens do projeto"}
            </DialogTitle>

            {selectedProject && (
              <div className="flex justify-center items-center py-6">
                <div className="w-full">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={goPrev}
                      aria-label="Imagem anterior"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <p className="text-muted-foreground text-sm text-center flex-1">
                      Navegue pelas imagens do projeto
                    </p>

                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={goNext}
                      aria-label="Próxima imagem"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex justify-center">
                    <CardStack3D
                      images={selectedProject.relatedImages}
                      cardWidth={isMobile ? 280 : 540}
                      cardHeight={isMobile ? 180 : 320}
                      spacing={isMobile ? { x: 0, y: 34 } : { x: 70, y: 50 }}
                      frontIndex={frontIndex}
                      onFrontIndexChange={(idx) => setFrontIndex(idx ?? 0)}
                      allowDeselect={false}
                    />
                  </div>
                </div>
              </div>
            )}

            <p className="text-muted-foreground text-sm">
              Clique nas imagens para destacar ou use as setas.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Projetos;
