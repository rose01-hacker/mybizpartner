import heatmap from "@/assets/heatmap.jpg";
import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Submit your store", desc: "Share your store URL." },
  { n: "02", title: "We review your buying journey", desc: "Store, product page, checkout." },
  { n: "03", title: "Get your report", desc: "Findings, priorities, next steps." },
  { n: "04", title: "Decide what to do next", desc: "Act on it — with or without us." },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-x">
        <Reveal>
          <p className="eyebrow text-muted-foreground">How it works</p>
          <h2 className="display-2 mt-3 max-w-2xl">Four steps. No guesswork.</h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute top-6 bottom-6 left-[22px] w-px bg-border sm:top-[22px] sm:right-6 sm:bottom-auto sm:left-6 sm:h-px sm:w-auto"
            />
            <ol className="grid gap-6 sm:grid-cols-2">
              {steps.map((s, i) => (
                <Reveal as="li" key={s.n} delay={60 + i * 70}>
                  <div className="surface-card surface-card-hover relative h-full p-6">
                    <span className="font-display grid size-11 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {s.n}
                    </span>
                    <h3 className="mt-4 text-xl">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={140}>
            <div className="surface-card h-full overflow-hidden">
              <img
                src={heatmap}
                alt="Analyst reviewing a store heatmap and click distribution"
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
