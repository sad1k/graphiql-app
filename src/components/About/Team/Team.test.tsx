import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { useTranslations } from 'next-intl';

import Team from './Team';

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(),
}));

describe('Team Component', () => {
  it('renders the title and content correctly', () => {
    const t = vi.fn((key: string) => {
      switch (key) {
        case 'member_title':
          return 'Course Title';
        case 'first_member-name':
          return 'First member name';
        default:
          return 'Second member name';
      }
    });

    (useTranslations as Mock).mockReturnValue(t);

    render(<Team />);

    expect(screen.getByTestId('team-title')).toBeDefined();

    expect(screen.getByText('First member name')).toBeDefined();
  });
});
