import { vi } from 'vitest';

export const auth = {
  currentUser: {
    uid: 'mocked-uid',
    email: 'test@example.com',
  },
  signInWithEmailAndPassword: vi.fn(() =>
    Promise.resolve({ user: { uid: 'mocked-uid' } }),
  ),
  signOut: vi.fn(() => Promise.resolve()),
};

export const firestore = {
  collection: vi.fn(() => ({
    get: vi.fn(() =>
      Promise.resolve({
        docs: [{ id: '1', data: () => ({ name: 'Test User' }) }],
      }),
    ),
    add: vi.fn(() => Promise.resolve({ id: 'new-doc-id' })),
  })),
};

export const firebase = {
  auth: vi.fn(() => auth),
  firestore: vi.fn(() => firestore),
};
