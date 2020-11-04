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
        normal: '#0f1621',
        masked: '#0f1621',
      },

      text: {
        normal: '#f2f2f2',
        masked: '#ccc',
        accent: '#fff',
        disabled: '#f00',
        placeholder: '#818994',
      },

      border: {
        normal: '#d7dade',
        danger: '#fc012a',
      },
    },

    shadow: {
      tooltip: '0px 20px 25px rgba(0, 0, 0, 0.503715);',
    },

    components: {
      input: {
        idle: {
          bg: '#1c232f',
          border: 'transparent',
        },
      },
    },
  },
};
