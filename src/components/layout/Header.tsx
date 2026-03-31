import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoMbarros from "@/assets/logo-mbarros.png";
import {
  HoveredLink,
  Menu as NavbarMenu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { getCategoryCover } from "@/lib/project-images";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SiteSearch } from "@/components/search/SiteSearch";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: t("header.sobre"), path: "/sobre" },
    { label: "White Label", path: "/white-label" },
    { label: t("header.projetos"), path: "/projetos" },
    { label: t("header.blog"), path: "/blog" },
    { label: t("header.contato"), path: "/contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span
                className="relative block h-12 w-[11.25rem] md:h-14 md:w-[13.125rem] lg:h-16 lg:w-[15rem]"
                aria-label="MBarros Indústria"
              >
                <img
                  src={logoMbarros}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-contain dark:hidden"
                />
                <span className="hidden dark:block">
                  <img
                    src={logoMbarros}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-contain [clip-path:inset(0_49%_0_0)]"
                  />
                  <img
                    src={logoMbarros}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-contain [clip-path:inset(0_0_0_49%)] brightness-0 invert"
                  />
                </span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation (centralizado) */}
          <div className="hidden lg:flex justify-center">
            <NavbarMenu
              setActive={setActive}
              active={active !== null}
              className="rounded-full bg-background/95 backdrop-blur-sm border border-border shadow-sm px-6 py-3"
            >
              <Link
                to="/sobre"
                onMouseEnter={() => setActive(null)}
                className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === "/sobre" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t("header.sobre")}
              </Link>

              <Link
                to="/white-label"
                onMouseEnter={() => setActive(null)}
                className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === "/white-label" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                White Label
              </Link>

              <MenuItem
                setActive={setActive}
                active={active}
                item={t("header.projetos")}
                to="/projetos"
                labelClassName={
                  location.pathname === "/projetos" ? "text-primary" : undefined
                }
              >
                <div className="text-sm grid grid-cols-2 gap-4 p-1">
                  <ProductItem
                    title="Residenciais"
                    to="/projetos?categoria=residenciais"
                    src={getCategoryCover("residenciais").src}
                    description="Cozinhas, dormitórios e ambientes completos."
                  />
                  <ProductItem
                    title="Corporativos"
                    to="/projetos?categoria=corporativos"
                    src={getCategoryCover("corporativos").src}
                    description="Escritórios, recepções e salas de reunião."
                  />
                  <ProductItem
                    title="Especiais"
                    to="/projetos?categoria=especiais"
                    src={getCategoryCover("especiais").src}
                    description="Soluções sob medida para cada necessidade."
                  />
                  <ProductItem
                    title="Ver todos"
                    to="/projetos"
                    src={getCategoryCover("corporativos").src}
                    description="Conheça o portfólio completo."
                  />
                </div>
              </MenuItem>

              <Link
                to="/blog"
                onMouseEnter={() => setActive(null)}
                className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 hover:text-primary ${
                  location.pathname === "/blog" ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {t("header.blog")}
              </Link>

              <MenuItem
                setActive={setActive}
                active={active}
                item={t("header.contato")}
                to="/contato"
                labelClassName={
                  location.pathname === "/contato" ? "text-primary" : undefined
                }
              >
                <div className="flex flex-col space-y-3 text-sm">
                  <HoveredLink to="/contato">{t("header.faleComEquipe")}</HoveredLink>
                  <HoveredLink to="/trabalhe-conosco">{t("header.trabalheConosco")}</HoveredLink>
                  <HoveredLink to="/seja-parceiro">{t("header.sejaParceiro")}</HoveredLink>
                </div>
              </MenuItem>
            </NavbarMenu>
          </div>

          {/* CTA Button (direita, desktop) */}
          <div className="hidden lg:flex items-center justify-end gap-3">
            <SiteSearch
              className="w-full max-w-[13.5rem] xl:max-w-[15rem]"
              inputClassName="text-xs"
              placeholder={t("header.busque")}
              compact
              subtle
              collapsible
            />
            <LanguageSwitcher compact />
            <ThemeToggle />
            <Button variant="hero" asChild>
              <Link to="/seja-parceiro">{t("header.sejaParceiro")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <SiteSearch
                placeholder={t("header.busque")}
                compact
                subtle
                formClassName="rounded-full px-2"
                hideDefaultSuggestions
              />

              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm uppercase tracking-wider font-medium py-2 transition-colors duration-300 hover:text-primary ${
                    location.pathname === item.path 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-2 flex items-center justify-between">
                <span className="text-sm uppercase tracking-wider font-medium text-muted-foreground">
                  {t("header.idioma")}
                </span>
                <LanguageSwitcher compact />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-sm uppercase tracking-wider font-medium text-muted-foreground">
                  {t("header.tema")}
                </span>
                <ThemeToggle />
              </div>

              <Button variant="hero" className="mt-4" asChild>
                <Link to="/seja-parceiro" onClick={() => setIsMenuOpen(false)}>
                  {t("header.sejaParceiro")}
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
