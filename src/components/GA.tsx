/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

const GA_ID = 'G-D7N2LXCZXH'; // ex: G-D7N2LXCZXH

// ajuste aqui conforme seu CookieBanner salva o consentimento
function hasAnalyticsConsent() {
  try {
    const raw = localStorage.getItem('cookie-consent'); // exemplo: {"essentials":true,"analytics":true}
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return !!parsed?.analytics;
  } catch {
    return false;
  }
}

export default function GA() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [enabled, setEnabled] = useState(false); // pronto para carregar GA?
  const url = useMemo(
    () => pathname + (searchParams?.toString() ? `?${searchParams}` : ''),
    [pathname, searchParams]
  );

  // Espera consentimento + ociosidade antes de ligar
  useEffect(() => {
    if (!GA_ID) return;

    const maybeEnable = () => {
      if (!hasAnalyticsConsent()) return;
      const onIdle = (cb: () => void) =>
        'requestIdleCallback' in window
          ? (window as any).requestIdleCallback(cb, { timeout: 3000 })
          : setTimeout(cb, 1200);
      onIdle(() => setEnabled(true));
    };

    // tenta já
    maybeEnable();

    // reescuta quando o banner salvar
    const onCustom = () => maybeEnable();
    window.addEventListener('consent-updated', onCustom);
    window.addEventListener('storage', onCustom); // caso outro tab altere

    return () => {
      window.removeEventListener('consent-updated', onCustom);
      window.removeEventListener('storage', onCustom);
    };
  }, []);

  // dispara page_view nas mudanças de rota
  useEffect(() => {
    if (!enabled || !(window as any).gtag) return;
    (window as any).gtag('event', 'page_view', { page_path: url });
  }, [enabled, url]);

  if (!GA_ID || !enabled) return null;

  return (
    <>
      {/* (opcional) Consent Mode básico antes do config */}
      <Script id="ga-consent" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            ad_storage: 'denied',
            analytics_storage: 'granted'
          });
        `}
      </Script>

      <Script
        id="ga-lib"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          // evita page_view automático
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
