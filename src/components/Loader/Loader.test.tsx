import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

test('Ensure that the about page renders', () => {
  render(<Loader />);
  expect(screen.getByTestId('loader')).toBeDefined();
});
