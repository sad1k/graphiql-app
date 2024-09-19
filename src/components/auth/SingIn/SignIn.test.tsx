import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect, beforeEach, Mock } from 'vitest';
import useSignInForm from '@/hooks/useSignInForm';
import { useTranslations } from 'next-intl';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '@/utils/store/store';
import SignIn from './SingIn';

vi.mock('@/hooks/useSignInForm', () => ({
  default: vi.fn(),
}));

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(),
}));

vi.mock('@/hocs/isAuth', () => ({
  default: (component: React.FC) => component,
}));

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');

  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
  };
});

type TranslationKeys = 'signIn' | 'signUp' | 'email' | 'password' | 'or';

const mockTranslations: Record<TranslationKeys, string> = {
  signIn: 'Sign In',
  signUp: 'Sign Up',
  email: 'Email',
  password: 'Password',
  or: 'or',
};

describe('SignIn Component', () => {
  const mockUseSignInForm = {
    register: vi.fn(),
    handleSubmit: vi.fn((fn: () => void) => fn),
    errors: {
      email: { message: '' },
      password: { message: '' },
    },
    isValid: true,
    onSubmit: vi.fn(),
  };

  beforeEach(() => {
    (useTranslations as Mock).mockReturnValue(
      (key: TranslationKeys) => mockTranslations[key],
    );
    (useSignInForm as Mock).mockReturnValue(mockUseSignInForm);
  });

  it('should render the form with all inputs and submit button', () => {
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>,
    );

    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
  });

  it('should show error messages when inputs are invalid', () => {
    mockUseSignInForm.errors = {
      email: { message: 'Email is invalid' },
      password: { message: 'Password is too short' },
    };

    render(
      <Provider store={store}>
        <SignIn />
      </Provider>,
    );

    expect(screen.getByText('Email is invalid')).toBeInTheDocument();
    expect(screen.getByText('Password is too short')).toBeInTheDocument();
  });

  it('should call onSubmit when form is submitted', () => {
    render(
      <Provider store={store}>
        <SignIn />
      </Provider>,
    );

    const submitButton = screen.getByRole('button', { name: 'Sign In' });

    fireEvent.click(submitButton);

    expect(mockUseSignInForm.onSubmit).toHaveBeenCalled();
  });

  it('should disable the submit button when form is invalid', () => {
    mockUseSignInForm.isValid = false;

    render(
      <Provider store={store}>
        <SignIn />
      </Provider>,
    );

    const submitButton = screen.getByRole('button', { name: 'Sign In' });

    expect(submitButton).toBeDisabled();
  });
});
