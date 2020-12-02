import type { Messages } from './component';

const values: { [k: string]: Messages } = {
  en: {
    waiting: 'Waiting for your deposit…',
    pending: 'Processing your swap…',
    signing: 'Signing your swap…',
    sending: 'Sending to your address…',
    completed: 'Swap completed!',
    'signing-refund': 'Signing your refund…',
    'sending-refund': 'Refunding to your address…',
    refunded: 'Refund completed!',
    invalidated: 'Swap expired',
  },
};

export const defaultMessages = ({ locale }: { locale: string }): Messages => {
  if (Object.keys(values).includes(locale)) {
    return values[locale];
  }

  return values['en'];
};
