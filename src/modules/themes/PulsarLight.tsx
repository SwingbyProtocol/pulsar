export const PulsarLight = {
  pulsar: {
    id: 'PulsarLight' as 'PulsarLight' | 'PulsarDark' | 'PulsarAccent',
    name: 'Pulsar (Light)',

    color: {
      bg: {
        normal: '#fff',
        masked: '#fafeff',
        hover: '#fbfbfb',
        transparent: 'rgba(255, 255, 255, 0.8)',
      },

      text: {
        normal: '#4a5463',
        masked: '#818994',
        accent: '#2b374a',
        disabled: '#f00',
        placeholder: '#818994',
      },

      border: {
        normal: '#d7dade',
        danger: '#ffc2c4',
      },

      primary: {
        normal: '#31d5b8',
        active: '#21a68e',
        text: '#fff',
      },

      secondary: {
        normal: '#3799da',
        active: '#297cb3',
        text: '#fff',
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
      /** `4px` */
      box: 4,
      /** `8px` */
      drawer: 8,
      /** `12px` */
      closet: 12,
      /** `14px` */
      room: 14,
      /** `16px` */
      house: 16,
      /** `24px` */
      street: 24,
      /** `32px` */
      town: 32,
      /** `40px` */
      city: 40,
      /** `48px` */
      state: 48,
      /** `56px` */
      country: 56,
    },

    duration: {
      normal: '150ms',
    },

    shadow: {
      tooltip: '0px 20px 25px rgba(43, 55, 74, 0.5);',
      card: '0px 15px 25px -10px rgba(43, 55, 74, 0.152644)',
    },

    components: {
      input: {
        idle: {
          bg: '#fff',
          border: '#d7dade',
        },
      },
    },
  },
};
