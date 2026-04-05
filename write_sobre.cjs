const fs = require('fs');

const fileContent = \import Layout from "@/components/layout/Layout";
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
    event: "Crescimento e consolida��o no mercado nordestino",
    image: "/imagens_mbarros/historico/2008.jpeg",
  },
  {
    year: "2010",
    event: "Moderniza��o do parque fabril e aumento da capacidade produtiva",
    image: "/imagens_mbarros/historico/2010.jpeg",
  },
  {
    year: "2012",
    event: "Amplia��o da estrutura e expans�o das opera��es",
    image: "/imagens_mbarros/historico/2012.jpeg",
  },
  {
    year: "2023",
    event: "Nova unidade fabril com 10.000m� e pain�is solares � refer�ncia industrial no Nordeste",
    image: "/imagens_mbarros/historico/2023.png",
  },
];

const values = [
  {
    icon: Target,
    title: "Miss�o",
    description: "Transformar os sonhos dos clientes em ambientes personalizados com mat�rias-primas de qualidade.",
  },
  {
    icon: Factory,
    title: "Vis�o",
    description: "Ser refer�ncia nacional em m�veis planejados White Label, fortalecendo parceiros.",
  },
  {
    icon: Award,
    title: "Valores",
    description: "Qualidade, inova��o, valoriza��o da equipe. Orgulhosamente nordestinos.",
  },
];

const videoStats = [
  { value: "10.000m�", label: "Parque Fabril" },
  { value: "55k+", label: "Pe�as/M�s" },
  { value: "35+", label: "Anos de Mercado" },
  { value: "7", label: "Estados Atendidos" },
];

const Sobre = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

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
            \\\url('\')\\\,
        }}
      >
        <div className="absolute inset-0 bg-center bg-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

        <div className="section-container relative py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Sobre a Ind�stria
            </span>
            <h1 className="section-title mt-4">
              Uma ind�stria <span className="text-gradient">avan�ada</span>
            </h1>
            <p className="section-subtitle mx-auto mt-4 max-w-3xl leading-relaxed">
              H� mais de tr�s d�cadas, transformamos o mercado de m�veis planejados no Nordeste. Evolu�mos da marcenaria artesanal para uma das ind�strias mais avan�adas da regi�o, unindo tradi��o e tecnologia de ponta.
            </p>
          </div>
        </div>
      </section>

      {/* Story and DNA */}
      <section className="section-container py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-display font-semibold">
                Nossa Hist�ria & DNA
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  A MBARROS Ind�stria de M�veis Planejados nasceu em Pernambuco com a miss�o de 
                  fortalecer o mercado de m�veis planejados no Nordeste brasileiro.
                </p>
                <p>
                  Ao longo de mais de tr�s d�cadas, constru�mos uma trajet�ria marcada pela 
                  qualidade, inova��o e compromisso com nossos parceiros. Hoje, atendemos 
                  lojistas em todo o Brasil atrav�s do modelo White Label.
                </p>
              </div>

              <div className="grid gap-6 mt-8">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-4 items-start">
                    <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-sm">
                      <value.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-medium text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Founders image */}
            <div className="relative group rounded-sm overflow-hidden border border-border bg-black shadow-xl sticky top-24">
              {/* Glow */}
              <div className="absolute -inset-1 bg-primary/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <img
                src="/imagens_mbarros/donos_fundadores_fabrica.jpg"
                alt="Fundadores da MBarros"
                className="w-full aspect-[4/3] md:aspect-[3/4] object-cover object-[50%_28%] md:object-[50%_22%]"
                loading="lazy"
              />
              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                <p className="text-white text-sm md:text-base font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Fundadores � vis�o e prop�sito
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* V�deo Institucional */}
      <section className="section-container bg-muted/30 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-3 text-primary text-sm uppercase tracking-widest font-medium">
              <span className="w-8 h-px bg-primary inline-block" />
              Conhe�a de perto
              <span className="w-8 h-px bg-primary inline-block" />
            </span>
            <h2 className="section-title mt-4">
              Nossa <span className="text-gradient">Estrutura</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Veja como funciona nossa ind�stria e o que nos torna refer�ncia no Nordeste.
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
            <div className="absolute -inset-1 bg-primary/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative rounded-sm overflow-hidden border border-border bg-black shadow-2xl">
              <video
                ref={videoRef}
                src="/videos/IMG_8483.mp4"
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
                onCanPlay={() => {
                  videoRef.current?.play().catch(() => {
                    setIsPlaying(false);
                  });
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                aria-label="V�deo institucional MBarros � apresenta��o da estrutura"
              />

              <AnimatePresence>
                {!isPlaying && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-[#1a232c]/50 backdrop-blur-[2px]"
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

              <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between pointer-events-none">
                <span className="text-white text-sm font-medium tracking-wide">
                  MBarros � Conhe�a nossa estrutura
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
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-6 bg-border rounded-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {videoStats.map((stat) => (
              <div key={stat.label} className="bg-card text-center py-6 px-4">
                <div className="font-semibold text-lg md:text-xl xl:text-2xl text-foreground/90">{stat.value}</div>
                <div className="stat-label text-[11px] mt-1.5 uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Timeline (novo estilo) */}
      <section className="section-container bg-card py-24">
        <div className="max-w-6xl mx-auto">
          <Timeline
            title="Marcos que mostram como evolu�mos em estrutura, processos e capacidade produtiva."
            data={timeline.map((t) => ({
              title: t.year,
              content: (
                <div className="card-industrial">
                  <p className="text-foreground text-sm xl:text-base font-normal mb-6 leading-relaxed">
                    {t.event}
                  </p>

                  <img
                    src={t.image}
                    alt={\Estrutura \\}
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

      {/* Team */}
      <section className="section-container py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-sm mb-6">
              <Users size={32} className="text-primary" />
            </div>
            <h2 className="section-title">
              Equipe <span className="text-gradient">pr�pria</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Toda a equipe de produ��o e montagem � composta por funcion�rios da pr�pria empresa,
              contribuindo para manter o padr�o de qualidade e controle sobre todos os processos de fabrica��o.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Minimalist Collab Stats next to text */}
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                Nossa equipe � formada por profissionais especializados que acompanham 
                as tend�ncias do design de interiores e do mercado de m�veis planejados, 
                unindo sofistica��o, qualidade e praticidade em cada projeto.
              </p>
              
              <div className="card-industrial inline-flex flex-col items-start p-6 bg-muted/40 border border-border">
                <div className="text-4xl md:text-5xl font-display font-semibold text-primary mb-2">100+</div>
                <div className="text-sm tracking-widest uppercase font-medium text-foreground">Colaboradores</div>
                <div className="text-xs text-muted-foreground mt-2">Dedicados ao padr�o de qualidade</div>
              </div>
            </div>

            {/* Team photo cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: seniorProfessional, alt: "Profissional s�nior do Grupo MBarros", name: "Lideran�a", role: "Experi�ncia & Vis�o" },
                { src: cncOperator, alt: "Operador CNC do Grupo MBarros", name: "Opera��o", role: "Tecnologia & Precis�o" },
              ].map((member) => (
                <div key={member.name} className="relative rounded-sm overflow-hidden group aspect-[3/4]">
                  <img
                    src={member.src}
                    alt={member.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white text-base font-semibold leading-tight">{member.name}</p>
                    <p className="text-white/80 text-xs mt-1">{member.role}</p>
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
\;

fs.writeFileSync('src/pages/Sobre.tsx', fileContent);
