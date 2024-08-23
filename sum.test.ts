import { test, expect } from 'vitest';

test('test sum', () => {
  const testValue1 = 1;
  const testValue2 = 1;
  const testResult = testValue1 + testValue2;

  expect(testValue1 + testValue2).toBe(testResult);
});
