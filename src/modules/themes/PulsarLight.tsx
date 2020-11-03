export const PulsarLight = {
  pulsar: {
    id: 'PulsarLight' as 'PulsarLight' | 'PulsarDark' | 'PulsarAccent',
    name: 'Pulsar (Light)',

    color: {
      bg: {
        normal: '#fff',
        masked: '#f2f2f2',
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
      input: {
        idle: {
          bg: '#fff',
          border: '#d7dade',
        },
      },
    },
  },
};