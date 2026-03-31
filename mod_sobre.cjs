const fs = require('fs');

let f = fs.readFileSync('src/pages/Sobre.tsx', 'utf8');

// Replace the Hero text
const heroTargetStr = `HÃ¡ mais de 35 anos transformando projetos em realidade. Estrutura industrial sÃ³lida para sustentar grandes marcas.`;
f = f.replace(/HÃ¡ mais de 35 anos transformando projetos em realidade\. Estrutura industrial sÃ³lida para sustentar grandes marcas\./, "Há duas décadas, evoluímos da marcenaria artesanal para uma das indústrias mais avançadas do Nordeste, unindo tradição e tecnologia na produção de móveis planejados.");
f = f.replace(/Há mais de 35 anos transformando projetos em realidade\. Estrutura industrial sólida para sustentar grandes marcas\./, "Há duas décadas, evoluímos da marcenaria artesanal para uma das indústrias mais avançadas do Nordeste, unindo tradição e tecnologia na produção de móveis planejados.");
f = f.replace(/Uma indústria <span className="text-gradient">100% pernambucana<\/span>/, 'Uma indústria <span className="text-gradient">avançada</span>');
f = f.replace(/Uma indÃºstria <span className="text-gradient">100% pernambucana<\/span>/, 'Uma indústria <span className="text-gradient">avançada</span>');

fs.writeFileSync('src/pages/Sobre.tsx', f, 'utf8');
