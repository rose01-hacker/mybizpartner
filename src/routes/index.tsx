import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/landing/Hero";
import { TrafficSection } from "@/components/landing/TrafficSection";
import { LeaksSection } from "@/components/landing/LeaksSection";
import { RevenueSection } from "@/components/landing/RevenueSection";
import { ReportSection } from "@/components/landing/ReportSection";
import { QualifySection } from "@/components/landing/QualifySection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { EcosystemSection } from "@/components/landing/EcosystemSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StickyCta } from "@/components/landing/StickyCta";
import { CtaButton } from "@/components/landing/CtaButton";
import logo from "@/assets/mybizpartner-logo-clear.png.asset.json";

const title = "Free Conversion Leak Report | MyBizPartner";
const description =
  "Find the 3 biggest conversion leaks costing your store sales. Free report — no credit card, no obligation.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MyBizPartner",
          url: "https://mybizpartner.in",
          email: "tech@mybizpartner.in",
          description: "Reviews, UGC, social proof and CRO for online brands.",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <header className="section-x flex items-center justify-between py-5">
        <img src="image.png" alt="MyBizPartner logo" width={280} height={72} className="h-14 w-auto" />
        <CtaButton label="Free report" className="hidden px-5 py-3 sm:inline-flex" />
      </header>

      <main>
        <Hero />
        <TrafficSection />
        <LeaksSection />
        <RevenueSection />
        <ReportSection />
        <QualifySection />
        <HowItWorks />
        <EcosystemSection />
        <FinalCta />
      </main>

      <SiteFooter />
      <StickyCta />
    </div>
  );
}
