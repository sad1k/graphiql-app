'use client';

import { afterAll, describe, expect, test, vi, afterEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@utils/store/store';
import Header, { getLogoSize, LogoActiveSize, LogoSize } from './Header';
import Container from './HeaderContainer';

describe('Ensure that the footer component renders', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  vi.mock('next/navigation', async () => {
    const actual = await vi.importActual('next/navigation');

    return {
      ...actual,
      useRouter: vi.fn(() => ({
        push: vi.fn(),
      })),
    };
  });

  test('', () => {
    render(
      <Provider store={store}>
        <Header />{' '}
      </Provider>,
    );

    expect(screen.getByText(/en/i)).toBeDefined();

    let prevPosition = window.scrollY;
    let isScrolling = false;

    const handleScroll = () => {
      const currentPosition = window.scrollY;

      if (prevPosition < currentPosition) isScrolling = true;

      if (isScrolling) expect(getLogoSize(isScrolling)).toBe(LogoActiveSize);

      prevPosition = currentPosition;
    };

    window.addEventListener('scroll', handleScroll, { once: true });

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(
      render(
        <Provider store={store}>
          <Container isScrolling={isScrolling} />
        </Provider>,
      ),
    ).toBeDefined();
  });
});

test('Test getLogoSize', () => {
  expect(getLogoSize(false)).toBe(LogoSize);
});
