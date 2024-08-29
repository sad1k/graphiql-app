import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }): ReactNode => (
  <section>{children}</section>
);

export default RootLayout;
