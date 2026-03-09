import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const materials = [
  { name: "MDF", description: "Painéis de alta densidade" },
  { name: "MDP", description: "Resistência e versatilidade" },
  { name: "Laca", description: "Acabamento premium" },
  { name: "Vidro", description: "Elegância e sofisticação" },
  { name: "Alumínio", description: "Estrutura e durabilidade" },
];

const StructureSection = () => {
  return (
    <section className="section-container bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary"></span>
              <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1">
                ESTRUTURA FABRIL
              </span>
              <span className="h-px w-8 bg-primary"></span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mt-4">
            Tecnologia europeia e{" "}
            <span className="text-primary">qualidade padronizada.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-6">
            Nossa nova fábrica em Pernambuco possui 10.000 m² equipados com o que há de mais moderno em maquinário alemão. Isso garante agilidade, repetibilidade e um acabamento que posiciona sua marca no segmento premium.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mt-12 text-center md:text-left">
            <div className="bg-background/50 p-6 rounded-sm border border-border">
              <h4 className="text-foreground font-semibold font-display text-lg mb-2">Corte e Usinagem</h4>
              <p className="text-muted-foreground text-sm">Precisão milimétrica e encaixes perfeitos.</p>
            </div>
            <div className="bg-background/50 p-6 rounded-sm border border-border">
              <h4 className="text-foreground font-semibold font-display text-lg mb-2">Fita de Borda</h4>
              <p className="text-muted-foreground text-sm">Colagem PUR com acabamento invisível e durabilidade.</p>
            </div>
          </div>
        </div>

        {/* Materials */}
        <div className="card-industrial">
          <h3 className="text-xl font-display font-semibold text-foreground mb-8 text-center">
            Matérias-Primas de Qualidade
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {materials.map((material) => (
              <div
                key={material.name}
                className="text-center p-4 bg-background rounded-sm border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-lg font-display font-semibold text-foreground">
                  {material.name}
                </span>
                <p className="text-xs text-muted-foreground mt-1">
                  {material.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            Fornecedores: Duratex e Placas do Brasil
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="heroBorder" size="lg" asChild>
            <Link to="/estrutura">
              Conheça nossa estrutura
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StructureSection;
