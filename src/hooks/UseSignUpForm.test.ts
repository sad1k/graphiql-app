import { renderHook, act } from '@testing-library/react';
import {
  SubmitHandler,
  UseFormReturn,
  useForm,
  FieldValues,
} from 'react-hook-form';
import { vi, describe, it, beforeEach, expect } from 'vitest';
import { signUp } from '@/utils/firebase/signUp';
import useSignUpForm from './useSignUpForm';
import useSaveAuthData from './useAuthData';

vi.mock('react-hook-form', () => ({
  useForm: vi.fn(),
}));

vi.mock('@/utils/firebase/signUp', () => ({
  signUp: vi.fn(),
}));

vi.mock('./useAuthData', () => ({
  default: vi.fn(),
}));

describe('useSignUpForm', () => {
  let mockUseForm: UseFormReturn<FieldValues>;
  let mockSignUp: ReturnType<typeof vi.fn>;
  let mockSaveAuthData: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockUseForm = {
      register: vi.fn(),
      handleSubmit: vi.fn((fn) => fn as SubmitHandler<FieldValues>),
      reset: vi.fn(),
      formState: {
        errors: {},
        isValid: true,
      },
      watch: vi.fn(),
      getValues: vi.fn(),
      setValue: vi.fn(),
      trigger: vi.fn(),
      setError: vi.fn(),
      clearErrors: vi.fn(),
      getFieldState: vi.fn(),
      control: {} as unknown,
    } as unknown as UseFormReturn<FieldValues>;

    mockSignUp = vi.mocked(signUp);
    mockSaveAuthData = vi.fn();

    vi.mocked(useSaveAuthData).mockReturnValue({
      saveAuthData: mockSaveAuthData,
      removeAuthData: vi.fn(),
    });

    vi.mocked(useForm).mockReturnValue(mockUseForm);
  });

  it('must return register, handleSubmit, errors, isValid and onSubmit', () => {
    const { result } = renderHook(() => useSignUpForm());

    expect(result.current.register).toBe(mockUseForm.register);
    expect(result.current.handleSubmit).toBe(mockUseForm.handleSubmit);
    expect(result.current.errors).toBe(mockUseForm.formState.errors);
    expect(result.current.isValid).toBe(mockUseForm.formState.isValid);
    expect(typeof result.current.onSubmit).toBe('function');
  });

  it('should call signUp and saveAuthData on successful form submission', async () => {
    const mockUser = { uid: '123', email: 'test@test.com' };

    mockSignUp.mockResolvedValueOnce(mockUser);

    const { result } = renderHook(() => useSignUpForm());

    await act(async () => {
      await result.current.onSubmit({
        name: 'John Doe',
        email: 'test@test.com',
        password: 'password123',
        confirmPassword: 'password123',
      });
    });

    expect(mockSignUp).toHaveBeenCalledWith(
      'John Doe',
      'test@test.com',
      'password123',
    );
    expect(mockSaveAuthData).toHaveBeenCalledWith(mockUser, '/');
    expect(mockUseForm.reset).toHaveBeenCalled();
  });

  it('should not call saveAuthData if signUp returns null', async () => {
    mockSignUp.mockResolvedValueOnce(null);

    const { result } = renderHook(() => useSignUpForm());

    await act(async () => {
      await result.current.onSubmit({
        name: 'John Doe',
        email: 'test@test.com',
        password: 'password123',
        confirmPassword: 'password123',
      });
    });

    expect(mockSignUp).toHaveBeenCalledWith(
      'John Doe',
      'test@test.com',
      'password123',
    );
    expect(mockSaveAuthData).not.toHaveBeenCalled();
    expect(mockUseForm.reset).not.toHaveBeenCalled();
  });
});
