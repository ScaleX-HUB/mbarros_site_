import { ArrowLeft, Calendar } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

import Layout from "@/components/layout/Layout";
import { formatBlogDate, getBlogPostBySlug } from "@/lib/blog-data";

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <section className="section-container bg-card">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o blog
          </Link>

          <div className="mt-8 space-y-5">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-display font-semibold leading-snug">{post.title}</h1>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {formatBlogDate(post.date)}
            </p>
            <p className="section-subtitle">{post.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="space-y-8">
            <div className="overflow-hidden rounded-sm border border-border bg-card">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            </div>

            <div className="space-y-6 text-base leading-8 text-muted-foreground">
              <p>
                {post.excerpt} Este conteúdo reúne orientações práticas para lojistas e marcas que
                precisam operar com mais previsibilidade, qualidade e apoio industrial.
              </p>
              <p>
                Na MBarros, temas como planejamento, materiais, processos e parceria comercial são
                tratados com foco em aplicação real. O objetivo é ajudar a equipe comercial e de
                projeto a tomar decisões melhores, com menos retrabalho e mais consistência na
                entrega.
              </p>
              <p>
                Ao estruturar processos claros, alinhar expectativas com o cliente e trabalhar com
                uma indústria preparada, o lojista ganha escala sem perder controle da experiência.
                Esse é o eixo central deste artigo e do nosso modelo de operação.
              </p>
            </div>
          </article>

          <aside className="card-industrial h-fit space-y-4">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              Continue explorando
            </p>
            <h2 className="text-lg font-display font-semibold text-foreground">
              Veja mais conteúdos e soluções
            </h2>
            <div className="space-y-3 text-sm">
              <Link to="/blog" className="block text-muted-foreground transition-colors hover:text-primary">
                Ir para todos os artigos
              </Link>
              <Link to="/seja-parceiro" className="block text-muted-foreground transition-colors hover:text-primary">
                Conhecer o modelo lojista
              </Link>
              <Link to="/seja-parceiro" className="block text-muted-foreground transition-colors hover:text-primary">
                Falar sobre ser lojista
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
