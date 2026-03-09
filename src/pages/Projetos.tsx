import { useEffect, useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";
import { CardStack3D } from "@/components/ui/3d-flip-card";
import { PROJECT_CATEGORY_IMAGES } from "@/lib/project-images";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "residenciais", label: "Residenciais" },
  { id: "corporativos", label: "Corporativos" },
  { id: "especiais", label: "Especiais" },
];

// Placeholder projects - substituir por dados reais
const projects = [
  {
    id: 1,
    title: "Cozinha Moderna",
    category: "residenciais",
    image:
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=2400&q=80",
    description: "Cozinha planejada com acabamento em laca e detalhes em alumínio.",
    relatedImages: PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 2,
    title: "Escritório Executivo",
    category: "corporativos",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80",
    description: "Ambiente corporativo com móveis funcionais e design contemporâneo.",
    relatedImages: PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 3,
    title: "Closet Premium",
    category: "residenciais",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2400&q=80",
    description: "Closet sob medida com iluminação integrada e organização inteligente.",
    relatedImages: PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 4,
    title: "Recepção Corporativa",
    category: "corporativos",
    image:
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=2400&q=80",
    description: "Balcão de recepção com design marcante e acabamento premium.",
    relatedImages: PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 5,
    title: "Quarto de Casal",
    category: "residenciais",
    image:
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2400&q=80",
    description: "Dormitório completo com cabeceira estofada e armários planejados.",
    relatedImages: PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 6,
    title: "Loja de Varejo",
    category: "especiais",
    image:
      "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=2400&q=80",
    description: "Projeto comercial personalizado para exposição de produtos.",
    relatedImages: PROJECT_CATEGORY_IMAGES.especiais,
  },
  {
    id: 7,
    title: "Home Office",
    category: "residenciais",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80",
    description: "Espaço de trabalho residencial com design ergonômico.",
    relatedImages: PROJECT_CATEGORY_IMAGES.residenciais,
  },
  {
    id: 8,
    title: "Sala de Reuniões",
    category: "corporativos",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=80",
    description: "Mobiliário para sala de reuniões com recursos audiovisuais.",
    relatedImages: PROJECT_CATEGORY_IMAGES.corporativos,
  },
  {
    id: 9,
    title: "Espaço Gourmet",
    category: "especiais",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2400&q=80",
    description: "Área gourmet completa com churrasqueira e bancadas.",
    relatedImages: PROJECT_CATEGORY_IMAGES.especiais,
  },
];

const Projetos = () => {
  const [activeCategory, setActiveCategory] = useState("todos");
  const isMobile = useIsMobile();
  const [isStackOpen, setIsStackOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [frontIndex, setFrontIndex] = useState<number>(0);

  const filteredProjects = activeCategory === "todos"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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
      <section className="section-container bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Portfólio
          </span>
          <h1 className="section-title mt-4">
            Projetos que <span className="text-gradient">transformam espaços</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4">
            Conheça alguns dos ambientes produzidos pela MBarros. 
            Design, funcionalidade e acabamento de alto padrão.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
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
      <section className="section-container">
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
