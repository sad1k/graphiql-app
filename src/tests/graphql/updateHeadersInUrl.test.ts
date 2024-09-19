import { describe, it, expect } from 'vitest';
import { updateHeadersInUrl } from '@/utils/graphql/updateHeadersInUrl';

describe('updateHeadersInUrl', () => {
  it('should update headers in the URL', () => {
    const initialUrl = 'http://localhost/graphql';
    const newHeaders = {
      Authorization: 'Bearer token',
      'Content-Type': 'application/json',
    };

    // Мокаем window.location.href
    Object.defineProperty(window, 'location', {
      value: { href: initialUrl },
      writable: true,
    });

    const updatedUrl = updateHeadersInUrl(newHeaders);

    const expectedUrl =
      'http://localhost/graphql?Authorization=Bearer+token&Content-Type=application%2Fjson';

    expect(updatedUrl).toBe(expectedUrl);
  });

  it('should update headers in URL with existing query params', () => {
    const initialUrl = 'http://localhost/graphql?existingParam=value';
    const newHeaders = {
      Authorization: 'Bearer token',
    };

    // Мокаем window.location.href
    Object.defineProperty(window, 'location', {
      value: { href: initialUrl },
      writable: true,
    });

    const updatedUrl = updateHeadersInUrl(newHeaders);

    const expectedUrl = 'http://localhost/graphql?Authorization=Bearer+token';

    expect(updatedUrl).toBe(expectedUrl);
  });

  it('should return URL without query if no headers provided', () => {
    const initialUrl = 'http://localhost/graphql';
    const newHeaders = {};

    // Мокаем window.location.href
    Object.defineProperty(window, 'location', {
      value: { href: initialUrl },
      writable: true,
    });

    const updatedUrl = updateHeadersInUrl(newHeaders);

    expect(updatedUrl).toBe('http://localhost/graphql?');
  });
});
