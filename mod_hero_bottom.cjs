const fs = require('fs');

let f = fs.readFileSync('src/components/home/HeroSection.tsx', 'utf8');

// Fixing spacing: push the main content up
f = f.replace(/className="relative z-10 container mx-auto px-4 md:px-6"/, `className="relative z-10 container mx-auto px-4 md:px-6 pb-32"`);

// Pushing cards further down and updating styling to look like defined pillars instead of floated cards
f = f.replace(/className="absolute bottom-8 left-0 right-0 w-full z-20"/g, `className="absolute bottom-0 left-0 right-0 w-full z-20 translate-y-1/2"`);

// Note: If we translate-y-1/2 the container, it flows into the next section. Instead, better approach:
f = f.replace(/className="absolute bottom-0 left-0 right-0 w-full z-20 translate-y-1\/2"/g, `className="absolute bottom-8 left-0 right-0 w-full z-20"`); // revert
f = f.replace(/className="absolute bottom-10 left-0 right-0 w-full z-20"/g, `className="absolute bottom-8 left-0 right-0 w-full z-20"`);

// Let's modify the grid to have slightly richer structure
let targetGrid = `<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={1} className="bg-primary/60 backdrop-blur-md p-6 lg:p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-primary/20 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-white font-bold tracking-wide uppercase mb-3 text-lg">Quem Somos</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                A trajetÃ³ria de inovaÃ§Ã£o e excelÃªncia que nos consolidou como a principal indÃºstria do Nordeste.
              </p>
            </motion.div>
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={2} className="bg-primary/60 backdrop-blur-md p-6 lg:p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-primary/20 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-white font-bold tracking-wide uppercase mb-3 text-lg">Estrutura Fabril</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                ConheÃ§a a infraestrutura de ponta que viabiliza nossa produÃ§Ã£o em larga escala com precisÃ£o.
              </p>
            </motion.div>
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={3} className="bg-primary/60 backdrop-blur-md p-6 lg:p-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-primary/20 hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-white font-bold tracking-wide uppercase mb-3 text-lg">Quem Atendemos</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                Lojistas, construtoras e arquitetos que confiam no nosso padrÃ£o corporativo e residencial.
              </p>
            </motion.div>
          </div>`;

let refinedGrid = `<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={1} className="bg-gradient-to-br from-primary/70 to-primary/40 backdrop-blur-md p-6 lg:p-8 rounded-xl shadow-2xl border border-white/10 hover:border-white/30 hover:bg-primary/80 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-white/50 group-hover:w-12 group-hover:bg-white transition-all"></span>
                <h3 className="text-white font-display font-semibold tracking-wide uppercase text-lg">Quem Somos</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/95 transition-colors">
                A trajetória de inovação e excelência que nos consolidou como a principal indústria do Nordeste.
              </p>
            </motion.div>
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={2} className="bg-gradient-to-br from-primary/70 to-primary/40 backdrop-blur-md p-6 lg:p-8 rounded-xl shadow-2xl border border-white/10 hover:border-white/30 hover:bg-primary/80 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-white/50 group-hover:w-12 group-hover:bg-white transition-all"></span>
                <h3 className="text-white font-display font-semibold tracking-wide uppercase text-lg">Estrutura Fabril</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/95 transition-colors">
                Conheça a infraestrutura de ponta que viabiliza nossa produção em larga escala com precisão.
              </p>
            </motion.div>
            <motion.div variants={fadeUpItem} initial="hidden" animate="show" custom={3} className="bg-gradient-to-br from-primary/70 to-primary/40 backdrop-blur-md p-6 lg:p-8 rounded-xl shadow-2xl border border-white/10 hover:border-white/30 hover:bg-primary/80 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-white/50 group-hover:w-12 group-hover:bg-white transition-all"></span>
                <h3 className="text-white font-display font-semibold tracking-wide uppercase text-lg">Quem Atendemos</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/95 transition-colors">
                Lojistas, construtoras e arquitetos que confiam no nosso padrão corporativo e residencial.
              </p>
            </motion.div>
          </div>`;

f = f.replace(targetGrid, refinedGrid);

// Ensure the section has pb so text doesn't overlap on smaller screens
f = f.replace(/className="relative min-h-\[90vh\] flex items-center overflow-hidden"/g, `className="relative min-h-[90vh] flex items-center overflow-hidden pb-48 lg:pb-32"`);
f = f.replace(/<div className="absolute bottom-8 left-0 right-0 w-full z-20">/g, `<div className="absolute bottom-8 lg:bottom-12 left-0 right-0 w-full z-20">`);

fs.writeFileSync('src/components/home/HeroSection.tsx', f, 'utf8');
