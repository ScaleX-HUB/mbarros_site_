const fs = require("fs");

let heroFile = "src/components/home/HeroSection.tsx";
let h = fs.readFileSync(heroFile, "utf8");

// Remove CTAs
h = h.replace(/\{\/\* CTAs \*\/\}[\s\S]*?<\/motion\.div>/, "");

// Add bottom bar
let bottomBar = `
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-card/80 to-transparent" />

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-[#1a232c]/95 backdrop-blur-md px-6 md:px-12 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-slate-700">
            <div className="space-y-3 md:pr-8">
              <h3 className="text-white font-bold tracking-wide uppercase">Nossa História</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                A trajetória de inovação e excelência que nos consolidou como a principal indústria do Nordeste.
              </p>
            </div>
            <div className="space-y-3 md:px-8">
              <h3 className="text-white font-bold tracking-wide uppercase">Polo Fabril</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Conheça a infraestrutura de ponta que viabiliza nossa produção em larga escala com precisão.
              </p>
            </div>
            <div className="space-y-3 md:pl-8">
              <h3 className="text-white font-bold tracking-wide uppercase">Nossos Parceiros</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Lojistas, arquitetos e construtoras que confiam em nosso padrão corporativo e residencial.
              </p>
            </div>
          </div>
        </div>
      </div>
`;
h = h.replace(/\{\/\* Bottom gradient \*\/\}[\s\S]*?<\/section>/, bottomBar + "\n    </section>");

fs.writeFileSync(heroFile, h, "utf8");
console.log("Hero updated");

