const fs = require("fs");
let structFile = "src/components/home/StructureSection.tsx";
let s = fs.readFileSync(structFile, "utf8");

s = s.replace(/\{\/\* Header textual \*\/\}[\s\S]*?\{\/\* Full Background Video Section/m, "{/* Full Background Video Section");

let contentOverVideo = `<div className="text-center mb-16 text-white max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-primary"></span>
                <span className="bg-primary text-primary-foreground text-xs uppercase tracking-[0.2em] font-bold px-3 py-1 rounded-sm">
                  ESTRUTURA FABRIL
                </span>
                <span className="h-px w-8 bg-primary"></span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-semibold mt-4 drop-shadow-md">
              Tecnologia Europeia e Chinesa —{" "}
              <span className="text-primary">qualidade padronizada.</span>
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-6">
              Nossa fábrica em Pernambuco possui 10.000 m² equipados com maquinário de última geração. Isso garante agilidade, repetibilidade e um acabamento premium.
            </p>
          </div>

          <div className="text-center mb-10 mt-10">`;

s = s.replace(/<div className="text-center mb-10">/, contentOverVideo);

s = s.replace(/<div className="relative w-full min-h-\[70vh\] flex items-center justify-center py-20 overflow-hidden">/, `<div className="relative w-full min-h-[90vh] flex flex-col justify-center py-20 overflow-hidden">`);

s = s.replace(/bg-slate-900\/70/, "bg-gradient-to-b from-[#1a232c]/95 via-[#1a232c]/80 to-[#1a232c]/95");
fs.writeFileSync(structFile, s, "utf8");
console.log("Structure updated")
