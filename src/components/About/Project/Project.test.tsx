import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, Mock } from 'vitest';
import { useTranslations } from 'next-intl';

import Project from './Project';

vi.mock('next-intl', () => ({
  useTranslations: vi.fn(),
}));

describe('Project Component', () => {
  it('renders the title and content correctly', () => {
    const t = vi.fn((key: string) => {
      switch (key) {
        case 'projet_title':
          return 'Project Title';
        case 'project_one':
          return 'Project One Description';
        case 'project_two':
          return 'Project Two Description';
        default:
          return key;
      }
    });

    (useTranslations as Mock).mockReturnValue(t);

    render(<Project />);

    expect(screen.getByTestId('project-title')).toBeDefined();

    expect(screen.getByText('Project One Description')).toBeDefined();
    expect(screen.getByText('Project Two Description')).toBeDefined();
  });
});
