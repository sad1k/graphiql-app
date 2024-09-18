import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import HomeImage from './HomeImage';

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(),
}));

describe('AboutImage Component', () => {
  it('renders the iamge  correctly', () => {
    render(<HomeImage />);

    expect(screen.getByTestId('home-image-container')).toBeDefined();
  });
});
