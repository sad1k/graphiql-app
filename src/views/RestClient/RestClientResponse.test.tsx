import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import RestClientResponse from './RestClientResponse';

const INITIAL_STATUS = 200;
const INITIAL_RESPONSE = "{'key': 'value'}";

vi.mock('@uiw/react-codemirror', () => ({
  default: () => <div>Code</div>,
}));

describe('RestClientResponse component', () => {
  it('should render correctly with initial value', () => {
    render(
      <RestClientResponse status={INITIAL_STATUS} data={INITIAL_RESPONSE} />,
    );

    const status = screen.getByText(`${INITIAL_STATUS}`);

    expect(status).toBeDefined();
  });
});
