export const CTA_HREF = "#book-demo";

export function CtaButton({
  label = "Find my conversion leaks",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a href={CTA_HREF} className={`btn-cta ${className}`}>
      {label} <span aria-hidden="true">→</span>
    </a>
  );
}
