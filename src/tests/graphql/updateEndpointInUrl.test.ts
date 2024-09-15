import { updateEndpointInUrl } from '@/utils/graphql/updateEndpointInUrl';
import { describe, it, expect, vi } from 'vitest';

describe('updateEndpointInUrl', () => {
  it('should update the endpoint in the URL', () => {
    const initialUrl = 'http://localhost/graphql/oldEndpoint';
    const newEndpoint = 'newEndpoint';
    const encodedNewEndpoint = btoa(newEndpoint);

    // Мокаем window.location.href
    Object.defineProperty(window, 'location', {
      value: {
        href: initialUrl,
        origin: 'http://localhost',
        pathname: '/graphql/oldEndpoint',
      },
      writable: true,
    });

    Object.defineProperty(window, 'history', {
      value: {
        pushState: vi.fn(),
      },
      writable: true,
    });

    updateEndpointInUrl(newEndpoint);

    // Проверяем, что pushState был вызван с ожидаемыми аргументами
    expect(window.history.pushState).toHaveBeenCalledWith(
      {},
      '',
      `http://localhost/graphql/${encodedNewEndpoint}`,
    );
  });

  it('should throw an error if URL does not contain graphql', () => {
    const invalidUrl = 'http://localhost/api/oldEndpoint';
    const newEndpoint = 'newEndpoint';

    // Мокаем window.location.href
    Object.defineProperty(window, 'location', {
      value: {
        href: invalidUrl,
        origin: 'http://localhost',
        pathname: '/api/oldEndpoint',
      },
      writable: true,
    });

    expect(() => updateEndpointInUrl(newEndpoint)).toThrow(
      'URL не соответствует ожидаемому формату с graphql',
    );
  });
});
