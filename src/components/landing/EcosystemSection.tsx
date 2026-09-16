import { Reveal } from "./Reveal";
import { FreeReportForm } from "./FreeReportForm";

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
          <FreeReportForm />
        </Reveal>
      </div>
    </section>
  );
}
