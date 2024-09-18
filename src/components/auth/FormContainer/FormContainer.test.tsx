import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SIGN_IN } from '@/constants/path';
import FormContainer from './FormContainer';

test('Ensure that the Sign in component renders', () => {
  render(
    <FormContainer text='sign in' href={SIGN_IN} linkText='Sign In'>
      <input />
    </FormContainer>,
  );
  expect(screen.getAllByText(/sign in/i)).toBeDefined();
});
