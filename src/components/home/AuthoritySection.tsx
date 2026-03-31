import { Factory, Users, Package, MapPin, Building2 } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";
import { BrazilMap } from "@/components/ui/brazil-map";

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
    icon: Building2,
    value: 22,
    suffix: "",
    label: "Cidades com Presença",
  },
  {
    icon: MapPin,
    value: 7,
    suffix: "",
    label: "Estados Ativos",
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
            Estrutura sólida para sustentar o crescimento da sua marca, com destaque para a presença comercial em <span className="text-foreground font-semibold">22 cidades e 7 estados</span>. Tecnologia Europeia e Chinesa, processos padronizados.
          </p>
        </div>

        <div className="mb-10 rounded-sm border border-primary/20 bg-primary/5 p-8 flex flex-col lg:flex-row items-center justify-between gap-8 h-auto overflow-hidden relative">
          <div className="text-left max-w-lg z-10 flex-shrink-0">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Capilaridade Comercial</p>
            <p className="mt-2 text-2xl font-display font-semibold text-foreground md:text-3xl">
              Presença em 22 cidades e 7 estados
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              Operação estruturada para atender lojistas com proximidade regional e capacidade industrial consistente.
            </p>
          </div>
          <div className="flex-1 w-full max-w-[400px] flex items-center justify-center -my-16 pointer-events-none opacity-90">
            <BrazilMap />
          </div>
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
              <div className="stat-number text-3xl md:text-4xl lg:text-5xl">
                <CountUp to={stat.value} />
                <span className="text-xl md:text-2xl">{stat.suffix}</span>
              </div>
              <div className="stat-label text-xs">{stat.label}</div>
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
