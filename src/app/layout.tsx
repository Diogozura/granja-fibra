// src/app/layout.tsx (Server Component)
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import BottomBar from '@/components/BottomBar';
import Providers from './providers'; // <- client component
import JsonLd from './json-ld';
import { withBasePath } from '@/utils/paths';

config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.grajafibra.com.br'),

  keywords: [
    'internet fibra',
    'provedor de internet',
    'Granja Fibra',
    'planos de internet',
    'internet residencial',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Graja Fibra',
    description:
      'Provedor de Internet Granja Fibra. A Melhor Internet você encontra aqui.',
    url: 'https://www.grajafibra.com.br',
    type: 'website',
    images: ['/og-imagem.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graja Fibra',
    description:
      'Provedor de Internet Granja Fibra. A Melhor Internet você encontra aqui.',
    images: withBasePath('/og-imagem.png'),
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href={withBasePath('/favicon.ico')} />
        {/* Preconnects úteis */}
        <link rel="preconnect" href="https://qrcode.grajafibra.inf.br" />
        <link rel="dns-prefetch" href="https://qrcode.grajafibra.inf.br" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <JsonLd />
      </head>
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}

          {/* GA4 direto, fora do caminho crítico */}
          <Script id="ga4" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D7N2LCXZXH', { anonymize_ip: true });
            `}
          </Script>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-D7N2LCXZXH"
            strategy="afterInteractive"
          />

          <CookieBanner />
          <BottomBar />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
