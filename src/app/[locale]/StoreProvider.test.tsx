import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import StoreProvider from './StoreProvider';

const TestComponent = () => <div>Test Component</div>;

describe('StoreProvider', () => {
  it('should render children correctly', () => {
    render(
      <StoreProvider>
        <TestComponent />
      </StoreProvider>,
    );

    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  it('should provide the Redux store context', () => {
    const { container } = render(
      <StoreProvider>
        <TestComponent />
      </StoreProvider>,
    );

    expect(container.querySelector('div')).toBeInTheDocument();
  });
});
