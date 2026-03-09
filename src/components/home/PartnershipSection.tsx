import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Sua marca, nossa estrutura industrial",
  "Sem taxa de franquia",
  "Entrega média em até 20 dias úteis",
  "Suporte técnico especializado",
  "Tecnologia europeia de produção",
  "Treinamentos e capacitação",
];

const steps = [
  {
    number: "1",
    title: "Você Projeta",
    description: "Sua equipe desenvolve o design e valida com o cliente usando o software Promob.",
  },
  {
    number: "2",
    title: "Nós Validamos",
    description: "O projeto passa por nosso time de engenharia para revisão e otimização produtiva.",
  },
  {
    number: "3",
    title: "Nós Produzimos",
    description: "A fábrica assume a produção utilizando maquinário de ponta e matéria-prima premium.",
  },
  {
    number: "4",
    title: "Seu Cliente Recebe",
    description: "Entregamos o projeto finalizado com precisão, agilidade e pronto para montagem.",
  },
];

const PartnershipSection = () => {
  return (
    <section className="section-container bg-background">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Tag */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-primary"></span>
            <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
              A Parceria
            </span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
        </div>

        {/* Title & Description */}
        <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
          <span className="text-foreground">O modelo</span>{" "}
          <span className="text-primary">White Label</span>
        </h2>
        
        <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-20">
          Trabalhamos nos bastidores para que a sua marca brilhe de frente.<br className="hidden md:inline" />
          Com o modelo de parceria industrial da MBARROS, sua loja vende<br className="hidden md:inline" />
          projetos assinados com o seu nome, fabricados com tecnologia<br className="hidden md:inline" />
          europeia.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step) => (
            <motion.div 
              key={step.number} 
              className="flex flex-col items-center text-center space-y-6 cursor-pointer"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Number Circle Hollow with Primary color */}
              <motion.div 
                className="w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center text-primary text-3xl font-display font-medium"
                whileHover={{ backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                transition={{ duration: 0.2 }}
              >
                {step.number}
              </motion.div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
