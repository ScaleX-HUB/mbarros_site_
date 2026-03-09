import Layout from "@/components/layout/Layout";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { MBARROS_IMAGES } from "@/lib/mbarros-images";

// Placeholder blog posts
const posts = [
  {
    id: 1,
    slug: "tendencias-moveis-planejados-2024",
    title: "Tendências em Móveis Planejados para 2024",
    excerpt: "Descubra as principais tendências que estão moldando o mercado de móveis planejados este ano.",
    date: "2024-01-15",
    category: "Tendências",
    image: MBARROS_IMAGES[0]?.src ?? "",
  },
  {
    id: 2,
    slug: "como-escolher-parceiro-white-label",
    title: "Como Escolher um Parceiro White Label Confiável",
    excerpt: "Critérios essenciais para avaliar antes de firmar parceria com uma indústria de móveis.",
    date: "2024-01-10",
    category: "Negócios",
    image: MBARROS_IMAGES[1]?.src ?? "",
  },
  {
    id: 3,
    slug: "materiais-qualidade-moveis-planejados",
    title: "A Importância da Qualidade dos Materiais",
    excerpt: "Entenda por que a escolha das matérias-primas impacta diretamente na satisfação do cliente.",
    date: "2024-01-05",
    category: "Qualidade",
    image: MBARROS_IMAGES[2]?.src ?? "",
  },
  {
    id: 4,
    slug: "otimizacao-projetos-promob",
    title: "Otimizando Projetos com o Software Promob",
    excerpt: "Dicas práticas para aproveitar ao máximo o software de projetos e reduzir erros.",
    date: "2023-12-28",
    category: "Tecnologia",
    image: MBARROS_IMAGES[3]?.src ?? "",
  },
  {
    id: 5,
    slug: "mercado-moveis-nordeste",
    title: "O Crescimento do Mercado de Móveis no Nordeste",
    excerpt: "Análise do cenário atual e as oportunidades para lojistas na região.",
    date: "2023-12-20",
    category: "Mercado",
    image: MBARROS_IMAGES[0]?.src ?? "",
  },
  {
    id: 6,
    slug: "vantagens-producao-industrial",
    title: "Vantagens da Produção Industrial vs Marcenaria",
    excerpt: "Comparativo entre os dois modelos e quando cada um faz mais sentido.",
    date: "2023-12-15",
    category: "Negócios",
    image: MBARROS_IMAGES[1]?.src ?? "",
  },
];

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-container bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Blog
          </span>
          <h1 className="section-title mt-4">
            Conteúdo para <span className="text-gradient">lojistas</span>
          </h1>
          <p className="section-subtitle mx-auto mt-4">
            Artigos, tendências e insights sobre o mercado de móveis planejados.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.id} className="card-industrial group">
                {/* Image */}
                <div className="aspect-video bg-secondary rounded-sm overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="text-primary uppercase tracking-wider font-medium">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <h2 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-muted-foreground text-sm">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider pt-2"
                  >
                    Ler mais
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
