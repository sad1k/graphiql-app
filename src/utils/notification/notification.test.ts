// notification.test.ts
import { describe, it, expect, vi } from 'vitest';
import { toast, Zoom } from 'react-toastify';
import notification from './notification';

vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
  Zoom: vi.fn(),
}));

describe('notification', () => {
  it('should call toast.success with correct arguments when type is "success"', () => {
    const message = 'Success message';

    notification('success', message);

    expect(toast.success).toHaveBeenCalledWith(message, {
      position: 'bottom-left',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Zoom,
    });
  });

  it('should call toast.error with correct arguments when type is "error"', () => {
    const message = 'Error message';

    notification('error', message);

    expect(toast.error).toHaveBeenCalledWith(message, {
      position: 'bottom-left',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Zoom,
    });
  });
});
