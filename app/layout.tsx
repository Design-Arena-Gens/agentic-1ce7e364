import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartProvider from '../components/CartProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'TSF Watches | Premium Swiss Timepieces',
  description:
    'Experience the elegance of premium Swiss watches with TSF Watches. Curated collections, concierge service, and immersive storytelling for discerning collectors.',
  openGraph: {
    title: 'TSF Watches | Premium Swiss Timepieces',
    description:
      'Experience the elegance of premium Swiss watches with TSF Watches. Curated collections, concierge service, and immersive storytelling for discerning collectors.',
    url: 'https://agentic-1ce7e364.vercel.app',
    siteName: 'TSF Watches',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
        width: 1200,
        height: 630,
        alt: 'TSF Watches hero imagery'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
