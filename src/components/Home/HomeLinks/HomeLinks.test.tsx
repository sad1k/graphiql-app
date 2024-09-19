import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomeLinks from './HomeLinks';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

describe('HomeLinks Component', () => {
  it('renders sign in and sign up links when not authenticated', () => {
    render(<HomeLinks isAuth={false} />);

    expect(screen.getByText(/signIn/i)).toBeDefined();
    expect(screen.getByText(/signUp/i)).toBeDefined();
  });

  it('renders rest, graphiql, and history links when authenticated', () => {
    render(<HomeLinks isAuth />);

    expect(screen.getByText('rest')).toBeDefined();
    expect(screen.getByText('grapiql')).toBeDefined();
    expect(screen.getByText('history')).toBeDefined();
  });
});
