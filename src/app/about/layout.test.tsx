import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutPage from './page';

import RootLayout from './layout';
import ErrorBoundary from './error';

test('About page', () => {
  render(
    (
      <RootLayout>
        <AboutPage />
      </RootLayout>
    ) as React.ReactNode,
  );
  expect(screen.getByText('Our Team')).toBeDefined();
});

test('error', () => {
  render(
    (
      <RootLayout>
        <ErrorBoundary error={new Error()} reset={() => undefined} />
      </RootLayout>
    ) as React.ReactNode,
  );
  expect(screen.getByText('Something went wrong!')).toBeDefined();
});
