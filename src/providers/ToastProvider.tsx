import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: ToastProviderProps) => (
  <>
    {children}
    <ToastContainer />
  </>
);

export default ToastProvider;
