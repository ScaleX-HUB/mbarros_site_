import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Check,
  X,
  ArrowRight,
  Tag,
  Clock,
  Palette,
  Headset,
  Monitor,
  Factory,
  Percent,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  { icon: Tag, label: "Sua marca, nossa estrutura industrial" },
  { icon: Percent, label: "Sem taxa de franquia ou royalties" },
  { icon: Clock, label: "Entrega média em até 20 dias úteis" },
  { icon: Palette, label: "Mais de 40 opções de cores e texturas" },
  { icon: Headset, label: "Suporte técnico especializado" },
  { icon: Monitor, label: "Treinamento no software Promob" },
  { icon: Factory, label: "Atendimento direto com a indústria" },
  { icon: ShieldCheck, label: "Tecnologia Europeia e Chinesa na produção" },
];

const forWho = [
  "Lojas de móveis planejados que querem escalar",
  "Marcas que buscam fornecedor industrial confiável",
  "Lojas que querem migrar de marcenaria para indústria",
  "Empreendedores que querem iniciar no segmento",
];

const notForWho = [
  "Clientes finais (atendemos apenas lojistas)",
  "Projetos pontuais ou avulsos",
  "Quem busca o preço mais baixo do mercado",
];

const steps = [
  {
    number: "01",
    title: "Contato Inicial",
    description: "Avaliamos o perfil da sua loja, região de atuação e volume estimado. Apresentamos nosso modelo de parceria e tiramos todas as dúvidas.",
  },
  {
    number: "02",
    title: "Análise e Aprovação",
    description: "Analisamos as condições comerciais e alinhamos expectativas. Definimos os termos da parceria de forma transparente.",
  },
  {
    number: "03",
    title: "Capacitação Técnica",
    description: "Treinamento completo no software Promob e alinhamento de processos técnicos para garantir projetos otimizados.",
  },
  {
    number: "04",
    title: "Operação Ativa",
    description: "Você projeta e vende com sua marca. Nós produzimos e entregamos com qualidade e pontualidade.",
  },
];

const WhiteLabel = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-container bg-card overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-accent/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Modelo White Label</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
            Sua marca,{" "}
            <span className="text-gradient">nossa estrutura</span>
            <br />industrial
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            Você projeta na sua loja com sua marca. Nós tornamos realidade para seu cliente — com tecnologia industrial, prazos cumpridos e escala.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/seja-parceiro">
                Quero ser parceiro
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="heroBorder" size="lg" asChild>
              <Link to="/contato">Fale conosco</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-primary" />
                <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                  Benefícios
                </span>
                <span className="h-px w-8 bg-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">
              Opere com a força de uma{" "}
              <span className="text-gradient">indústria completa</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Sem investir em maquinário, espaço físico ou equipe produtiva. Você foca nas vendas, nós na produção.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group card-industrial flex flex-col items-start gap-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-sm bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Who */}
      <section className="section-container bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">
              Para quem é{" "}
              <span className="text-gradient">essa parceria?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Ideal for */}
            <div className="rounded-sm border border-primary/30 bg-primary/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-primary text-primary-foreground">
                  <Check size={18} />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">Ideal para:</h3>
              </div>
              <ul className="space-y-4">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-[0.4rem] shrink-0" />
                    <span className="text-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for */}
            <div className="rounded-sm border border-destructive/20 bg-destructive/5 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-sm bg-destructive/20 text-destructive">
                  <X size={18} />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">Não é para:</h3>
              </div>
              <ul className="space-y-4">
                {notForWho.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-destructive/60 mt-[0.4rem] shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-5">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-primary" />
                <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                  Como funciona
                </span>
                <span className="h-px w-8 bg-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4">
              4 passos para{" "}
              <span className="text-gradient">começar a parceria</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="card-industrial flex gap-5 items-start group hover:border-primary/50 transition-colors">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="flex items-center justify-center w-11 h-11 rounded-sm bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-display font-bold text-base leading-none">{step.number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-4 bg-border hidden md:block" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-display font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container bg-card">
        <div className="relative max-w-3xl mx-auto text-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 rounded-sm -z-10" />
          <div className="rounded-sm border border-primary/20 bg-primary/5 px-8 py-14">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Próximo passo</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold">
              Pronto para{" "}
              <span className="text-gradient">começar?</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Entre em contato e descubra como a MBarros pode impulsionar o crescimento da sua loja.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button variant="hero" size="lg" asChild>
                <Link to="/seja-parceiro">
                  Quero ser parceiro
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroBorder" size="lg" asChild>
                <Link to="/contato">Fale conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhiteLabel;

