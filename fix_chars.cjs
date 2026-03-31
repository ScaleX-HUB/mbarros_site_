const fs = require('fs');
let s = fs.readFileSync('src/pages/Contato.tsx', 'utf8');

s = s.replace(/nÂº/g, 'nº');
s = s.replace(/â€“/g, '–');
s = s.replace(/CEP 53402-010/g, 'CEP 53402-010');

fs.writeFileSync('src/pages/Contato.tsx', s, 'utf8');
