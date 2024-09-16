export type TMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export const DEFAULT_METHOD: TMethod = 'GET';
const METHODS_WITH_BODY: TMethod[] = ['POST', 'PUT', 'PATCH'];

export const isMethod = (testMethod: string) =>
  testMethod === 'GET' ||
  testMethod === 'POST' ||
  testMethod === 'PUT' ||
  testMethod === 'PATCH' ||
  testMethod === 'DELETE';

export const isBodySupport = (testMethod: TMethod) =>
  METHODS_WITH_BODY.includes(testMethod);
