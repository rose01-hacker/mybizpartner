import { Reveal } from "./Reveal";

const orbit = ["Reviews", "UGC", "Social Proof", "Trust", "CRO", "Conversion"];

export function EcosystemSection() {
  return (
    <section className="bg-secondary/60 py-20 md:py-28">
      <div className="section-x grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow text-muted-foreground">Why MyBizPartner</p>
          <h2 className="display-2 mt-3">We look beyond traffic.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            At MyBizPartner, we focus on one question:
          </p>
          <p className="mt-3 text-2xl font-medium">
            "Why aren't more of your existing visitors becoming customers?"
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="surface-card p-7">
            <ul className="grid grid-cols-3 gap-3">
              {orbit.map((o) => (
                <li
                  key={o}
                  className="rounded-xl border border-accent/40 bg-accent/10 px-3 py-4 text-center text-sm font-semibold"
                >
                  {o}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid place-items-center rounded-2xl bg-primary px-6 py-7 text-center text-ink-foreground">
              <p className="eyebrow text-accent">Customer</p>
              <p className="mt-2 text-sm text-ink-muted">
                Everything above feeds one decision: to buy.
              </p>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <span className="flex-1 rounded-xl bg-secondary px-4 py-3 text-center text-sm font-semibold">
                Purchase
              </span>
              <span aria-hidden="true" className="text-accent">
                →
              </span>
              <span className="flex-1 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground">
                Measurable revenue
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
