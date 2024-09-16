import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { StyledInput } from './Input';

describe('UrlInput component', () => {
  it('should render correctly with initial value', () => {
    render(
      <StyledInput
        value='test value'
        placeholder='test placeholder'
        label='test-label'
        onChange={vi.fn()}
        variant='outlined'
      />,
    );

    const input = screen.getByPlaceholderText('test placeholder');

    expect(input).toBeDefined();
  });
});
