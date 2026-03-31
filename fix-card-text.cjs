const fs = require('fs');
let file = 'src/components/home/HeroSection.tsx';
let txt = fs.readFileSync(file, 'utf8');

// For titles
txt = txt.replace(/<h3 className="text-white font-bold tracking-wide uppercase mb-3 text-lg">/g, '<h3 className="text-foreground dark:text-white font-bold tracking-wide uppercase mb-3 text-lg">');

// For paragraphs
txt = txt.replace(/<p className="text-white\/90 text-sm leading-relaxed">/g, '<p className="text-foreground/90 dark:text-white/90 text-sm leading-relaxed">');

fs.writeFileSync(file, txt, 'utf8');
