import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitBookingLead } from "@/lib/booking.functions";
import { Reveal } from "./Reveal";

const revenueOptions = [
  "Under ₹5L / month",
  "₹5L – ₹25L / month",
  "₹25L – ₹1Cr / month",
  "₹1Cr+ / month",
];

const inputClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

export function BookingForm() {
  const submit = useServerFn(submitBookingLead);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("submitting");
    setErrorMsg("");
    try {
      await submit({
        data: {
          name: String(fd.get("name") || ""),
          email: String(fd.get("email") || ""),
          phone: String(fd.get("phone") || ""),
          storeUrl: String(fd.get("storeUrl") || ""),
          monthlyRevenue: String(fd.get("monthlyRevenue") || ""),
          message: String(fd.get("message") || ""),
        },
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="book-demo" className="scroll-mt-8 bg-secondary py-20 md:py-28">
      <div className="section-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Book your free report
          </p>
          <h2 className="display-2 mt-3">Get your conversion leak report.</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tell us about your store and we'll personally review it — then send you the 3 biggest
            conversion opportunities we find.
          </p>
          <ul className="mt-8 space-y-3 text-muted-foreground">
            {[
              "Reviewed by a real CRO specialist, not a bot",
              "Report delivered within 48 hours",
              "No credit card. No obligation.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          {status === "success" ? (
            <div className="rounded-2xl border border-border bg-background p-10 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
                ✓
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-foreground">Request received!</h3>
              <p className="mt-3 text-muted-foreground">
                Thanks — we've got your details. Our team will review your store and reach out
                within 48 hours with your conversion leak report.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm md:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="bd-name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Your name *
                  </label>
                  <input id="bd-name" name="name" required minLength={2} className={inputClass} placeholder="Aarav Shah" />
                </div>
                <div>
                  <label htmlFor="bd-email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Work email *
                  </label>
                  <input id="bd-email" name="email" type="email" required className={inputClass} placeholder="you@yourbrand.com" />
                </div>
                <div>
                  <label htmlFor="bd-phone" className="mb-1.5 block text-sm font-medium text-foreground">
                    Phone / WhatsApp
                  </label>
                  <input id="bd-phone" name="phone" type="tel" className={inputClass} placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label htmlFor="bd-revenue" className="mb-1.5 block text-sm font-medium text-foreground">
                    Monthly revenue
                  </label>
                  <select id="bd-revenue" name="monthlyRevenue" className={inputClass} defaultValue="">
                    <option value="" disabled>
                      Select a range
                    </option>
                    {revenueOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bd-store" className="mb-1.5 block text-sm font-medium text-foreground">
                    Shopify store URL
                  </label>
                  <input id="bd-store" name="storeUrl" type="url" className={inputClass} placeholder="https://yourstore.com" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="bd-message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Anything we should know?
                  </label>
                  <textarea
                    id="bd-message"
                    name="message"
                    rows={3}
                    className={inputClass}
                    placeholder="e.g. traffic is growing but add-to-carts are flat…"
                  />
                </div>
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm font-medium text-destructive">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn-cta mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Request my free report"}{" "}
                <span aria-hidden="true">→</span>
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Your details go straight to our team. We never share them.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
