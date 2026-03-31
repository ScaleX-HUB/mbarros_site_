const fs = require('fs');
let file = 'src/components/home/HeroSection.tsx';
let txt = fs.readFileSync(file, 'utf8');

txt = txt.replace(/bg-black\/40 dark:bg-black\/60/g, 'bg-[#4a2b16]/70 dark:bg-[#4a2b16]/80');

fs.writeFileSync(file, txt, 'utf8');
