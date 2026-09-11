import logo from "@/assets/mybizpartner-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <div className="section-x flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <img
            src={logo.url}
            alt="MyBizPartner logo"
            width={220}
            height={56}
            loading="lazy"
            className="h-9 w-auto"
          />
          <p className="mt-3 max-w-md text-lg text-muted-foreground">
            Turn Customer Trust Into Measurable Revenue.
          </p>
          <p className="eyebrow mt-4 text-muted-foreground">Reviews • UGC • Social Proof • CRO</p>
        </div>
        <div className="text-sm">
          <a href="https://mybizpartner.in" className="block hover:text-accent">
            mybizpartner.in
          </a>
          <a href="mailto:tech@mybizpartner.in" className="block hover:text-accent">
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
