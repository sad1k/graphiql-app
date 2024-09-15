import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

import ToastProvider from '@/providers/ToastProvider';
import Footer from '@/components/Footer/Footer';
import StoreProvider from './StoreProvider';
import './globals.css';

const Header = dynamic(() => import('@/components/Header/Header'), {
  ssr: false,
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element => (
  <html lang='en' data-lt-installed='true'>
    <StoreProvider>
      <body className={inter.className}>
        <Header />
        <main>
          <ToastProvider>{children}</ToastProvider>
        </main>
        <Footer />
      </body>
    </StoreProvider>
  </html>
);

export default RootLayout;
