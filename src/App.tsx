import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import WhiteLabel from "./pages/WhiteLabel";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import SejaParceiro from "./pages/SejaParceiro";
import Blog from "./pages/Blog";
import TrabalheConosco from "./pages/TrabalheConosco";
import NotFound from "./pages/NotFound";
import Cookies from "./pages/Cookies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/estrutura" element={<Navigate to="/sobre" replace />} />
            <Route path="/white-label" element={<WhiteLabel />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/seja-parceiro" element={<SejaParceiro />} />
            <Route path="/blog" element={<Blog />} />
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
