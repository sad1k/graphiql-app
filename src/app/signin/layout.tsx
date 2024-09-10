import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
};

const RootLayout = ({ children }: { children: ReactNode }): ReactNode => (
  <section>{children}</section>
);

export default RootLayout;