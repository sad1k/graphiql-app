import { describe, it, expect, vi } from 'vitest';
import { notFound } from 'next/navigation';
import request from './request';

vi.mock('next/navigation', () => ({
  notFound: vi.fn(),
}));

vi.mock('next-intl/server', () => ({
  getRequestConfig: vi.fn((fn: () => void) => fn),
}));

vi.mock('@/path/to/routing', () => ({
  routing: {
    locales: ['en', 'rus'],
  },
}));

vi.mock('../../messages/en.json', () => ({
  default: { greeting: 'Hello' },
}));
vi.mock('../../messages/rus.json', () => ({
  default: { greeting: 'Привет' },
}));

describe('getRequestConfig', () => {
  it('returns messages for supported locale "en"', async () => {
    const requestConfig = await request({ locale: 'en' });

    expect(requestConfig.locale).toBe('en');
    expect(requestConfig.messages).toEqual({ greeting: 'Hello' });
    expect(notFound).not.toHaveBeenCalled();
  });

  it('returns messages for supported locale "rus"', async () => {
    const requestConfig = await request({ locale: 'rus' });

    expect(requestConfig.locale).toBe('rus');
    expect(requestConfig.messages).toEqual({ greeting: 'Привет' });
    expect(notFound).not.toHaveBeenCalled();
  });

  it('defaults to "en" for unsupported locale', async () => {
    const requestConfig = await request({ locale: 'fr' });

    expect(requestConfig.locale).toBe('en');
    expect(requestConfig.messages).toEqual({ greeting: 'Hello' });
  });
});
