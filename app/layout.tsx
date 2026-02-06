import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Instituto Ser Feliz | Creche e Escola Infantil no Bairro Industrial - Contagem MG',
  description:
    'Creche e escola infantil gratuita no bairro Industrial em Contagem MG. Educação integral para crianças de 1 a 3 anos. Desde 1980 cuidando da comunidade.',
  keywords: [
    'escola',
    'creche',
    'instituto',
    'ser',
    'feliz',
    'maternal',
    'comunidade',
    'industrial',
    'contagem',
  ],
  authors: [{ name: 'Instituto Ser Feliz' }],
  openGraph: {
    title: 'Instituto Ser Feliz | Educação Infantil',
    description:
      'Oferece educação infantil em tempo integral para crianças de 1 a 3 anos e 11 meses, atendendo cerca de 150 crianças e suas famílias',
    url: 'https://instituto-serfeliz-industrial.online/',
    siteName: 'Instituto Ser Feliz',
    images: [
      {
        url: 'https://instituto-serfeliz-industrial.online/instituto.jpeg',
        width: 1200,
        height: 630,
        alt: 'Instituto Ser Feliz',
      },
    ],
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL('https://instituto-serfeliz-industrial.online'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager - Head */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N4K46WLH');
          `}
        </Script>
        {/* Favicon principal (Google SERP) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Favicon vetorial (browsers modernos) */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        {/* Apple Touch Icon (iOS / Safari) */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* desktop PNG favicon */}
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"></link>

        {/* Manifest (PWA / Android) */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* touch web app title declared */}
        <meta name="apple-mobile-web-app-title" content="Instituto Ser Feliz"></meta>

        {/* Dado Estruturado - Preschool */}
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Preschool",
            "name": "Instituto Ser Feliz",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Cel. Américo Teixeira Guimarães, 401 - Industrial",
              "addressLocality": "Contagem",
              "addressRegion": "MG",
              "postalCode": "32235-130",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -19.931,
              "longitude": -44.053
            },
            "url": "https://instituto-serfeliz-industrial.online/",
            "telephone": "+55 31 99585-2001",
            "openingHours": [
              "Mo-Fr 07:00-18:00"
            ],
            "foundingDate": "1980",
            "sameAs": [
              "https://www.instagram.com/instituto_serfeliz"
            ]
          })}
        </Script>
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N4K46WLH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}