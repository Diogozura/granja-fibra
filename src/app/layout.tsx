// src/app/layout.tsx
import { ReactNode } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import BottomBar from '@/components/BottomBar';
import { GoogleAnalytics } from '@next/third-parties/google';
import Providers from './providers';
import { Metadata } from 'next';
import JsonLd from './json-ld';
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'], // regular e semi bold
  display: 'swap',
});
config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.grajafibra.com.br'),
  title: 'Graja Fibra',
  description:
    'Provedor de Internet Granja Fibra. A Melhor Internet você encontra aqui. Planos, atendimento de qualidade e tecnologia de ponta.',
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
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graja Fibra',
    description:
      'Provedor de Internet Granja Fibra. A Melhor Internet você encontra aqui.',
    images: ['/og-image.png'],
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <JsonLd />
      </head>
      <body>
       <SpeedInsights />
        <Providers>
          <Header />
          {children}
          <CookieBanner />
          <BottomBar />
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-D7N2LXCZXH" />
    </html>
  );
}
