import type { Messages } from './component';

const values: { [k: string]: Messages } = {
  en: {
    WAITING: 'Waiting for your deposit…',
    PENDING: 'Processing your swap…',
    SIGNING: 'Signing your swap…',
    SENDING: 'Sending to your address…',
    COMPLETED: 'Swap completed!',
    SIGNING_REFUND: 'Signing your refund…',
    SENDING_REFUND: 'Refunding to your address…',
    REFUNDED: 'Refund completed!',
    EXPIRED: 'Swap expired',
  },
};

export const defaultMessages = ({ locale }: { locale: string }): Messages => {
  if (Object.keys(values).includes(locale)) {
    return values[locale];
  }

  return values['en'];
};
