import Layout from "@/components/layout/Layout";
import { Award, Factory, Leaf, Maximize2, Play, ShieldCheck, Target, Trees } from "lucide-react";
import { Timeline } from "@/components/ui/timeline";
import { MBARROS_IMAGES } from "@/lib/mbarros-images";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const timeline = [
  {
    year: "1990",
    event: "Seu Severino Marcone começou na marcenaria em 1990, plantando a semente do que se tornaria o Grupo MBarros. Com trabalho artesanal e visão de futuro, essa pequena marcenaria em Pernambuco seria o ponto de partida de uma grande indústria.",
  },
  {
    year: "2005",
    event: "O Grupo MBarros consolidou sua presença em Olinda atuando no mobiliário residencial, já se destacando pelo uso de uma seccionadora de tecnologia avançada para a época. Mesmo com produção ainda parcialmente manual, o compromisso com qualidade marcava o início da sua evolução industrial.",
    image: "/imagens_mbarros/historico/2005.jpeg",
  },
  {
    year: "2008",
    event: "Com a operação mais madura, o Grupo MBarros ampliou a capacidade produtiva, fortaleceu sua presença no mercado nordestino e consolidou uma reputação baseada em acabamento, confiança e compromisso com a entrega.",
    image: "/imagens_mbarros/historico/2008.jpeg",
  },
  {
    year: "2010",
    event: "A modernização do parque fabril acelerou a virada industrial da empresa, com novos equipamentos, mais precisão nos processos e aumento consistente da produtividade para atender projetos com mais escala.",
    image: "/imagens_mbarros/historico/2010.jpeg",
  },
  {
    year: "2012",
    event: "A estrutura foi ampliada para acompanhar o crescimento da demanda, com evolução operacional, maior organização produtiva e expansão do alcance comercial junto a lojistas e parceiros.",
    image: "/imagens_mbarros/historico/2012.jpeg",
  },
  {
    year: "2023",
    event: "A nova unidade fabril com mais de 10 mil metros quadrados, equipada com painéis solares e tecnologia de ponta, marca um novo ciclo do Grupo MBarros: mais capacidade, mais eficiência e uma operação pronta para sustentar o crescimento dos lojistas parceiros.",
    image: "/imagens_mbarros/historico/2023.png",
  },
];

const values = [
  {
    icon: Target,
    title: "Missão",
    description: "Nossa principal missão é transformar os sonhos de nossos clientes em uma realidade personalizada, com foco nas melhores matérias-primas do mercado.",
  },
  {
    icon: Factory,
    title: "Visão",
    description: "Nossa visão é impulsionar o crescimento dos nossos lojistas, oferecendo soluções em móveis planejados com alto padrão de qualidade, suporte especializado e as melhores matérias-primas do mercado, garantindo mais competitividade, confiança e resultados em cada projeto vendido.",
  },
  {
    icon: Award,
    title: "Valores",
    description: "Sustentabilidade, excelência, inovação, parceria com o lojista, compromisso com resultados e ética em cada etapa valores que fortalecem relações, impulsionam vendas e constroem negócios sólidos no mercado de móveis planejados.",
  },
];

const sustainabilityItems = [
  {
    icon: Trees,
    title: "Matérias-primas certificadas",
    description: "Uso de madeiras provenientes de reflorestamento e manejo responsável.",
  },
  {
    icon: ShieldCheck,
    title: "Selos ambientais",
    description: "FSC®, SCS Global e Madeira Verde reforçam práticas alinhadas à preservação ambiental.",
  },
  {
    icon: Leaf,
    title: "Cadeia consciente",
    description: "Parcerias com distribuidoras sustentáveis de MDF e MDP, como Duratex e Placas do Brasil.",
  },
];

const groupBrands = [
  {
    name: "MBarros",
    label: "Indústria",
    description: "Responsável pela produção, engenharia dos projetos e atendimento a lojistas parceiros.",
    logo: "/imagens_mbarros/grupo/mbarros-original.png",
  },
  {
    name: "Casa Design",
    label: "Residencial e projetos especiais",
    description: "Com unidades em Parnamirim e Boa Viagem, desenvolve soluções para ambientes residenciais, corporativos, hoteleiros e projetos especiais.",
    logo: "/imagens_mbarros/grupo/casa-design-original.png",
  },
  {
    name: "Casa Design Office",
    label: "Mobiliário corporativo",
    description: "Amplia a atuação do grupo com um setor dedicado ao mobiliário corporativo e móveis soltos.",
    logo: "/imagens_mbarros/grupo/casa-design-original.png",
  },
];

const videoStats = [
  { value: "+10 mil m²", label: "Parque Fabril" },
  { value: "55k+", label: "Peças/Mês" },
  { value: "35+", label: "Anos de Mercado" },
  { value: "22", label: "Cidades Atendidas" },
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
            `url('${MBARROS_IMAGES[0]?.src ?? ""}')`,
        }}
      >
        <div className="absolute inset-0 bg-center bg-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

        <div className="section-container relative py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Sobre a Indústria
            </span>
            <h1 className="section-title mt-4">
              Uma indústria <span className="text-gradient">avançada</span>
            </h1>
            <p className="section-subtitle mx-auto mt-4 max-w-3xl leading-relaxed">
              Há mais de três décadas, evoluímos até nos consolidarmos como a indústria mais avançada da região.
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
                Nossa História & DNA
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Fundado por Severino Marcone e Francisca Marcone, o Grupo MBarros nasceu em Pernambuco com uma visão clara: construir uma operação sólida, confiável e preparada para transformar marcenaria em escala industrial.
                </p>
                <p>
                  O Grupo MBarros iniciou sua trajetória como uma pequena marcenaria em Olinda, já se destacando pelo uso de uma seccionadora de tecnologia avançada para a época. Mesmo com produção ainda manual, o compromisso com qualidade estava presente desde o início, dando início à sua evolução industrial.
                </p>
                <p>
                  De lá para cá, a empresa ampliou estrutura, processos e capacidade produtiva, incorporando tecnologia europeia e chinesa, engenharia aplicada e uma operação preparada para atender lojistas com mais previsibilidade, qualidade e competitividade.
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
                  Severino Marcone, Francisca Marcone, Raphael Marcone e Phelipe Marcone
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-card overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-14 md:pt-24 lg:pt-32 pb-16 md:pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-3 text-primary text-sm uppercase tracking-widest font-medium">
                  <span className="w-8 h-px bg-primary inline-block" />
                  Sustentabilidade
                </span>
                <h2 className="section-title">
                  Compromisso que vai além da produção
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Na MBarros, sustentabilidade não é apenas um diferencial, é parte do processo. A indústria trabalha com matérias-primas certificadas e parceiros reconhecidos nacionalmente, garantindo responsabilidade ambiental em cada etapa da produção.
                  </p>
                  <p>
                    Os selos FSC® e SCS Global reforçam o compromisso com o uso de madeiras provenientes de reflorestamento e manejo responsável, enquanto a certificação Madeira Verde evidencia práticas alinhadas à preservação ambiental.
                  </p>
                  <p>
                    Além disso, a parceria com grandes distribuidoras sustentáveis de MDF e MDP, como Duratex e Placas do Brasil, fortalece uma cadeia produtiva mais consciente, unindo qualidade, inovação e responsabilidade ambiental.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                {sustainabilityItems.map((item) => (
                  <div key={item.title} className="card-industrial flex gap-4 items-start">
                    <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-sm">
                      <item.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-medium text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fade do escuro para o branco (sem conteúdo) */}
        <div className="h-24 md:h-32 bg-gradient-to-b from-card to-white" aria-hidden="true" />

        {/* Faixa branca sólida com os selos */}
        <div className="bg-white pt-4 pb-20 md:pb-24">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 md:mb-16">
                <span className="inline-flex items-center gap-3 text-primary text-sm uppercase tracking-widest font-medium">
                  <span className="w-8 h-px bg-primary inline-block" />
                  Certificações Ambientais
                  <span className="w-8 h-px bg-primary inline-block" />
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
                {[
                  { name: "FSC®", src: "/imagens_mbarros/selos/fsc.png" },
                  { name: "SCS Global", src: "/imagens_mbarros/selos/scs-global.png" },
                  { name: "Energia Verde", src: "/imagens_mbarros/selos/energia-verde.jpg" },
                ].map((seal) => (
                  <div
                    key={seal.name}
                    className="flex items-center justify-center w-full h-40 md:h-48 lg:h-56"
                  >
                    <img
                      src={seal.src}
                      alt={`Selo ${seal.name}`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fade do branco de volta para o fundo escuro */}
      <div className="h-24 md:h-32 bg-gradient-to-b from-white to-background" aria-hidden="true" />

      {/* Group brands */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pb-14 md:pb-24 lg:pb-32 pt-8 md:pt-12">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-3 text-primary text-sm uppercase tracking-widest font-medium">
              <span className="w-8 h-px bg-primary inline-block" />
              Grupo MBarros
            </span>
            <h2 className="section-title mt-4">
              Um grupo, diferentes soluções
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mt-5">
              <p>
                O Grupo MBarros reúne marcas que atuam de forma integrada no mercado de móveis planejados e corporativos.
              </p>
              <p>
                A MBarros é a indústria do grupo, responsável pela produção, engenharia dos projetos e atendimento a lojistas parceiros. A Casa Design, com unidades em Parnamirim e Boa Viagem, desenvolve soluções para ambientes residenciais, corporativos, hoteleiros e projetos especiais. Já a Casa Design Office amplia essa atuação com um setor dedicado ao mobiliário corporativo e móveis soltos.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {groupBrands.map((brand) => (
              <div key={brand.name} className="relative overflow-hidden bg-[#171717] border border-white/10 px-6 py-8 min-h-[280px] flex flex-col">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
                <div className="h-14 flex items-center mb-8">
                  <img
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    loading="lazy"
                    className="max-h-full max-w-[180px] object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                  {brand.label}
                </p>
                <h3 className="text-2xl font-display font-semibold text-white">
                  {brand.name}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mt-4">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeo Institucional */}
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
              Conheça de perto
              <span className="w-8 h-px bg-primary inline-block" />
            </span>
            <h2 className="section-title mt-4">
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
                aria-label="Vídeo institucional MBarros — apresentação da estrutura"
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
            title="Marcos que mostram como evoluímos em estrutura, processos e capacidade produtiva."
            data={timeline.map((t) => ({
              title: t.year,
              content: (
                <div className="card-industrial">
                  <p className="text-foreground text-sm xl:text-base font-normal mb-6 leading-relaxed">
                    {t.event}
                  </p>

                  {t.image && (
                  <img
                    src={t.image}
                    alt={`Estrutura ${t.year}`}
                    loading="lazy"
                    className="rounded-lg object-cover h-48 md:h-64 lg:h-80 w-full"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  )}
                </div>
              ),
            }))}
          />
        </div>
      </section>

    </Layout>
  );
};

export default Sobre;
