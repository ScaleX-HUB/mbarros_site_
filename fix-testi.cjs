const fs = require('fs');
let file = 'src/components/home/TestimonialsSection.tsx';
let txt = fs.readFileSync(file, 'utf8');

txt = txt.replace(/const testimonials = \[([\s\S]*?)\];/, (match, p1) => {
    return 'const testimonials = [' + p1 + ',' + p1 + ']; // Duplicado para garantir o loop do carrossel';
});

fs.writeFileSync(file, txt, 'utf8');
