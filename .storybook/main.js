const svgrConfig = require('../svgr.config');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|md|mdx)'],
  addons: [
    '@storybook/addon-links',
    { name: '@storybook/addon-essentials', options: { backgrounds: false } },
  ],
  typescript: { check: true },
  babel: (options) => {
    options.plugins.push(require.resolve('babel-plugin-styled-components'));
    return options;
  },
  webpackFinal: async (config) => {
    // Make sure SVGs are not loaded with `file-loader`.
    config.module.rules = config.module.rules.map((it) => ({
      ...it,
      test: new RegExp(it.test.source.replace('svg|', '')),
    }));

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: svgrConfig,
        },
        'url-loader',
      ],
    });

    return config;
  },
};
