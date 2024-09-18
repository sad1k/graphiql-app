import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About US',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <section>{children}</section>
);

export default RootLayout;
