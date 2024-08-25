import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => (
  <section>{children}</section>
);

export default RootLayout;
