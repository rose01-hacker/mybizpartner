import productPage from "@/assets/product-page.jpg";
import reviews from "@/assets/reviews.jpg";
import mobileCheckout from "@/assets/mobile-checkout.jpg";
import { Reveal } from "./Reveal";

const journey = ["Visit", "Explore", "Trust", "Add to Cart", "Buy"];

export function LeaksSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-x">
        <Reveal>
          <h2 className="display-2 max-w-3xl">Before you buy more traffic, find the leaks.</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={60}>
            <article className="surface-card surface-card-hover h-full overflow-hidden">
              <img
                src={reviews}
                alt="Customer review cards, ratings and user generated content"
                loading="lazy"
                width={1024}
                height={768}
                className="h-60 w-full object-cover"
              />
              <div className="p-7">
                <p className="eyebrow text-muted-foreground">01 — Trust leaks</p>
                <h3 className="mt-3 text-2xl">
                  Are customers getting enough reasons to trust your brand before purchasing?
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {["Reviews", "Ratings", "UGC", "Trust signals", "Brand credibility"].map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="surface-card surface-card-hover h-full overflow-hidden">
              <div className="relative">
                <img
                  src={productPage}
                  alt="Shopify product page with highlighted friction areas"
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-60 w-full object-cover object-top"
                />
                {[
                  { top: "18%", left: "12%", label: "Images" },
                  { top: "48%", left: "62%", label: "CTA" },
                  { top: "72%", left: "26%", label: "Reviews" },
                ].map((m) => (
                  <span
                    key={m.label}
                    style={{ top: m.top, left: m.left }}
                    className="animate-leak absolute rounded-full bg-warn px-2.5 py-1 text-[11px] font-semibold text-warn-foreground"
                  >
                    {m.label}
                  </span>
                ))}
              </div>
              <div className="p-7">
                <p className="eyebrow text-muted-foreground">02 — Product page leaks</p>
                <h3 className="mt-3 text-2xl">
                  Does your product page give buyers the confidence to say yes?
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {["Images", "Product info", "Reviews", "CTA", "Buying confidence"].map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <Reveal delay={180} className="lg:col-span-2">
            <article className="surface-card grid h-full gap-0 overflow-hidden md:grid-cols-[1fr_1.4fr]">
              <img
                src={mobileCheckout}
                alt="Mobile checkout screen of an eCommerce store"
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full max-h-80 w-full object-cover"
              />
              <div className="p-7">
                <p className="eyebrow text-muted-foreground">03 — Buying journey leaks</p>
                <h3 className="mt-3 text-2xl">Where exactly do people drop off?</h3>

                <ol className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {journey.map((step, i) => (
                    <li key={step} className="relative rounded-xl bg-secondary p-3 text-center">
                      <span className="font-display block text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                      <span className="mt-1 block text-sm font-semibold">{step}</span>
                      {i > 0 && i < 4 && (
                        <span className="animate-leak absolute -top-1.5 -right-1.5 size-3 rounded-full bg-warn" />
                      )}
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-sm text-muted-foreground">
                  Each marker is a moment where interest quietly turns into an exit.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
