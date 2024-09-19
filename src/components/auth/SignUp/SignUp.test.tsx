import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect, beforeEach, Mock } from 'vitest';
import useSignUpForm from '@/hooks/useSignUpForm';
import { useTranslations } from 'next-intl';
import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { store } from '@/utils/store/store';
import SignUp from './SignUp';

vi.mock('@/hooks/useSignUpForm', () => ({
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

type TranslationKeys =
  | 'signUp'
  | 'signIn'
  | 'name'
  | 'email'
  | 'password'
  | 'confirmPassword'
  | 'or';

describe('SignUp Component', () => {
  const mockTranslations: Record<TranslationKeys, string> = {
    signUp: 'Sign Up',
    signIn: 'Sign In',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    or: 'or',
  };

  const mockUseSignUpForm = {
    register: vi.fn(),
    handleSubmit: vi.fn((fn: () => void) => fn),
    errors: {
      name: { message: '' },
      email: { message: '' },
      password: { message: '' },
      confirmPassword: { message: '' },
    },
    isValid: true,
    onSubmit: vi.fn(),
  };

  beforeEach(() => {
    (useTranslations as Mock).mockReturnValue(
      (key: TranslationKeys) => mockTranslations[key],
    );
    (useSignUpForm as Mock).mockReturnValue(mockUseSignUpForm);
  });

  it('should render the form with all inputs and submit button', () => {
    render(
      <Provider store={store}>
        <SignUp />
      </Provider>,
    );

    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeInTheDocument();
  });

  it('should show error messages when inputs are invalid', () => {
    mockUseSignUpForm.errors = {
      name: { message: 'Name is required' },
      email: { message: 'Email is invalid' },
      password: { message: 'Password is too short' },
      confirmPassword: { message: 'Passwords do not match' },
    };

    render(
      <Provider store={store}>
        <SignUp />
      </Provider>,
    );

    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is invalid')).toBeInTheDocument();
    expect(screen.getByText('Password is too short')).toBeInTheDocument();
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
  });

  it('should call onSubmit when form is submitted', () => {
    render(
      <Provider store={store}>
        <SignUp />
      </Provider>,
    );

    const submitButton = screen.getByRole('button', { name: 'Sign Up' });

    fireEvent.click(submitButton);

    expect(mockUseSignUpForm.onSubmit).toHaveBeenCalled();
  });

  it('should disable the submit button when form is invalid', () => {
    mockUseSignUpForm.isValid = false;

    render(
      <Provider store={store}>
        <SignUp />
      </Provider>,
    );

    const submitButton = screen.getByRole('button', { name: 'Sign Up' });

    expect(submitButton).toBeDisabled();
  });
});
