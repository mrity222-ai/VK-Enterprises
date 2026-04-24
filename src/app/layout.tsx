
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
    default: 'VK Enterprises | Solar & Water Fountain Company in UP, India',
    template: '%s | VK Enterprises',
  },
  description:
    'VK Enterprises is a leading solar panel installation and water fountain design company in Uttar Pradesh, India. We offer turnkey solutions for residential, commercial, and government projects. Get a free quote!',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'VK Enterprises',
  'image': 'https://www.vkenterprisess.com/team/logo.png',
  '@id': 'https://www.vkenterprisess.com/',
  'url': 'https://www.vkenterprisess.com/',
  'telephone': '+919415212271',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Shope No. 4 Pushpanjali Complex, Shahi Market, Golghar',
    'addressLocality': 'Gorakhpur',
    'postalCode': '273001',
    'addressRegion': 'UP',
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 26.7634351,
    'longitude': 83.29031734335937
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    'opens': '09:00',
    'closes': '18:00'
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
