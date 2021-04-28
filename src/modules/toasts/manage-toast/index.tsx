import { toast, ToastContent, ToastOptions } from 'react-toastify';

const TYPES = ['info', 'success', 'warning', 'danger', 'default'] as const;
type Type = typeof TYPES[number];

const AUTO_CLOSE_DEFAULT_DURATION = 5000;

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
    autoClose: autoClose === true ? AUTO_CLOSE_DEFAULT_DURATION : autoClose,
    hideProgressBar: true,
    position: 'top-center',
    closeOnClick: false,
    toastId,
    type: getOriginalType(type),
  });
};

export const updateToast = ({
  content,
  autoClose = false,
  type,
  toastId,
}: {
  content?: ToastContent;
  autoClose?: boolean | number;
  type?: Type;
  toastId: NonNullable<ToastOptions['toastId']>;
}) =>
  toast.update(toastId, {
    render: content,
    autoClose: autoClose === true ? AUTO_CLOSE_DEFAULT_DURATION : autoClose,
    type: type ? getOriginalType(type) : undefined,
    closeOnClick: false,
  });

export const createOrUpdateToast = (params: {
  content: ToastContent;
  autoClose?: boolean | number;
  type?: Type;
  toastId: NonNullable<ToastOptions['toastId']>;
}) => {
  if (toast.isActive(params.toastId)) {
    updateToast(params);
  }

  createToast(params);
};

export const dismissToast = ({ toastId }: { toastId: NonNullable<ToastOptions['toastId']> }) => {
  toast.dismiss(toastId);
};

const getOriginalType = (type: Type) => {
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
};
