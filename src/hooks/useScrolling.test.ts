import { describe, test, vi, expect, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import _debounce from 'lodash/debounce';
import useScrolling from './useScrolling';

const scrollMin = 50;

const scrollMax = 100;

vi.mock('lodash/debounce', () => ({
  default: (fn: (...args: unknown[]) => void) => fn,
}));

describe('useScrolling hook', () => {
  let scrollEventListeners: { [key: string]: (ev: Event) => void } = {};
  let scrollYMock: number = 0;

  beforeEach(() => {
    vi.clearAllMocks();
    scrollEventListeners = {};

    vi.spyOn(window, 'addEventListener').mockImplementation((event, cb) => {
      scrollEventListeners[event] = cb as EventListener;
    });

    vi.spyOn(window, 'removeEventListener').mockImplementation((event) => {
      delete scrollEventListeners[event];
    });

    Object.defineProperty(window, 'scrollY', {
      get: () => scrollYMock,
      configurable: true,
    });
  });

  test('initially returns true if window.scrollY is not zero', () => {
    scrollYMock = scrollMin;

    const { result } = renderHook(() => useScrolling());

    const [scroll] = result.current;

    expect(scroll).toBe(true);
  });

  test('initially returns false if window.scrollY is zero', () => {
    scrollYMock = 0;

    const { result } = renderHook(() => useScrolling());

    const [scroll] = result.current;

    expect(scroll).toBe(false);
  });

  test('updates scroll to true when user scrolls down', () => {
    scrollYMock = 0;

    const { result } = renderHook(() => useScrolling());

    scrollYMock = scrollMax;
    scrollEventListeners.scroll(new Event('scroll'));

    const [scroll] = result.current;

    expect(scroll).toBe(false);
  });

  test('updates scroll to false when user scrolls up', () => {
    scrollYMock = scrollMax;

    const { result } = renderHook(() => useScrolling());

    scrollYMock = scrollMin;
    scrollEventListeners.scroll(new Event('scroll'));

    const [scroll] = result.current;

    expect(scroll).toBe(true);
  });

  test('does not update scroll when difference is within threshold', () => {
    scrollYMock = scrollMax;

    const { result } = renderHook(() => useScrolling());

    scrollYMock = scrollMax + 1;
    scrollEventListeners.scroll(new Event('scroll'));

    const [scroll] = result.current;

    expect(scroll).toBe(true);
  });

  test('cleans up event listeners on unmount', () => {
    const { unmount } = renderHook(() => useScrolling());

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );
  });
});
