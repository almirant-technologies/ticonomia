"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "ticonomia-cookie-terms-consent";

export function CookieTermsBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = window.localStorage.getItem(CONSENT_KEY);
    setIsVisible(!hasConsent);
  }, []);

  const acceptConsent = () => {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="flex w-full flex-col gap-4 border-t border-lime-600 bg-lime-500 px-5 py-5 text-white shadow-2xl shadow-lime-500/30 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <div className="max-w-3xl space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-50">
            Cookies y términos
          </p>
          <p className="text-sm leading-6 text-white/95 sm:text-[15px]">
            Usamos cookies para mejorar la experiencia y medir el uso del sitio. Al continuar,
            aceptas nuestra <Link href="/cookies" className="font-semibold underline underline-offset-4 hover:text-lime-100">política de cookies</Link> y los <Link href="/terminos" className="font-semibold underline underline-offset-4 hover:text-lime-100">términos y condiciones</Link>.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={acceptConsent}
            className="inline-flex min-w-28 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-lime-700 transition-colors hover:bg-lime-50"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}