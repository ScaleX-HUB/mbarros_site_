const fs = require('fs');
let s = fs.readFileSync('src/pages/Sobre.tsx', 'utf-8');

// Text sizing
s = s.replace(/text-4xl md:text-5xl lg:text-6xl/g, 'text-3xl md:text-4xl lg:text-5xl');
s = s.replace(/text-lg text-muted-foreground/g, 'text-base text-muted-foreground');

// Founders image
const imgTarget = /<img\s*src=\{MBARROS_IMAGES\[0\]\.src\}\s*alt="Gestores da empresa em frente a uma m�quina CNC iluminada"\s*className="w-full h-full object-cover"\s*\/>/;
s = s.replace(imgTarget, `<div className="relative group rounded-sm overflow-hidden border border-border bg-black shadow-xl w-full h-full">
              <div className="absolute -inset-1 bg-primary/20 rounded-sm blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <img
                src="/imagens_mbarros/donos_fundadores_fabrica.jpg"
                alt="Fundadores da MBarros"
                className="w-full aspect-[4/3] md:aspect-video object-cover object-[50%_28%] md:object-[50%_22%]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
                <p className="text-white text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Fundadores � vis�o e prop�sito
                </p>
              </div>
            </div>`);

const midTarget = /<\/div>\s*<\/div>\s*<\/section>\s*\{\/\* Valores \(Brought together with Miss�o e Vis�o conceptually\) \*\/\}\s*<section className="py-20 bg-background">\s*<div className="container mx-auto px-4 text-center">\s*<div className="mb-16">\s*<h2 className="text-3xl font-display font-bold">Nossos Valores<\/h2>\s*<p className="text-muted-foreground mt-4">Os pilares que sustentam a MBARROS todos os dias\.<\/p>\s*<\/div>/;

s = s.replace(midTarget, `</div>
          
          <div className="mt-24 text-center">
            <h2 className="text-3xl font-display font-bold text-white">Nossos Valores</h2>
            <p className="text-white/70 mt-4">Os pilares que sustentam a MBARROS todos os dias.</p>
          </div>
`);
s = s.replace(/bg-card hover:shadow-lg transition-all hover:-translate-y-1/g, 'bg-black/20 text-white backdrop-blur-sm border-white/10 hover:bg-black/30 transition-all hover:-translate-y-1');

// Timeline
const timelineOld = /\{\/\* Timeline - Menor e sem Zoom \*\/\}[\s\S]+?<\/Layout>/;
const timelineNewCode = `      {/* Timeline com Efeito */}
      <section className="bg-muted/10 w-full pb-20">
        <Timeline
          title="A Linha do Tempo"
          description="Nossa evolu��o e marcos importantes ao longo das �ltimas duas d�cadas."
          data={timeline.map((item) => ({
            title: item.year,
            content: (
              <div className="bg-background p-6 rounded-lg border border-border shadow-sm flex items-center gap-6 group hover:border-primary/50 transition-colors">
                <div className="w-24 h-24 shrink-0 rounded-md overflow-hidden bg-muted">
                  <img src={item.image} alt={item.year} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{item.event}</p>
              </div>
            )
          }))}
        />
      </section>

    </Layout>`;

s = s.replace(timelineOld, timelineNewCode);

fs.writeFileSync('src/pages/Sobre.tsx', s);
console.log('Done');
