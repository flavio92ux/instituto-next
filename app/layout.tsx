import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Instituto Ser Feliz | Creche Escolar',
  description:
    'Oferece educação infantil em tempo integral para crianças de 1 a 3 anos e 11 meses, atendendo cerca de 150 crianças e suas famílias',
  keywords: [
    'escola',
    'creche',
    'instituto',
    'maternal',
    'comunidade',
    'industrial',
    'contagem',
    'maternal',
  ],
  authors: [{ name: 'Instituto Ser Feliz' }],
  openGraph: {
    title: 'Instituto Ser Feliz | Educação Infantil',
    description:
      'Oferece educação infantil em tempo integral para crianças de 1 a 3 anos e 11 meses, atendendo cerca de 150 crianças e suas famílias',
    url: 'https://instituto-next.vercel.app/',
    siteName: 'Instituto Ser Feliz',
    images: [
      {
        url: 'https://instituto-next.vercel.app/instituto.jpeg',
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
  metadataBase: new URL('https://instituto-next.vercel.app'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* Meta tag de verificação do Google */}
      <head>
        <meta
          name="google-site-verification"
          content="HM8EQ7aetV45DAINpGsAl9P4qjmv-Moue1rwS8a0BCM"
        />
      </head>

      {/* Google Tag Manager */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2EKLCJJ6FC"
      ></Script>
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2EKLCJJ6FC');
          `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}