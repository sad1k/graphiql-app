import { expect, test } from 'vitest';
import { render, screen } from '@utils/tests/store';

import SignUpPage from './page';

test('Ensure that the Sign up page renders', () => {
  render(<SignUpPage />);

  const section = screen.getByTestId('sign-up');

  expect(section).toBeDefined();
});
