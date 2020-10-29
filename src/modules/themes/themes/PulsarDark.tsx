import { PulsarLight } from './PulsarLight';
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
        normal: '#f2f2f2',
        masked: '#ccc',
        accent: '#fff',
        disabled: '#f00',
        placeholder: '#818994',
      },

      button: {
        primary: { idle: { text: '#fff' }, active: { text: '#fff' } },
        secondary: { idle: { text: '#2b374a' }, active: { text: '#2b374a' } },
      },
    },
  },
};
