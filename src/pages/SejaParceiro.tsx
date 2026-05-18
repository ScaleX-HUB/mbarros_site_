import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BrazilMap } from "@/components/ui/brazil-map";
import {
  ArrowRight,
  Check,
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
  "https://wa.me/5581985592995?text=Ol%C3%A1!%20Quero%20ser%20lojista%20MBarros.";

const requirements = [
  "Loja física ou showroom",
  "Experiência no segmento de móveis",
  "Equipe para vendas e projetos",
  "Interesse em crescer com produção industrial",
];

const retailerAdvantages = [
  {
    title: "Logística",
    description: "Menor custo de frete e menor tempo de entrega para lojistas da região.",
  },
  {
    title: "Diferença de ICMS",
    description: "6% na região Nordeste, contra 11% da região Sul.",
  },
  {
    title: "Suporte",
    description: "Suporte técnico interno, próximo e ágil.",
  },
  {
    title: "Tour na indústria",
    description: "Visita guiada à indústria para conhecer estrutura, processos e acabamento.",
  },
  {
    title: "Ecossistema de soluções",
    description: "Tudo integrado em um só lugar para simplificar a operação da loja.",
  },
  {
    title: "Sem royalties",
    description: "Sem pagamento de royalties.",
  },
  {
    title: "Treinamento especializado",
    description: "Treinamento completo para orientar sua equipe no uso do programa Promob.",
  },
  {
    title: "Produção eficiente",
    description: "Prazo de produção de apenas 20 dias úteis.",
  },
  {
    title: "Sem taxas",
    description: "Sem taxas de franquias.",
  },
];

const carouselImages = [
  {
    src: "/imagens_mbarros/lojistas/carrossel/hospitalar-1.jpg",
    title: "Projeto hospitalar",
    category: "Hospitalar",
  },
  {
    src: "/imagens_mbarros/lojistas/carrossel/hospitalar-2.jpg",
    title: "Ambiente clínico planejado",
    category: "Hospitalar",
  },
  {
    src: "/imagens_mbarros/lojistas/carrossel/hospitalar-3.jpg",
    title: "Mobiliário para saúde",
    category: "Hospitalar",
  },
  {
    src: "/imagens_mbarros/lojistas/carrossel/hospitalar-4.jpg",
    title: "Solução hospitalar sob medida",
    category: "Hospitalar",
  },
  {
    src: "/imagens_mbarros/lojistas/carrossel/residencial-1.jpg",
    title: "Projeto residencial",
    category: "Residencial",
  },
  {
    src: "/imagens_mbarros/lojistas/carrossel/residencial-2.jpg",
    title: "Ambiente residencial completo",
    category: "Residencial",
  },
  {
    src: "/imagens_mbarros/lojistas/carrossel/residencial-3.jpg",
    title: "Móveis planejados residenciais",
    category: "Residencial",
  },
  {
    src: "/imagens_mbarros/lojistas/carrossel/residencial-4.jpg",
    title: "Residencial alto padrão",
    category: "Residencial",
  },
  {
    src: "/imagens_mbarros/lojistas/carrossel/hotelaria-1.jpg",
    title: "Projeto de hotelaria",
    category: "Hotelaria",
  },
  {
    src: "/imagens_mbarros/lojistas/carrossel/hotelaria-2.jpg",
    title: "Ambiente hoteleiro planejado",
    category: "Hotelaria",
  },
  {
    src: "/imagens_mbarros/lojistas/carrossel/hotelaria-3.jpg",
    title: "Solução para hospedagem",
    category: "Hotelaria",
  },
  {
    src: "/imagens_mbarros/lojistas/carrossel/hotelaria-4.jpg",
    title: "Hotelaria com acabamento MBarros",
    category: "Hotelaria",
  },
];

const SejaParceiro = () => {
  const [formData, setFormData] = useState({
    nomeLoja: "",
    nomeResponsavel: "",
    email: "",
    telefone: "",
    cidade: "",
    estado: "",
    volumeMensal: "",
    tempoMercado: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Solicitação enviada! Nossa equipe entrará em contato em até 48 horas.");
    setFormData({
      nomeLoja: "",
      nomeResponsavel: "",
      email: "",
      telefone: "",
      cidade: "",
      estado: "",
      volumeMensal: "",
      tempoMercado: "",
      mensagem: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border/60 min-h-[430px] md:min-h-[540px] flex items-center">
        <img
          src="/imagens_mbarros/FOTO%20DA%20INDUSTRIA%20-%20ATUALIZADA%20(1).png"
          alt="Parque fabril MBarros em Pernambuco"
          className="absolute inset-0 h-full w-full object-cover object-[50%_72%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1
              className="font-display font-bold text-white leading-[1.04]"
              style={{ fontSize: "clamp(2.7rem, 7vw, 5.4rem)" }}
            >
              Seja um <span className="text-primary">Lojista</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed text-white/76">
              Venda móveis planejados com sua marca e conte com a estrutura industrial da
              MBarros por trás: produção eficiente, suporte técnico e logística pensada
              para o Nordeste.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#form-lojista"
                className="inline-flex items-center gap-2 bg-primary px-7 py-3 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Quero ser lojista <ArrowRight size={14} />
              </a>
              <a
                href="#contato-lojista"
                className="inline-flex items-center gap-2 border border-white/60 px-7 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10"
              >
                Falar com o comercial
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container pt-8 md:pt-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-primary text-[11px] uppercase tracking-[0.16em] font-medium">
                Projetos para lojistas
              </p>
              <h2 className="mt-2 text-2xl md:text-3xl font-display font-semibold text-foreground">
                Portfólio para vender melhor
              </h2>
            </div>
            <p className="max-w-xl text-sm text-muted-foreground leading-relaxed">
              Ambientes hospitalares, residenciais e de hotelaria mostram a variedade de
              soluções que sua loja pode oferecer com produção MBarros.
            </p>
          </div>

          <Carousel
            opts={{ align: "start", loop: true }}
            className="group/carousel"
            aria-label="Carrossel de projetos para lojistas"
          >
            <CarouselContent>
              {carouselImages.map((image) => (
                <CarouselItem key={image.src} className="md:basis-1/2 lg:basis-1/3">
                  <article className="group relative overflow-hidden rounded-sm border border-border bg-card">
                    <div className="aspect-video overflow-hidden bg-secondary">
                      <img
                        src={image.src}
                        alt={`${image.title} MBarros`}
                        width={1920}
                        height={1080}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                        {image.category}
                      </span>
                      <h3 className="mt-1 text-sm font-display font-semibold text-white">
                        {image.title}
                      </h3>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 top-1/2 hidden border-white/30 bg-white/20 text-white hover:bg-white/30 md:inline-flex" />
            <CarouselNext className="right-3 top-1/2 hidden border-white/30 bg-white/20 text-white hover:bg-white/30 md:inline-flex" />
          </Carousel>
        </div>
      </section>

      <section className="section-container pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 max-w-2xl">
            <p className="text-primary text-[11px] uppercase tracking-[0.16em] font-medium">
              Vantagens
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-display font-semibold text-foreground">
              Vantagens de ser um lojista MBarros
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {retailerAdvantages.map((advantage) => (
              <article
                key={advantage.title}
                className="rounded-sm border border-border bg-card/80 p-5 transition-colors hover:border-primary/35"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Check size={17} />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {advantage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container pt-0">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-primary text-[11px] uppercase tracking-[0.16em] font-medium">
              Atuação regional
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-display font-semibold text-foreground">
              Matriz em Pernambuco
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A MBarros nasceu em Pernambuco e atende lojistas com proximidade
              regional, operação industrial consistente e logística mais competitiva
              para o Nordeste.
            </p>
            <div className="mt-6 rounded-sm border border-border bg-card/80 p-5">
              <BrazilMap />
            </div>
          </div>

          <div className="card-industrial p-0 overflow-hidden">
            <div className="px-6 pt-6 pb-4">
              <h3 className="text-lg font-display font-semibold text-foreground">
                Mapa da MBARROS
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Av. Benjamim, nº 205, Fragoso - Paulista, PE.
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

            <div className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-muted-foreground">
                Matriz em Pernambuco, com operação voltada ao atendimento de lojistas.
              </p>
              <a
                href={GOOGLE_SHARE_MAP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-opacity hover:opacity-80"
              >
                Abrir no Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contato-lojista" className="section-container pt-0">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="space-y-6">
            <div className="card-industrial">
              <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                Fale com o comercial
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Tire dúvidas sobre o modelo de lojista e agende uma conversa com a equipe.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <MapPin size={19} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Endereço</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Av. Benjamim, nº 205
                      <br />
                      Fragoso - Paulista, PE
                      <br />
                      CEP 53402-010
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <Phone size={19} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Telefone</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <a href="tel:5581985592995" className="transition-colors hover:text-primary">
                        (81) 98559-2995
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <Mail size={19} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">E-mail</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <a
                        href="mailto:comercial@mbarrosind.com.br"
                        className="transition-colors hover:text-primary"
                      >
                        comercial@mbarrosind.com.br
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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

            <div className="card-industrial">
              <h2 className="text-xl font-display font-semibold text-foreground mb-2">
                Requisitos para lojistas
              </h2>
              <p className="text-sm text-muted-foreground mb-5">
                Estes critérios ajudam a garantir uma operação comercial e produtiva mais eficiente.
              </p>
              <ul className="space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div id="form-lojista" className="card-industrial">
            <h2 className="text-xl font-display font-semibold text-foreground mb-2">
              Formulário de Interesse
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Quanto mais detalhes você informar, melhor será nosso direcionamento comercial.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome da Loja *
                  </label>
                  <Input
                    value={formData.nomeLoja}
                    onChange={(e) => setFormData({ ...formData, nomeLoja: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome do Responsável *
                  </label>
                  <Input
                    value={formData.nomeResponsavel}
                    onChange={(e) =>
                      setFormData({ ...formData, nomeResponsavel: e.target.value })
                    }
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <Input
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Cidade *
                  </label>
                  <Input
                    value={formData.cidade}
                    onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Estado *
                  </label>
                  <Input
                    value={formData.estado}
                    onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                    required
                    className="bg-background"
                    placeholder="Ex: PE"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Volume Médio Mensal (estimado)
                  </label>
                  <Input
                    value={formData.volumeMensal}
                    onChange={(e) => setFormData({ ...formData, volumeMensal: e.target.value })}
                    className="bg-background"
                    placeholder="Ex: 10 projetos/mês"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tempo de Mercado
                  </label>
                  <Input
                    value={formData.tempoMercado}
                    onChange={(e) => setFormData({ ...formData, tempoMercado: e.target.value })}
                    className="bg-background"
                    placeholder="Ex: 5 anos"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem (opcional)
                </label>
                <Textarea
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  rows={4}
                  className="bg-background"
                  placeholder="Conte um pouco mais sobre sua loja e seus objetivos..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar solicitação"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda em receber contato da nossa equipe comercial.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SejaParceiro;
