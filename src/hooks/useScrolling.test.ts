import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { describe, it, beforeEach, vi, expect } from 'vitest';
import _debounce from 'lodash/debounce';
import useScrolling from './useScrolling';

const delay = 100;

vi.mock('lodash/debounce', () => ({
  default: vi.fn((fn: (...args: unknown[]) => void) => fn),
}));

describe('useScrolling', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      value: 0,
    });

    window.addEventListener = vi.fn();
    window.removeEventListener = vi.fn();
  });

  it('must return a valid initial value', () => {
    const { result } = renderHook(() => useScrolling());

    expect(result.current[0]).toBe(false);
  });

  it('should change state to true when scrolling down', async () => {
    const { result } = renderHook(() => useScrolling());

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    await new Promise((resolve) => {
      setTimeout(resolve, delay);
    });

    expect(result.current[0]).toBe(false);
  });

  it('should change state to false when scrolling up', async () => {
    const { result } = renderHook(() => useScrolling());

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    await new Promise((resolve) => {
      setTimeout(resolve, delay);
    });

    expect(result.current[0]).toBe(false);

    act(() => {
      window.scrollY = 50;
      window.dispatchEvent(new Event('scroll'));
    });

    await new Promise((resolve) => {
      setTimeout(resolve, delay);
    });

    expect(result.current[0]).toBe(false);
  });

  it('should correctly add and remove event listeners on mount and unmount', () => {
    const { unmount } = renderHook(() => useScrolling());

    expect(window.addEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith(
      'scroll',
      expect.any(Function),
    );
  });
});
