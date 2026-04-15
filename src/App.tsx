import { useEffect } from "react";
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

const Index = lazy(() => import("./pages/Index"));
const Sobre = lazy(() => import("./pages/Sobre"));
const WhiteLabel = lazy(() => import("./pages/WhiteLabel"));
const ProjetosGaleria = lazy(() => import("./pages/ProjetosGaleria"));
const Contato = lazy(() => import("./pages/Contato"));
const SejaParceiro = lazy(() => import("./pages/SejaParceiro"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Busca = lazy(() => import("./pages/Busca"));
const TrabalheConosco = lazy(() => import("./pages/TrabalheConosco"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Cookies = lazy(() => import("./pages/Cookies"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <span className="text-sm uppercase tracking-widest text-muted-foreground">Carregando</span>
  </div>
);

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search, location.hash]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/estrutura" element={<Navigate to="/sobre" replace />} />
              <Route path="/white-label" element={<WhiteLabel />} />
              <Route path="/projetos" element={<ProjetosGaleria />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/seja-parceiro" element={<SejaParceiro />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/busca" element={<Busca />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
              <Route path="/representantes" element={<Navigate to="/seja-parceiro" replace />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
