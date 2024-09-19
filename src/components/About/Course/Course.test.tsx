import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { useTranslations } from 'next-intl';

import Course from './Course';

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(),
}));

describe('Course Component', () => {
  it('renders the title and content correctly', () => {
    const t = vi.fn((key: string) => {
      switch (key) {
        case 'course_title':
          return 'Course Title';
        case 'course_one':
          return 'Course One Description';
        default:
          return 'Course Two Description';
      }
    });

    (useTranslations as Mock).mockReturnValue(t);

    render(<Course />);

    expect(screen.getByTestId('course-title')).toBeDefined();

    expect(screen.getByText('Course One Description')).toBeDefined();
    expect(screen.getByText('Course Two Description')).toBeDefined();
  });
});
