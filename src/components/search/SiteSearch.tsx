import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  getDefaultSuggestions,
  getSearchSuggestions,
  resolveSearchDestination,
  type SearchSuggestion,
} from "@/lib/search";
import { cn } from "@/lib/utils";

interface SiteSearchProps {
  className?: string;
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  placeholder?: string;
  compact?: boolean;
  subtle?: boolean;
  collapsible?: boolean;
  hideDefaultSuggestions?: boolean;
}

const suggestionTypeLabel: Record<SearchSuggestion["type"], string> = {
  page: "Pagina",
  project: "Projeto",
  category: "Categoria",
  blog: "Blog",
};

export function SiteSearch({
  className,
  formClassName,
  inputClassName,
  buttonClassName,
  placeholder = "Buscar projetos, conteúdos e páginas...",
  compact = false,
  subtle = false,
  collapsible = false,  hideDefaultSuggestions = false,}: SiteSearchProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(!collapsible);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuery("");
    setIsFocused(false);
    setIsExpanded(!collapsible);
  }, [collapsible, location.pathname, location.search]);

  useEffect(() => {
    if (isExpanded) {
      window.setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (isExpanded) {
      window.setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [isExpanded]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsFocused(false);

        if (collapsible && !query.trim()) {
          setIsExpanded(false);
        }
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const suggestions = useMemo(() => {
    if (query.trim()) {
      return getSearchSuggestions(query, 6);
    }

    if (hideDefaultSuggestions) {
      return [];
    }

    return getDefaultSuggestions();
  }, [query, hideDefaultSuggestions]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (collapsible && !isExpanded) {
      setIsExpanded(true);
      return;
    }

    const destination = resolveSearchDestination(query);

    if (!destination) return;

    navigate(destination);
  };

  const handleSuggestionSelect = (suggestion: SearchSuggestion) => {
    navigate(suggestion.path);
  };

  const handleExpand = () => {
    if (!collapsible) return;

    setIsExpanded(true);
  };

  const handleCollapse = () => {
    if (!collapsible) return;

    setQuery("");
    setIsFocused(false);
    setIsExpanded(false);
  };

  return (
    <div
      ref={wrapperRef}
      className={cn(
        "relative",
        collapsible && "transition-all duration-300",
        collapsible && !isExpanded ? "w-10" : className,
        collapsible && isExpanded && className,
      )}
    >
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex items-center gap-2 rounded-sm border border-border bg-background/95 p-2 shadow-sm backdrop-blur-sm",
          compact ? "min-h-10" : "min-h-14 px-3 py-3",
          subtle && "border-border/70 bg-muted/30 shadow-none",
          collapsible && !isExpanded && "w-10 justify-center gap-0 overflow-hidden rounded-full px-0",
          collapsible && isExpanded && "rounded-full px-2",
          formClassName,
        )}
        role="search"
      >
        <button
          type="button"
          onClick={handleExpand}
          aria-label="Abrir busca"
          className={cn(
            "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors",
            subtle && "hover:text-foreground",
            !collapsible && "pointer-events-none"
          )}
        >
          <Search className={cn("h-4 w-4", subtle && "opacity-70")} />
        </button>
        <Input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className={cn(
            "border-0 bg-transparent px-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0",
            compact ? "h-7 text-sm" : "h-9 text-sm md:text-base",
            subtle && "placeholder:text-muted-foreground/80",
            collapsible && !isExpanded && "w-0 p-0 opacity-0",
            collapsible && isExpanded && "min-w-[9rem]",
            inputClassName,
          )}
        />
        <Button
          type="submit"
          variant={subtle ? "ghost" : "hero"}
          size={compact ? "icon" : "default"}
          className={cn(
            compact ? "h-8 w-8 shrink-0" : "px-5 py-3",
            subtle && "text-muted-foreground hover:text-foreground",
            collapsible && !isExpanded && "hidden",
            buttonClassName,
          )}
        >
          <span className={cn(compact && "sr-only")}>Buscar</span>
          <Search className="h-4 w-4" />
        </Button>

        {collapsible && isExpanded && (
          <button
            type="button"
            onClick={handleCollapse}
            aria-label="Fechar busca"
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {isExpanded && isFocused && suggestions.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-sm border border-border bg-popover shadow-xl">
          <div className="border-b border-border px-4 py-3 text-xs uppercase tracking-wider text-muted-foreground">
            {query.trim() ? "Sugestoes" : "Buscas populares"}
          </div>
          <div className="max-h-80 overflow-y-auto">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => handleSuggestionSelect(suggestion)}
                className="flex w-full items-start justify-between gap-4 border-b border-border/60 px-4 py-3 text-left transition-colors hover:bg-muted/50 last:border-b-0"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{suggestion.title}</p>
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{suggestion.description}</p>
                </div>
                <div className="flex flex-shrink-0 items-center gap-2 pt-0.5 text-[11px] uppercase tracking-wider text-primary">
                  <span>{suggestionTypeLabel[suggestion.type]}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}