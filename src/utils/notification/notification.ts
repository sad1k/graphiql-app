import { toast, Zoom } from 'react-toastify';

const notification = (type: 'success' | 'error', msg: string): void => {
  toast[type](msg, {
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
};

export default notification;
