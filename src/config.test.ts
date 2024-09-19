import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { port, host, localHost } from './config';

describe('Environment Variables', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should return local port if process.env.PORT is not set', () => {
    delete process.env.PORT;
    expect(port).toBe(localHost);
  });

  it('should return local host if process.env.VERCEL_URL is not set', () => {
    delete process.env.VERCEL_URL;
    expect(host).toBe(`http://localhost:${port}`);
  });
});
