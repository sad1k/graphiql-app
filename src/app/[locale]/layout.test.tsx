import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from './page';
import RootLayout from './layout';

vi.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'mocked-inter-class',
  }),
}));

test('Ensure that the about page renders', () => {
  render(
    <RootLayout>
      <HomePage />
    </RootLayout>,
  );
  expect(screen.getByTestId('home-page')).toBeDefined();
});
