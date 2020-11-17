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
        masked: '#2f3a4b',
        hover: '#f00',
      },

      border: {
        normal: '#353f4c',
        danger: '#fc012a',
      },
    },

    components: {
      ...PulsarDark.pulsar.components,

      input: {
        idle: {
          bg: '#2f3a4b',
          border: 'transparent',
        },
      },
    },
  },
};
