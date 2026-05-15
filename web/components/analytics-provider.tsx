"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const CONSENT_KEY = "ticonomia-cookie-terms-consent";

export function AnalyticsProvider() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      const consent = window.localStorage.getItem(CONSENT_KEY);
      setHasConsent(consent === "accepted");
    };

    // Check initial consent on mount
    checkConsent();

    // Listen for cross-tab changes and our custom same-tab event
    window.addEventListener("storage", checkConsent);
    window.addEventListener("consent-updated", checkConsent);

    return () => {
      window.removeEventListener("storage", checkConsent);
      window.removeEventListener("consent-updated", checkConsent);
    };
  }, []);

  if (!hasConsent) return null;

  return (
    <>
      <Script 
        strategy="afterInteractive" 
        src="https://www.googletagmanager.com/gtag/js?id=G-28EL9LWGDY" 
      />
      <Script 
        id="google-analytics" 
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-28EL9LWGDY');
        `}
      </Script>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
