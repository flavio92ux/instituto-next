import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}