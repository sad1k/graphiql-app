import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import AboutImage from './AboutImage';

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(),
}));

describe('AboutImage Component', () => {
  it('renders the iamge  correctly', () => {
    render(<AboutImage />);

    expect(screen.getByTestId('about-image-container')).toBeDefined();
  });
});
