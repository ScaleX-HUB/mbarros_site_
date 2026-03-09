import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto text-center">
        {/* Content */}
        <div className="card-industrial py-12 md:py-16 px-8 md:px-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="section-title">
              Sua loja está pronta para{" "}
              <span className="text-gradient">crescer com estrutura industrial?</span>
            </h2>
            
            <p className="section-subtitle mx-auto">
              Descubra como a parceria White Label pode transformar 
              sua operação e impulsionar seus resultados.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/seja-parceiro">
                  Quero ser parceiro
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroBorder" size="lg" asChild>
                <Link to="/contato">
                  Fale com nosso time
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
