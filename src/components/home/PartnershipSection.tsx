import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const accordionItems = [
  {
    id: "projetos",
    label: "Projetos",
    content:
      "Atendemos projetos corporativos, residenciais, hospitalares e hoteleiros, com móveis sob medida e alto padrão, por meio de uma rede de lojistas parceiros em todo o Nordeste.",
  },
  {
    id: "publico",
    label: "Público-Alvo",
    content:
      "Lojistas de móveis planejados, construtoras, incorporadoras e escritórios de arquitetura que buscam parceria industrial com qualidade consistente.",
  },
  {
    id: "vantagens",
    label: "Vantagens",
    content:
      "Prazo médio de 20 dias, menor custo logístico no Nordeste, menor carga tributária regional, suporte técnico próximo e padrão industrial consistente em cada entrega.",
  },
];

const PartnershipSection = () => {
  const [open, setOpen] = useState<string>("projetos");
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[520px]">

        {/* Left — same background as page */}
        <div className="relative bg-background flex items-center justify-center p-8 md:p-12 lg:p-16">

          {/* Video card */}
          <motion.div
            className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 cursor-pointer group"
            onClick={togglePlay}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <video
              ref={videoRef}
              src="/videos/IMG_8483.mp4"
              className="w-full aspect-video object-cover"
              loop
              playsInline
            />
            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            />
            {/* Play / Pause button */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                {playing
                  ? <Pause size={24} className="text-white" />
                  : <Play size={24} className="text-white ml-1" />}
              </div>
            </div>
            {/* Label */}
            <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
              <span className="text-white text-sm font-medium tracking-wide">Vídeo Comercial</span>
            </div>
          </motion.div>
        </div>

        {/* Right — content panel */}
        <div className="bg-background flex items-center p-8 md:p-12 lg:p-16">
          <motion.div
            className="w-full max-w-lg"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground uppercase tracking-tight mb-8">
              Quem Atendemos
            </h2>

            {/* Accordion */}
            <div className="border-t border-border">
              {accordionItems.map((item) => (
                <div key={item.id} className="border-b border-border">
                  <button
                    onClick={() => setOpen(open === item.id ? "" : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left group"
                  >
                    <span
                      className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors ${
                        open === item.id
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-muted-foreground transition-transform duration-300 ${
                        open === item.id ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open === item.id && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground text-sm leading-relaxed pb-5 pr-6">
                          {item.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Button
                size="lg"
                className="rounded-none font-bold tracking-widest uppercase px-10"
                asChild
              >
                <Link to="/seja-parceiro">Saiba mais</Link>
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PartnershipSection;
