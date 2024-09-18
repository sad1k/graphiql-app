import { renderHook, act } from '@testing-library/react';
import {
  SubmitHandler,
  UseFormReturn,
  useForm,
  FieldValues,
} from 'react-hook-form';
import { vi, describe, it, beforeEach, expect } from 'vitest';
import { ISignInUser } from '@/types/IUser';
import { signIn } from '@/utils/firebase/signIn';
import useSignInForm from './useSignInForm';
import useSaveAuthData from './useAuthData';

vi.mock('react-hook-form', () => ({
  useForm: vi.fn(),
}));

vi.mock('@/utils/firebase/signIn', () => ({
  signIn: vi.fn(),
}));

vi.mock('./useAuthData', () => ({
  default: vi.fn(),
}));

describe('useSignInForm', () => {
  let mockUseForm: UseFormReturn<ISignInUser>;
  let mockSignIn: ReturnType<typeof vi.fn>;
  let mockSaveAuthData: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockUseForm = {
      register: vi.fn(),
      handleSubmit: vi.fn((fn) => fn as SubmitHandler<ISignInUser>),
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
      control: {} as object,
    } as unknown as UseFormReturn<ISignInUser>;

    mockSignIn = vi.mocked(signIn);
    mockSaveAuthData = vi.fn();

    vi.mocked(useSaveAuthData).mockReturnValue({
      saveAuthData: mockSaveAuthData,
      removeAuthData: vi.fn(),
    });

    vi.mocked(useForm).mockReturnValue(
      mockUseForm as unknown as UseFormReturn<FieldValues>,
    );
  });

  it('must return register, handleSubmit, errors, isValid и onSubmit', () => {
    const { result } = renderHook(() => useSignInForm());

    expect(result.current.register).toBe(mockUseForm.register);
    expect(result.current.handleSubmit).toBe(mockUseForm.handleSubmit);
    expect(result.current.errors).toBe(mockUseForm.formState.errors);
    expect(result.current.isValid).toBe(mockUseForm.formState.isValid);
    expect(typeof result.current.onSubmit).toBe('function');
  });

  it('must return signIn и saveAuthData при успешной отправке формы', async () => {
    const mockUser = { uid: '123', email: 'test@test.com' };

    mockSignIn.mockResolvedValueOnce(mockUser);

    const { result } = renderHook(() => useSignInForm());

    await act(async () => {
      await result.current.onSubmit({
        email: 'test@test.com',
        password: 'password123',
      });
    });

    expect(mockSignIn).toHaveBeenCalledWith('test@test.com', 'password123');
    expect(mockSaveAuthData).toHaveBeenCalledWith(mockUser, '/');
    expect(mockUseForm.reset).toHaveBeenCalled();
  });

  it('not call saveAuthData, if signIn return null', async () => {
    mockSignIn.mockResolvedValueOnce(null);

    const { result } = renderHook(() => useSignInForm());

    await act(async () => {
      await result.current.onSubmit({
        email: 'test@test.com',
        password: 'password123',
      });
    });

    expect(mockSignIn).toHaveBeenCalledWith('test@test.com', 'password123');
    expect(mockSaveAuthData).not.toHaveBeenCalled();
    expect(mockUseForm.reset).not.toHaveBeenCalled();
  });
});
