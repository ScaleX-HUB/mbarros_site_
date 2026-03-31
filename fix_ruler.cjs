const fs = require('fs');
let c = fs.readFileSync('src/components/ui/scroll-ruler-progress.tsx', 'utf8');

c = c.replace(/units = 100/g, 'units = 30');
c = c.replace(/const safeUnits = Math\.max\(10, Math\.floor\(units \/ 10\) \* 10\);/, 'const safeUnits = 24;');

c = c.replace(/const kind = v % 10 === 0 \? "large" : v % 5 === 0 \? "medium" : "small";/g, 'const kind = v % 6 === 0 ? "large" : "small";');

c = c.replace(/const n = Math\.round\(value \/ 10\);/g, 'const n = Math.round(value / 6) + 1;');
c = c.replace(/if \(value <= 0\) return null;/g, '');

fs.writeFileSync('src/components/ui/scroll-ruler-progress.tsx', c);
