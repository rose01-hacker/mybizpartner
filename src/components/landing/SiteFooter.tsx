export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <div className="section-x flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">MyBizPartner</p>
          <p className="mt-2 max-w-md text-lg text-muted-foreground">
            Turn Customer Trust Into Measurable Revenue.
          </p>
          <p className="eyebrow mt-4 text-muted-foreground">Reviews • UGC • Social Proof • CRO</p>
        </div>
        <div className="text-sm">
          <a href="https://mybizpartner.in" className="block hover:text-accent-foreground">
            mybizpartner.in
          </a>
          <a href="mailto:tech@mybizpartner.in" className="block hover:text-accent-foreground">
            tech@mybizpartner.in
          </a>
        </div>
      </div>
      <div className="section-x mt-10 text-xs text-muted-foreground">
        © {new Date().getFullYear()} MyBizPartner. All rights reserved.
      </div>
    </footer>
  );
}
