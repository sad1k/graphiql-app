import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RestClient from './RestClient';

vi.mock('@/hocs/CodeField', () => ({
  default: () => <div>Code</div>,
}));

vi.mock('@/utils/restclient/execute-request', () => ({
  default: () => {},
}));

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

describe('RestClient component', () => {
  it('should render correctly with initial value', () => {
    render(<RestClient method='GET' url='' headers={[]} body='' />);
    const header = screen.getByText(/rest client/i);

    expect(header).toBeDefined();
  });
});
