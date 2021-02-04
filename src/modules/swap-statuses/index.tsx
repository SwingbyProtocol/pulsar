import { PulsarThemeType } from '../themes';

export const SWAP_STATUSES = [
  'WAITING',
  'PENDING',
  'SIGNING',
  'SENDING',
  'COMPLETED',
  'SIGNING_REFUND',
  'SENDING_REFUND',
  'REFUNDED',
  'EXPIRED',
] as const;
export type SwapStatus = typeof SWAP_STATUSES[number];

export const getStatusColor = ({
  theme,
  status,
}: {
  theme: PulsarThemeType;
  status: SwapStatus;
}) => {
  switch (status) {
    case 'WAITING':
    case 'PENDING':
      return theme.pulsar.color.text.masked;
    case 'SENDING':
    case 'SIGNING':
      return theme.pulsar.color.warning.normal;
    case 'COMPLETED':
      return theme.pulsar.color.success.normal;
    case 'SENDING_REFUND':
    case 'SIGNING_REFUND':
    case 'REFUNDED':
      return theme.pulsar.color.danger.normal;
    case 'EXPIRED':
      return theme.pulsar.color.secondary.normal;
  }
};
