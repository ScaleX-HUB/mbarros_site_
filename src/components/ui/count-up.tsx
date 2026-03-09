import { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export type CountUpProps = {
  to: number;
  durationMs?: number;
  className?: string;
  format?: (value: number) => string;
};

const defaultFormat = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 0,
  }).format(Math.round(value));
};

export function CountUp({
  to,
  durationMs = 1200,
  className,
  format = defaultFormat,
}: CountUpProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const safeTo = useMemo(() => (Number.isFinite(to) ? Math.max(0, to) : 0), [to]);
  const [displayValue, setDisplayValue] = useState(() => (prefersReducedMotion ? safeTo : 0));

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplayValue(safeTo);
      return;
    }

    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = durationMs <= 0 ? 1 : Math.min(1, elapsed / durationMs);

      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayValue(safeTo * eased);

      if (t < 1) rafId = requestAnimationFrame(tick);
      else setDisplayValue(safeTo);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [durationMs, isInView, prefersReducedMotion, safeTo]);

  return (
    <span ref={ref} className={className}>
      {format(displayValue)}
    </span>
  );
}
