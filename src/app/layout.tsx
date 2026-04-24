
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WhatsAppFAB } from '@/components/whatsapp-fab';
import { QuoteModalProvider } from '@/hooks/use-quote-modal';
import { GetQuoteModal } from '@/components/get-quote-modal';

export const metadata: Metadata = {
  title: {
    default: 'VK Enterprises | Clean Energy Solutions',
    template: '%s | VK Enterprises',
  },
  description:
    'Reliable, affordable, and sustainable solar solutions for homes and businesses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <QuoteModalProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
          <WhatsAppFAB />
          <GetQuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
