const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup').default;

const svgrOptions = require('./svgr.config');

module.exports = {
  rollup(config, options) {
    return {
      ...config,
      plugins: [
        url({
          include: ['**/*.png', '**/*.jpg', '**/*.gif', '**/*.otf', '**/*.svg'],
          limit: Infinity,
        }),
        svgr(svgrOptions),
        ...config.plugins,
      ],
    };
  },
};
