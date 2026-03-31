const fs = require('fs');

let f = fs.readFileSync('src/components/home/HeroSection.tsx', 'utf-8');

// fix encoding issue
f = f.replace(/A melhor indï¿½stria de mï¿½veis planejados/g, "A melhor indústria de móveis planejados");
f = f.replace(/Para marcas que querem crescer\. Focamos na produï¿½ï¿½o efetiva para que vocï¿½ foque nas vendas\./g, "Para marcas que querem crescer. Focamos na produção efetiva para que você foque nas vendas.");

fs.writeFileSync('src/components/home/HeroSection.tsx', f, 'utf-8');
