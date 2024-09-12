export type TMethod = 'GET' | 'POST';

export const DEFAULT_METHOD: TMethod = 'GET';

export const isMethod = (testMethod: string) =>
  testMethod === 'GET' || testMethod === 'POST';
