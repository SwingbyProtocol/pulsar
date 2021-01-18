import { toast, ToastContent, ToastOptions } from 'react-toastify';

const TYPES = ['info', 'success', 'warning', 'danger', 'default'] as const;
type Type = typeof TYPES[number];

export const createToast = ({
  content,
  autoClose = false,
  type = 'default',
  toastId,
}: {
  content: ToastContent;
  autoClose?: boolean | number;
  type?: Type;
  toastId?: ToastOptions['toastId'];
}) => {
  toast(content, {
    autoClose: autoClose === true ? 5000 : autoClose,
    hideProgressBar: true,
    position: 'top-center',
    closeOnClick: true,
    toastId,
    type: (() => {
      switch (type) {
        case 'info':
          return 'info';
        case 'warning':
          return 'warning';
        case 'success':
          return 'success';
        case 'danger':
          return 'error';
        case 'default':
        default:
          return 'default';
      }
    })(),
  });
};
