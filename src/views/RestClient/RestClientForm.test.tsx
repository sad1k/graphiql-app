import {  render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useRouter } from 'next/navigation';
import userEvent from '@testing-library/user-event';
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

  it('should push url on submit', async () => {
    const mockPush = vi.fn();

    (useRouter as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      pathname: '/current-page',
      push: mockPush,
    });

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

    const submitButton = screen.getByTestId('rest-client-submit');

    expect(submitButton).toBeDefined();
    await userEvent.click(submitButton);

    expect(mockPush).toHaveBeenCalled();
  });
});
