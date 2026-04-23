import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoMbarros from "@/assets/logo-mbarros.png";
import { useTranslation } from "react-i18next";

const GOOGLE_SHARE_MAP_URL = "https://share.google/pd4EntLe3cMk1VBr4";
const OSM_EMBED_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=-34.9189%2C-7.9385%2C-34.8989%2C-7.9285&layer=mapnik&marker=-7.9335%2C-34.9089";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [mapHovered, setMapHovered] = useState(false);

  return (
    <footer className="relative bg-background pb-8 md:pb-10">
      {/* top accent line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, hsl(var(--primary)/0.55) 30%, hsl(var(--primary)/0.55) 70%, transparent 100%)",
          boxShadow: "0 0 8px 1px hsl(var(--primary)/0.18)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 pt-12 md:pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1.2fr] mb-10 md:mb-14">

          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-block transition-opacity hover:opacity-80">
              <img
                src={logoMbarros}
                alt="MBarros"
                className="h-9 w-auto object-contain dark:brightness-0 dark:invert transition-all duration-300"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[22rem]">
              {t("footer.sobreText")}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/industriambarros/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100068117982176"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-sm bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-foreground text-xs font-bold uppercase tracking-[0.18em] mb-6 text-primary">
              {t("footer.links")}
            </h3>
            <ul className="space-y-3">
              {[
                { name: t("header.sobre"), path: "/sobre" },
                { name: t("header.projetos"), path: "/projetos" },
                { name: "Estrutura", path: "/estrutura" },
                { name: t("header.sejaParceiro"), path: "/seja-parceiro" },
                { name: t("header.blog"), path: "/blog" },
                { name: t("header.contato"), path: "/contato" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary text-sm flex items-center gap-2.5 transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground text-xs font-bold uppercase tracking-[0.18em] mb-6 text-primary">
              {t("footer.contato")}
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:comercial@mbarrosind.com.br"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail size={16} className="mt-0.5 text-primary/60 group-hover:text-primary transition-colors shrink-0" />
                  <span className="text-sm">comercial@mbarrosind.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5581985592995"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone size={16} className="mt-0.5 text-primary/60 group-hover:text-primary transition-colors shrink-0" />
                  <span className="text-sm">(81) 98559-2995</span>
                </a>
              </li>
              <li className="relative">
                <a
                  href={GOOGLE_SHARE_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  onMouseEnter={() => setMapHovered(true)}
                  onMouseLeave={() => setMapHovered(false)}
                >
                  <MapPin size={16} className="mt-0.5 text-primary/60 group-hover:text-primary transition-colors shrink-0" />
                  <span className="text-sm leading-relaxed group-hover:underline underline-offset-4">
                    Av. Benjamim, nº 205<br />
                    Fragoso — Paulista, PE<br />
                    CEP 53402-010
                  </span>
                </a>

                {/* Map tooltip */}
                <AnimatePresence>
                  {mapHovered && (
                    <motion.div
                      className="absolute bottom-full left-0 mb-3 z-50 rounded-sm overflow-hidden border border-border shadow-xl pointer-events-none"
                      style={{ width: 260, height: 160 }}
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <iframe
                        src={OSM_EMBED_URL}
                        width="260"
                        height="160"
                        style={{ border: 0 }}
                        loading="lazy"
                        title="Localização MBarros"
                        sandbox="allow-scripts allow-same-origin"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/60 pt-6 md:pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-muted-foreground/70 text-xs text-center sm:text-left">
            &copy; {currentYear} MBarros Indústria de Móveis. {t("footer.direitos")}.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground/70">
            <Link to="/cookies" className="hover:text-primary transition-colors">
              Políticas de Cookies
            </Link>
            <span className="w-px h-3 bg-border" />
            <Link to="/contato" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

