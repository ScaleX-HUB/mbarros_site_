import { useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = useMemo(() => resolvedTheme === "dark", [resolvedTheme]);

  const toggle = () => setTheme(isDark ? "light" : "dark");

  return (
    <div
      className={cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer select-none transition-colors duration-300 border border-border bg-card",
        className,
      )}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={mounted ? (isDark ? "Ativar tema claro" : "Ativar tema escuro") : "Tema"}
    >
      <div className="flex justify-between items-center w-full">
        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 bg-foreground/10",
            isDark ? "transform translate-x-0" : "transform translate-x-8",
          )}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-foreground" strokeWidth={1.5} />
          ) : (
            <Sun className="w-4 h-4 text-foreground" strokeWidth={1.5} />
          )}
        </div>

        <div
          className={cn(
            "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
            isDark ? "bg-transparent" : "transform -translate-x-8",
          )}
        >
          {isDark ? (
            <Sun className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
          ) : (
            <Moon className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
          )}
        </div>
      </div>
    </div>
  );
}
