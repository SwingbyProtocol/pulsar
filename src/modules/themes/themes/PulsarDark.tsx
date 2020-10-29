import { PulsarLight, readable } from './PulsarLight';
import { PulsarThemeType } from './PulsarThemeType';

export const PulsarDark: PulsarThemeType = {
  pulsar: {
    ...PulsarLight.pulsar,

    id: 'PulsarDark',
    name: 'Pulsar (Dark)',

    color: {
      ...PulsarLight.pulsar.color,

      bg: {
        normal: '#2b374a',
      },

      text: {
        normal: readable.normal('black'),
        masked: readable.masked('black'),
        accent: readable.accent('black'),
        primary: readable.primary('black'),
        disabled: readable.disabled('black'),
        placeholder: readable.placeholder('black'),
      },
    },

    components: {
      button: {
        secondary: {
          idle: {
            border: 'transparent',
            bg: '#fff',
            color: readable.normal('#fff'),
          },
          active: {
            border: 'transparent',
            bg: '#21a68e',
            color: readable.normal('#fff'),
          },
        },
      },
    },
  },
};
