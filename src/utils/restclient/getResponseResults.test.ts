import { describe, it, expect, vi } from 'vitest';
import getResponseResults from './getResponseResults';
import { HttpStatusCodes } from './http-status';

vi.mock('prettier/standalone', () => ({
  default: {
    format: () => 'formated value',
  },
}));

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

describe('RestClient component', () => {
  vi.stubGlobal(
    'fetch',
    vi.fn(() =>
      Promise.resolve({
        status: HttpStatusCodes.SUCCESS,
        json: () => Promise.resolve({}),
      }),
    ),
  );
  it('should render correctly with initial value', async () => {
    const result = await getResponseResults('GET', 'test-url', [], '');

    expect(result.status).equal(HttpStatusCodes.SUCCESS);
  });
});
