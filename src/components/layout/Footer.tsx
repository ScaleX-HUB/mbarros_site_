import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook, LayoutDashboard } from "lucide-react";
import logoMbarros from "@/assets/logo-mbarros.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="space-y-6">
            <Link to="/" className="inline-block transition-opacity hover:opacity-80">
              <img src={logoMbarros} alt="MBarros" className="h-10 w-auto object-contain dark:brightness-0 dark:invert transition-all duration-300" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {t("footer.sobreText")}
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/mbarros.mrp" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-semibold font-display mb-6 tracking-wide flex items-center gap-2">
              <LayoutDashboard size={18} className="text-primary"/>
              {t("footer.links")}
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: t("header.sobre"), path: "/sobre" },
                { name: t("header.projetos"), path: "/projetos" },
                { name: "Estrutura", path: "/estrutura" },
                { name: t("header.sejaParceiro"), path: "/seja-parceiro" },
                { name: t("header.blog"), path: "/blog" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2 transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-foreground font-semibold font-display mb-6 tracking-wide">{t("footer.contato")}</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:contato@mbarros.com.br" className="flex items-start gap-3.5 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail size={18} className="mt-0.5 text-primary/70 group-hover:text-primary transition-colors" />
                  <span className="text-sm">contato@mbarros.com.br</span>
                </a>
              </li>
              <li>
                <a href="tel:+5581985592995" className="flex items-start gap-3.5 text-muted-foreground hover:text-primary transition-colors group">
                  <Phone size={18} className="mt-0.5 text-primary/70 group-hover:text-primary transition-colors" />
                  <span className="text-sm">(81) 98559-2995</span>
                </a>
              </li>
              <li className="flex items-start gap-3.5 text-muted-foreground">
                <MapPin size={18} className="mt-0.5 text-primary/70" />
                <span className="text-sm leading-relaxed">
                  Rua da Ind�stria, 123<br />
                  Distrito Industrial<br />
                  Pernambuco, PE
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-foreground font-semibold font-display mb-6 tracking-wide">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Receba novidades e tend�ncias do mercado moveleiro.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full bg-secondary border-none rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-shadow"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-sm rounded-sm px-4 py-3 transition-colors"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {currentYear} MBARROS {t("footer.direitos")}.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/cookies" className="hover:text-primary transition-colors hover:underline underline-offset-4">
              Pol�ticas de Cookies
            </Link>
            <a href="#" className="hover:text-primary transition-colors hover:underline underline-offset-4">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

