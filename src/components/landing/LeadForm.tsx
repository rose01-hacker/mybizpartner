import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";

type FieldKey = "name" | "email" | "company" | "store" | "traffic" | "challenge";
type Errors = Partial<Record<FieldKey, string>>;

const initial = {
  name: "",
  email: "",
  company: "",
  store: "",
  traffic: "",
  challenge: "",
};

export function LeadForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const set = (key: keyof typeof initial, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = () => {
    const e: Errors = {};
    if (values.name.trim().length < 2) e.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      e.email = "Please enter a valid work email.";
    if (values.company.trim().length < 2) e.company = "Please enter your brand or company name.";
    if (!/\./.test(values.store.trim()) || values.store.trim().length < 4)
      e.store = "Please enter your Shopify store URL.";
    return e;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => setStatus("success"), 900);
  };

  return (
    <section id="report-form" className="scroll-mt-8 py-20 md:py-28">
      <div className="section-x max-w-3xl">
        <Reveal>
          <div className="surface-card p-7 md:p-10">
            {status === "success" ? (
              <div className="py-10 text-center">
                <span className="mx-auto grid size-16 place-items-center rounded-full bg-accent text-3xl text-accent-foreground">
                  ✓
                </span>
                <h2 className="display-2 mt-6 text-3xl">Your request is in.</h2>
                <p className="mt-3 text-muted-foreground">
                  We'll review your submission and get back to you with the next steps.
                </p>
              </div>
            ) : (
              <>
                <h2 className="display-2 text-3xl">Get your free conversion leak report</h2>
                <p className="mt-3 text-muted-foreground">Tell us a little about your store.</p>

                <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Full name"
                    value={values.name}
                    error={errors.name}
                    onChange={(v) => set("name", v)}
                    autoComplete="name"
                  />
                  <Field
                    id="email"
                    label="Work email"
                    type="email"
                    value={values.email}
                    error={errors.email}
                    onChange={(v) => set("email", v)}
                    autoComplete="email"
                  />
                  <Field
                    id="company"
                    label="Brand / company name"
                    value={values.company}
                    error={errors.company}
                    onChange={(v) => set("company", v)}
                    autoComplete="organization"
                  />
                  <Field
                    id="store"
                    label="Shopify store URL"
                    placeholder="yourstore.com"
                    value={values.store}
                    error={errors.store}
                    onChange={(v) => set("store", v)}
                    autoComplete="url"
                  />
                  <Field
                    id="traffic"
                    label="Monthly website traffic (optional)"
                    value={values.traffic}
                    onChange={(v) => set("traffic", v)}
                    className="sm:col-span-2"
                  />

                  <div className="sm:col-span-2">
                    <label htmlFor="challenge" className="field-label">
                      What's your biggest conversion challenge?
                    </label>
                    <textarea
                      id="challenge"
                      rows={4}
                      value={values.challenge}
                      onChange={(e) => set("challenge", e.target.value)}
                      className="field-input mt-2 resize-y"
                    />
                  </div>

                  {status === "error" && (
                    <p role="alert" className="text-sm text-destructive sm:col-span-2">
                      Please fix the highlighted fields and try again.
                    </p>
                  )}

                  <div className="sm:col-span-2">
                    <button type="submit" disabled={status === "loading"} className="btn-cta w-full">
                      {status === "loading" ? "Sending…" : "Get my free report →"}
                    </button>
                    <p className="mt-4 text-center text-sm text-muted-foreground">
                      We'll review your submission and get back to you with the next steps.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
  className = "",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className="field-input mt-2"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
