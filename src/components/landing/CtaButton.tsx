export function scrollToForm() {
  const el = document.getElementById("report-form");
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
  const input = el?.querySelector("input");
  window.setTimeout(() => (input as HTMLInputElement | null)?.focus(), 700);
}

export function CtaButton({
  label = "Find my conversion leaks",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <button type="button" onClick={scrollToForm} className={`btn-cta ${className}`}>
      {label} <span aria-hidden="true">→</span>
    </button>
  );
}
