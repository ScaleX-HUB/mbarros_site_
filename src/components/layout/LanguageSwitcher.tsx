import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  compact?: boolean;
}

const FlagBR = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 36 36" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" fill="#009c3b" />
    <polygon points="18,5 32,18 18,31 4,18" fill="#ffdf00" />
    <circle cx="18" cy="18" r="6.5" fill="#002776" />
  </svg>
);

const FlagEN = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 36 36" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" fill="#fff" />
    <rect width="36" height="4.5" y="4.5" fill="#bf0a30" />
    <rect width="36" height="4.5" y="13.5" fill="#bf0a30" />
    <rect width="36" height="4.5" y="22.5" fill="#bf0a30" />
    <rect width="36" height="4.5" y="31.5" fill="#bf0a30" />
    <rect width="19" height="18" fill="#002868" />
  </svg>
);

const FlagES = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 36 36" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="36" height="36" fill="#c60b1e" />
    <rect width="36" height="18" y="9" fill="#ffc400" />
  </svg>
);

const languages = [
  { code: "pt", label: "PT", name: "Português", Icon: FlagBR },
  { code: "en", label: "EN", name: "English", Icon: FlagEN },
];

const LanguageSwitcher = ({ compact = false }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  if (compact) {
    return (
      <div className="flex gap-1 bg-background border border-border rounded-sm p-1">
        {languages.map((lang) => {
          const isActive = i18n.resolvedLanguage?.startsWith(lang.code);
          return (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              title={lang.name}
              className={cn(
                "px-2 py-1.5 text-xs font-medium rounded-sm transition-colors flex items-center justify-center",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <lang.Icon className={cn(
                "w-3.5 h-3.5 rounded-full object-cover shrink-0 transition-all duration-300",
                !isActive && "grayscale opacity-80"
              )} />
              <span className="sr-only">{lang.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-[38px] w-[38px] rounded-sm bg-background border border-border hover:bg-secondary relative group overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Globe className="h-[18px] w-[18px] text-foreground transition-transform group-hover:scale-110" />
          <span className="sr-only">Trocar idioma</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[150px] p-2">
        {languages.map((lang) => {
          const isActive = i18n.resolvedLanguage?.startsWith(lang.code);
          return (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={cn(
                "cursor-pointer font-medium text-sm py-2 px-3 focus:bg-primary/10 focus:text-primary transition-colors flex items-center gap-3 group/item",
                isActive && "text-primary bg-primary/5"
              )}
            >
              <lang.Icon className={cn(
                "w-4 h-4 rounded-full object-cover shrink-0 transition-all duration-300 border border-border/50",
                !isActive && "grayscale opacity-70 group-hover/item:grayscale-0 group-hover/item:opacity-100 group-focus/item:grayscale-0 group-focus/item:opacity-100"
              )} />
              {lang.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
