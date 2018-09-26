import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postCss from 'rollup-plugin-postcss';
import bundleSize from 'rollup-plugin-bundle-size';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

const isWatching = () => process.env.WATCH;

const plugins = [
  resolve(),
  commonjs({
    include: 'node_modules/**',
    extensions: ['.jsx', '.js'],
  }),
  babel(),
  postCss({
    extensions: ['.sass'],
    extract: isWatching() ? 'example/src/styles.css' : 'dist/styles.min.css',
    minimize: false,
  }),
  bundleSize(),
];

export default {
  input: 'src/index.jsx',
  external: ['react', 'react-dom'],
  output: isWatching()
    ? { file: 'example/src/fab.js', format: 'es' }
    : [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
  plugins,
};
