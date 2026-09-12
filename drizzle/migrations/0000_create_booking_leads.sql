CREATE TABLE public.booking_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  store_url TEXT,
  monthly_revenue TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.booking_leads TO anon;
GRANT ALL ON public.booking_leads TO service_role;

ALTER TABLE public.booking_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking lead"
ON public.booking_leads
FOR INSERT
TO anon
WITH CHECK (true);