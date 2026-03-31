import { useState } from "react";
import { useTranslation } from "react-i18next";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { toast } from "sonner";

const GOOGLE_SHARE_MAP_URL = "https://share.google/pd4EntLe3cMk1VBr4";
const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Av.%20Benjamim,%20205,%20Fragoso,%20Paulista%20-%20PE,%2053402-010&output=embed";
const WHATSAPP_URL =
  "https://wa.me/5581985592995?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20MBarros.";

const Contato = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success(t("contato.form.success"));
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      empresa: "",
      mensagem: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card/60 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
          <p className="text-primary text-[11px] uppercase tracking-[0.16em] font-medium">
            Atendimento Comercial
          </p>
          <h1 className="text-2xl md:text-3xl font-display font-semibold mt-2 text-foreground">
            Fale conosco
          </h1>
          <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-2xl">
            Tire dúvidas, solicite informações e fale com o time MBARROS.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-container pt-8 md:pt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-8 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-industrial">
                <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                  {t("contato.info.title1")} Contato
                </h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Escolha o canal mais conveniente para falar com o time MBARROS.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{t("contato.info.address")}</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Av. Benjamim, nº 205<br />
                        Fragoso – Paulista, PE<br />
                        CEP 53402-010
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Telefones</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        <a href="tel:5581985592995" className="hover:text-primary transition-colors">(81) 98559-2995</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">E-mail</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        <a href="mailto:comercial@mbarrosind.com.br" className="hover:text-primary transition-colors">
                          comercial@mbarrosind.com.br
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{t("contato.info.hours")}</h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-primary/35 bg-primary/10 px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/15"
                  >
                    <MessageCircle size={16} />
                    Falar no WhatsApp
                  </a>

                  <a
                    href={GOOGLE_SHARE_MAP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Navigation size={16} />
                    Como chegar
                  </a>
                </div>
              </div>

              <div className="card-industrial p-0 overflow-hidden">
                <div className="px-6 pt-6 pb-4">
                  <h3 className="text-lg font-display font-semibold text-foreground">Mapa da MBARROS</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Visualize a localização da fábrica e planeje sua visita com facilidade.
                  </p>
                </div>

                <div className="relative aspect-[16/10] border-y border-border">
                  <iframe
                    src={MAP_EMBED_URL}
                    title="Mapa da MBARROS"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full"
                    allowFullScreen
                  />
                </div>

                <div className="px-6 py-4 flex items-center justify-between gap-4">
                  <p className="text-xs text-muted-foreground">
                    Av. Benjamim, nº 205, Fragoso - Paulista, PE
                  </p>
                  <a
                    href={GOOGLE_SHARE_MAP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:opacity-80 transition-opacity"
                  >
                    Abrir no Google Maps
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card-industrial lg:sticky lg:top-28">
              <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                {t("contato.form.title1")} mensagem
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Conte um pouco do seu cenário e nossa equipe comercial retorna com o melhor direcionamento.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-foreground mb-2">
                      Empresa / Loja
                    </label>
                    <Input
                      id="empresa"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    required
                    rows={5}
                    className="bg-background"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar mensagem para o time MBARROS"}
                </Button>

                  <p className="text-xs text-muted-foreground text-center pt-1">
                    Ao enviar, você concorda em receber contato da equipe comercial.
                  </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
