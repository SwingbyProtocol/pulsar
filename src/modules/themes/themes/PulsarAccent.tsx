import { PulsarDark } from './PulsarDark';
import { PulsarThemeType } from './PulsarThemeType';

export const PulsarAccent: PulsarThemeType = {
  pulsar: {
    ...PulsarDark.pulsar,

    id: 'PulsarAccent',
    name: 'Pulsar (Accent)',

    color: {
      ...PulsarDark.pulsar.color,

      bg: {
        normal: '#1e293b',
      },

      border: {
        normal: '#d7dade',
        danger: '#fc012a',
      },

      input: {
        idle: {
          bg: '#2f3a4b',
          border: 'transparent',
        },
      },
    },
  },
};
