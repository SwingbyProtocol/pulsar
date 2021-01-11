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
        accent: '#2f3a4b',
        masked: '#2f3a4b',
        hover: '#334057',
        transparent: 'rgba(15, 22, 34, 0.92)',
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
