const fs = require("fs");
let authFile = "src/components/home/AuthoritySection.tsx";
let a = fs.readFileSync(authFile, "utf8");

a = a.replace(/<p className="mt-2 text-2xl font-display/, `<p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/80 mb-2">{t("hero.badge")}</p>
            <p className="mt-2 text-2xl font-display`);

fs.writeFileSync(authFile, a, "utf8");
console.log("Auth modified");
