export const STATUSES = [
  'waiting',
  'pending',
  'signing',
  'sending',
  'completed',
  'signing-refund',
  'sending-refund',
  'refunded',
  'invalidated',
] as const;
export type Status = typeof STATUSES[number];
