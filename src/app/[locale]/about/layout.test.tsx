import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutPage from './page';

import RootLayout from './layout';

test('Ensure that the about page renders', () => {
  render(
    <RootLayout>
      <AboutPage />
    </RootLayout>,
  );
  expect(screen.getByText('Our Team')).toBeDefined();
});
