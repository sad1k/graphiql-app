import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ToastProvider from '@/providers/ToastProvider';
import StoreProvider from './StoreProvider';
import './globals.css';

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
  <html lang='en' data-lt-installed>
    <StoreProvider>
      <body className={inter.className}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </StoreProvider>
  </html>
);

export default RootLayout;
