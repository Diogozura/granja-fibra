// src/app/layout.tsx
import { ReactNode } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import BottomBar from '@/components/BottomBar';
import Head from './head';
import Script from 'next/script';
import Providers from './providers';
import { Metadata } from 'next';
import JsonLd from './json-ld';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'], // regular e semi bold
  display: 'swap',
});
config.autoAddCss = false;


const GA_ID = 'G-D7N2LXCZXH'
const ADS_ID = 'AW-10807484079'

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
        {/* Carrega UMA vez o gtag, e de forma preguiçosa */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { send_page_view: false });
            gtag('config', '${ADS_ID}');
          `}
        </Script>
        <Providers>
          <Header />
          <Header />
          {children}
          <CookieBanner />
          <BottomBar />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
