import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ToastProvider from './ToastProvider';

describe('Toast provider render', () => {
  it('should render correctly with initial value', () => {
    render(
      <ToastProvider>
        <span>Test text</span>
      </ToastProvider>,
    );

    const providerChild = screen.getByText('Test text');

    expect(providerChild).toBeDefined();
  });
});
