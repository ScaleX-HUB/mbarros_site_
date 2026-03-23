import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";
import logoMbarros from "@/assets/logo-mbarros.png";
import { Button } from "@/components/ui/button";
import { getCookieConsent, onCookieConsentChange, requestCookieConsentReview } from "@/lib/cookie-consent";

const Footer = () => {
  const [canLoadMap, setCanLoadMap] = useState(false);

  const mapQuery = useMemo(
    () => "Av. Benjamim, nº 205, Fragoso – Paulista, PE, CEP 53402-010",
    [],
  );

  const mapEmbedUrl = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`,
    [mapQuery],
  );

  const mapLinkUrl = useMemo(
    () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`,
    [mapQuery],
  );

  useEffect(() => {
    const existing = getCookieConsent();
    setCanLoadMap(Boolean(existing?.marketing || existing?.analytics));
    return onCookieConsentChange((prefs) => {
      setCanLoadMap(Boolean(prefs.marketing || prefs.analytics));
    });
  }, []);

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-6">
            <img 
              src={logoMbarros} 
              alt="MBarros Indústria" 
              className="h-10 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Estrutura industrial para marcas que querem crescer. Indústria de móveis planejados especializada em White Label para lojistas de alto padrão.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/mbarrosind" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com/company/mbarros-industria-de-moveis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/sobre" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Sobre a Indústria
              </Link>
              <Link to="/estrutura" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Estrutura Fabril
              </Link>
              <Link to="/white-label" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                White Label
              </Link>
              <Link to="/projetos" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Projetos
              </Link>
              <Link to="/blog" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          {/* Institucional */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">Institucional</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/seja-parceiro" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Seja um Parceiro
              </Link>
              <Link to="/trabalhe-conosco" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Trabalhe Conosco
              </Link>
              <Link to="/representantes" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Representantes
              </Link>
              <Link to="/contato" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Contato
              </Link>
              <Link to="/cookies" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Política de Cookies
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-foreground font-display font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:5581985592995" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  (81) 98559-2995
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:comercial@mbarrosind.com.br" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  comercial@mbarrosind.com.br
                </a>
              </div>

              <div className="pt-2">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm">
                    Av. Benjamim, nº 205<br />
                    Fragoso – Paulista, PE<br />
                    CEP 53402-010
                  </p>
                </div>

                <div className="mt-3 overflow-hidden rounded-sm border border-border bg-background/40">
                  {canLoadMap ? (
                    <iframe
                      title="Localização da fábrica no Google Maps"
                      src={mapEmbedUrl}
                      className="h-36 w-full opacity-90"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  ) : (
                    <div className="p-3">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Para carregar o mapa, habilite cookies opcionais.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <a href={mapLinkUrl} target="_blank" rel="noopener noreferrer">
                            Abrir no Google Maps
                          </a>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => requestCookieConsentReview()}
                        >
                          Preferências de cookies
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} MBarros Indústria. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              100% Pernambucana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
