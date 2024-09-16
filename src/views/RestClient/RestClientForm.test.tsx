import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RestClientForm from './RestClientForm';

vi.mock('@/hocs/CodeField', () => ({
  default: () => <div>Code</div>,
}));

vi.mock('@/utils/restclient/execute-request', () => ({
  default: () => {},
}));

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

describe('RestClientResponse component', () => {
  it('should render correctly with initial value', () => {
    render(
      <RestClientForm
        method='GET'
        url=''
        headers={[]}
        body=''
        setResponse={() => {}}
        setStatus={() => {}}
      />,
    );
    const status = screen.getByText(/headers/i);

    expect(status).toBeDefined();
  });
});
