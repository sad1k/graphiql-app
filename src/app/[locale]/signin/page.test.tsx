import { expect, test } from 'vitest';
import { render, screen } from '@utils/tests/store';

import SignInPage from './page';

test('Ensure that the Sign in page renders', () => {
  render(<SignInPage />);

  const section = screen.getByTestId('sign-in');

  expect(section).toBeDefined();
});
