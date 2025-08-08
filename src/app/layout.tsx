// src/app/layout.tsx
'use client';

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

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'], // regular e semi bold
  display: 'swap',
});
config.autoAddCss = false;


const GA_ID = 'G-D7N2LXCZXH'
const ADS_ID = 'AW-10807484079'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <Head />
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          {/* bootstrap do dataLayer + configs */}
          <Script id="gtag-init" strategy="afterInteractive">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // GA4 principal
            gtag('config', '${GA_ID}', { send_page_view: false });

            // Google Ads (mesmo gtag)
            gtag('config', '${ADS_ID}');
          `}
          </Script>
          <Header />
          {children}
          <CookieBanner />
          <BottomBar />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
