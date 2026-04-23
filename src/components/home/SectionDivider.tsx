/**
 * SectionDivider — thin glowing hairline.
 * Matches the site's industrial-luxury identity (amber/orange primary).
 */
const SectionDivider = () => (
  <div className="relative w-full h-px select-none overflow-visible" aria-hidden="true">
    <span
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, hsl(var(--primary)/0.50) 30%, hsl(var(--primary)/0.50) 70%, transparent 100%)",
        boxShadow: "0 0 8px 1px hsl(var(--primary)/0.18)",
      }}
    />
  </div>
);

export default SectionDivider;
