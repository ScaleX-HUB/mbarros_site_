import { ArrowRight, FileSearch } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import Layout from "@/components/layout/Layout";
import { searchAll, type SearchSuggestion } from "@/lib/search";

const sectionTitles: Record<SearchSuggestion["type"], string> = {
  page: "Paginas",
  project: "Projetos",
  category: "Categorias",
  blog: "Blog",
};

const Busca = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const results = searchAll(query);

  const groupedResults = results.reduce<Record<SearchSuggestion["type"], SearchSuggestion[]>>(
    (acc, item) => {
      acc[item.type].push(item);
      return acc;
    },
    {
      page: [],
      project: [],
      category: [],
      blog: [],
    },
  );

  return (
    <Layout>
      <section className="section-container bg-card">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Busca
          </span>
          <h1 className="section-title mt-4">
            Resultados para <span className="text-gradient">{query || "sua pesquisa"}</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4">
            Navegue por paginas institucionais, projetos, categorias e conteudos do blog.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="mx-auto max-w-5xl space-y-10">
          {results.length === 0 && (
            <div className="card-industrial py-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <FileSearch className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-6 text-2xl font-display font-semibold text-foreground">
                Nada encontrado
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Tente buscar por termos como Lojista, Corporativo, Blog ou Contato.
              </p>
            </div>
          )}

          {Object.entries(groupedResults).map(([type, items]) => {
            if (!items.length) {
              return null;
            }

            return (
              <section key={type} className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-display font-semibold text-foreground">
                    {sectionTitles[type as SearchSuggestion["type"]]}
                  </h2>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {items.length} resultado(s)
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      className="card-industrial group flex items-start justify-between gap-4 transition-colors hover:border-primary/40"
                    >
                      <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-primary">
                          {sectionTitles[item.type]}
                        </p>
                        <h3 className="mt-2 text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Busca;
