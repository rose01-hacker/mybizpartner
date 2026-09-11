import { Reveal } from "./Reveal";

const sources = ["Meta Ads", "Google Ads", "Influencers", "SEO", "Content"];
const conversion = ["Trust", "Product Confidence", "Buying Journey", "Checkout", "Purchase"];

export function TrafficSection() {
  return (
    <section className="bg-secondary/60 py-20 md:py-28">
      <div className="section-x">
        <Reveal>
          <h2 className="display-2 max-w-3xl">More traffic isn't always the answer.</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr_1fr]">
          <Reveal delay={60}>
            <div className="surface-card surface-card-hover h-full p-7">
              <p className="eyebrow text-muted-foreground">More traffic</p>
              <ul className="mt-5 space-y-3">
                {sources.map((s) => (
                  <li
                    key={s}
                    className="flex items-center justify-between rounded-lg bg-secondary px-4 py-3 text-sm font-medium"
                  >
                    {s}
                    <span aria-hidden="true" className="text-muted-foreground">
                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card h-full bg-primary p-7 text-ink-foreground">
              <p className="eyebrow text-accent">Existing funnel</p>
              <div className="mt-6 space-y-4">
                {[
                  { label: "1,000 visitors", w: "100%", tone: "bg-accent" },
                  { label: "Existing funnel", w: "55%", tone: "bg-accent/70" },
                  { label: "Few buyers", w: "14%", tone: "bg-accent/45" },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between text-xs text-ink-muted">
                      <span>{row.label}</span>
                    </div>
                    <div className="mt-1.5 h-3 overflow-hidden rounded-full bg-ink-muted/25">
                      <div className={`h-full rounded-full ${row.tone}`} style={{ width: row.w }} />
                    </div>
                  </div>
                ))}
              </div>

              <svg viewBox="0 0 300 60" className="mt-6 w-full" aria-hidden="true">
                <path
                  d="M10 30 H290"
                  className="animate-flow"
                  stroke="oklch(0.72 0.17 45)"
                  strokeWidth="3"
                  fill="none"
                />
                {[70, 150, 230].map((x) => (
                  <circle key={x} cx={x} cy={44} r="5" fill="oklch(0.72 0.17 45)" opacity="0.8" />
                ))}
              </svg>
              <p className="mt-2 text-sm text-ink-muted">
                Lost customers drip out at every step of the journey.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="surface-card surface-card-hover h-full p-7">
              <p className="eyebrow text-muted-foreground">Better conversion</p>
              <ul className="mt-5 space-y-3">
                {conversion.map((c, i) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-medium"
                  >
                    <span className="font-display text-xs text-muted-foreground">
                      0{i + 1}
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <p className="text-lg text-muted-foreground">
              "If 1,000 people visit your store and only a small percentage buy, another 1,000
              visitors doesn't automatically solve the problem."
            </p>
            <p className="display-2 text-2xl md:text-3xl">
              You could simply be sending more people into the{" "}
              <span className="bg-warn/30 px-1">same leaking funnel.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
