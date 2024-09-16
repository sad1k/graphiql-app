import { expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import FormContainer from './FormContainer';

test('Ensure that the Sign in component renders', () => {
  render(
    <FormContainer text='sign in'>
      <input />
    </FormContainer>,
  );
  expect(screen.getByText(/sign in/i)).toBeDefined();
});
