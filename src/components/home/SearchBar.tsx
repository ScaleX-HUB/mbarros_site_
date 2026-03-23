import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SEARCH_ROUTES: Record<string, string> = {
  residencial: "/projetos?categoria=residenciais",
  quarto: "/projetos?categoria=residenciais",
  cozinha: "/projetos?categoria=residenciais",
  dormitório: "/projetos?categoria=residenciais",
  corporativo: "/projetos?categoria=corporativos",
  escritório: "/projetos?categoria=corporativos",
  especial: "/projetos?categoria=especiais",
  hotel: "/projetos?categoria=especiais",
  lojista: "/seja-parceiro",
  parceiro: "/seja-parceiro",
  "white label": "/white-label",
  mdf: "/white-label",
  mdp: "/white-label",
  laca: "/white-label",
  vidro: "/white-label",
  alumínio: "/white-label",
  contato: "/contato",
  sobre: "/sobre",
};

export function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const q = query.toLowerCase().trim();
    if (!q) return;
    const match = Object.keys(SEARCH_ROUTES).find((key) => q.includes(key));
    navigate(match ? SEARCH_ROUTES[match] : `/projetos?s=${encodeURIComponent(query)}`);
  };

  return (
    <div className="bg-card border-b border-border py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center border border-border rounded-sm overflow-hidden bg-background focus-within:border-primary transition-colors">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Buscar projetos, materiais ou soluções..."
              className="flex-1 bg-transparent px-4 py-3 text-sm outline-none text-foreground placeholder:text-muted-foreground"
            />
            <button
              onClick={handleSearch}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider transition-colors"
            >
              <Search size={16} />
              Buscar
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Tente:{" "}
            {["Residencial", "MDF", "Corporativo", "White Label"].map((s, i) => (
              <span key={s}>
                <button
                  onClick={() => setQuery(s)}
                  className="hover:text-primary transition-colors font-medium"
                >
                  {s}
                </button>
                {i < 3 && " · "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
