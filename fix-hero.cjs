const fs = require("fs");
let heroFile = "src/components/home/HeroSection.tsx";
let h = fs.readFileSync(heroFile, "utf8");

h = h.replace(/\{\/\* Badge \*\/\}[\s\S]*?\{\/\* Headline \*\/\}/, "{/* Headline */}");

let bottomBar = `      {/* Bottom Info Cards */}
      <div className="absolute bottom-8 left-0 right-0 w-full z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={1} className="bg-primary/95 backdrop-blur-md p-6 lg:p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-primary/20 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-white font-bold tracking-wide uppercase mb-3 text-lg">Quem Somos</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                A trajetória de inovação e excelência que nos consolidou como a principal indústria do Nordeste.
              </p>
            </motion.div>
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={2} className="bg-primary/95 backdrop-blur-md p-6 lg:p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-primary/20 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-white font-bold tracking-wide uppercase mb-3 text-lg">Estrutura Fabril</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Conheça a infraestrutura de ponta que viabiliza nossa produção em larga escala com precisão.
              </p>
            </motion.div>
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={3} className="bg-primary/95 backdrop-blur-md p-6 lg:p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-primary/20 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-white font-bold tracking-wide uppercase mb-3 text-lg">Quem Atendemos</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Lojistas, construtoras e arquitetos que confiam no nosso padrão corporativo e residencial.
              </p>
            </motion.div>
          </div>
        </div>
      </div>`;

h = h.replace(/\{\/\* Bottom gradient \*\/\}[\s\S]*?<\/section>/, "{/* Bottom gradient */}\n      <div className=\"absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background/90 to-transparent pointer-events-none\" />\n\n" + bottomBar + "\n\n    </section>");

fs.writeFileSync(heroFile, h, "utf8");
console.log("Hero modified");
