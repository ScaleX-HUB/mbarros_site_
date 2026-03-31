const fs = require('fs');
let c = fs.readFileSync('src/pages/Sobre.tsx', 'utf8');
c = c.replace(/"url\('\s*"\s*\+\s*\(MBARROS_IMAGES\[0\]\?.src \?\? "\)\s*\+\s*"'\)"/, 'url(\\\'\\\\')');
c = c.replace(/alt=\{"Estrutura \$\{t\.year\} "\}/, 'alt={Estrutura \}');
fs.writeFileSync('src/pages/Sobre.tsx', c);
