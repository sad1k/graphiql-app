import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { useTranslations } from 'next-intl';

import HomeTitle from './HomeTitle';

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(),
}));

describe('HomeTitle Component', () => {
  it('renders the title  correctly', () => {
    const t = vi.fn(() => {});

    (useTranslations as Mock).mockReturnValue(t);

    render(<HomeTitle name='Jack' />);

    expect(screen.getByTestId('home-title')).toBeDefined();
  });
});
