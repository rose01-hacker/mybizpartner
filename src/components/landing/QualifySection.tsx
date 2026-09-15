import { Reveal } from "./Reveal";

const yes = [
  "Already getting website traffic",
  "Spending on marketing",
  "Want better conversion",
  "Have visitors but fewer buyers",
  "Want to understand drop-offs",
];

const no = [
  "No live online store",
  "Still building first website",
  "Looking for overnight guarantees",
  "Only interested in more traffic",
];

export function QualifySection() {
  return (
    <section className="bg-secondary/60 py-20 md:py-28">
      <div className="section-x">
        <Reveal>
          <h2 className="display-2 max-w-3xl">This report is built for online brands.</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal delay={60}>
            <div className="surface-card h-full border-accent/50 p-7">
              <p className="eyebrow inline-flex items-center gap-2 rounded-full bg-accent/25 px-3 py-1.5">
                Great fit
              </p>
              <ul className="mt-6 space-y-3">
                {yes.map((y) => (
                  <li key={y} className="flex items-start gap-3 text-base font-medium">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-sm text-accent-foreground">
                      ✓
                    </span>
                    {y}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card h-full p-7">
              <p className="eyebrow inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-muted-foreground">
                Not yet
              </p>
              <ul className="mt-6 space-y-3">
                {no.map((n) => (
                  <li
                    key={n}
                    className="flex items-start gap-3 text-base font-medium text-muted-foreground"
                  >
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-destructive/15 text-sm text-destructive">
                      ✕
                    </span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
