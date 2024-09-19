import { describe, it, expect, vi } from 'vitest';
import formatCode from './format-code';

vi.mock('prettier/standalone', () => ({
  default: {
    format: () => 'formated value',
  },
}));

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

describe('RestClient component', () => {
  it('should render correctly with initial value', async () => {
    const result = await formatCode('tratata');

    expect(result).equal('formated value');
  });
});
