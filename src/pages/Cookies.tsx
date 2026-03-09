import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { acceptAllCookies, rejectOptionalCookies, requestCookieConsentReview } from "@/lib/cookie-consent";

const Cookies = () => {
  return (
    <Layout>
      <section className="section-container">
        <div className="max-w-3xl">
          <h1 className="section-title">Política de Cookies</h1>
          <p className="section-subtitle">
            Esta página explica como utilizamos cookies e como você pode gerenciar suas preferências.
          </p>

          <div className="mt-10 space-y-8">
            <Card className="p-6">
              <h2 className="text-xl font-display font-semibold">O que são cookies?</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Cookies são pequenos arquivos armazenados no seu dispositivo para permitir funcionalidades,
                melhorar a experiência e, quando autorizado, medir e otimizar desempenho.
              </p>

              <Separator className="my-6" />

              <h3 className="text-base font-display font-semibold">Categorias</h3>
              <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
                <li>
                  <span className="text-foreground font-medium">Essenciais:</span> necessários para navegação,
                  segurança e funcionamento do site.
                </li>
                <li>
                  <span className="text-foreground font-medium">Analíticos (opcionais):</span> usados para entender
                  como o site é utilizado e melhorar performance.
                </li>
                <li>
                  <span className="text-foreground font-medium">Marketing (opcionais):</span> usados para personalização
                  e campanhas.
                </li>
              </ul>

              <Separator className="my-6" />

              <h3 className="text-base font-display font-semibold">Gerenciar preferências</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Você pode alterar suas preferências a qualquer momento. A escolha é salva para futuras visitas.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="outline"
                  onClick={() => {
                    rejectOptionalCookies();
                  }}
                >
                  Rejeitar opcionais
                </Button>
                <Button
                  onClick={() => {
                    acceptAllCookies();
                  }}
                >
                  Aceitar todos
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    requestCookieConsentReview();
                  }}
                >
                  Reabrir banner
                </Button>
              </div>
            </Card>

            <div className="text-sm text-muted-foreground">
              <p>
                Se você tiver dúvidas, entre em contato pela página de Contato.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
