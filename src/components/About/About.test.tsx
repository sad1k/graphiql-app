import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { useTranslations } from 'next-intl';

import About from './About';

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(),
}));

describe('About Component', () => {
  it('renders the section correctly', () => {
    const t = vi.fn(() => {});

    (useTranslations as Mock).mockReturnValue(t);
    render(<About />);
    expect(screen.getByTestId('about-section')).toBeDefined();
  });
});
