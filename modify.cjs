
const fs = require("fs");

// HeroSection Edit
let heroFile = fs.readFileSync("src/components/home/HeroSection.tsx", "utf-8");
// Decrease opacity of bottom cards from bg-primary/95 to bg-primary/60
heroFile = heroFile.replace(/bg-primary\/95 backdrop-blur-md/g, "bg-primary/60 backdrop-blur-md");
fs.writeFileSync("src/components/home/HeroSection.tsx", heroFile, "utf-8");

// AuthoritySection Edit
let authFile = fs.readFileSync("src/components/home/AuthoritySection.tsx", "utf-8");
// Remove duplicated t("hero.badge")
authFile = authFile.replace(/<p className="text-xs font-bold uppercase tracking-\[0\.2em\] text-primary\/80 mb-2">{t\("hero\.badge"\)}<\/p>\s*<p className="text-xs font-bold uppercase tracking-\[0\.2em\] text-primary\/80 mb-2">{t\("hero\.badge"\)}<\/p>/, `<p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 mb-2">{t("hero.badge")}</p>`);
// Scale down the stats text size in the boxes
authFile = authFile.replace(/stat-number text-3xl md:text-4xl lg:text-5xl/g, "stat-number text-2xl md:text-3xl lg:text-4xl");
fs.writeFileSync("src/components/home/AuthoritySection.tsx", authFile, "utf-8");
console.log("Hero and Authority modified");

