import heroStore from "@/assets/hero-store.jpg";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

const leakTags = ["Trust", "Product Page", "Buying Journey"];

const funnel = [
  { label: "Visitors", width: "100%" },
  { label: "Product views", width: "62%" },
  { label: "Add to cart", width: "28%" },
  { label: "Purchase", width: "11%" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="section-x grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow inline-flex items-center gap-2 rounded-full bg-accent/25 px-3 py-1.5 text-foreground">
            <span className="size-2 rounded-full bg-accent" /> Free Conversion Leak Report
          </span>

          <h1 className="mt-6">
            <span className="display-2 block text-muted-foreground">
              You're already paying for the traffic.
            </span>
            <span className="display-1 mt-2 block">
              But how much of it are you <span className="text-accent">actually converting?</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Your store may be getting visitors every day. But somewhere between landing on
            your website and clicking "Buy Now," potential customers are leaving.
          </p>

          <p className="mt-5 max-w-xl border-l-2 border-accent pl-4 text-lg font-medium">
            We'll identify the 3 biggest conversion leaks that may be costing your store sales.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CtaButton />
            <p className="text-sm text-muted-foreground">
              No credit card. No obligation. Just your report.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="surface-card relative overflow-hidden p-3">
              <img
                src={heroStore}
                alt="Premium online storefront shown on a laptop and a mobile phone"
                width={1280}
                height={1024}
                className="w-full rounded-xl object-cover"
              />
              <div className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

              <div className="absolute top-6 left-6 rounded-xl bg-primary/95 px-4 py-3 text-ink-foreground shadow-lg backdrop-blur">
                <p className="eyebrow flex items-center gap-2 text-accent">
                  <span className="animate-leak inline-block size-2 rounded-full bg-warn" />
                  Conversion leak detected
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {leakTags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-ink-muted/40 px-2.5 py-1 text-xs text-ink-foreground/90"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="surface-card mt-4 p-5">
              <p className="eyebrow text-muted-foreground">Traffic → conversion</p>
              <ul className="mt-3 space-y-2.5">
                {funnel.map((step, i) => (
                  <li key={step.label} className="flex items-center gap-3">
                    <span className="w-28 shrink-0 text-xs text-muted-foreground">
                      {step.label}
                    </span>
                    <span className="h-2.5 flex-1 overflow-hidden rounded-full bg-secondary">
                      <span
                        className="block h-full rounded-full bg-accent transition-[width] duration-700"
                        style={{ width: step.width, opacity: 1 - i * 0.12 }}
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
