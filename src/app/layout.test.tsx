import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './page';
import RootLayout from './layout';

test('Ensure that the about page renders', () => {
  render(
    <RootLayout>
      <HomePage />
    </RootLayout>,
  );
  expect(screen.getByText('Our Team')).toBeDefined();
});
