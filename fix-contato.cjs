const fs = require("fs");
let cFile = "src/pages/Contato.tsx";
let c = fs.readFileSync(cFile, "utf8");

if(!c.includes("useTranslation")) {
  c = c.replace(/import \{ useState \} from "react";/, "import { useState } from \"react\";\nimport { useTranslation } from \"react-i18next\";");
  c = c.replace(/const Contato = \(\) => {/, "const Contato = () => {\n  const { t } = useTranslation();");
  fs.writeFileSync(cFile, c, "utf8");
  console.log("Contato fixed");
}
