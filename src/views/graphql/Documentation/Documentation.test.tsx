import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { act } from 'react';
import { DocumentationView } from './Documentation';

// Mock для createGraphiQLFetcher
vi.mock('@graphiql/toolkit', () => ({
  createGraphiQLFetcher: vi.fn(() => vi.fn()), // Заглушка для fetcher
}));

describe('DocumentationView Component', () => {
  it('renders correctly with initial state', async () => {
    render(<DocumentationView url='http://localhost/graphql' />);

    const doc = await screen.findByText(/Открыть документацию:/i);

    // Проверяем, что заголовок отображается корректно
    expect(doc).toBeInTheDocument();
    // Иконка должна отображаться как ArticleIcon
    expect(screen.getByRole('IconButton')).toContainElement(
      screen.getByTestId('ArticleIcon'),
    );
  });

  it('toggles open/close documentation', async () => {
    render(<DocumentationView url='http://localhost/graphql' />);

    const doc = await screen.findByRole('document');

    expect(doc.classList.contains('visible')).toBe(false);

    // Клик на кнопку должен открыть документацию
    const toggleButton = await screen.findByRole('IconButton');

    act(() => {
      fireEvent.click(toggleButton);
    });

    // Проверяем, что текст изменился на "Закрыть документацию:"
    expect(screen.getByText(/Закрыть документацию:/i)).toBeInTheDocument();

    expect(doc.classList.contains('visible')).toBe(false);

    // Повторный клик должен закрыть документацию
    act(() => {
      fireEvent.click(toggleButton);
    });

    expect(doc.classList.contains('visible')).toBe(false);
  });
});
