import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import "./scroll-ruler-progress.css";

type ScrollRulerProgressProps = {
  className?: string;
  /** Total tick units along the ruler. Use a multiple of 10 for clean numbering. */
  units?: number;
};

function clamp01(value: number) {
  return Math.min(1, Math.max(0, value));
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ScrollRulerProgress({ className }: ScrollRulerProgressProps) {
  const [sectionCount, setSectionCount] = useState(5);
  const location = useLocation();

  useEffect(() => {
    // Count sections to make the ruler proportional to the page size
    const calculateSections = () => {
      const sections = document.querySelectorAll('main section');
      // A minimum of 3 sections just to keep the ruler looking good on small pages
      const count = Math.max(3, sections.length);
      setSectionCount(count);
    };

    calculateSections();
    // Allow a small delay for routes rendering async content
    const timeout = setTimeout(calculateSections, 500);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  // If there are N sections, we want N large ticks, meaning N-1 intervals.
  // We place a large tick every 6 units.
  const safeUnits = Math.max(6, (sectionCount - 1) * 6);

  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const calculate = () => {
      const scrollY = window.scrollY;
      const sections = Array.from(document.querySelectorAll('main section'));
      
      if (sections.length < 2) {
        const scrollHeight = document.documentElement.scrollHeight;
        const innerHeight = window.innerHeight;
        const maxScroll = Math.max(1, scrollHeight - innerHeight);
        setProgress(clamp01(scrollY / maxScroll));
      } else {
        const threshold = window.innerHeight / 3;
        let activeIdx = 0;
        
        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].getBoundingClientRect();
          if (rect.top <= threshold) {
            activeIdx = i;
          }
        }
        
        const currentSection = sections[activeIdx];
        const rect = currentSection.getBoundingClientRect();
        
        let fraction = 0;
        if (rect.height > 0) {
           fraction = (threshold - rect.top) / rect.height;
           fraction = clamp01(fraction);
        }
        
        let p = (activeIdx + fraction) / (sections.length - 1);
        
        if (scrollY === 0) p = 0;
        else if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 10) p = 1;

        setProgress(clamp01(p));
      }
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(calculate);
    };

    calculate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const tickRows = useMemo(() => {
    const rows: Array<{ value: number; kind: "small" | "medium" | "large" }> = [];

    for (let v = 0; v <= safeUnits; v += 1) {
      const kind = v % 6 === 0 ? "large" : "small";
      rows.push({ value: v, kind });
    }

    return rows;
  }, [safeUnits]);

  // Track goes top->bottom; 0% at top, 100% at bottom.
  const indicatorTopPercent = clamp(progress, 0.02, 0.98) * 100;
  const formatRulerNumber = (value: number) => {

    const n = Math.round(value / 6) + 1;
    return String(n).padStart(2, "0");
  };

  const scrollToSection = (value: number) => {
    const index = Math.round(value / 6);
    const sections = document.querySelectorAll('main section');
    if (sections[index]) {
      // Get the bounding rect to offset for the header accurately
      const top = sections[index].getBoundingClientRect().top + window.scrollY - 100; 
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("rulerWrap", className)} aria-hidden="true">
      <div className="ruler">
        <div className="track">
          <div className="spine" />

          <div className="indicator" style={{ top: `${indicatorTopPercent}%` }}>
            <span className="indicatorLine" />
          </div>

          <div className="ticks">
            {tickRows.map((row) => {
              const rowPercent = row.value / safeUnits;
              const isActive = Math.abs(progress - rowPercent) < 0.05;
              return (
              <div key={row.value} className={cn("tickRow", isActive && "active")}>
                <span
                  className={cn(
                    "tick",
                    row.kind === "small" && "tickSmall",
                    row.kind === "medium" && "tickMedium",
                    row.kind === "large" && "tickLarge",
                  )}
                />
                {row.kind === "large" && (() => {
                  const label = formatRulerNumber(row.value);
                  if (!label) return null;
                  return (
                    <span 
                      className={cn("tickNumber", isActive && "text-primary")}
                      onClick={() => scrollToSection(row.value)}
                      role="button"
                    >
                      {label}
                    </span>
                  );
                })()}
              </div>
            )})}
          </div>
        </div>
      </div>
    </div>
  );
}
