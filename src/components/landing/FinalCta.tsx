import ctaVisual from "@/assets/cta-visual.jpg";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="bg-primary py-20 text-ink-foreground md:py-28">
      <div className="section-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <Reveal>
          <h2 className="display-2">Stop guessing where your sales are leaking.</h2>
          <p className="mt-5 text-xl text-ink-muted">
            Find the 3 biggest conversion opportunities in your Shopify store.
          </p>
          <div className="mt-8">
            <CtaButton />
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            No credit card. No obligation. Just your report.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <img
            src={ctaVisual}
            alt="Store analytics composition showing revenue and conversion cards"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full rounded-2xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
