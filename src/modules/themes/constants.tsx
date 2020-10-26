import { readableColor } from 'polished';

export const PulsarConstants = {
  readable: (color: string) => readableColor(color, '#2b374a', '#fff', true),

  size: {
    closet: 12,
    room: 14,
    house: 16,
    street: 24,
    town: 32,
    city: 40,
    state: 48,
    country: 56,
  },

  radius: {
    normal: 5,
  },

  duration: {
    normal: '150ms',
  },
} as const;
