import { useState } from "react";

import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { MBARROS_IMAGES } from "@/lib/mbarros-images";
import { cn } from "@/lib/utils";

export function NavbarMenuDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-foreground">O menu aparece no topo.</p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu
        setActive={setActive}
        active={active !== null}
        className="rounded-full bg-background/95 backdrop-blur-sm border border-border shadow-sm px-8 py-4"
      >
        <MenuItem setActive={setActive} active={active} item="Serviços">
          <div className="flex flex-col space-y-3 text-sm">
            <HoveredLink to="/white-label">White Label</HoveredLink>
            <HoveredLink to="/estrutura">Estrutura Fabril</HoveredLink>
            <HoveredLink to="/sobre">Sobre a Indústria</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Projetos">
          <div className="text-sm grid grid-cols-2 gap-4 p-1">
            <ProductItem
              title="Residenciais"
              to="/projetos?categoria=residenciais"
              src={MBARROS_IMAGES[3]?.src ?? ""}
              description="Cozinhas, quartos e ambientes completos."
            />
            <ProductItem
              title="Corporativos"
              to="/projetos?categoria=corporativos"
              src={MBARROS_IMAGES[1]?.src ?? ""}
              description="Escritórios e espaços profissionais."
            />
            <ProductItem
              title="Especiais"
              to="/projetos?categoria=especiais"
              src={MBARROS_IMAGES[2]?.src ?? ""}
              description="Soluções sob medida para cada caso."
            />
            <ProductItem
              title="Ver todos"
              to="/projetos"
              src={MBARROS_IMAGES[0]?.src ?? ""}
              description="Conheça o portfólio completo."
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contato">
          <div className="flex flex-col space-y-3 text-sm">
            <HoveredLink to="/contato">Fale com a equipe</HoveredLink>
            <HoveredLink to="/seja-parceiro">Seja um Parceiro</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
