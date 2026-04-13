import Layout from "@/components/layout/Layout";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { blogPosts as posts, formatBlogDate } from "@/lib/blog-data";
import { normalizeSearchQuery } from "@/lib/search";

const Blog = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("s") ?? "";

  const filteredPosts = useMemo(() => {
    const normalizedSearchTerm = normalizeSearchQuery(searchTerm);

    if (!normalizedSearchTerm) {
      return posts;
    }

    return posts.filter((post) => {
      const searchableContent = normalizeSearchQuery(
        `${post.title} ${post.excerpt} ${post.category}`
      );

      return searchableContent.includes(normalizedSearchTerm);
    });
  }, [searchTerm]);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-card/60 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
          <p className="text-primary text-[11px] uppercase tracking-[0.16em] font-medium">
            Blog
          </p>
          <h1 className="text-xl md:text-2xl font-display font-semibold mt-1.5 text-foreground">
            Conteúdo para lojistas
          </h1>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-container pt-8 md:pt-10">
        <div className="max-w-6xl mx-auto">
          {searchTerm && (
            <div className="mb-8 text-center">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                Resultados para <span className="font-medium text-foreground">{searchTerm}</span>
              </p>
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
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
                      {formatBlogDate(post.date)}
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

          {filteredPosts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">Nenhum artigo encontrado para esse termo.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
