import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  acceptAllCookies,
  getCookieConsent,
  onCookieConsentOpen,
  rejectOptionalCookies,
  setCookieConsent,
  type CookieConsentPreferences,
} from "@/lib/cookie-consent";

type CookieConsentBannerProps = {
  className?: string;
};

export default function CookieConsentBanner({ className }: CookieConsentBannerProps) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookieConsentPreferences | null>(null);

  useEffect(() => {
    setMounted(true);
    const existing = getCookieConsent();
    setPrefs(existing);
    setOpen(!existing);

    return onCookieConsentOpen(() => {
      setPrefs(getCookieConsent());
      setOpen(true);
    });
  }, []);

  const draft = useMemo(() => {
    return (
      prefs ?? {
        version: 1 as const,
        essential: true as const,
        analytics: false,
        marketing: false,
        updatedAt: new Date().toISOString(),
      }
    );
  }, [prefs]);

  if (!mounted || !open) return null;

  const savePrefs = (next: CookieConsentPreferences) => {
    const toSave: CookieConsentPreferences = {
      ...next,
      version: 1,
      essential: true,
      updatedAt: new Date().toISOString(),
    };
    setCookieConsent(toSave);
    setPrefs(toSave);
    setOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl",
        className,
      )}
      role="region"
      aria-label="Consentimento de cookies"
    >
      <div className="rounded-md border border-border bg-background/95 backdrop-blur-sm shadow-sm">
        <div className="p-4 md:p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <p className="font-display font-semibold text-foreground">Preferências de cookies</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Usamos cookies essenciais para o site funcionar. Você pode aceitar ou recusar cookies opcionais.
                Saiba mais na {" "}
                <Link to="/cookies" className="text-primary hover:underline">Política de Cookies</Link>.
              </p>
            </div>

            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  rejectOptionalCookies();
                  setOpen(false);
                }}
              >
                Rejeitar
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  acceptAllCookies();
                  setOpen(false);
                }}
              >
                Aceitar
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm">Preferências</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Preferências de cookies</DialogTitle>
                    <DialogDescription>
                      Ajuste quais cookies opcionais podem ser utilizados.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <p className="text-sm font-medium text-foreground">Essenciais</p>
                        <p className="text-sm text-muted-foreground">
                          Necessários para o site funcionar corretamente.
                        </p>
                      </div>
                      <Switch checked disabled aria-label="Cookies essenciais" />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <p className="text-sm font-medium text-foreground">Analíticos</p>
                        <p className="text-sm text-muted-foreground">
                          Ajudam a entender uso e melhorar performance.
                        </p>
                      </div>
                      <Switch
                        checked={draft.analytics}
                        onCheckedChange={(checked) =>
                          setPrefs({
                            ...draft,
                            analytics: Boolean(checked),
                            version: 1,
                            essential: true,
                            updatedAt: draft.updatedAt,
                          })
                        }
                        aria-label="Cookies analíticos"
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <p className="text-sm font-medium text-foreground">Marketing</p>
                        <p className="text-sm text-muted-foreground">
                          Usados para personalização e campanhas.
                        </p>
                      </div>
                      <Switch
                        checked={draft.marketing}
                        onCheckedChange={(checked) =>
                          setPrefs({
                            ...draft,
                            marketing: Boolean(checked),
                            version: 1,
                            essential: true,
                            updatedAt: draft.updatedAt,
                          })
                        }
                        aria-label="Cookies de marketing"
                      />
                    </div>
                  </div>

                  <DialogFooter className="gap-2 sm:gap-0">
                    <Button
                      variant="outline"
                      onClick={() => {
                        rejectOptionalCookies();
                        setOpen(false);
                      }}
                    >
                      Rejeitar opcionais
                    </Button>
                    <Button
                      onClick={() =>
                        savePrefs({
                          ...draft,
                          version: 1,
                          essential: true,
                          updatedAt: new Date().toISOString(),
                        })
                      }
                    >
                      Salvar
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
