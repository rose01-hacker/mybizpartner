import { useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const REDIRECT_URL = "https://www.mybizpartner.in/";

const revenueRanges = [
  "Under ₹5L/month",
  "₹5L - ₹20L/month",
  "₹20L - ₹50L/month",
  "₹50L - ₹1Cr/month",
  "Over ₹1Cr/month",
];

export function FreeReportForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [revenue, setRevenue] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    const { error } = await supabase.from("booking_leads").insert({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: (formData.get("phone") as string) || null,
      monthly_revenue: revenue || null,
      store_url: (formData.get("store_url") as string) || null,
      message: (formData.get("notes") as string) || null,
    });

    if (error) {
      setStatus("error");
      return;
    }

    window.location.href = REDIRECT_URL;
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">
            Your name <span className="text-accent">*</span>
          </Label>
          <Input id="name" name="name" placeholder="Aarav Shah" required className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email">
            Work email <span className="text-accent">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@yourbrand.com"
            required
            className="mt-2"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" placeholder="+91 98765 43210" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="revenue">Monthly revenue</Label>
          <Select value={revenue} onValueChange={setRevenue} name="monthly_revenue">
            <SelectTrigger id="revenue" className="mt-2">
              <SelectValue placeholder="Select a range" />
            </SelectTrigger>
            <SelectContent>
              {revenueRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="store">Shopify store URL</Label>
          <Input id="store" name="store_url" placeholder="https://yourstore.com" className="mt-2" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="notes">Anything we should know?</Label>
          <Textarea
            id="notes"
            name="notes"
            placeholder="e.g. traffic is growing but add-to-carts are flat…"
            className="mt-2"
          />
        </div>
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-cta mt-6 w-full">
        {status === "submitting" ? "Sending..." : "Request my free report"}
        <span aria-hidden="true">→</span>
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-destructive">
          Something went wrong. Please try again.
        </p>
      )}

      <p className="mt-3 text-center text-xs text-muted-foreground">
        Your details go straight to our team. We never share them.
      </p>
    </form>
  );
}
