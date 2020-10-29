import { readableColor } from 'polished';

export const readable = {
  normal: (bg: string) => readableColor(bg, '#4a5463', '#fff'),
  masked: (bg: string) => readableColor(bg, '#818994', '#fff'),
  accent: (bg: string) => readableColor(bg, '#2b374a', '#fff'),
  primary: (bg: string) => readableColor(bg, '#31d5b8', '#31d5b8'),
  disabled: (bg: string) => readableColor(bg, '#f00', '#f00'),
  placeholder: (bg: string) => readableColor(bg, '#818994', '#fff'),
} as const;

export const PulsarLight = {
  pulsar: {
    id: 'PulsarLight' as 'PulsarLight' | 'PulsarDark' | 'PulsarAccent',
    name: 'Pulsar (Light)',

    color: {
      bg: {
        normal: '#fff',
      },

      text: {
        normal: readable.normal('white'),
        masked: readable.masked('white'),
        accent: readable.accent('white'),
        primary: readable.primary('white'),
        disabled: readable.disabled('white'),
        placeholder: readable.placeholder('white'),
      },

      readable,

      border: {
        normal: '#d7dade',
        danger: '#f7c5c3',
      },

      primary: {
        normal: '#31d5b8',
        active: '#21a68e',
      },

      success: {
        normal: '#31d5b8',
        active: '#21a68e',
      },

      danger: {
        normal: '#d14c40',
        active: '#d14c40',
      },
    },

    size: {
      box: 4,
      drawer: 8,
      closet: 12,
      room: 14,
      house: 16,
      street: 24,
      town: 32,
      city: 40,
      state: 48,
      country: 56,
    },

    duration: {
      normal: '150ms',
    },

    components: {
      button: {
        secondary: {
          idle: {
            border: '#31d5b8',
            bg: 'transparent',
            color: '#31d5b8',
          },
          active: {
            border: 'transparent',
            bg: '#21a68e',
            color: '#fff',
          },
        },
      },
    },
  },
};
