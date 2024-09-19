import { describe, it, expect } from 'vitest';
import compileRestUrl from './compile-rest-url';

describe('parse rest url testing', () => {
  it('compile with body', () => {
    const result = compileRestUrl(
      'https://jsonplaceholder.typicode.com/posts',
      'POST',
      [{ key: 'Content-Type', value: 'application/json' }],
      '{"title":"fakeTitle","userId":1,"body":"fakeMessage"}',
    );

    expect(result).equal(
      '/restclient/POST/aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3Rz/eyJ0aXRsZSI6ImZha2VUaXRsZSIsInVzZXJJZCI6MSwiYm9keSI6ImZha2VNZXNzYWdlIn0?Content-Type=application%2Fjson',
    );
  });

  it('compile without body', () => {
    const result = compileRestUrl(
      'https://jsonplaceholder.typicode.com/posts',
      'GET',
      [{ key: 'Content-Type', value: 'application/json' }],
    );

    expect(result).equal(
      '/restclient/GET/aHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3Rz?Content-Type=application%2Fjson',
    );
  });
});
