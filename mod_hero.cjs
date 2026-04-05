const fs = require('fs');

let f = fs.readFileSync('src/components/home/HeroSection.tsx', 'utf-8');

// fix encoding issue
f = f.replace(/A maior ind�stria de m�veis planejados/g, "A maior ind�stria de m�veis planejados");
f = f.replace(/Para marcas que querem crescer\. Focamos na produ��o efetiva para que voc� foque nas vendas\./g, "Para marcas que querem crescer. Focamos na produ��o efetiva para que voc� foque nas vendas.");

fs.writeFileSync('src/components/home/HeroSection.tsx', f, 'utf-8');
