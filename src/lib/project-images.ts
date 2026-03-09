import type { CardImage } from "@/components/ui/3d-flip-card";

export type ProjectCategory = "residenciais" | "corporativos" | "especiais";

// High-resolution stock images (Unsplash). Kept as direct image CDN URLs.
// Note: `w=2400` is used for large displays; the browser will downscale as needed.
export const PROJECT_CATEGORY_IMAGES: Record<ProjectCategory, CardImage[]> = {
  residenciais: [
    {
      src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=2400&q=80",
      alt: "Cozinha planejada - projeto residencial",
    },
    {
      src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2400&q=80",
      alt: "Dormitório planejado - projeto residencial",
    },
    {
      src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2400&q=80",
      alt: "Área gourmet planejada - projeto residencial",
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2400&q=80",
      alt: "Closet sob medida - projeto residencial",
    },
    {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80",
      alt: "Home office planejado - projeto residencial",
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2400&q=80",
      alt: "Sala de estar planejada - projeto residencial",
    },
  ],
  corporativos: [
    {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2400&q=80",
      alt: "Escritório moderno - projeto corporativo",
    },
    {
      src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=80",
      alt: "Sala de reunião - projeto corporativo",
    },
    {
      src: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=2400&q=80",
      alt: "Recepção corporativa - projeto corporativo",
    },
    {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80",
      alt: "Ambiente profissional planejado - projeto corporativo",
    },
    {
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2400&q=80",
      alt: "Equipe em ambiente corporativo - projeto corporativo",
    },
    {
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2400&q=80",
      alt: "Estação de trabalho corporativa - projeto corporativo",
    },
  ],
  especiais: [
    {
      src: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=2400&q=80",
      alt: "Projeto comercial - mobiliário especial",
    },
    {
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=2400&q=80",
      alt: "Ambiente planejado personalizado - projeto especial",
    },
    {
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=2400&q=80",
      alt: "Projeto sob medida - soluções especiais",
    },
    {
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80",
      alt: "Espaço comercial com marcenaria planejada - projeto especial",
    },
    {
      src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=2400&q=80",
      alt: "Cozinha de alto padrão - projeto especial",
    },
    {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80",
      alt: "Ambiente sob medida - projeto especial",
    },
  ],
};

export const getCategoryCover = (category: ProjectCategory) =>
  PROJECT_CATEGORY_IMAGES[category][0];
