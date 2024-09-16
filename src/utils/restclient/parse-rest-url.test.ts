import { describe, it, expect } from 'vitest';
import parseRestUrl from './parse-rest-url';
import IRouteUrl from './route-url-interface';

const TEST_PARAMS_SINGLE_HEADER: IRouteUrl = {
  params: {
    slug: [
      'POST',
      'aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3Rz',
      'eyJ0aXRsZSI6ImZha2VUaXRsZSIsInVzZXJJZCI6MSwiYm9keSI6ImZha2VNZXNzYWdlIn0',
    ],
  },
  searchParams: { 'Content-Type': 'application/json' },
};

const TEST_PARAMS_MULTIPLY_HEADER: IRouteUrl = {
  params: {
    slug: ['GET', 'aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3Rz'],
  },
  searchParams: {
    'Content-Type': ['application/json', 'application/xml'],
  },
};

describe('parse rest url testing', () => {
  it('parse with single header', () => {
    const result = parseRestUrl(TEST_PARAMS_SINGLE_HEADER);

    expect(result.url).equal('https://jsonplaceholder.typicode.com/posts');
    expect(result.method).equal('POST');
    expect(result.body).equal(
      '{"title":"fakeTitle","userId":1,"body":"fakeMessage"}',
    );
  });

  it('parse with multipy header', () => {
    const result = parseRestUrl(TEST_PARAMS_MULTIPLY_HEADER);

    expect(result.url).equal('https://jsonplaceholder.typicode.com/posts');
    expect(result.method).equal('GET');
  });
});
