import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Box,
  Cog,
  Layers,
  Package,
  Scissors,
  Settings,
  Shield,
  Truck,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* ─────────────────── DATA ─────────────────── */

// Only stats with basis in existing site content — add real data here as needed
const verifiedStats = [
  { value: "10.000", unit: "m²", label: "Parque fabril" },
];

const equipment: ReadonlyArray<{ icon: LucideIcon; title: string; description: string }> = [
  { icon: Cog,      title: "CNC e Centro de Usinagem",        description: "Centro de usinagem com Tecnologia Europeia e Chinesa para furação precisa, cortes repetidos e encaixes perfeitos." },
  { icon: Settings, title: "Coladeira de Borda PUR",          description: "Máquinas automáticas com colagem PUR de alta aderência, produzindo bordas invisíveis e com durabilidade extrema." },
  { icon: Scissors, title: "Seccionadora de Alta Precisão",   description: "Corte de painéis MDF e MDP com mínimo desperdício de material e tolerâncias milimétricas." },
  { icon: Workflow, title: "Centro de Furos Automatizado",    description: "Furação em série para encaixes, dobradiças e ferragens garantindo padronização em cada peça produzida." },
  { icon: Layers,   title: "Linha de Metalurgia Própria",     description: "Estrutura própria de metalurgia para componentes metálicos com rastreabilidade e padrão industrial." },
  { icon: Box,      title: "Embalagem e Rastreabilidade",     description: "Embalagem industrial com identificação de cada item para garantir integridade, organização e rastreamento." },
  { icon: Package,  title: "Linha Corporativa",               description: "Linha dedicada à produção de móveis corporativos com alto padrão de acabamento e capacidade de escala." },
  { icon: Wrench,   title: "Estrutura Metálica e Vidro",      description: "Capacidade produtiva para integrar estruturas metálicas e vidro em projetos corporativos e especiais." },
];

const process = [
  { step: "01", title: "Recebimento do Projeto",   description: "Análise técnica do projeto enviado pelo lojista parceiro via Promob ou arquivo técnico." },
  { step: "02", title: "Planejamento e Corte",     description: "Otimização de chapas, definição do roteiro de produção e corte preciso na seccionadora." },
  { step: "03", title: "Usinagem e Furação",       description: "CNC executa furos, perfis e encaixes com tolerância milimétrica e repetibilidade." },
  { step: "04", title: "Acabamento e Borda",       description: "Aplicação de fita de borda PUR com acabamento invisível, inspeção de qualidade." },
  { step: "05", title: "Embalagem e Logística",    description: "Identificação individual, embalagem industrial e despacho para todo o Brasil." },
];

const galleryPhotos = [
  { src: "/imagens_mbarros/pessoa_operando_maquina_fabrica_nova.png",      alt: "Operador de máquina CNC",          caption: "Operação CNC" },
  { src: "/imagens_mbarros/pessoas_trabalhando_fabrica_nova_mbarros.png",  alt: "Equipe na linha de produção",      caption: "Linha de Produção" },
  { src: "/imagens_mbarros/maquina_industria.webp",                        alt: "Maquinário industrial MBarros",    caption: "Maquinário Europeu" },
  { src: "/imagens_mbarros/FOTO%20DA%20INDUSTRIA%20-%20ATUALIZADA%20(1).png", alt: "Vista geral da fábrica",       caption: "10.000 m² de Fábrica" },
];

/* ─────────────────── VARIANTS ─────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

/* ─────────────────── SECTION HEADER ─────────────────── */

const SectionBadge = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center mb-6">
    <div className="flex items-center gap-4">
      <span className="h-px w-8 bg-primary" />
      <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
        {children}
      </span>
      <span className="h-px w-8 bg-primary" />
    </div>
  </div>
);

/* ─────────────────── PAGE ─────────────────── */

const Estrutura = () => {
  const prefersReducedMotion = useReducedMotion();

  /* autoplay timer for process steps */
  const [activeStep, setActiveStep] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stopTimer = useCallback(() => { if (timerRef.current) clearInterval(timerRef.current); }, []);
  useEffect(() => {
    if (prefersReducedMotion) return;
    timerRef.current = setInterval(() => setActiveStep((p) => (p + 1) % process.length), 2800);
    return stopTimer;
  }, [prefersReducedMotion, stopTimer]);

  return (
    <Layout>

      {/* ══════════════ HERO — dark industrial ══════════════ */}
      <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden">
        {/* BG video */}
        <div className="absolute inset-0 pointer-events-none">
          <video
            src="/videos/IMG_8483.mp4"
            autoPlay muted loop playsInline aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(190,106,20,0.22),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 pb-16 pt-36 md:pb-20 md:pt-44">
          <motion.div
            initial="hidden" animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.13 } } }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-primary" />
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
                Estrutura Fabril
              </span>
            </motion.div>

            {/* Title line 1 */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } }}
              className="font-display font-bold text-white/80 leading-none mb-1"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)" }}
            >
              Tecnologia Europeia e Chinesa
            </motion.p>

            {/* Title line 2 — delayed, accent color */}
            <motion.p
              variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
              className="font-display font-bold text-primary leading-none mb-8"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.8rem)" }}
            >
              qualidade padronizada.
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.05 } } }}
              className="text-white/65 text-sm md:text-base max-w-xl leading-relaxed mb-10"
            >
              Maquinário de última geração, processos industrializados e equipe especializada — do corte à embalagem final.
            </motion.p>

            {/* Stats pills + CTA in one row */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
              className="flex flex-wrap items-center gap-4"
            >
              {verifiedStats.map(({ value, unit, label }) => (
                <div
                  key={label}
                  className="flex items-baseline gap-1.5 bg-white/8 backdrop-blur-sm border border-white/12 rounded-lg px-4 py-2.5"
                >
                  <span className="font-display font-bold text-primary text-xl leading-none">
                    {value}<span className="text-base">{unit}</span>
                  </span>
                  <span className="text-xs uppercase tracking-[0.14em] text-white/50">{label}</span>
                </div>
              ))}

              <Button variant="hero" size="lg" asChild>
                <a href="#maquinario">
                  Ver maquinário <ArrowRight size={17} className="ml-1" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ MAQUINÁRIO ══════════════ */}
      <section id="maquinario" className="relative bg-background py-20 md:py-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(190,106,20,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <SectionBadge>Maquinário de Ponta</SectionBadge>
            <h2 className="font-display font-semibold text-foreground leading-tight mt-2" style={{ fontSize: "clamp(1.7rem,3.5vw,2.8rem)" }}>
              Equipamentos que garantem{" "}
              <span className="text-primary">precisão e escala</span>
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
          >
            {equipment.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group relative flex flex-col gap-3 rounded-xl border border-border/60 bg-card p-5 overflow-hidden
                           hover:border-primary/50 hover:shadow-[0_4px_24px_hsl(var(--primary)/0.12)] transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0
                                translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary border border-primary/20
                                group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-display font-bold uppercase tracking-wide text-foreground leading-tight">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ PROCESSO + QUALIDADE & LOGÍSTICA ══════════════ */}
      <section className="relative py-20 md:py-28 bg-card overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.06),transparent_50%)]" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-14">
            <SectionBadge>Processo & Qualidade</SectionBadge>
            <h2 className="font-display font-semibold text-foreground leading-tight mt-2" style={{ fontSize: "clamp(1.7rem,3.5vw,2.8rem)" }}>
              Da chapa bruta ao{" "}
              <span className="text-primary">móvel finalizado</span>
            </h2>
            <p className="text-muted-foreground text-base mt-4 max-w-xl mx-auto">
              Cada etapa é executada por profissionais especializados com controle rigoroso de qualidade — da produção à entrega.
            </p>
          </div>

          {/* Steps — interactive highlight */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 max-w-5xl mx-auto mb-12">
            {process.map(({ step, title, description }, idx) => (
              <button
                key={step}
                onClick={() => setActiveStep(idx)}
                className={`group relative flex flex-col gap-2 rounded-xl border p-5 text-left transition-all duration-300 cursor-pointer
                  ${activeStep === idx
                    ? "border-primary bg-primary/10 shadow-[0_0_32px_hsl(var(--primary)/0.15)]"
                    : "border-border bg-background hover:border-primary/40"
                  }`}
              >
                {activeStep === idx && (
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-t-xl" />
                )}
                <span className={`text-2xl font-display font-bold leading-none ${activeStep === idx ? "text-primary" : "text-muted-foreground/30"}`}>
                  {step}
                </span>
                <h3 className={`text-sm font-display font-semibold leading-snug ${activeStep === idx ? "text-foreground" : "text-muted-foreground"}`}>
                  {title}
                </h3>
                <p className={`text-xs leading-relaxed transition-colors duration-300 ${activeStep === idx ? "text-foreground/75" : "text-muted-foreground/60"}`}>
                  {description}
                </p>
              </button>
            ))}
          </div>

          {/* Qualidade & Logística cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card-industrial">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Shield size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">Controle de Qualidade</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Cada peça passa por inspeção rigorosa antes da expedição. Processos padronizados e equipe própria garantem consistência em toda produção — do primeiro ao último item do pedido.
              </p>
            </div>
            <div className="card-industrial">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                  <Truck size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">Logística Nacional</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Entrega em todos os 27 estados brasileiros. Embalagem industrial adequada e rastreamento por item para garantir que cada pedido chegue em perfeitas condições e no prazo combinado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ TOUR PELA FÁBRICA ══════════════ */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-10">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-primary" />
                <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
                  Tour pela Fábrica
                </span>
              </div>
              <h2 className="font-display font-semibold text-foreground leading-tight" style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)" }}>
                Veja a operação em detalhes
              </h2>
            </div>
            <span className="hidden md:flex items-center gap-2 text-sm text-muted-foreground pb-1 tabular-nums">
              <span className="h-px w-8 bg-border" />
              {galleryPhotos.length} ambientes
            </span>
          </div>
        </div>

        {/* Filmstrip — horizontal snap scroll */}
        <motion.div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pl-4 md:pl-6 pr-4 md:pr-6 pb-2
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
        >
          {galleryPhotos.map((photo, idx) => (
            <motion.div
              key={photo.src}
              variants={fadeUp}
              className="relative flex-none snap-center w-[78vw] md:w-[42vw] lg:w-[30vw] overflow-hidden rounded-xl group"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-64 md:h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute right-4 top-4 font-display font-bold text-white/35 text-3xl leading-none tabular-nums select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-white text-sm font-semibold tracking-wide">{photo.caption}</span>
              </div>
            </motion.div>
          ))}
          <div className="flex-none w-2 md:w-4" />
        </motion.div>

        {/* CTA bar — compact, inline with Tour section */}
        <div className="container mx-auto px-4 md:px-6 mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border bg-card px-6 py-5">
            <div className="text-center sm:text-left">
              <p className="text-sm font-display font-semibold text-foreground">Sua loja pronta para crescer com estrutura industrial?</p>
              <p className="text-xs text-muted-foreground mt-0.5">Parceria B2B com produção em escala, prazo e qualidade garantidos.</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button variant="hero" size="sm" asChild>
                <Link to="/seja-parceiro">Quero ser lojista <ArrowRight size={15} className="ml-1" /></Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/contato">Fale conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Estrutura;
