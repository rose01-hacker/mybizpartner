import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  storeUrl: z.string().trim().max(300).optional().or(z.literal("")),
  monthlyRevenue: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const submitBookingLead = createServerFn({ method: "POST" })
  .inputValidator((data) => bookingSchema.parse(data))
  .handler(async ({ data }) => {
    const supabase = createClient(
      import.meta.env["VITE_SUPABASE_URL"]!,
      import.meta.env["VITE_SUPABASE_PUBLISHABLE_KEY"]!,
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

    const { error } = await supabase.from("booking_leads").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      store_url: data.storeUrl || null,
      monthly_revenue: data.monthlyRevenue || null,
      message: data.message || null,
    });

    if (error) {
      console.error("booking_leads insert failed:", error);
      throw new Error("Could not save your booking. Please try again.");
    }

    return { ok: true };
  });
