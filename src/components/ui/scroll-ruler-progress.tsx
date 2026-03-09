import React, { useEffect, useMemo, useRef, useState } from "react";
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

export function ScrollRulerProgress({ className, units = 100 }: ScrollRulerProgressProps) {
  const safeUnits = Math.max(10, Math.floor(units / 10) * 10);

  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const calculate = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const innerHeight = window.innerHeight;

      const maxScroll = Math.max(1, scrollHeight - innerHeight);
      const p = clamp01(scrollY / maxScroll);
      setProgress(p);
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
      const kind = v % 10 === 0 ? "large" : v % 5 === 0 ? "medium" : "small";
      rows.push({ value: v, kind });
    }

    return rows;
  }, [safeUnits]);

  // Track goes top->bottom; 0% at top, 100% at bottom.
  const indicatorTopPercent = clamp(progress, 0.02, 0.98) * 100;
  const formatRulerNumber = (value: number) => {
    if (value <= 0) return null;
    const n = Math.round(value / 10);
    return String(n).padStart(2, "0");
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
            {tickRows.map((row) => (
              <div key={row.value} className="tickRow">
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
                  return <span className="tickNumber">{label}</span>;
                })()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
