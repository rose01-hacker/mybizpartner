import analytics from "@/assets/analytics.jpg";
import { CtaButton } from "./CtaButton";
import { Reveal } from "./Reveal";

const chain = ["Traffic", "Store", "Conversion", "Revenue"];

export function RevenueSection() {
  return (
    <section className="bg-secondary/60 py-20 md:py-28">
      <div className="section-x">
        <Reveal>
          <h2 className="display-2 max-w-4xl">
            Your next revenue opportunity might already be on your website.
          </h2>
        </Reveal>

        <Reveal delay={60}>
          <ol className="mt-10 flex flex-wrap items-center gap-3">
            {chain.map((c, i) => (
              <li key={c} className="flex items-center gap-3">
                <span className="surface-card px-5 py-3 text-sm font-semibold">{c}</span>
                {i < chain.length - 1 && (
                  <span aria-hidden="true" className="text-accent">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_1.2fr]">
          <Reveal delay={100}>
            <div className="surface-card h-full p-7">
              <p className="eyebrow text-muted-foreground">Current</p>
              <p className="display-2 mt-3 text-4xl">1,000</p>
              <p className="text-sm text-muted-foreground">visitors</p>
              <div className="mt-6 space-y-3">
                <Bar label="Low conversion" width="18%" tone="bg-warn" />
                <Bar label="Lost opportunities" width="72%" tone="bg-warn/50" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="surface-card h-full border-accent/50 p-7">
              <p className="eyebrow text-accent">Optimized</p>
              <p className="display-2 mt-3 text-4xl">1,000</p>
              <p className="text-sm text-muted-foreground">same visitors</p>
              <div className="mt-6 space-y-3">
                <Bar label="Higher conversion" width="46%" tone="bg-accent" />
                <Bar label="More customers" width="58%" tone="bg-accent/70" />
              </div>
              <p className="mt-6 text-sm font-medium">
                Potential opportunity within your existing traffic.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="surface-card h-full overflow-hidden">
              <img
                src={analytics}
                alt="Conversion analytics dashboard with an upward trend"
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-10">
            <CtaButton />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Bar({ label, width, tone }: { label: string; width: string; tone: string }) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="mt-1.5 h-3 overflow-hidden rounded-full bg-secondary">
        <div className={`h-full rounded-full ${tone}`} style={{ width }} />
      </div>
    </div>
  );
}
