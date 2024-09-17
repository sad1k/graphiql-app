import { describe, it, expect, vi } from 'vitest';
import { FirebaseError } from 'firebase/app';
import { getFirebaseErrorMessage } from './getFirebaseErrorMessage';

vi.mock('prettier/standalone', () => ({
  default: {
    format: () => 'formated value',
  },
}));

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

describe('get firebase error message', () => {
  it('should return correct message', () => {
    const err = new FirebaseError('test-code', 'test-message');
    const result = getFirebaseErrorMessage(err);

    expect(result).equal('test-code');
  });

  it('should return correct message', () => {
    const result = getFirebaseErrorMessage('');

    expect(result).equal('An unexpected error occurred');
  });
});
