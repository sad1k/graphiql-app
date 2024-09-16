import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import AboutPage from './page';

import RootLayout from './layout';

test('Ensure that the about page renders', () => {
  render(
    (
      <RootLayout>
        <AboutPage />
      </RootLayout>
    ) as React.ReactNode,
  );
  expect(screen.getByText('Our Team')).toBeDefined();
});
