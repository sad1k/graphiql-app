import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SubmitButton from './SubmitButton';

describe('SubmitButton component', () => {
  it('should render correctly with initial value', () => {
    render(<SubmitButton xs={6} />);

    const input = screen.getByText('Send');

    expect(input).toBeDefined();
  });
});
