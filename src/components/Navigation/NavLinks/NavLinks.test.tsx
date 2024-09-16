'use client';

import { afterAll, describe, expect, test, vi, afterEach } from 'vitest';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@utils/store/store';

import NavLinks from './NavLinks';
import Navigation from '../Navigation';

vi.mock('./MyNavLinks', () => ({ MyNavLinks: NavLinks }));

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');

  return {
    ...actual,
    useRouter: vi.fn(() => ({
      push: vi.fn(),
    })),
  };
});

describe('Ensure that the NavLinks component renders correctly', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('It should driver bar open', () => {
    const srceen = render(
      <Provider store={store}>
        <Navigation />
      </Provider>,
    );
    const driverBarButton = srceen.getByTestId('open-driverBar-button');

    fireEvent.click(driverBarButton);

    const driverBar = srceen.getByTestId('open-driverBar-button');

    expect(driverBar).toBeDefined();
  });
});
