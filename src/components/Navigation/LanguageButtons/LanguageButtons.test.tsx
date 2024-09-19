import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, vi, expect, Mock, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { useRouter, usePathname } from 'next/navigation';
import LanguageButtons from './LanguageButtons';

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  usePathname: vi.fn(),
}));

describe('LanguageButtons Component', () => {
  const mockReplace = vi.fn();
  const mockRouter = { replace: mockReplace };
  const mockPathname = '/en/page';

  beforeEach(() => {
    (useRouter as Mock).mockReturnValue(mockRouter);
    (usePathname as Mock).mockReturnValue(mockPathname);
  });

  const languages = [
    { text: 'English', href: 'en' },
    { text: 'Русский', href: 'rus' },
  ];

  it('should render language buttons', () => {
    render(<LanguageButtons languages={languages} />);

    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Русский')).toBeInTheDocument();
  });

  it('should change language when button is clicked', () => {
    render(<LanguageButtons languages={languages} />);

    const russianButton = screen.getByText('Русский');

    fireEvent.click(russianButton);

    expect(mockReplace).toHaveBeenCalledWith('/rus/page');
  });

  it('should preserve the rest of the URL when language is changed', () => {
    (usePathname as Mock).mockReturnValue('/en/another-path');

    render(<LanguageButtons languages={languages} />);

    const englishButton = screen.getByText('English');

    fireEvent.click(englishButton);

    expect(mockReplace).toHaveBeenCalledWith('/en/another-path');
  });
});
