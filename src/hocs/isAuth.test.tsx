import { describe, test, vi, expect, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { redirect } from 'next/navigation';
import { useAppSelector } from '@/utils/store/hooks';
import { HOME } from '@/constants/path';
import isAuth from './isAuth';

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}));

vi.mock('@/utils/store/hooks', () => ({
  useAppSelector: vi.fn(),
}));

const TestComponent: React.FC = () => <div>Test Component</div>;

describe('isAuth HOC', () => {
  test('renders the component when not authenticated', () => {
    (useAppSelector as Mock).mockReturnValue(false);

    const ComponentWithAuth = isAuth(TestComponent);

    render(<ComponentWithAuth />);

    expect(screen.getByText('Test Component')).toBeInTheDocument();
    expect(redirect).not.toHaveBeenCalled();
  });

  test('redirects when authenticated', () => {
    (useAppSelector as Mock).mockReturnValue(true);

    const ComponentWithAuth = isAuth(TestComponent);

    render(<ComponentWithAuth />);

    expect(redirect).toHaveBeenCalledWith(HOME);
    expect(screen.queryByText('Test Component')).toBeNull();
  });
});
