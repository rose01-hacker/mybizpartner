export const CTA_HREF =
  "mailto:tech@mybizpartner.in?subject=Free%20Shopify%20Conversion%20Leak%20Report";

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
