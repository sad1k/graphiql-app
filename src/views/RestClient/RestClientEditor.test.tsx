import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RestClientEditor from './RestClientEditor';

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
      <RestClientEditor
        method='GET'
        url=''
        headers={[]}
        body=''
        setResponse={() => {}}
        setStatus={() => {}}
      />,
    );
    const paper = screen.getByTestId('rest-client-from-paper');

    expect(paper).toBeDefined();
  });
});
