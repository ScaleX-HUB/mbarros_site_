import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import WhiteLabel from "./pages/WhiteLabel";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import SejaParceiro from "./pages/SejaParceiro";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TrabalheConosco from "./pages/TrabalheConosco";
import NotFound from "./pages/NotFound";
import Cookies from "./pages/Cookies";
import Busca from "./pages/Busca";

const queryClient = new QueryClient();

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

const ScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );

    const timer = setTimeout(() => {
      const vh = window.innerHeight;

      document.querySelectorAll("section").forEach((section) => {
        const container =
          (section.querySelector(":scope > div") as HTMLElement) ?? section;

        let stagger = 0;
        Array.from(container.children).forEach((child) => {
          const el = child as HTMLElement;
          const rect = el.getBoundingClientRect();
          if (rect.top > vh * 0.9) {
            el.classList.add("reveal-item");
            el.style.transitionDelay = `${stagger * 100}ms`;
            observer.observe(el);
            stagger++;
          }
        });
      });
    }, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      document.querySelectorAll(".reveal-item").forEach((el) => {
        el.classList.remove("reveal-item", "reveal-visible");
        (el as HTMLElement).style.transitionDelay = "";
      });
    };
  }, [location.pathname]);

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
          <ScrollReveal />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/estrutura" element={<Navigate to="/sobre" replace />} />
            <Route path="/white-label" element={<Navigate to="/parceiro" replace />} />
            <Route path="/parceiro" element={<WhiteLabel />} />
            <Route path="/projetos" element={<Projetos />} />
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
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
