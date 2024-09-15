export type TMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export const DEFAULT_METHOD: TMethod = 'GET';

export const isMethod = (testMethod: string) =>
  testMethod === 'GET' ||
  testMethod === 'POST' ||
  testMethod === 'PUT' ||
  testMethod === 'PATCH' ||
  testMethod === 'DELETE';
