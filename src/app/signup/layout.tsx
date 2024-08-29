import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
};

const RootLayout = ({ children }: { children: ReactNode }): ReactNode => (
  <section>{children}</section>
);

export default RootLayout;
