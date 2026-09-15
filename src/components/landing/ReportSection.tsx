import report from "@/assets/report.jpg";
import { Reveal } from "./Reveal";

const cards = [
  { n: "01", title: "Store Review", desc: "Desktop and mobile walkthrough of your store." },
  { n: "02", title: "Top 3 Conversion Leaks", desc: "Priority-flagged friction points." },
  { n: "03", title: "Improvement Opportunities", desc: "A practical recommendation checklist." },
  { n: "04", title: "Revenue Opportunity View", desc: "What your existing traffic could unlock." },
  { n: "05", title: "Action Priorities", desc: "Priority 1 / 2 / 3, in order." },
];

export function ReportSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-x">
        <Reveal>
          <h2 className="display-2 max-w-3xl">What's inside your free conversion leak report?</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal delay={60}>
            <div className="surface-card overflow-hidden">
              <img
                src={report}
                alt="Multi-page CRO audit report pages with findings and charts"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full object-cover"
              />
              <div className="flex items-center justify-between p-5">
                <p className="eyebrow text-muted-foreground">Sample report preview</p>
                <span className="rounded-full bg-accent/25 px-3 py-1 text-xs font-semibold">
                  Free
                </span>
              </div>
            </div>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {cards.map((c, i) => (
              <Reveal as="li" key={c.n} delay={100 + i * 50}>
                <div className="surface-card surface-card-hover flex h-full items-start gap-4 p-5">
                  <span className="font-display rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground">
                    {c.n}
                  </span>
                  <div>
                    <h3 className="text-lg">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
