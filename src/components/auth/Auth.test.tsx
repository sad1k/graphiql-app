import { afterAll, afterEach, expect, test, vi, describe } from 'vitest';

import { render, screen } from '@utils/tests/store';

import SingIn from './SingIn/SingIn';
import SignUp from './SignUp/SignUp';

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');

  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
  };
});

describe('', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
  test('Ensure that the Sign in component renders', () => {
    render(<SingIn />);

    expect(screen.getByText('OR')).toBeDefined();
  });

  test('Ensure that the Sign up component renders', () => {
    render(<SignUp />);
    expect(screen.getByText('OR')).toBeDefined();
  });
});
