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
        {/* Preload para Google Fonts - reduz chaining requests (FCP) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload para Google Analytics */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        
        {/* Preload para Google AdSense */}
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />

        {/* Meta tag de verificação do Google */}
        <meta
          name="google-site-verification"
          content="HM8EQ7aetV45DAINpGsAl9P4qjmv-Moue1rwS8a0BCM"
        />

        <meta
          name="google-adsense-account"
          content="ca-pub-4946920103183663"
        />

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

      {/* Google Tag Manager */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2EKLCJJ6FC"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2EKLCJJ6FC');
          `}
      </Script>

      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4946920103183663"
        crossOrigin="anonymous" strategy="afterInteractive"></Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}