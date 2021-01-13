import { toast, ToastContent } from 'react-toastify';

const TYPES = ['info', 'success', 'warning', 'danger', 'default'] as const;
type Type = typeof TYPES[number];

export const createToast = ({
  content,
  autoClose = false,
  type = 'default',
}: {
  content: ToastContent;
  autoClose?: boolean | number;
  type?: Type;
}) => {
  toast(content, {
    autoClose: autoClose === true ? 5000 : autoClose,
    hideProgressBar: true,
    position: 'top-center',
    closeOnClick: true,
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
