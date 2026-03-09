import { Factory, Users, Package, MapPin } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";

const stats = [
  {
    icon: Factory,
    value: 10000,
    suffix: "m²",
    label: "Parque Fabril",
  },
  {
    icon: Package,
    value: 55000,
    suffix: "+",
    label: "Peças por Mês",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Colaboradores",
  },
  {
    icon: MapPin,
    value: 27,
    suffix: "",
    label: "Estados Atendidos",
  },
];

const AuthoritySection = () => {
  return (
    <section className="section-container bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                NOSSA HISTÓRIA
              </span>
              <span className="h-px w-8 bg-primary"></span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            Escala industrial com <span className="text-primary">controle de qualidade</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4">
            Estrutura sólida para sustentar o crescimento da sua marca. 
            Tecnologia europeia e processos padronizados.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="card-industrial text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                <stat.icon size={24} className="text-primary" />
              </div>
              <div className="stat-number">
                <CountUp to={stat.value} />
                <span className="text-2xl md:text-3xl">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-brand mt-16" />
      </div>
    </section>
  );
};

export default AuthoritySection;
