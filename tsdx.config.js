const postCss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postCss({
        extensions: ['.sass'],
        extract: !!options.writeMeta ? 'styles.css' : false,
        minimize: true,
      }),
    );
    return config;
  },
};
