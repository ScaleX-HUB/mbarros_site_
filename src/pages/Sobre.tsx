import Layout from "@/components/layout/Layout";
import { Factory, Users, Target, Award, Play, Maximize2 } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { MBARROS_IMAGES } from "@/lib/mbarros-images";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import seniorProfessional from "@/assets/team-portrait-senior-professional.png";
import cncOperator from "@/assets/team-operator-cnc-monitor.png";

const timeline = [
  {
    year: "2005",
    event: "Primeiros passos: estrutura inicial da empresa em Pernambuco",
    image: "/imagens_mbarros/historico/2005.jpeg",
  },
  {
    year: "2008",
    event: "Crescimento e consolidação no mercado nordestino",
    image: "/imagens_mbarros/historico/2008.jpeg",
  },
  {
    year: "2010",
    event: "Modernização do parque fabril e aumento da capacidade produtiva",
    image: "/imagens_mbarros/historico/2010.jpeg",
  },
  {
    year: "2012",
    event: "Ampliação da estrutura e expansão das operações",
    image: "/imagens_mbarros/historico/2012.jpeg",
  },
  {
    year: "2023",
    event: "Nova unidade fabril com 10.000m² e painéis solares — referência industrial no Nordeste",
    image: "/imagens_mbarros/historico/2023.png",
  },
];

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Transformar os sonhos dos clientes em ambientes personalizados, utilizando matérias-primas de qualidade e processos de produção que garantam o resultado esperado.",
  },
  {
    icon: Factory,
    title: "Visão",
    description: "Ser referência nacional em móveis planejados White Label, fortalecendo o mercado e oferecendo estrutura industrial para lojistas de todo o Brasil.",
  },
  {
    icon: Award,
    title: "Valores",
    description: "Qualidade, comprometimento, inovação, respeito ao cliente e valorização da equipe. Orgulhosamente nordestinos, 100% pernambucanos.",
  },
];

const videoStats = [
  { value: "10.000m²", label: "Estrutura fabril" },
  { value: "55k+", label: "Peças/mês" },
  { value: "35+", label: "Anos de mercado" },
  { value: "7", label: "Estados atendidos" },
];

const Sobre = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    videoRef.current?.requestFullscreen?.();
  };

  return (
    <Layout>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            `url('${MBARROS_IMAGES[0]?.src ?? ""}')`,
        }}
      >
        <div className="absolute inset-0 bg-center bg-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

        <div className="section-container relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Sobre a Indústria
            </span>
            <h1 className="section-title mt-4">
              Uma indústria <span className="text-gradient">100% pernambucana</span>
            </h1>
            <p className="section-subtitle mx-auto mt-4">
              Há mais de 35 anos transformando projetos em realidade. Estrutura industrial sólida para sustentar grandes marcas.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-semibold">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A MBARROS Indústria de Móveis Planejados nasceu em Pernambuco com a missão de 
                  fortalecer o mercado de móveis planejados no Nordeste brasileiro.
                </p>
                <p>
                  Ao longo de mais de três décadas, construímos uma trajetória marcada pela 
                  qualidade, inovação e compromisso com nossos parceiros. Hoje, atendemos 
                  lojistas em todo o Brasil através do modelo White Label.
                </p>
                <p>
                  Nossa equipe é formada por profissionais especializados que acompanham 
                  as tendências do design de interiores e do mercado de móveis planejados, 
                  unindo sofisticação, qualidade e praticidade em cada projeto.
                </p>
              </div>
            </div>

            <div className="card-industrial">
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Marcos
              </h2>
              <p className="text-muted-foreground text-sm">
                Uma visão rápida da nossa evolução e dos principais investimentos em estrutura e qualidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vídeo Institucional */}
      <section className="section-container bg-muted/20">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-3 text-primary text-sm uppercase tracking-widest font-medium">
              <span className="w-8 h-px bg-primary inline-block" />
              Conheça de perto
              <span className="w-8 h-px bg-primary inline-block" />
            </span>
            <h2 className="section-title mt-2">
              Nossa <span className="text-gradient">Estrutura</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Veja como funciona nossa indústria e o que nos torna referência no Nordeste.
            </p>
          </motion.div>

          {/* Player */}
          <motion.div
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onClick={handleVideoClick}
          >
            {/* Glow */}
            <div className="absolute -inset-1 bg-primary/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Container */}
            <div className="relative rounded-sm overflow-hidden border border-border bg-black shadow-2xl">
              <video
                ref={videoRef}
                src="/videos/IMG_8483.mp4"
                preload="metadata"
                playsInline
                className="w-full aspect-video object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                aria-label="Vídeo institucional MBarros — apresentação da estrutura"
              />

              {/* Play overlay */}
              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/45 backdrop-blur-[2px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.93 }}
                      transition={{ type: "spring", stiffness: 320, damping: 20 }}
                    >
                      <Play size={30} fill="currentColor" className="ml-1" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between pointer-events-none">
                <span className="text-white text-sm font-medium tracking-wide">
                  MBarros — Conheça nossa estrutura
                </span>
                <button
                  className="text-white/80 hover:text-white transition-colors pointer-events-auto"
                  onClick={handleFullscreen}
                  aria-label="Tela cheia"
                >
                  <Maximize2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-3 bg-border rounded-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {videoStats.map((stat) => (
              <div key={stat.label} className="bg-card text-center py-5 px-3">
                <div className="stat-number text-2xl">{stat.value}</div>
                <div className="stat-label text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Timeline (novo estilo) */}
      <section className="section-container bg-card">
        <div className="max-w-6xl mx-auto">
          <Timeline
            title="Marcos que mostram como evoluímos em estrutura, processos e capacidade produtiva."
            data={timeline.map((t) => ({
              title: t.year,
              content: (
                <div className="card-industrial">
                  <p className="text-foreground text-sm md:text-base font-normal mb-6">
                    {t.event}
                  </p>

                  <img
                    src={t.image}
                    alt={`Estrutura ${t.year}`}
                    loading="lazy"
                    className="rounded-lg object-cover h-48 md:h-64 lg:h-80 w-full"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              ),
            }))}
          />
        </div>
      </section>

      {/* Values */}
      <section className="section-container bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-sm">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-sm mb-6">
              <Users size={32} className="text-primary" />
            </div>
            <h2 className="section-title">
              Equipe <span className="text-gradient">própria</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Toda a equipe de produção e montagem é composta por funcionários da própria empresa,
              contribuindo para manter o padrão de qualidade e controle sobre todos os processos de fabricação.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-industrial text-center">
                <div className="stat-number text-3xl">100+</div>
                <div className="stat-label">Colaboradores</div>
              </div>
              <div className="card-industrial text-center">
                <div className="stat-number text-3xl">35+</div>
                <div className="stat-label">Anos</div>
              </div>
              <div className="card-industrial text-center">
                <div className="stat-number text-3xl">22</div>
                <div className="stat-label">Cidades · 7 Estados</div>
              </div>
              <div className="card-industrial text-center">
                <div className="stat-number text-3xl">100%</div>
                <div className="stat-label">Pernambucana</div>
              </div>
            </div>

            {/* Team photo cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: seniorProfessional, alt: "Profissional sênior do Grupo MBarros", name: "Liderança", role: "Experiência & Visão" },
                { src: cncOperator, alt: "Operador CNC do Grupo MBarros", name: "Operação", role: "Tecnologia & Precisão" },
              ].map((member) => (
                <div key={member.name} className="relative rounded-sm overflow-hidden group h-64">
                  <img
                    src={member.src}
                    alt={member.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-semibold leading-tight">{member.name}</p>
                    <p className="text-white/70 text-xs mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
