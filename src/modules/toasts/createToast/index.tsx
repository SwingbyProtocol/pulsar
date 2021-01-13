import { toast, ToastContent, ToastOptions } from 'react-toastify';

export const createToast = ({
  content,
  autoCloseAfterMs,
  position = 'bottom-center',
  type = 'default',
}: {
  content: ToastContent;
  autoCloseAfterMs?: number;
  position?: NonNullable<ToastOptions['position']>;
  type?: NonNullable<ToastOptions['type']>;
}) => {
  toast(content, {
    autoClose: autoCloseAfterMs ?? false,
    hideProgressBar: true,
    position,
    type,
  });
};
