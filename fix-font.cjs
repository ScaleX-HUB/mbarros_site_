const fs = require('fs');

let cssFile = 'src/index.css';
let css = fs.readFileSync(cssFile, 'utf8');
css = css.replace(/family=Poppins:wght@400;600/g, 'family=Inter:wght@300;400;500;600;700');
css = css.replace(/--font-display: 'Poppins'/g, '--font-display: \\'Inter\\'');
css = css.replace(/--font-body: 'Poppins'/g, '--font-body: \\'Inter\\'');
fs.writeFileSync(cssFile, css, 'utf8');

let twFile = 'tailwind.config.ts';
let tw = fs.readFileSync(twFile, 'utf8');
tw = tw.replace(/fontFamily: \{\s+display: \["Poppins"/g, 'fontFamily: {\n        display: ["Inter"');
tw = tw.replace(/body: \["Poppins"/g, 'body: ["Inter"');
fs.writeFileSync(twFile, tw, 'utf8');
